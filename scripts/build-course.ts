#!/usr/bin/env node
/**
 * Patterson Academy — course extractor.
 *
 * Turns the five browser data files at the repository root into the MDX pages
 * that Starlight builds. Zero dependencies: `node:` built-ins only, erasable
 * TypeScript syntax only (no enum, no namespace, no parameter properties), so
 * `node scripts/build-course.ts` runs it with no transpile step.
 *
 * Run:  node scripts/build-course.ts
 *
 * The generated tree is disposable and gitignored — CI regenerates it on every
 * build. Running twice produces byte-identical output (verify with `diff -r`).
 *
 * ---------------------------------------------------------------------------
 * How prose HTML is handled
 * ---------------------------------------------------------------------------
 * The data files author prose as HTML strings (`h` blocks, callout bodies, lab
 * step bodies) using a closed tag set: p, strong, em, code, ul, ol, li. That
 * HTML cannot be pasted into MDX as-is — MDX parses `{` as an expression
 * delimiter, and the content legitimately contains `${CLAUDE_PLUGIN_ROOT}` and
 * similar inside <code> spans.
 *
 * Two options were considered:
 *
 *   1. Convert the HTML to Markdown. Lossy at the edges and fragile: every new
 *      tag or nesting the authors add silently degrades, and the escaping rules
 *      for backticks, pipes and braces differ per context.
 *   2. Hand the HTML to the renderer verbatim, as a JS string literal.
 *
 * This extractor takes option 2: each prose string is emitted as
 * `<Fragment set:html={"..."} />`, where the string literal is produced by
 * JSON.stringify. That is total — JSON.stringify escapes every character that
 * could terminate the literal, so no author input can break the page — and
 * `<Fragment>` adds no wrapper element, so the injected <p>/<ul> land as direct
 * children of Starlight's `.sl-markdown-content` and inherit its prose styling.
 *
 * Structured blocks do NOT go through set:html. Code, tables, images and quizzes
 * are plain data, so they are emitted as real Markdown/MDX (fenced code with a
 * language, GFM tables, Markdown images, a <Quiz> island) and get the matching
 * Starlight affordances: syntax highlighting, the copy button, table styling and
 * Pagefind indexing. Plain-text fields (titles, table cells, quiz text) are
 * escaped, never injected.
 */

import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createContext, runInContext } from 'node:vm';

// ---------------------------------------------------------------------------
// Shapes of the data files
// ---------------------------------------------------------------------------

type Block =
  | { t: 'h'; h: string }
  | { t: 'c'; lang: string; file: string; code: string }
  | { t: 'callout'; kind: string; title: string; h: string }
  | { t: 'table'; head: string[]; rows: string[][] }
  | { t: 'img'; src: string; alt: string; cap: string };

interface Quiz {
  q: string;
  opts: string[];
  a: number;
  why: string;
}

interface Lesson {
  id: string;
  title: string;
  blocks: Block[];
  quiz: Quiz[];
  docs?: { t: string; href: string }[];
  widget?: string;
  term?: string[];
  tasks?: { ask: string; cmd: string }[];
  prompts?: string[];
}

interface Module {
  id: string;
  num: number;
  title: string;
  level: string;
  desc: string;
  lessons: Lesson[];
}

interface Practical {
  id: string;
  title: string;
  goal: string;
  steps: { id: string; title: string; body: string; cmd?: string }[];
}

interface Artifact {
  id: string;
  lang: string;
  lesson: string;
  title: string;
  source?: string;
  desc: string;
  params: [string, string][];
  code: string;
}

// ---------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..');
const SITE = join(ROOT, 'site');
const DOCS = join(SITE, 'src', 'content', 'docs');
const COMPONENTS = join(SITE, 'src', 'components');
const PUBLIC_ASSETS = join(SITE, 'public', 'assets');

const DATA_FILES = [
  'academy-data-1.js',
  'academy-data-2.js',
  'academy-lab.js',
  'academy-prompts.js',
  'academy-summaries.js',
];

/** Generated trees. Removed and rewritten on every run, so a deleted source
 *  lesson cannot leave a stale page behind. */
const GENERATED = [
  join(DOCS, 'curriculum'),
  join(DOCS, 'lab'),
  join(DOCS, 'prompts'),
  join(DOCS, 'reference.mdx'),
  PUBLIC_ASSETS,
];

// ---------------------------------------------------------------------------
// Load the data files
// ---------------------------------------------------------------------------

/** The data files are browser scripts that assign to `window`. Give them a
 *  window and nothing else — they never touch the DOM. */
function loadData(): {
  modules: Module[];
  lab: Practical[];
  prompts: Artifact[];
  summaries: Record<string, string>;
} {
  const win: Record<string, unknown> = {};
  const context = createContext({ window: win });
  for (const file of DATA_FILES) {
    const source = readFileSync(join(ROOT, file), 'utf8');
    runInContext(source, context, { filename: file });
  }
  const modules = win.ACADEMY_MODULES as Module[];
  const lab = win.ACADEMY_LAB as Practical[];
  const prompts = win.ACADEMY_PROMPTS as Artifact[];
  const summaries = win.ACADEMY_SUMMARIES as Record<string, string>;
  if (!modules || !lab || !prompts || !summaries) {
    throw new Error('a data file did not populate its window global');
  }
  return { modules, lab, prompts, summaries };
}

// ---------------------------------------------------------------------------
// Text helpers
// ---------------------------------------------------------------------------

const slug = (s: string): string =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

/** YAML double-quoted scalar. Titles contain colons and quotes; JSON string
 *  syntax is a subset of YAML's, so this is always valid. */
const yaml = (s: string): string => JSON.stringify(s);

/** Prose HTML handed to the renderer verbatim. See the header comment. */
const setHtml = (html: string): string => `<Fragment set:html={${JSON.stringify(html)}} />`;

/** Plain text going into MDX body copy. `<` opens a JSX tag and `{` opens an
 *  expression, so both are neutralised as entities. */
const text = (s: string): string =>
  s.replace(/[<>{}]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '{': '&#123;', '}': '&#125;' })[c] as string);

/** Plain text going into a Markdown table cell: same, plus pipes and newlines. */
const cell = (s: string): string => text(s).replace(/\|/g, '\\|').replace(/\n/g, '<br />');

/** A fence long enough to contain the code, whatever backticks are inside it. */
function fence(code: string, lang: string, title?: string): string {
  let longest = 0;
  for (const run of code.match(/`+/g) ?? []) longest = Math.max(longest, run.length);
  const ticks = '`'.repeat(Math.max(3, longest + 1));
  const head = title ? `${lang} title=${JSON.stringify(title)}` : lang;
  return `${ticks}${head}\n${code}\n${ticks}`;
}

function table(head: string[], rows: string[][]): string {
  const lines = [
    `| ${head.map(cell).join(' | ')} |`,
    `| ${head.map(() => '---').join(' | ')} |`,
    ...rows.map((r) => `| ${r.map(cell).join(' | ')} |`),
  ];
  return lines.join('\n');
}

/** Import specifier from a generated page to a site component. */
const importPath = (fromFile: string, toFile: string): string => {
  const rel = relative(dirname(fromFile), toFile).split('\\').join('/');
  return rel.startsWith('.') ? rel : `./${rel}`;
};

function write(file: string, body: string): void {
  mkdirSync(dirname(file), { recursive: true });
  // Exactly one trailing newline, always — so a re-run is byte-identical.
  writeFileSync(file, `${body.replace(/\s+$/, '')}\n`, 'utf8');
}

// ---------------------------------------------------------------------------
// Brand: module titles are stored in title case; every Patterson digital
// surface is sentence case [BG25 p.25, p.59]. The map is explicit rather than
// algorithmic so that proper nouns ("Claude Code", ".claude") survive.
// ---------------------------------------------------------------------------

const MODULE_TITLES: Record<string, string> = {
  m1: 'Getting started',
  m2: 'Sessions, context and memory',
  m3: 'The .claude directory',
  m4: 'Extending Claude Code',
  m5: 'Plugins and distribution',
  m6: 'Advanced topics',
};

/** Data callout kinds → Starlight aside types. Starlight ships four asides;
 *  the data uses five kinds, so success shares tip's treatment. */
const ASIDE: Record<string, string> = {
  tip: 'tip',
  success: 'tip',
  info: 'note',
  warn: 'caution',
  danger: 'danger',
};

/** Interactive widgets from the original canvas have no equivalent on a static
 *  site. Each degrades to something that carries the same information. */
const WIDGET_IMAGE: Record<string, { src: string; alt: string; cap: string }> = {
  loop: {
    src: 'agentic-loop.svg',
    alt: 'The agentic loop: gather context, take action, verify results, repeating until the task is complete',
    cap: 'The agentic loop, redrawn from the official docs in Patterson brand colors.',
  },
  explorer: {
    src: 'context-loading.svg',
    alt: 'What loads into context and when, per feature',
    cap: 'What each part of the .claude directory costs you in context, and when it loads.',
  },
};

function aside(kind: string, title: string, body: string): string {
  const type = ASIDE[kind] ?? 'note';
  return `:::${type}[${text(title)}]\n${body}\n:::`;
}

// ---------------------------------------------------------------------------
// Page builders
// ---------------------------------------------------------------------------

function frontmatter(fields: Record<string, string | number | undefined>, order?: number): string {
  const lines = ['---'];
  for (const [key, value] of Object.entries(fields)) {
    if (value === undefined) continue;
    lines.push(`${key}: ${typeof value === 'number' ? value : yaml(String(value))}`);
  }
  if (order !== undefined) lines.push('sidebar:', `  order: ${order}`);
  lines.push('---');
  return lines.join('\n');
}

function imageBlock(src: string, alt: string, cap: string): string {
  // Repo-relative asset paths become root-absolute, matching the copy into
  // site/public/assets/ below.
  const href = `/assets/${src.replace(/^assets\//, '')}`;
  const parts = [`![${text(alt)}](${href})`];
  if (cap) parts.push(`<p class="pa-caption">${text(cap)}</p>`);
  return parts.join('\n\n');
}

function renderBlocks(blocks: Block[]): string[] {
  const out: string[] = [];
  for (const b of blocks) {
    if (b.t === 'h') out.push(setHtml(b.h));
    else if (b.t === 'c') out.push(fence(b.code, b.lang, b.file));
    else if (b.t === 'callout') out.push(aside(b.kind, b.title, setHtml(b.h)));
    else if (b.t === 'table') out.push(table(b.head, b.rows));
    else if (b.t === 'img') out.push(imageBlock(b.src, b.alt, b.cap));
    else throw new Error(`unknown block type: ${JSON.stringify(b)}`);
  }
  return out;
}

function lessonPage(
  lesson: Lesson,
  order: number,
  summary: string,
  file: string,
  promptPaths: Map<string, string>,
): string {
  const parts: string[] = [];
  parts.push(
    frontmatter(
      {
        title: lesson.title,
        description: summary,
      },
      order,
    ),
  );
  parts.push(`import Quiz from '${importPath(file, join(COMPONENTS, 'Quiz.astro'))}';`);

  const blocks = renderBlocks(lesson.blocks);

  // Widget degrade: the canvas rendered a live diagram or an explorer here.
  // Insert the static equivalent, unless the lesson already shows that image.
  const widgetImage = lesson.widget ? WIDGET_IMAGE[lesson.widget] : undefined;
  if (widgetImage) {
    const already = lesson.blocks.some(
      (b) => b.t === 'img' && b.src.replace(/^assets\//, '') === widgetImage.src,
    );
    if (!already) {
      blocks.splice(1, 0, imageBlock(widgetImage.src, widgetImage.alt, widgetImage.cap));
    }
  }
  parts.push(...blocks);

  // Practice. The original lesson ran these in a simulated terminal; here they
  // are the commands to run in your own.
  if (lesson.tasks?.length || lesson.term?.length) {
    const body: string[] = [];
    const hands = lesson.widget === 'terminal';
    if (hands) {
      body.push(
        'This lesson ran in a simulated terminal. Work through it hands-on in your own terminal instead — the commands are safe to run in any repository.',
      );
    }
    if (lesson.tasks?.length) {
      body.push(
        lesson.tasks
          .map((t) => `- ${text(t.ask)}${t.cmd ? ` — \`${t.cmd}\`` : ''}`)
          .join('\n'),
      );
    }
    if (lesson.term?.length) {
      body.push(`Commands used in this lesson: ${lesson.term.map((c) => `\`${c}\``).join(', ')}`);
    }
    parts.push(
      aside('info', hands ? 'Hands-on in your own terminal' : 'Practice', body.join('\n\n')),
    );
  }

  // Prompt library cross-links.
  if (lesson.prompts?.length) {
    const links = lesson.prompts
      .map((id) => {
        const path = promptPaths.get(id);
        return path ? `- [${text(id)}](${path})` : undefined;
      })
      .filter((x): x is string => Boolean(x));
    if (links.length) {
      parts.push(aside('tip', 'Ready-made prompts', `Copy these from the prompt library:\n\n${links.join('\n')}`));
    }
  }

  if (lesson.quiz.length) {
    parts.push('## Check your understanding');
    parts.push(`<Quiz questions={${JSON.stringify(lesson.quiz)}} />`);
  }

  if (lesson.docs?.length) {
    const links = lesson.docs.map((d) => `- [${text(d.t)}](${d.href})`).join('\n');
    parts.push(aside('info', 'Further reading', links));
  }

  return parts.join('\n\n');
}

function modulePage(module: Module, summaries: Record<string, string>, lessonPaths: Map<string, string>): string {
  const title = MODULE_TITLES[module.id];
  const parts: string[] = [];
  parts.push(frontmatter({ title, description: module.desc }, 0));
  parts.push(`import { CardGrid, LinkCard } from '@astrojs/starlight/components';`);
  parts.push(`<p class="pa-eyebrow">Module ${module.num} · ${text(module.level)}</p>`);
  parts.push(text(module.desc));
  parts.push(
    `${module.lessons.length} lessons. Work through them in order — each one builds on the last.`,
  );
  const cards = module.lessons
    .map((l) => {
      const href = lessonPaths.get(l.id) as string;
      const desc = summaries[l.id] ?? '';
      return `  <LinkCard title=${JSON.stringify(l.title)} href=${JSON.stringify(href)} description=${JSON.stringify(desc)} />`;
    })
    .join('\n');
  parts.push(`<CardGrid>\n${cards}\n</CardGrid>`);
  return parts.join('\n\n');
}

function labPage(practical: Practical, order: number): string {
  const parts: string[] = [];
  parts.push(frontmatter({ title: practical.title, description: practical.goal }, order));
  parts.push(aside('info', 'Goal', text(practical.goal)));
  practical.steps.forEach((step, i) => {
    parts.push(`## Step ${i + 1}. ${text(step.title)}`);
    parts.push(setHtml(step.body));
    if (step.cmd) parts.push(fence(step.cmd, 'bash', 'terminal'));
  });
  return parts.join('\n\n');
}

function promptPage(
  artifact: Artifact,
  order: number,
  lessonPaths: Map<string, string>,
  lessonTitles: Map<string, string>,
): string {
  const parts: string[] = [];
  parts.push(frontmatter({ title: artifact.title, description: artifact.desc }, order));
  parts.push(text(artifact.desc));
  if (artifact.source) parts.push(aside('info', 'Source', text(artifact.source)));
  if (artifact.params.length) {
    parts.push('## Parameters');
    // Parameter names are literals like `<user request>` and `${CLAUDE_PLUGIN_ROOT}`.
    // Inline code keeps them literal and keeps MDX out of the way.
    parts.push(
      table(
        ['Parameter', 'What to supply'],
        artifact.params.map(([k, v]) => [`\`${k}\``, v]),
      ).replace(/\\`/g, '`'),
    );
  }
  parts.push('## The artifact');
  parts.push(fence(artifact.code, artifact.lang, artifact.title));
  const href = lessonPaths.get(artifact.lesson);
  if (href) {
    parts.push(
      aside('tip', 'Where this is taught', `[${text(lessonTitles.get(artifact.lesson) ?? artifact.lesson)}](${href})`),
    );
  }
  return parts.join('\n\n');
}

function referencePage(modules: Module[], lessonPaths: Map<string, string>): string {
  // Every docs[] link across the curriculum, deduped by href, with the lessons
  // that cite it. Sorted so the page is stable run to run.
  const links = new Map<string, { title: string; lessons: { id: string; title: string }[] }>();
  for (const m of modules) {
    for (const l of m.lessons) {
      for (const d of l.docs ?? []) {
        const entry = links.get(d.href) ?? { title: d.t, lessons: [] };
        if (!entry.lessons.some((x) => x.id === l.id)) entry.lessons.push({ id: l.id, title: l.title });
        links.set(d.href, entry);
      }
    }
  }
  const rows = [...links.entries()]
    .sort((a, b) => a[1].title.localeCompare(b[1].title) || a[0].localeCompare(b[0]))
    .map(([href, entry]) => {
      const cites = entry.lessons
        .map((l) => `[${text(l.title)}](${lessonPaths.get(l.id) as string})`)
        .join(', ');
      return `| [${text(entry.title)}](${href}) | ${cites} |`;
    });

  const parts: string[] = [];
  parts.push(
    frontmatter(
      {
        title: 'Reference',
        description:
          'Every official Claude Code document cited in the curriculum, and the lessons that cite it.',
      },
      99,
    ),
  );
  parts.push(
    'The curriculum is grounded in the official Claude Code documentation. Every page cited across the 30 lessons is listed here once, with the lessons that reference it.',
  );
  parts.push([`| Document | Cited in |`, `| --- | --- |`, ...rows].join('\n'));
  return parts.join('\n\n');
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main(): void {
  const { modules, lab, prompts, summaries } = loadData();

  for (const id of modules.map((m) => m.id)) {
    if (!MODULE_TITLES[id]) {
      throw new Error(`module ${id} has no sentence-case title in MODULE_TITLES — add one`);
    }
  }

  for (const path of GENERATED) rmSync(path, { recursive: true, force: true });

  // Diagrams referenced by lessons, served from the site root.
  cpSync(join(ROOT, 'assets'), PUBLIC_ASSETS, { recursive: true });

  // Resolve every cross-link target before writing any page.
  const moduleSlugs = new Map<string, string>();
  const lessonPaths = new Map<string, string>();
  const lessonTitles = new Map<string, string>();
  const lessonFiles = new Map<string, string>();
  for (const m of modules) {
    const ms = slug(MODULE_TITLES[m.id]);
    moduleSlugs.set(m.id, ms);
    for (const l of m.lessons) {
      const ls = slug(l.title);
      lessonPaths.set(l.id, `/curriculum/${ms}/${ls}/`);
      lessonTitles.set(l.id, l.title);
      lessonFiles.set(l.id, join(DOCS, 'curriculum', ms, `${ls}.mdx`));
    }
  }
  const promptPaths = new Map<string, string>();
  for (const p of prompts) promptPaths.set(p.id, `/prompts/${slug(p.id)}/`);

  let lessonCount = 0;
  let quizCount = 0;

  for (const m of modules) {
    const ms = moduleSlugs.get(m.id) as string;
    write(join(DOCS, 'curriculum', ms, 'index.mdx'), modulePage(m, summaries, lessonPaths));
    m.lessons.forEach((l, i) => {
      const file = lessonFiles.get(l.id) as string;
      const summary = summaries[l.id];
      if (!summary) throw new Error(`lesson ${l.id} has no summary in academy-summaries.js`);
      write(file, lessonPage(l, i + 1, summary, file, promptPaths));
      lessonCount += 1;
      quizCount += l.quiz.length;
    });
  }

  lab.forEach((p, i) => write(join(DOCS, 'lab', `${slug(p.title)}.mdx`), labPage(p, i + 1)));
  prompts.forEach((p, i) =>
    write(join(DOCS, 'prompts', `${slug(p.id)}.mdx`), promptPage(p, i + 1, lessonPaths, lessonTitles)),
  );
  write(join(DOCS, 'reference.mdx'), referencePage(modules, lessonPaths));

  // ---- assertions -------------------------------------------------------
  const expected = { modules: 6, lessons: 30, quiz: 66, lab: 6, prompts: 8 };
  const actual = {
    modules: modules.length,
    lessons: lessonCount,
    quiz: quizCount,
    lab: lab.length,
    prompts: prompts.length,
  };
  const failures = Object.entries(expected)
    .filter(([k, v]) => actual[k as keyof typeof actual] !== v)
    .map(([k, v]) => `${k}: expected ${v}, got ${actual[k as keyof typeof actual]}`);

  process.stdout.write(
    [
      'Patterson Academy course extractor',
      `  module index pages   ${actual.modules}`,
      `  lesson pages         ${actual.lessons}`,
      `  lab practicals       ${actual.lab}`,
      `  prompt artifacts     ${actual.prompts}`,
      `  reference pages      1`,
      `  quiz questions       ${actual.quiz}`,
      `  total pages          ${actual.modules + actual.lessons + actual.lab + actual.prompts + 1}`,
      '',
    ].join('\n'),
  );

  if (failures.length) {
    process.stderr.write(`extractor count check failed:\n  ${failures.join('\n  ')}\n`);
    process.exit(1);
  }
}

main();

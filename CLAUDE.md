# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A self-contained training deck teaching Claude Code configuration (AGENTS.md, commands, skills,
plugins, MCP, hooks, sandboxing). It is a **static prototype**: there is no build step, no
`package.json`, no tests, no linter, and no framework runtime beyond the browser. Do not look for
or add one. Imported 2026-08-12 from a claude.ai/design handoff — see `REFERENCES.md` for
provenance.

## Running it

Open the `.dc.html` files directly in a browser, or serve the repo root over HTTP:

```sh
npx serve .
```

GitHub Pages deploys the **repo root** on every push to `main` (`.github/workflows/pages.yml`), so
everything committed ships publicly.

## Architecture

Three `.dc.html` canvases share one runtime and one data layer:

- `support.js` is the dc-runtime. Each canvas is an `<x-dc>` document it parses; the `<helmet>`
  block binds the `_ds/` design-system token stylesheets and `_ds_bundle.js`, then loads the data
  modules.
- **All curriculum content lives in window-global JS data modules, not the HTML.** To change
  lessons, lab steps, prompts, or summaries, edit these files:
  - `academy-data-1.js` / `academy-data-2.js` → `window.ACADEMY_MODULES` (modules 1–3 and 4–6).
    Both register via the idempotent `__add()` merge helper, keyed by module `id` and sorted by
    `num`, so load order doesn't matter.
  - `academy-lab.js` → `window.ACADEMY_LAB` (hands-on lab phases/steps)
  - `academy-prompts.js` → `window.ACADEMY_PROMPTS` (prompt template library)
  - `academy-summaries.js` → `window.ACADEMY_SUMMARIES` (per-lesson syllabus blurbs)
- `Claude Code Academy.dc.html` is the interactive app; its logic is the inline
  `data-dc-script` React block near the bottom of the file (~line 486). `Lesson Plan.dc.html`
  and `Lab Worksheet.dc.html` are printable documents built on `doc-page.js` that render the
  *same* data globals — a content edit in a data module propagates to all three canvases.
- **Lesson ids (`l01`, `l02`, …) cross-reference across files**: `ACADEMY_SUMMARIES` is keyed by
  them and prompt entries carry a `lesson:` field. Renaming an id in one file silently breaks the
  others.
- Curriculum content is grounded in code.claude.com/docs — the header comment of each data file
  names the source pages. Keep new content grounded the same way.

## Do not touch

- `_ds/patterson-companies-design-system-…/` is a **fixed point-in-time snapshot** the canvases
  bind to. Never edit it as if it were the live `patterson-design-system` project.
- **Never commit font binaries** (`*.woff2`, `*.woff`, `*.ttf` are gitignored). Proxima Nova
  licensing is unresolved; fonts load via the Adobe Fonts kit (`uth1qfm`) or fall back.
- `support.js` is generated ("do not edit" — its `dc-runtime/` source is not in this repo; treat
  it as vendored). `doc-page.js` is a copied starter scaffold that tooling may overwrite —
  page *content* lives in the canvases, not in it.

## Conventions

Org-wide contribution guidelines live in `patterson-agents/patterson-corp`'s CONTRIBUTING.md;
this repo's `CONTRIBUTING.md` has the repo-specific notes. Commits follow conventional-commit
style (`docs(brand): …`, `ci(pages): …`).

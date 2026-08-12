/* Patterson Academy — Claude Code curriculum, modules 1–3.
   Grounded in code.claude.com/docs (how-claude-code-works, claude-directory,
   features-overview, memory, sessions, permissions, context-window). */
window.ACADEMY_MODULES = window.ACADEMY_MODULES || [];
window.ACADEMY_MODULES.__add = function () {
  const list = window.ACADEMY_MODULES;
  for (const m of arguments) {
    const i = list.findIndex(x => x.id === m.id);
    if (i >= 0) list[i] = m; else list.push(m);
  }
  list.sort((a, b) => a.num - b.num);
};

window.ACADEMY_MODULES.__add(
{
  id: 'm1', num: 1, title: 'Getting Started', level: 'Beginner',
  desc: 'What Claude Code is, how the agentic loop works, and what Claude can see and do.',
  lessons: [
  {
    id: 'l01', title: 'What is Claude Code?',
    docs: [{ t: 'Overview', href: 'https://code.claude.com/docs/en/overview' }, { t: 'How Claude Code works', href: 'https://code.claude.com/docs/en/how-claude-code-works' }],
    blocks: [
      { t: 'h', h: '<p>Claude Code is an <strong>agentic coding tool</strong>: an assistant that reads your codebase, edits files, runs commands, and integrates with your development tools. While it excels at coding, it can help with anything you can do from the command line — writing docs, running builds, searching files, researching topics.</p><p>It runs in three <strong>execution environments</strong> and many <strong>interfaces</strong>. The agentic loop, tools, and capabilities are identical everywhere; only where code executes and how you interact changes.</p>' },
      { t: 'table', head: ['Environment', 'Where code runs', 'Use case'], rows: [
        ['Local', 'Your machine', 'Default. Full access to your files, tools, and environment'],
        ['Cloud', 'Anthropic-managed VMs', 'Offload tasks, work on repos you don\'t have locally'],
        ['Remote Control', 'Your machine, controlled from a browser', 'Web UI while keeping everything local']] },
      { t: 'h', h: '<p>Interfaces include the terminal CLI, the desktop app, VS Code and JetBrains extensions, <code>claude.ai/code</code>, Slack, and CI/CD pipelines. Because Claude sees your <em>whole project</em> — not just the current file — it can make coordinated edits across files, run tests to verify them, and commit changes when you ask. That is the key difference from inline code assistants.</p>' }
    ],
    quiz: [
      { q: 'What makes Claude Code different from an inline code assistant?', opts: ['It autocompletes faster', 'It sees and works across your whole project, using tools to act', 'It only runs in the browser', 'It requires no permissions'], a: 1, why: 'Claude Code searches, reads, and edits across the project, runs commands, and verifies its own work — inline assistants only see the current file.' },
      { q: 'Which environment runs your code on Anthropic-managed VMs?', opts: ['Local', 'Cloud', 'Remote Control', 'JetBrains'], a: 1, why: 'Cloud sessions execute on Anthropic-managed VMs; Remote Control keeps execution on your machine while you drive from a browser.' }
    ]
  },
  {
    id: 'l02', title: 'The agentic loop', widget: 'loop',
    docs: [{ t: 'How Claude Code works — the agentic loop', href: 'https://code.claude.com/docs/en/how-claude-code-works#the-agentic-loop' }],
    blocks: [
      { t: 'h', h: '<p>When you give Claude a task, it works through three phases: <strong>gather context</strong>, <strong>take action</strong>, and <strong>verify results</strong>. These phases blend together — Claude uses tools throughout, chaining dozens of actions and course-correcting along the way.</p>' },
      { t: 'img', src: 'assets/agentic-loop.svg', alt: 'The agentic loop: your prompt leads to gather context, take action, verify results, repeating until complete', cap: 'The agentic loop, redrawn from the official docs in Patterson brand colors.' },
      { t: 'h', h: '<p>The loop adapts to the ask. A question about your codebase might only need context gathering; a bug fix cycles through all three phases repeatedly. <strong>You are part of the loop too</strong> — press <code>Esc</code> to interrupt and steer at any point.</p><p>The loop is powered by two components: <strong>models</strong> that reason and <strong>tools</strong> that act. Claude Code is the <em>agentic harness</em> around the model: it provides tools, context management, and the execution environment that turn a language model into a capable coding agent.</p>' },
      { t: 'callout', kind: 'tip', title: 'Watch it happen', h: 'Ask Claude to "fix the failing tests" and watch the loop: run tests → read errors → search sources → read files → edit → re-run tests. Each tool result feeds the next decision.' }
    ],
    quiz: [
      { q: 'What are the three phases of the agentic loop?', opts: ['Plan, code, deploy', 'Gather context, take action, verify results', 'Read, write, commit', 'Prompt, respond, repeat'], a: 1, why: 'Gather context → take action → verify results, repeating until the task is complete.' },
      { q: 'What is the "agentic harness"?', opts: ['The model itself', 'The permission system', 'Claude Code — the tools, context management, and execution environment around the model', 'The terminal emulator'], a: 2, why: 'The harness is everything around the model that lets it act: tools, context management, execution.' },
      { q: 'How do you interrupt Claude mid-task?', opts: ['Close the terminal', 'Press Esc', 'Type /stop', 'Wait for the turn to finish'], a: 1, why: 'Esc stops Claude immediately; you can also type a correction and press Enter without stopping the running tool.' }
    ]
  },
  {
    id: 'l03', title: 'Models and tools',
    docs: [{ t: 'Tools reference', href: 'https://code.claude.com/docs/en/tools-reference' }, { t: 'Model configuration', href: 'https://code.claude.com/docs/en/model-config' }],
    blocks: [
      { t: 'h', h: '<p><strong>Models</strong> do the reasoning. Sonnet handles most coding tasks well; Opus provides stronger reasoning for complex architectural decisions. Switch with <code>/model</code> during a session or start with <code>claude --model &lt;name&gt;</code>.</p><p><strong>Tools</strong> are what make Claude Code agentic. Without tools, Claude can only respond with text. With tools, it can act. The built-in tools fall into five categories:</p>' },
      { t: 'table', head: ['Category', 'What Claude can do'], rows: [
        ['File operations', 'Read files, edit code, create files, rename and reorganize'],
        ['Search', 'Find files by pattern, search content with regex, explore codebases'],
        ['Execution', 'Run shell commands, start servers, run tests, use git'],
        ['Web', 'Search the web, fetch documentation, look up error messages'],
        ['Code intelligence', 'See type errors after edits, jump to definitions, find references (via plugins)']] },
      { t: 'h', h: '<p>Claude chooses which tools to use based on your prompt and what it learns along the way. Each tool use returns information that feeds back into the loop. Beyond these, Claude has tools for spawning subagents, asking you questions, and orchestration.</p>' },
      { t: 'callout', kind: 'info', title: 'Extending the base', h: 'The built-in tools are the foundation. You extend what Claude <em>knows</em> with skills, connect external services with MCP, automate with hooks, and offload work to subagents — all covered in Module 4.' }
    ],
    quiz: [
      { q: 'Which is NOT one of the five built-in tool categories?', opts: ['File operations', 'Search', 'Database administration', 'Execution'], a: 2, why: 'The five categories are file operations, search, execution, web, and code intelligence. Databases are reached via MCP.' },
      { q: 'When should you reach for Opus over Sonnet?', opts: ['Every task', 'Simple renames', 'Complex architectural decisions needing stronger reasoning', 'Only in CI'], a: 2, why: 'Sonnet handles most coding tasks; Opus is for complex reasoning.' }
    ]
  },
  {
    id: 'l04', title: 'What Claude can access',
    docs: [{ t: 'How Claude Code works — access', href: 'https://code.claude.com/docs/en/how-claude-code-works#what-claude-can-access' }],
    blocks: [
      { t: 'h', h: '<p>When you run <code>claude</code> in a directory, Claude Code gains access to:</p><ul><li><strong>Your project</strong> — files in the directory and subdirectories, plus files elsewhere with your permission.</li><li><strong>Your terminal</strong> — any command you could run: build tools, git, package managers, scripts.</li><li><strong>Your git state</strong> — current branch, uncommitted changes, recent commit history.</li><li><strong>Your CLAUDE.md</strong> — project-specific instructions Claude should know every session.</li><li><strong>Auto memory</strong> — learnings Claude saves automatically as you work. The first 200 lines or 25KB of MEMORY.md loads at session start.</li><li><strong>Extensions you configure</strong> — MCP servers, skills, subagents, Claude in Chrome.</li></ul>' },
      { t: 'callout', kind: 'warn', title: 'Trust follows the terminal', h: 'If you can do it from the command line, Claude can too. That power is governed by the permission system (Lesson 9) — Claude asks before edits and commands by default.' }
    ],
    quiz: [
      { q: 'How much of auto memory\'s MEMORY.md loads at session start?', opts: ['All of it', 'The first 200 lines or 25KB, whichever comes first', 'Nothing until you ask', 'Only headings'], a: 1, why: 'The first 200 lines or 25KB load automatically; topic files are read on demand.' }
    ]
  },
  {
    id: 'l05', title: 'Your first session', widget: 'terminal',
    tasks: [{ ask: 'Start a session in your project', cmd: 'claude' }, { ask: 'Generate a CLAUDE.md for the repo', cmd: '/init' }, { ask: 'Check that your install is healthy', cmd: '/doctor' }],
    docs: [{ t: 'Quickstart', href: 'https://code.claude.com/docs/en/quickstart' }, { t: 'CLI reference', href: 'https://code.claude.com/docs/en/cli-reference' }],
    term: ['claude', '/init', '/context', '/model', '/doctor', '/help'],
    blocks: [
      { t: 'h', h: '<p>Start a session by running <code>claude</code> in your project directory. From there, a handful of built-in commands guide you through setup:</p><ul><li><code>/init</code> walks you through creating a CLAUDE.md for your project</li><li><code>/agents</code> helps configure custom subagents</li><li><code>/doctor</code> diagnoses common issues with your installation</li><li><code>/context</code> shows what is using space in the context window</li><li><code>/model</code> switches models mid-session</li></ul><p>Claude Code can teach you how to use it — ask questions like <em>"how do I set up hooks?"</em> and it will explain.</p>' },
      { t: 'c', lang: 'bash', file: 'terminal', code: '# install (macOS / Linux / WSL)\ncurl -fsSL https://claude.ai/install.sh | bash\n\n# start a session in your project\ncd ~/work/my-app\nclaude\n\n# one-shot / scripted usage\nclaude -p "summarize the failing tests"' },
      { t: 'callout', kind: 'success', title: 'Try the simulator', h: 'Use the terminal panel on this lesson to try <code>claude</code>, <code>/init</code>, <code>/context</code> and friends — responses are simulated, so nothing can break.' }
    ],
    quiz: [
      { q: 'Which command creates a CLAUDE.md for your project interactively?', opts: ['/doctor', '/init', '/memory --new', '/setup'], a: 1, why: '/init walks you through creating a CLAUDE.md.' },
      { q: 'What does /context show?', opts: ['Your git branches', 'What is using space in the context window', 'The current model', 'Available MCP tools'], a: 1, why: '/context breaks down context window usage.' }
    ]
  }]
},
{
  id: 'm2', num: 2, title: 'Sessions, Context and Memory', level: 'Beginner',
  desc: 'How conversations persist, how the context window fills, and how Claude remembers your project.',
  lessons: [
  {
    id: 'l06', title: 'Working with sessions',
    term: ['/resume', '/clear', '/export'],
    tasks: [{ ask: 'Reopen an earlier session', cmd: '/resume' }, { ask: 'Start fresh without losing the transcript', cmd: '/clear' }],
    docs: [{ t: 'Manage sessions', href: 'https://code.claude.com/docs/en/sessions' }, { t: 'Worktrees', href: 'https://code.claude.com/docs/en/worktrees' }],
    blocks: [
      { t: 'h', h: '<p>Claude Code saves your conversation locally as you work — every message, tool use, and result is written to a plaintext JSONL file under <code>~/.claude/projects/</code>. Before making code changes, it also snapshots the affected files so you can revert.</p><p><strong>Sessions are independent.</strong> Each new session starts with a fresh context window. Learnings persist across sessions only through auto memory and CLAUDE.md.</p>' },
      { t: 'img', src: 'assets/session-continuity.svg', alt: 'Resume continues the same session; fork copies history into a new session ID', cap: 'Resume vs. fork, redrawn in brand colors.' },
      { t: 'h', h: '<p><strong>Resuming</strong> with <code>claude --continue</code> or <code>claude --resume</code> reopens a session under the same ID and appends new messages. <strong>Forking</strong> with <code>--fork-session</code> or <code>/branch</code> copies the history into a new session ID, leaving the original unchanged.</p><p>Sessions are tied to your current directory. To run parallel sessions safely, use <strong>git worktrees</strong> — separate directories for individual branches so changes don\'t collide.</p>' }
    ],
    quiz: [
      { q: 'What is the difference between resuming and forking a session?', opts: ['They are identical', 'Resume appends to the same session ID; fork copies history into a new ID', 'Fork deletes the original', 'Resume starts fresh'], a: 1, why: 'Resume = same ID, appended messages. Fork = copied history, new ID, original untouched.' },
      { q: 'Where are session transcripts stored?', opts: ['In your repo', 'In the cloud only', 'As JSONL files under ~/.claude/projects/', 'In .claude/settings.json'], a: 2, why: 'Plaintext JSONL under ~/.claude/projects/ — which also enables rewind, resume, and fork.' },
      { q: 'How do you run parallel Claude sessions on different branches safely?', opts: ['Open two terminals in the same folder', 'Use git worktrees', 'Use /branch', 'You can\'t'], a: 1, why: 'Worktrees give each branch its own directory, so parallel sessions don\'t collide.' }
    ]
  },
  {
    id: 'l07', title: 'The context window',
    tasks: [{ ask: 'See what is filling the window', cmd: '/context' }, { ask: 'Summarise the conversation', cmd: '/compact' }, { ask: 'Check what MCP tool names cost you', cmd: '/mcp' }],
    docs: [{ t: 'Explore the context window', href: 'https://code.claude.com/docs/en/context-window' }, { t: 'Costs', href: 'https://code.claude.com/docs/en/costs' }],
    term: ['/context', '/compact', '/mcp'],
    widget: 'terminal',
    blocks: [
      { t: 'h', h: '<p>Claude\'s context window holds your conversation history, file contents, command outputs, CLAUDE.md, auto memory, loaded skills, and system instructions. As you work, it fills up.</p><p><strong>When context fills up</strong>, Claude Code manages it automatically: it clears older tool outputs first, then summarizes the conversation if needed. Your requests and key code snippets are preserved, but detailed instructions from early in the conversation may be lost — put persistent rules in CLAUDE.md rather than relying on chat history.</p>' },
      { t: 'c', lang: 'bash', file: 'terminal', code: '# see what is using space\n/context\n\n# compact now, steering what to keep\n/compact focus on the API changes\n\n# check per-server MCP context cost\n/mcp' },
      { t: 'h', h: '<p>To control what survives compaction, add a <strong>"Compact Instructions"</strong> section to CLAUDE.md or run <code>/compact</code> with a focus. MCP tool definitions are deferred by default — only tool names consume context until Claude uses a specific tool.</p>' },
      { t: 'callout', kind: 'warn', title: 'Thrashing', h: 'If a single file or tool output is so large that context refills immediately after each summary, auto-compaction stops after a few attempts and shows an error instead of looping.' }
    ],
    quiz: [
      { q: 'What does Claude Code clear first when context fills?', opts: ['Your CLAUDE.md', 'Older tool outputs', 'The system prompt', 'Auto memory'], a: 1, why: 'Older tool outputs go first; then the conversation is summarized if needed.' },
      { q: 'Where should persistent rules live?', opts: ['Early in the conversation', 'In CLAUDE.md', 'In a pinned message', 'In shell history'], a: 1, why: 'Early conversation instructions can be lost to compaction; CLAUDE.md loads every session.' }
    ]
  },
  {
    id: 'l08', title: 'CLAUDE.md and auto memory',
    term: ['/memory', '/init'],
    tasks: [{ ask: 'Open project and global memory', cmd: '/memory' }, { ask: 'Draft a CLAUDE.md from the repo', cmd: '/init' }],
    docs: [{ t: 'How Claude remembers your project', href: 'https://code.claude.com/docs/en/memory' }],
    blocks: [
      { t: 'h', h: '<p><strong>CLAUDE.md</strong> is a markdown file of project-specific instructions Claude reads at the start of every session: conventions, common commands, architectural context. Keep it under ~200 lines — longer files still load in full but may reduce adherence. Run <code>/memory</code> to open and edit it from within a session.</p>' },
      { t: 'c', lang: 'markdown', file: 'CLAUDE.md', code: '# Project conventions\n\n## Commands\n- Build: `npm run build`\n- Test: `npm test`\n- Lint: `npm run lint`\n\n## Stack\n- TypeScript with strict mode\n- React 19, functional components only\n\n## Rules\n- Named exports, never default exports\n- Tests live next to source: `foo.ts` -> `foo.test.ts`\n- All API routes return `{ data, error }` shape' },
      { t: 'h', h: '<p>A global <code>~/.claude/CLAUDE.md</code> holds personal preferences across every project (response style, commit format). Both load together; when instructions conflict, project-level takes priority.</p><p><strong>Auto memory</strong> is different: Claude writes it itself. As it works, it saves build commands, debugging insights, and architecture notes to <code>~/.claude/projects/&lt;project&gt;/memory/</code>. MEMORY.md is the index loaded each session; topic files like <code>debugging.md</code> are read on demand. It\'s on by default — toggle with <code>/memory</code>.</p>' },
      { t: 'callout', kind: 'tip', title: 'The trigger', h: 'Claude gets a convention or command wrong twice? That\'s a CLAUDE.md edit, not a one-off correction in chat.' }
    ],
    quiz: [
      { q: 'Who writes auto memory?', opts: ['You, via /init', 'Your team lead', 'Claude itself, as it works', 'The plugin system'], a: 2, why: 'Claude creates and updates MEMORY.md and topic files automatically; you can edit or delete them anytime.' },
      { q: 'What is the recommended size limit for CLAUDE.md?', opts: ['No limit', 'Under ~200 lines', 'Exactly 1 page', '25KB minimum'], a: 1, why: 'Target under 200 lines; move overflow to skills or path-scoped rules.' },
      { q: 'Global vs project CLAUDE.md — which wins on conflict?', opts: ['Global', 'Project', 'Neither loads', 'Random'], a: 1, why: 'Both load together, but project-level instructions take priority on conflict.' }
    ]
  },
  {
    id: 'l09', title: 'Checkpoints and permission modes',
    term: ['/rewind', '/permissions', '/config'],
    tasks: [{ ask: 'Roll back to an earlier checkpoint', cmd: '/rewind' }, { ask: 'Review what Claude may run without asking', cmd: '/permissions' }],
    docs: [{ t: 'Checkpointing', href: 'https://code.claude.com/docs/en/checkpointing' }, { t: 'Permission modes', href: 'https://code.claude.com/docs/en/permission-modes' }, { t: 'Permissions', href: 'https://code.claude.com/docs/en/permissions' }],
    blocks: [
      { t: 'h', h: '<p><strong>Every file edit is reversible.</strong> Before Claude edits any file, it snapshots the current contents. Press <code>Esc</code> twice to rewind, or ask Claude to undo. Checkpoints are local to your session and separate from git — they only cover file changes. Actions with external side effects (databases, APIs, deployments) can\'t be checkpointed, which is why Claude asks first.</p><p>Press <code>Shift+Tab</code> to cycle <strong>permission modes</strong>:</p>' },
      { t: 'table', head: ['Mode', 'Behavior'], rows: [
        ['Default', 'Claude asks before file edits and shell commands'],
        ['Auto-accept edits', 'Edits files and runs common filesystem commands (mkdir, mv) without asking'],
        ['Plan mode', 'Explores and proposes a plan without editing source files'],
        ['Auto mode', 'Evaluates all actions with background safety checks (research preview)']] },
      { t: 'h', h: '<p>You can also allow specific trusted commands in <code>.claude/settings.json</code> so Claude doesn\'t ask each time:</p>' },
      { t: 'c', lang: 'json', file: '.claude/settings.json', code: '{\n  "permissions": {\n    "allow": [\n      "Bash(npm test *)",\n      "Bash(git status)"\n    ],\n    "deny": [\n      "Bash(rm -rf *)"\n    ]\n  }\n}' }
    ],
    quiz: [
      { q: 'What can checkpoints NOT undo?', opts: ['File edits', 'Multi-file refactors', 'Actions on remote systems like databases and deployments', 'Renames'], a: 2, why: 'Checkpoints snapshot files only; external side effects can\'t be rewound — hence permission prompts.' },
      { q: 'Which keystroke cycles permission modes?', opts: ['Ctrl+P', 'Shift+Tab', 'Esc Esc', 'Alt+M'], a: 1, why: 'Shift+Tab cycles Default → Auto-accept → Plan → (Auto).' },
      { q: 'What does Plan mode do?', opts: ['Deploys faster', 'Explores and proposes a plan without editing source files', 'Disables permissions', 'Runs tests only'], a: 1, why: 'Plan mode is for analysis before implementation; permission prompts still apply as in default mode.' }
    ]
  },
  {
    id: 'l10', title: 'Working effectively',
    docs: [{ t: 'Best practices', href: 'https://code.claude.com/docs/en/best-practices' }, { t: 'Common workflows', href: 'https://code.claude.com/docs/en/common-workflows' }],
    blocks: [
      { t: 'h', h: '<p>Five habits from the official guidance:</p><ul><li><strong>It\'s a conversation.</strong> You don\'t need perfect prompts. Start with what you want, then refine — when the first attempt isn\'t right, you iterate, not start over.</li><li><strong>Be specific upfront.</strong> Reference files, mention constraints, point to example patterns.</li><li><strong>Give Claude something to verify against.</strong> Test cases, screenshots of expected UI, defined outputs.</li><li><strong>Explore before implementing.</strong> Use Plan mode (Shift+Tab twice) to separate research from coding.</li><li><strong>Delegate, don\'t dictate.</strong> Give context and direction, then trust Claude to figure out details.</li></ul>' },
      { t: 'c', lang: 'text', file: 'prompt — specific + verifiable', code: 'The checkout flow is broken for users with expired cards.\nCheck src/payments/ for the issue, especially token refresh.\nWrite a failing test first, then fix it.' },
      { t: 'c', lang: 'text', file: 'prompt — verify against test cases', code: "Implement validateEmail. Test cases: 'user@example.com' -> true,\n'invalid' -> false, 'user@.com' -> false. Run the tests after." },
      { t: 'callout', kind: 'tip', title: 'Two-phase work', h: 'Review the plan, refine it through conversation, then let Claude implement. This produces better results than jumping straight to code.' }
    ],
    quiz: [
      { q: 'Why give Claude test cases in the prompt?', opts: ['It types faster', 'Claude performs better when it can check its own work', 'Tests are required', 'It reduces cost'], a: 1, why: 'Verifiable targets let the loop\'s verify phase actually verify.' },
      { q: '"Delegate, don\'t dictate" means…', opts: ['Never give context', 'Specify every file to read', 'Give context and direction, let Claude figure out the details', 'Use auto mode always'], a: 2, why: 'You don\'t need to specify which files to read or commands to run — Claude figures that out.' }
    ]
  }]
},
{
  id: 'm3', num: 3, title: 'The .claude Directory', level: 'Intermediate',
  desc: 'Every file Claude Code reads — project and global — and how to choose the right one.',
  lessons: [
  {
    id: 'l11', title: 'The .claude directory', widget: 'explorer',
    term: ['ls .claude/', 'ls'],
    tasks: [{ ask: 'List the project .claude directory', cmd: 'ls .claude/' }],
    docs: [{ t: 'Explore the .claude directory', href: 'https://code.claude.com/docs/en/claude-directory' }],
    blocks: [
      { t: 'h', h: '<p>Claude Code reads instructions, settings, skills, subagents, and memory from <strong>two roots</strong>: your project directory, and <code>~/.claude</code> in your home directory. Commit project files to git to share them with your team; files in <code>~/.claude</code> are personal configuration across all projects.</p><p>Most users only edit <code>CLAUDE.md</code> and <code>settings.json</code>. The rest is optional — add skills, rules, or subagents as you need them.</p><p><strong>Use the interactive explorer below</strong> — click any file to see what it does, when it loads, and a real example. The green/orange/gray dots mark committed, gitignored, and local-only files; amber means Claude writes the file itself.</p>' }
    ],
    quiz: [
      { q: 'Which two files do most users actually edit?', opts: ['hooks.json and .mcp.json', 'CLAUDE.md and settings.json', 'MEMORY.md and rules/', 'keybindings.json and themes/'], a: 1, why: 'Everything else is optional and added as needs arise.' },
      { q: 'What distinguishes project .claude/ from ~/.claude/?', opts: ['Nothing', 'Project files are shareable via git; ~/.claude is personal, across all projects', 'Global files are committed', 'Project files are read-only'], a: 1, why: 'Project config is committed and team-shared; global config follows you everywhere and is never committed.' }
    ]
  },
  {
    id: 'l12', title: 'settings.json and local overrides',
    term: ['/config', '/permissions', '/doctor'],
    tasks: [{ ask: 'Inspect your effective settings', cmd: '/config' }, { ask: 'Find configuration problems', cmd: '/doctor' }],
    docs: [{ t: 'Settings', href: 'https://code.claude.com/docs/en/settings' }],
    blocks: [
      { t: 'h', h: '<p><code>.claude/settings.json</code> holds configuration Claude Code <strong>enforces</strong> — unlike CLAUDE.md, which is guidance Claude reads. Common keys: <code>permissions</code> (allow/deny/ask rules), <code>hooks</code> (scripts on events), <code>statusLine</code>, <code>model</code>, <code>env</code>, and <code>outputStyle</code>.</p>' },
      { t: 'c', lang: 'json', file: '.claude/settings.json', code: '{\n  "permissions": {\n    "allow": [\n      "Bash(npm test *)",\n      "Bash(npm run *)"\n    ],\n    "deny": [\n      "Bash(rm -rf *)"\n    ]\n  },\n  "hooks": {\n    "PostToolUse": [{\n      "matcher": "Edit|Write",\n      "hooks": [{\n        "type": "command",\n        "command": "jq -r \'.tool_input.file_path\' | xargs npx prettier --write"\n      }]\n    }]\n  }\n}' },
      { t: 'h', h: '<p><code>settings.local.json</code> is your personal, gitignored override for one project — same schema, higher precedence. The full precedence order: <strong>managed settings &gt; CLI flags &gt; settings.local.json &gt; project settings.json &gt; global ~/.claude/settings.json</strong>. Array settings like <code>permissions.allow</code> combine across scopes; scalar settings like <code>model</code> use the most specific value.</p>' },
      { t: 'callout', kind: 'info', title: 'Wildcards', h: 'Bash permission patterns support wildcards: <code>Bash(npm test *)</code> matches any command starting with <code>npm test</code>.' }
    ],
    quiz: [
      { q: 'CLAUDE.md vs settings.json — the key difference?', opts: ['File format only', 'CLAUDE.md is guidance Claude reads; settings.json is configuration Claude Code enforces', 'settings.json loads later', 'No difference'], a: 1, why: 'Permissions and hooks are enforced whether Claude follows them or not; CLAUDE.md is a request.' },
      { q: 'How do array settings like permissions.allow behave across scopes?', opts: ['Most specific wins', 'They combine across all scopes', 'Global wins', 'They are ignored locally'], a: 1, why: 'Arrays combine; scalars like model use the most specific value.' }
    ]
  },
  {
    id: 'l13', title: 'Path-scoped rules',
    docs: [{ t: 'Rules', href: 'https://code.claude.com/docs/en/memory' }],
    blocks: [
      { t: 'h', h: '<p><code>.claude/rules/</code> splits project instructions into topic files that can load <strong>conditionally</strong>. A rule without <code>paths:</code> frontmatter loads at session start like CLAUDE.md; a rule <em>with</em> <code>paths:</code> loads only when Claude reads a matching file — saving context.</p>' },
      { t: 'c', lang: 'yaml', file: '.claude/rules/testing.md', code: '---\npaths:\n  - "**/*.test.ts"\n  - "**/*.test.tsx"\n---\n\n# Testing Rules\n\n- Use descriptive test names: "should [expected] when [condition]"\n- Mock external dependencies, not internal modules\n- Clean up side effects in afterEach' },
      { t: 'h', h: '<p>Subdirectories are discovered automatically (<code>.claude/rules/frontend/react.md</code> works). Like CLAUDE.md, rules are guidance — for guaranteed behavior use hooks or permissions.</p>' },
      { t: 'callout', kind: 'tip', title: 'When to split', h: 'When CLAUDE.md approaches 200 lines, start splitting into rules. Language- or directory-specific guidelines are the first candidates.' }
    ],
    quiz: [
      { q: 'When does a rule with paths: frontmatter load?', opts: ['At session start', 'When Claude reads a file matching the globs', 'Never automatically', 'When you type /rules'], a: 1, why: 'Path-scoped rules load only when a matching file enters context.' }
    ]
  },
  {
    id: 'l14', title: 'Choosing the right file',
    docs: [{ t: '.claude directory — choose the right file', href: 'https://code.claude.com/docs/en/claude-directory#choose-the-right-file' }],
    blocks: [
      { t: 'h', h: '<p>Different customizations live in different files. The official decision table:</p>' },
      { t: 'table', head: ['You want to…', 'Edit', 'Scope'], rows: [
        ['Give Claude project context and conventions', 'CLAUDE.md', 'project or global'],
        ['Allow or block specific tool calls', 'settings.json → permissions', 'project or global'],
        ['Run a script before/after tool calls', 'settings.json → hooks', 'project or global'],
        ['Keep personal overrides out of git', 'settings.local.json', 'project only'],
        ['Add a capability invoked with /name', 'skills/<name>/SKILL.md', 'project or global'],
        ['Define a specialized subagent', 'agents/*.md', 'project or global'],
        ['Orchestrate many subagents from a script', 'workflows/*.js', 'project or global'],
        ['Connect external tools over MCP', '.mcp.json', 'project only'],
        ['Change how Claude formats responses', 'output-styles/*.md', 'project or global']] },
      { t: 'callout', kind: 'warn', title: 'Overrides', h: 'Managed settings deployed by your organization take precedence over everything; CLI flags like <code>--permission-mode</code> override settings.json for that session.' }
    ],
    quiz: [
      { q: 'Where do team-shared MCP servers go?', opts: ['~/.claude.json', '.mcp.json at the project root', '.claude/settings.local.json', 'hooks.json'], a: 1, why: '.mcp.json is project-scoped and committed; personal servers go in ~/.claude.json.' },
      { q: 'You want a personal permission that never lands in git. Where?', opts: ['CLAUDE.md', 'settings.json', 'settings.local.json', '.mcp.json'], a: 2, why: 'settings.local.json is auto-gitignored and overrides project defaults.' }
    ]
  },
  {
    id: 'l15', title: 'Application data and privacy',
    tasks: [{ ask: 'Preview a purge without deleting anything', cmd: 'claude project purge ~/work/my-repo --dry-run' }],
    docs: [{ t: 'Application data', href: 'https://code.claude.com/docs/en/claude-directory#application-data' }],
    term: ['claude project purge ~/work/my-repo --dry-run', 'claude project purge ~/work/my-repo'],
    widget: 'terminal',
    blocks: [
      { t: 'h', h: '<p>Beyond config you author, <code>~/.claude</code> holds data Claude Code writes during sessions — <strong>in plaintext</strong>. Anything that passes through a tool lands in a transcript on disk: file contents, command output, pasted text. If a tool reads a <code>.env</code> file, that value is in the transcript.</p><p>Transcripts, file snapshots, plans, and caches are cleaned up automatically after <code>cleanupPeriodDays</code> (default 30). <code>history.jsonl</code> (every prompt you\'ve typed) and <code>stats-cache.json</code> persist until you delete them.</p><p>To reduce exposure: lower <code>cleanupPeriodDays</code>, set <code>CLAUDE_CODE_SKIP_PROMPT_HISTORY</code>, and use permission rules to deny reads of credential files. To wipe one project\'s state:</p>' },
      { t: 'c', lang: 'bash', file: 'terminal', code: '# preview the deletion plan\nclaude project purge ~/work/my-repo --dry-run\n\n# delete with confirmation\nclaude project purge ~/work/my-repo\n\n# everything, non-interactive\nclaude project purge --all --yes' },
      { t: 'callout', kind: 'danger', title: 'Do not delete', h: '<code>~/.claude.json</code>, <code>~/.claude/settings.json</code>, and <code>~/.claude/plugins/</code> hold your auth, preferences, and installed plugins.' }
    ],
    quiz: [
      { q: 'How are transcripts protected at rest?', opts: ['AES encryption', 'They are not encrypted — OS file permissions are the only protection', 'Cloud KMS', 'They are never written'], a: 1, why: 'Plaintext storage; hence the mitigation levers like cleanupPeriodDays and permission denies on credential files.' },
      { q: 'What does claude project purge --dry-run do?', opts: ['Deletes silently', 'Prints the deletion plan without removing anything', 'Purges only caches', 'Resets settings'], a: 1, why: 'It previews the full plan; the real run asks for confirmation.' }
    ]
  }]
});

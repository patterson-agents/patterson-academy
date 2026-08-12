/* Patterson Academy — Claude Code curriculum, modules 4–6.
   Grounded in code.claude.com/docs (features-overview, skills, sub-agents,
   hooks, mcp, plugins, plugin-marketplaces, workflows, agent-sdk) and the
   plugin-dev toolkit. */
window.ACADEMY_MODULES = window.ACADEMY_MODULES || [];
if (!window.ACADEMY_MODULES.__add) {
  window.ACADEMY_MODULES.__add = function () {
    const list = window.ACADEMY_MODULES;
    for (const m of arguments) {
      const i = list.findIndex(x => x.id === m.id);
      if (i >= 0) list[i] = m; else list.push(m);
    }
    list.sort((a, b) => a.num - b.num);
  };
}

window.ACADEMY_MODULES.__add(
{
  id: 'm4', num: 4, title: 'Extending Claude Code', level: 'Intermediate',
  desc: 'Skills, subagents, hooks, MCP, and output styles — the extension layer on top of the agentic loop.',
  lessons: [
  {
    id: 'l16', title: 'Ways to extend Claude Code',
    docs: [{ t: 'Extend Claude Code', href: 'https://code.claude.com/docs/en/features-overview' }],
    blocks: [
      { t: 'h', h: '<p>Extensions plug into different parts of the agentic loop. Each solves a different problem:</p>' },
      { t: 'table', head: ['Feature', 'What it does', 'When to use it'], rows: [
        ['CLAUDE.md', 'Persistent context loaded every conversation', 'Project conventions, "always do X" rules'],
        ['Skill', 'Instructions, knowledge, workflows Claude can use', 'Reusable content, repeatable tasks'],
        ['Subagent', 'Isolated execution context, returns summaries', 'Context isolation, parallel tasks'],
        ['MCP', 'Connect to external services', 'External data or actions'],
        ['Hook', 'Script/prompt triggered by lifecycle events', 'Automation that must run on every matching event'],
        ['Plugin', 'Packages the above into one installable unit', 'Reuse a setup across repos, distribute to others']] },
      { t: 'img', src: 'assets/context-loading.svg', alt: 'What loads into context and when, per feature', cap: 'Context cost by feature — CLAUDE.md loads in full every request; skills, MCP, subagents, and hooks defer.' },
      { t: 'h', h: '<p><strong>Build your setup over time.</strong> You don\'t configure everything up front — each feature has a recognizable trigger: Claude gets a convention wrong twice → CLAUDE.md. You keep typing the same prompt → skill. You keep copying data from a browser tab → MCP. A side task floods your conversation → subagent. Something must happen every time → hook. A second repo needs the same setup → plugin.</p>' },
      { t: 'callout', kind: 'tip', title: 'Guardrails go in hooks', h: '"Never edit .env" in CLAUDE.md is a request, not a guarantee. A PreToolUse hook that blocks the edit is enforcement.' }
    ],
    quiz: [
      { q: 'A side task keeps flooding your conversation with output you won\'t reference again. Add a…', opts: ['Hook', 'Subagent', 'CLAUDE.md rule', 'Theme'], a: 1, why: 'Subagents run in isolated context and return only a summary.' },
      { q: 'A rule must hold every single time, no exceptions. Use a…', opts: ['Skill', 'CLAUDE.md line', 'Hook (or permission rule)', 'Output style'], a: 2, why: 'Hooks and permissions are enforced; prompt instructions can vary.' },
      { q: 'Which feature is the packaging layer for the others?', opts: ['MCP', 'Plugins', 'Rules', 'Workflows'], a: 1, why: 'A plugin bundles skills, hooks, subagents, and MCP servers into one installable unit.' }
    ]
  },
  {
    id: 'l17', title: 'Skills',
    term: ['/skills', '/help'],
    tasks: [{ ask: 'List the skills available in this project', cmd: '/skills' }],
    docs: [{ t: 'Skills', href: 'https://code.claude.com/docs/en/skills' }],
    prompts: ['skill-frontmatter'],
    blocks: [
      { t: 'h', h: '<p>A skill is a folder with a <code>SKILL.md</code> file plus any supporting files. Invoke it with <code>/skill-name</code>, or Claude loads it automatically when its <code>description</code> matches your task. Skills follow <strong>progressive disclosure</strong>: descriptions load at session start; full content loads only when used.</p><p>Frontmatter controls invocability: <code>disable-model-invocation: true</code> for user-only workflows like <code>/deploy</code> (zero context cost until you invoke it); <code>user-invocable: false</code> hides it from the <code>/</code> menu while Claude can still use it.</p>' },
      { t: 'c', lang: 'markdown', file: '.claude/skills/security-review/SKILL.md', code: '---\ndescription: Reviews code changes for security vulnerabilities, authentication gaps, and injection risks\ndisable-model-invocation: true\nargument-hint: <branch-or-path>\n---\n\n## Diff to review\n\n!`git diff $ARGUMENTS`\n\nAudit the changes above for:\n\n1. Injection vulnerabilities (SQL, XSS, command)\n2. Authentication and authorization gaps\n3. Hardcoded secrets or credentials\n\nUse checklist.md in this skill directory for the full review checklist.\n\nReport findings with severity ratings and remediation steps.' },
      { t: 'h', h: '<p>Three mechanics in that example: the <code>!`...`</code> line runs a shell command and injects its output into the prompt; <code>$ARGUMENTS</code> substitutes whatever you typed after the skill name (<code>$0</code>, <code>$1</code> for positional access); and bundled files like <code>checklist.md</code> are readable because Claude sees the skill directory path.</p><p><strong>Writing strong descriptions matters most</strong> — Claude matches your task against skill descriptions to decide which to load. Vague or overlapping descriptions mean the wrong skill loads, or none.</p>' },
      { t: 'callout', kind: 'info', title: 'From the skill-creator methodology', h: 'Write descriptions in third person with concrete trigger phrases ("This skill should be used when the user asks to…"), keep the core SKILL.md lean (~1,500–2,000 words), and push detail into <code>references/</code>, <code>examples/</code>, and <code>scripts/</code>. See the Prompt Library for full templates.' }
    ],
    quiz: [
      { q: 'What does disable-model-invocation: true do?', opts: ['Disables the skill', 'Only you can trigger the skill; zero context cost until invoked', 'Hides it from the / menu', 'Makes it read-only'], a: 1, why: 'It keeps the skill invisible to Claude until you invoke it manually — ideal for workflows with side effects.' },
      { q: 'What does the !`git diff $ARGUMENTS` line in a SKILL.md do?', opts: ['Documents a command', 'Runs the command and injects its output into the prompt before Claude sees it', 'Asks permission', 'Nothing — it is a comment'], a: 1, why: 'Bash injection lines execute at invocation time and their output becomes part of the prompt.' },
      { q: 'What determines whether Claude auto-invokes a skill?', opts: ['File size', 'Alphabetical order', 'The description frontmatter matching your task', 'The version field'], a: 2, why: 'Claude matches tasks against descriptions — which is why strong trigger phrases matter.' }
    ]
  },
  {
    id: 'l18', title: 'Commands vs skills',
    docs: [{ t: 'Skills (commands section)', href: 'https://code.claude.com/docs/en/skills' }],
    blocks: [
      { t: 'h', h: '<p>Commands and skills are now <strong>the same mechanism</strong>. A file at <code>commands/deploy.md</code> creates <code>/deploy</code> the same way <code>skills/deploy/SKILL.md</code> does, and both can be auto-invoked by Claude. The difference: skills are a directory, so you can bundle reference docs, templates, or scripts alongside the prompt.</p>' },
      { t: 'c', lang: 'markdown', file: '.claude/commands/fix-issue.md', code: '---\nargument-hint: <issue-number>\n---\n\n!`gh issue view $ARGUMENTS`\n\nInvestigate and fix the issue above.\n\n1. Trace the bug to its root cause\n2. Implement the fix\n3. Write or update tests\n4. Summarize what you changed and why' },
      { t: 'h', h: '<p>Type <code>/fix-issue 123</code> and <code>gh issue view 123</code> runs in your shell, its output injected before Claude sees the prompt. If a skill and command share a name, the skill wins. New workflows should usually be skills; commands remain supported.</p>' }
    ],
    quiz: [
      { q: 'A skill and a command share the name "deploy". Which handles /deploy?', opts: ['The command', 'The skill', 'Both run', 'Error'], a: 1, why: 'Skills take precedence over same-named commands.' },
      { q: 'The main advantage of a skill over a single-file command?', opts: ['Faster execution', 'It can bundle supporting files alongside the prompt', 'Commands can\'t take arguments', 'Skills skip permissions'], a: 1, why: 'Same invocation, plus references/, examples/, scripts/ travel with the skill.' }
    ]
  },
  {
    id: 'l19', title: 'Subagents',
    term: ['/agents'],
    tasks: [{ ask: 'See which subagents are defined', cmd: '/agents' }],
    docs: [{ t: 'Subagents', href: 'https://code.claude.com/docs/en/sub-agents' }],
    prompts: ['agent-creation'],
    blocks: [
      { t: 'h', h: '<p>A subagent is a markdown file in <code>agents/</code> defining a worker with its own system prompt, tool access, and optionally its own model. Subagents run in a <strong>fresh context window</strong>, completely separate from your main conversation. They might read dozens of files, but your session only receives a summary — this isolation is why subagents help with long sessions.</p>' },
      { t: 'c', lang: 'markdown', file: '.claude/agents/code-reviewer.md', code: '---\nname: code-reviewer\ndescription: Reviews code for correctness, security, and maintainability\ntools: Read, Grep, Glob\n---\n\nYou are a senior code reviewer. Review for:\n\n1. Correctness: logic errors, edge cases, null handling\n2. Security: injection, auth bypass, data exposure\n3. Maintainability: naming, complexity, duplication\n\nEvery finding must include a concrete fix.' },
      { t: 'h', h: '<p>The <code>description</code> tells Claude when to delegate automatically; <code>tools:</code> restricts access (here read-only — it can inspect but never edit). Type <code>@</code> to delegate directly from the autocomplete. Subagents with <code>memory: project|local|user</code> get their own persistent MEMORY.md.</p><p><strong>Skill vs subagent:</strong> skills are reusable <em>content</em> loaded into any context; subagents are isolated <em>workers</em>. They combine — a subagent can preload skills via its <code>skills:</code> field, and a skill can run isolated with <code>context: fork</code>.</p>' },
      { t: 'callout', kind: 'info', title: 'AI-assisted agent generation', h: 'Claude Code\'s own agent generator uses a production system prompt that designs the persona, instructions, and triggering examples for you — the full ~600-word template is in the Prompt Library, and this lesson\'s assistant can run it live.' }
    ],
    quiz: [
      { q: 'What returns to your main conversation when a subagent finishes?', opts: ['Its full transcript', 'A summary', 'Nothing', 'Its context window'], a: 1, why: 'The work happens in isolation; only the summary lands in your context.' },
      { q: 'How do you restrict a subagent to read-only inspection?', opts: ['Plan mode', 'tools: Read, Grep, Glob in frontmatter', 'memory: local', 'You can\'t'], a: 1, why: 'The tools: field limits which tools the subagent may use.' }
    ]
  },
  {
    id: 'l20', title: 'Hooks, part one: events and configuration',
    term: ['/hooks', '/doctor'],
    tasks: [{ ask: 'Review every registered hook', cmd: '/hooks' }],
    docs: [{ t: 'Hooks guide', href: 'https://code.claude.com/docs/en/hooks-guide' }, { t: 'Hooks reference', href: 'https://code.claude.com/docs/en/hooks' }],
    prompts: ['hook-validate-write'],
    blocks: [
      { t: 'h', h: '<p>Hooks run your own logic on lifecycle events — deterministically, every time the event fires. The main events:</p>' },
      { t: 'table', head: ['Event', 'When', 'Use for'], rows: [
        ['PreToolUse', 'Before a tool runs', 'Validation, approve/deny/modify'],
        ['PostToolUse', 'After a tool completes', 'Feedback, formatting, logging'],
        ['UserPromptSubmit', 'You submit a prompt', 'Add context, validate'],
        ['Stop / SubagentStop', 'Agent considers stopping', 'Completeness checks'],
        ['SessionStart / SessionEnd', 'Session boundaries', 'Load context / cleanup'],
        ['PreCompact', 'Before compaction', 'Preserve critical info'],
        ['Notification', 'Claude notifies you', 'Logging, reactions']] },
      { t: 'c', lang: 'json', file: '.claude/settings.json — format on save', code: '{\n  "hooks": {\n    "PostToolUse": [{\n      "matcher": "Edit|Write",\n      "hooks": [{\n        "type": "command",\n        "command": "jq -r \'.tool_input.file_path\' | xargs npx prettier --write",\n        "timeout": 30\n      }]\n    }]\n  }\n}' },
      { t: 'h', h: '<p><strong>Matchers</strong> select which tools trigger the hook: exact (<code>"Write"</code>), alternation (<code>"Read|Write|Edit"</code>), wildcard (<code>"*"</code>), or regex against MCP tools (<code>"mcp__.*__delete.*"</code>). Hooks receive JSON on stdin (<code>tool_name</code>, <code>tool_input</code>, <code>cwd</code>…) and speak through exit codes: <strong>0</strong> = success, <strong>2</strong> = blocking error whose stderr is fed back to Claude.</p>' },
      { t: 'callout', kind: 'warn', title: 'Hooks load at session start', h: 'Editing hook config doesn\'t affect the current session — restart Claude Code, then review with <code>/hooks</code> and debug with <code>claude --debug</code>.' }
    ],
    quiz: [
      { q: 'Which exit code makes a hook block the action and feed stderr back to Claude?', opts: ['0', '1', '2', '130'], a: 2, why: 'Exit 2 is the blocking error; 0 is success with stdout in the transcript.' },
      { q: 'You edited hooks.json mid-session. What must you do?', opts: ['Run /reload', 'Nothing — hot reload', 'Restart Claude Code', 'Re-login'], a: 2, why: 'Hooks are loaded at session start and cannot be hot-swapped.' },
      { q: 'Which matcher fires on every MCP tool?', opts: ['"*mcp*"', '"mcp__.*"', '"MCP"', '"all"'], a: 1, why: 'Matchers are regex-capable; mcp__.* matches all MCP tool names.' }
    ]
  },
  {
    id: 'l21', title: 'Hooks, part two: prompt hooks and security',
    docs: [{ t: 'Hooks reference', href: 'https://code.claude.com/docs/en/hooks' }],
    prompts: ['hook-validate-write', 'hook-stop-check'],
    blocks: [
      { t: 'h', h: '<p><strong>Prompt-based hooks</strong> use LLM reasoning instead of bash — supported on PreToolUse, Stop, SubagentStop, and UserPromptSubmit. Use them for context-aware judgment; keep command hooks for fast deterministic checks.</p>' },
      { t: 'c', lang: 'json', file: 'hooks — prompt-based validation', code: '{\n  "PreToolUse": [{\n    "matcher": "Write|Edit",\n    "hooks": [{\n      "type": "prompt",\n      "prompt": "Validate file write safety. Check: system paths, credentials, path traversal, sensitive content. Return \'approve\' or \'deny\'."\n    }]\n  }],\n  "Stop": [{\n    "matcher": "*",\n    "hooks": [{\n      "type": "prompt",\n      "prompt": "Verify task completion: tests run, build succeeded, questions answered. Return \'approve\' to stop or \'block\' with reason to continue."\n    }]\n  }]\n}' },
      { t: 'h', h: '<p>Security rules for command hooks, from the plugin-dev toolkit:</p><ul><li><strong>Validate all inputs</strong> — check tool names and paths before acting on them.</li><li><strong>Quote every variable</strong> — <code>echo "$file_path"</code>, never <code>echo $file_path</code> (injection risk).</li><li><strong>Deny path traversal and sensitive files</strong> — reject paths containing <code>..</code> or <code>.env</code>.</li><li><strong>Use <code>${CLAUDE_PLUGIN_ROOT}</code></strong> for portable script paths in plugins.</li><li><strong>Set timeouts</strong> — defaults are 60s (command) and 30s (prompt).</li></ul>' },
      { t: 'c', lang: 'bash', file: 'validate-write.sh (excerpt)', code: '#!/bin/bash\nset -euo pipefail\n\ninput=$(cat)\nfile_path=$(echo "$input" | jq -r \'.tool_input.file_path\')\n\n# Deny path traversal\nif [[ "$file_path" == *".."* ]]; then\n  echo \'{"decision": "deny", "reason": "Path traversal detected"}\' >&2\n  exit 2\nfi\n\n# Deny sensitive files\nif [[ "$file_path" == *".env"* ]]; then\n  echo \'{"decision": "deny", "reason": "Sensitive file"}\' >&2\n  exit 2\nfi' },
      { t: 'callout', kind: 'info', title: 'Parallel execution', h: 'All matching hooks run in parallel — they don\'t see each other\'s output and ordering is non-deterministic. Design each hook to stand alone.' }
    ],
    quiz: [
      { q: 'Which events support prompt-based hooks?', opts: ['All events', 'PreToolUse, Stop, SubagentStop, UserPromptSubmit', 'Only PostToolUse', 'SessionStart only'], a: 1, why: 'Prompt hooks bring LLM judgment to those four events; others use command hooks.' },
      { q: 'Why quote bash variables in hook scripts?', opts: ['Style preference', 'Unquoted variables are a shell-injection risk', 'Quoting is faster', 'jq requires it'], a: 1, why: 'echo $file_path with a malicious path can execute arbitrary words; quoting prevents it.' },
      { q: 'Two hooks match the same event. How do they run?', opts: ['In file order', 'In parallel, independently', 'Only the first', 'Chained via stdout'], a: 1, why: 'Matching hooks run in parallel and must not rely on each other\'s output.' }
    ]
  },
  {
    id: 'l22', title: 'MCP servers',
    tasks: [{ ask: 'Add a personal MCP server', cmd: 'claude mcp add --scope user my-tools' }, { ask: 'Check server status and token cost', cmd: '/mcp' }],
    docs: [{ t: 'MCP', href: 'https://code.claude.com/docs/en/mcp' }, { t: 'MCP quickstart', href: 'https://code.claude.com/docs/en/mcp-quickstart' }],
    term: ['claude mcp add --scope user my-tools', '/mcp'],
    widget: 'terminal',
    blocks: [
      { t: 'h', h: '<p>The <strong>Model Context Protocol</strong> connects Claude to external services: databases, APIs, browsers, issue trackers. Servers come in three transport types: <strong>stdio</strong> (local process), <strong>SSE</strong> (hosted, often OAuth), and <strong>HTTP</strong> (REST endpoints).</p><p>Team-shared servers live in <code>.mcp.json</code> at the project root; personal servers go in <code>~/.claude.json</code> (add with <code>claude mcp add --scope user</code>). Precedence when names collide: local &gt; project &gt; user.</p>' },
      { t: 'c', lang: 'json', file: '.mcp.json', code: '{\n  "mcpServers": {\n    "github": {\n      "command": "npx",\n      "args": ["-y", "@modelcontextprotocol/server-github"],\n      "env": {\n        "GITHUB_TOKEN": "${GITHUB_TOKEN}"\n      }\n    },\n    "docs-api": {\n      "type": "http",\n      "url": "https://api.example.com/mcp",\n      "headers": {\n        "Authorization": "Bearer ${DOCS_API_KEY}"\n      }\n    }\n  }\n}' },
      { t: 'h', h: '<p>The <code>${GITHUB_TOKEN}</code> reference is read from your shell environment when the server starts — the token never lands in the file. MCP tool names follow <code>mcp__server__tool</code>, which is also how you target them in hook matchers and permission rules.</p><p><strong>Context cost is low by default:</strong> tool search defers full schemas until Claude actually uses a tool; only names load at session start. Run <code>/mcp</code> for connection status and per-server token costs.</p>' },
      { t: 'callout', kind: 'tip', title: 'MCP + skill', h: 'MCP provides the connection; a skill teaches Claude how to use it well — e.g. an MCP server connects your database, a skill documents the schema and query patterns.' }
    ],
    quiz: [
      { q: 'Where do team-shared MCP servers belong?', opts: ['~/.claude.json', '.mcp.json at the project root', 'settings.local.json', 'hooks.json'], a: 1, why: 'Project-scoped .mcp.json is committed and shared; personal servers live in ~/.claude.json.' },
      { q: 'Why write ${GITHUB_TOKEN} instead of the token itself?', opts: ['Shorter', 'The value is read from your environment at server start, so the secret never lands in the committed file', 'It is required syntax', 'Tokens rotate hourly'], a: 1, why: 'Environment expansion keeps secrets out of version control.' },
      { q: 'What keeps idle MCP servers cheap in context?', opts: ['Compression', 'Tool search — only names load until a tool is used', 'They unload nightly', 'Nothing'], a: 1, why: 'Schemas are deferred until needed; /mcp shows per-server costs.' }
    ]
  },
  {
    id: 'l23', title: 'Output styles and the status line',
    docs: [{ t: 'Output styles', href: 'https://code.claude.com/docs/en/output-styles' }, { t: 'Status line', href: 'https://code.claude.com/docs/en/statusline' }],
    blocks: [
      { t: 'h', h: '<p><strong>Output styles</strong> adapt Claude Code beyond software engineering. Each markdown file in <code>output-styles/</code> appends a section to the system prompt — by default replacing the built-in coding task instructions (keep them with <code>keep-coding-instructions: true</code>). Built-ins <em>Explanatory</em> and <em>Learning</em> ship with Claude Code.</p>' },
      { t: 'c', lang: 'markdown', file: '~/.claude/output-styles/teaching.md', code: '---\ndescription: Explains reasoning and asks you to implement small pieces\nkeep-coding-instructions: true\n---\n\nAfter completing each task, add a brief "Why this approach" note\nexplaining the key design decision.\n\nWhen a change is under 10 lines, ask the user to implement it\nthemselves by leaving a TODO(human) marker instead of writing it.' },
      { t: 'h', h: '<p>Select a style via <code>/config</code> or the <code>outputStyle</code> setting; changes take effect next session (the system prompt is fixed at startup for caching). The <strong>status line</strong> (<code>statusLine</code> in settings) customizes the bar at the bottom — context usage, costs, git status.</p>' }
    ],
    quiz: [
      { q: 'Why do output style changes only apply next session?', opts: ['A bug', 'The system prompt is fixed at startup for prompt caching', 'Styles are compiled', 'They require re-login'], a: 1, why: 'The system prompt is cached from session start.' }
    ]
  }]
},
{
  id: 'm5', num: 5, title: 'Plugins and Distribution', level: 'Advanced',
  desc: 'Package skills, agents, hooks, and MCP into installable plugins, and distribute them via marketplaces.',
  lessons: [
  {
    id: 'l24', title: 'Plugin structure and the manifest',
    term: ['/plugin list', '/plugin install plugin-dev@claude-code-marketplace'],
    tasks: [{ ask: 'List installed plugins', cmd: '/plugin list' }],
    docs: [{ t: 'Create plugins', href: 'https://code.claude.com/docs/en/plugins' }, { t: 'Plugins reference', href: 'https://code.claude.com/docs/en/plugins-reference' }],
    prompts: ['plugin-manifest'],
    blocks: [
      { t: 'h', h: '<p>A plugin bundles skills, commands, agents, hooks, and MCP servers into a single installable unit. Components are <strong>auto-discovered</strong> from standard directories:</p>' },
      { t: 'c', lang: 'text', file: 'my-plugin/ — standard layout', code: 'my-plugin/\n  .claude-plugin/\n    plugin.json        # manifest (the only required file)\n  commands/            # slash commands (*.md)\n  skills/              # skills (<name>/SKILL.md)\n  agents/              # subagents (*.md)\n  hooks/\n    hooks.json         # hook configuration\n  .mcp.json            # bundled MCP servers\n  scripts/             # hook & utility scripts\n  README.md' },
      { t: 'c', lang: 'json', file: '.claude-plugin/plugin.json', code: '{\n  "name": "plugin-dev",\n  "description": "Comprehensive toolkit for developing Claude Code plugins",\n  "version": "0.1.0",\n  "author": {\n    "name": "Patterson Engineering",\n    "email": "eng@example.com"\n  },\n  "homepage": "https://github.com/example/plugin-dev",\n  "license": "MIT",\n  "keywords": ["plugins", "development", "hooks", "mcp"]\n}' },
      { t: 'h', h: '<p>Plugin skills are <strong>namespaced</strong> (<code>/my-plugin:review</code>) so multiple plugins coexist. In hook commands and MCP configs, always reference files through <code>${CLAUDE_PLUGIN_ROOT}</code> — the absolute path to the installed plugin — so the plugin works wherever it is installed. Test during development with <code>claude --plugin-dir /path/to/my-plugin</code>.</p>' },
      { t: 'callout', kind: 'info', title: 'Reuse first', h: 'Before scaffolding a new component, search installed plugins, first-party plugins, and community registries — merge and adapt existing components; generate only the glue. (This is the "reuse-first" doctrine from the plugin-dev toolkit.)' }
    ],
    quiz: [
      { q: 'Which file is the only required one in a plugin?', opts: ['README.md', '.claude-plugin/plugin.json', 'hooks.json', 'SKILL.md'], a: 1, why: 'The manifest is required; all component directories are optional and auto-discovered.' },
      { q: 'Why use ${CLAUDE_PLUGIN_ROOT} in hook commands?', opts: ['Speed', 'Portability — the plugin works from wherever it is installed', 'Security scanning', 'It is cosmetic'], a: 1, why: 'Hardcoded paths break when the plugin is installed elsewhere.' },
      { q: 'How are plugin skills invoked?', opts: ['/review', '/my-plugin:review — namespaced by plugin', 'plugin review', '@review'], a: 1, why: 'Namespacing prevents collisions between plugins.' }
    ]
  },
  {
    id: 'l25', title: 'Plugin settings and state',
    docs: [{ t: 'Plugins', href: 'https://code.claude.com/docs/en/plugins' }],
    blocks: [
      { t: 'h', h: '<p>Plugins often need per-project configuration. The plugin-dev toolkit\'s pattern: a <code>.claude/&lt;plugin-name&gt;.local.md</code> file with YAML frontmatter for machine-readable settings and a markdown body for human notes — gitignored, validated by scripts, updated atomically.</p>' },
      { t: 'c', lang: 'yaml', file: '.claude/my-plugin.local.md', code: '---\nenabled: true\nstrict_mode: false\nmax_retries: 3\nnotify_channel: "#eng-alerts"\n---\n\n# My Plugin — local settings\n\nStrict mode is off while we migrate the legacy API routes.\nFlip it on after PROJ-142 lands.' },
      { t: 'h', h: '<p>Hooks read these settings by parsing the frontmatter with <code>sed</code>/<code>awk</code>/<code>grep</code> and can exit early when disabled — the <strong>temporarily-active-hook</strong> pattern: a flag file or config check at the top of the script makes a hook a no-op until enabled.</p>' },
      { t: 'c', lang: 'bash', file: 'hook with quick-exit', code: '#!/bin/bash\nFLAG_FILE="$CLAUDE_PROJECT_DIR/.enable-strict-validation"\n\nif [ ! -f "$FLAG_FILE" ]; then\n  exit 0   # not enabled — skip silently\nfi\n\ninput=$(cat)\n# ... validation logic ...' }
    ],
    quiz: [
      { q: 'What is the "temporarily active hook" pattern?', opts: ['A cron job', 'The hook checks a flag file/config first and exits 0 when disabled', 'Hooks that self-delete', 'Timeout-based hooks'], a: 1, why: 'A quick exit at the top makes the hook a cheap no-op until explicitly enabled.' }
    ]
  },
  {
    id: 'l26', title: 'Marketplaces',
    tasks: [{ ask: 'Install a plugin from a marketplace', cmd: '/plugin install plugin-dev@claude-code-marketplace' }, { ask: 'Confirm it loaded', cmd: '/plugin list' }],
    docs: [{ t: 'Discover plugins', href: 'https://code.claude.com/docs/en/discover-plugins' }, { t: 'Plugin marketplaces', href: 'https://code.claude.com/docs/en/plugin-marketplaces' }],
    term: ['/plugin install plugin-dev@claude-code-marketplace', '/plugin list'],
    widget: 'terminal',
    blocks: [
      { t: 'h', h: '<p>A <strong>marketplace</strong> is a catalog (typically a git repo) listing plugins others can install. Install from one with:</p>' },
      { t: 'c', lang: 'bash', file: 'terminal', code: '# add a marketplace, then install\n/plugin marketplace add patterson-agents/design-system\n/plugin install patterson-brand@patterson-design\n\n# see what is installed\n/plugin list\n\n# develop locally without installing\nclaude --plugin-dir ~/work/my-plugin' },
      { t: 'c', lang: 'json', file: '.claude-plugin/marketplace.json (catalog excerpt)', code: '{\n  "name": "patterson-design",\n  "owner": { "name": "Patterson Engineering" },\n  "plugins": [\n    {\n      "name": "patterson-brand",\n      "source": "./plugins/brand",\n      "description": "Brand tokens, logo assets, and voice guidance",\n      "version": "1.2.0",\n      "keywords": ["design", "brand"]\n    }\n  ]\n}' },
      { t: 'h', h: '<p>Installed plugins are cached under <code>~/.claude/plugins</code>; orphaned versions are deleted 7 days after an update or uninstall. Publishers can add <strong>relevance blocks</strong> so Claude Code suggests the plugin when a user\'s work matches, declare <strong>version constraints</strong> on plugin dependencies, and emit CLI <strong>hint markers</strong> that prompt users to install the official plugin.</p>' }
    ],
    quiz: [
      { q: 'Where do installed plugins live?', opts: ['.claude/plugins in the repo', '~/.claude/plugins', '/usr/lib/claude', 'node_modules'], a: 1, why: 'Cloned marketplaces and installed versions are cached under ~/.claude/plugins, managed by claude plugin commands.' },
      { q: 'How do you test a plugin during development without installing it?', opts: ['Copy to ~/.claude', 'claude --plugin-dir /path/to/plugin', 'Publish a beta', 'Symlink node_modules'], a: 1, why: '--plugin-dir loads the plugin directly from your working copy.' }
    ]
  },
  {
    id: 'l27', title: 'A plugin-creation workflow',
    docs: [{ t: 'Create plugins', href: 'https://code.claude.com/docs/en/plugins' }],
    prompts: ['create-plugin-workflow'],
    blocks: [
      { t: 'h', h: '<p>The plugin-dev toolkit ships a <code>/plugin-dev:create-plugin</code> command — a 439-line workflow prompt that walks a plugin from concept to tested implementation in 8 phases. It\'s a masterclass in long-form command design:</p><ol><li><strong>Discovery</strong> — what problem, who uses it, what should it do</li><li><strong>Prior-art discovery</strong> (mandatory) — walk a reuse ladder before generating anything</li><li><strong>Component planning</strong> — skills? commands? agents? hooks? MCP? settings?</li><li><strong>Detailed design</strong> — clarifying questions per component, wait for answers</li><li><strong>Structure creation</strong> — directories + manifest</li><li><strong>Implementation</strong> — using AI-assisted generator agents</li><li><strong>Validation</strong> — plugin-validator agent + schema scripts</li><li><strong>Testing & docs</strong> — verify in Claude Code, finalize README</li></ol>' },
      { t: 'c', lang: 'markdown', file: 'commands/create-plugin.md (frontmatter + opening)', code: '---\ndescription: Guided end-to-end plugin creation workflow with component design, implementation, and validation\nargument-hint: Optional plugin description\nallowed-tools: ["Read", "Write", "Grep", "Glob", "Bash", "TodoWrite", "AskUserQuestion", "Skill", "Task"]\n---\n\n# Plugin Creation Workflow\n\nGuide the user through creating a complete, high-quality Claude Code\nplugin from initial concept to tested implementation.\n\n## Core Principles\n\n- **Reuse before generating**: Search installed plugins, first-party\n  plugins, community catalogs, and the user\'s own orgs before\n  scaffolding anything. Generate only the glue.\n- **Ask clarifying questions**: Identify all ambiguities about purpose,\n  triggering, scope, and components. Wait for answers.\n- **Load relevant skills**: Use the Skill tool to load plugin-dev\n  skills when needed.\n- **Use TodoWrite**: Track all progress throughout all phases.\n\n**Initial request:** $ARGUMENTS' },
      { t: 'h', h: '<p>Note the techniques: <code>allowed-tools</code> scopes the command\'s power; <code>$ARGUMENTS</code> seeds phase 1; every phase declares a <strong>goal, actions, and output</strong>; and mandatory gates ("DO NOT SKIP", "wait for answers") keep the model honest. The full prompt is in the Prompt Library.</p>' }
    ],
    quiz: [
      { q: 'What does the workflow require before generating any component?', opts: ['A paid license', 'Prior-art discovery — walking a reuse ladder of existing plugins and registries', 'Unit tests', 'A logo'], a: 1, why: 'Phase 1.5 is mandatory: merge and adapt existing components; net-new content is glue only.' },
      { q: 'What does allowed-tools in command frontmatter do?', opts: ['Documents tools', 'Restricts which tools the command may use while running', 'Installs tools', 'Nothing'], a: 1, why: 'It scopes the command\'s capabilities, a safety and focus mechanism.' }
    ]
  }]
},
{
  id: 'm6', num: 6, title: 'Advanced Topics', level: 'Advanced',
  desc: 'Orchestration at scale, programmatic use via the Agent SDK, and a best-practices capstone.',
  lessons: [
  {
    id: 'l28', title: 'Workflows and agent teams',
    term: ['/workflows', '/agents'],
    tasks: [{ ask: 'List the dynamic workflows in this project', cmd: '/workflows' }],
    docs: [{ t: 'Run agents in parallel', href: 'https://code.claude.com/docs/en/agents' }, { t: 'Dynamic workflows', href: 'https://code.claude.com/docs/en/workflows' }, { t: 'Agent teams', href: 'https://code.claude.com/docs/en/agent-teams' }],
    blocks: [
      { t: 'h', h: '<p>Claude Code has four ways to take on multiple tasks at once:</p>' },
      { t: 'table', head: ['Mechanism', 'What it is', 'Best for'], rows: [
        ['Subagents', 'Isolated workers inside your session', 'Focused tasks where only the result matters'],
        ['Agent view', 'Dispatch and manage many sessions from one screen', 'Monitoring parallel sessions needing input'],
        ['Agent teams', 'Independent sessions that message each other, sharing a task list', 'Work requiring discussion — competing hypotheses, parallel review'],
        ['Dynamic workflows', 'A script Claude writes that orchestrates many subagents; rerunnable', 'Codebase audits, large migrations, cross-checked research']] },
      { t: 'h', h: '<p><strong>Dynamic workflows</strong> live in <code>.claude/workflows/*.js</code> — each file becomes a <code>/&lt;name&gt;</code> command. You don\'t author them from scratch: Claude writes them, and you save a run from <code>/workflows</code> with <code>s</code>.</p><p><strong>Agent teams</strong> trade tokens for collaboration — each teammate is a separate Claude instance with its own context. Subagents report only to the caller; teammates message each other directly. If parallel subagents start hitting context limits or need to talk to each other, teams are the next step. (Experimental, disabled by default.)</p>' }
    ],
    quiz: [
      { q: 'Subagent vs agent team — the architectural difference?', opts: ['None', 'Subagents report back to the caller; teammates are independent sessions that message each other', 'Teams are cheaper', 'Subagents are deprecated'], a: 1, why: 'Teams self-coordinate on a shared task list at higher token cost.' },
      { q: 'How is a dynamic workflow usually created?', opts: ['Written by hand', 'Claude writes it; you save a run from /workflows', 'Downloaded from npm', 'Generated by /init'], a: 1, why: 'Workflows are scripts Claude writes and you save/rerun.' }
    ]
  },
  {
    id: 'l29', title: 'The Agent SDK',
    docs: [{ t: 'Agent SDK overview', href: 'https://code.claude.com/docs/en/agent-sdk/overview' }, { t: 'Quickstart', href: 'https://code.claude.com/docs/en/agent-sdk/quickstart' }, { t: 'Headless', href: 'https://code.claude.com/docs/en/headless' }],
    blocks: [
      { t: 'h', h: '<p>The <strong>Claude Agent SDK</strong> is Claude Code as a library — the same agentic loop, tools, and context management, embedded in your Python or TypeScript application. Use it for CI bots, review pipelines, and production agents.</p>' },
      { t: 'c', lang: 'python', file: 'agent.py — minimal SDK agent', code: 'from claude_agent_sdk import query\n\nasync def main():\n    async for message in query(\n        prompt="Find and fix the failing test in this repo",\n        options={\n            "allowed_tools": ["Read", "Grep", "Bash", "Edit"],\n            "permission_mode": "acceptEdits",\n            "cwd": "/work/my-repo",\n        },\n    ):\n        print(message)' },
      { t: 'h', h: '<p>The SDK inherits the Claude Code feature set: CLAUDE.md and skills can load into SDK agents, hooks intercept behavior at the same lifecycle points, subagents isolate context, and MCP servers connect external tools (including <em>in-process</em> custom tools — your own functions exposed to Claude). Sessions persist and can resume/fork; permissions are declarative allow/deny rules plus modes, exactly as in the CLI.</p><p>For quick scripting without the SDK, <code>claude -p "prompt"</code> runs headless from any shell.</p>' }
    ],
    quiz: [
      { q: 'What is the Agent SDK, conceptually?', opts: ['A different model', 'Claude Code as a library — the same loop and tools, embedded in your app', 'A REST wrapper', 'A VS Code fork'], a: 1, why: 'Same agentic harness, programmatic surface, Python or TypeScript.' },
      { q: 'Which Claude Code features carry over to SDK agents?', opts: ['None', 'CLAUDE.md, skills, hooks, subagents, MCP, sessions, permissions', 'Only tools', 'Only the model'], a: 1, why: 'The SDK exposes the whole feature set for production use.' }
    ]
  },
  {
    id: 'l30', title: 'Assemble your own setup',
    tasks: [{ ask: 'Audit your context budget', cmd: '/context' }, { ask: 'Run the health check', cmd: '/doctor' }, { ask: 'Confirm your hooks are registered', cmd: '/hooks' }, { ask: 'Confirm your MCP servers connect', cmd: '/mcp' }],
    docs: [{ t: 'Best practices', href: 'https://code.claude.com/docs/en/best-practices' }, { t: 'Debug your configuration', href: 'https://code.claude.com/docs/en/debug-your-config' }],
    term: ['/context', '/doctor', '/hooks', '/mcp'],
    widget: 'terminal',
    blocks: [
      { t: 'h', h: '<p>You now have the full map. The capstone exercise: design the <code>.claude/</code> setup for a real project of yours, applying the triggers from Lesson 16.</p><ol><li>Write a <strong>CLAUDE.md</strong> under 200 lines: commands, stack, rules.</li><li>Add one <strong>path-scoped rule</strong> for your test files.</li><li>Allow your test command in <strong>settings.json permissions</strong>; deny one dangerous pattern.</li><li>Create one <strong>skill</strong> for a workflow you repeat (use the templates in the Prompt Library).</li><li>Add a <strong>PostToolUse hook</strong> that formats on save.</li><li>Wire one <strong>MCP server</strong> your team actually needs, secrets via <code>${VAR}</code>.</li><li>If a second repo needs the same setup — package it as a <strong>plugin</strong>.</li></ol><p>Then verify what actually loaded with the four inspection commands: <code>/context</code> (window usage), <code>/doctor</code> (installation), <code>/hooks</code> (registered hooks), <code>/mcp</code> (server status and cost).</p>' },
      { t: 'callout', kind: 'success', title: 'Grade yourself', h: 'A good setup is quiet: small always-on context, on-demand skills, enforced guardrails, and zero surprises in /context. Less is more.' }
    ],
    quiz: [
      { q: 'Which command shows whether your hooks actually registered?', opts: ['/context', '/hooks', '/mcp', '/doctor'], a: 1, why: '/hooks reviews loaded hooks in the current session.' },
      { q: 'The healthiest default posture for always-on context is…', opts: ['Load everything, always', 'Small CLAUDE.md + on-demand skills + enforced guardrails', 'No config at all', 'One giant skill'], a: 1, why: 'Too much always-on context adds noise and cost; defer what you can.' }
    ]
  }]
});

/* Patterson Academy — hands-on lab: set up Claude Code for a real repository.
   Grounded in code.claude.com/docs (quickstart, memory, claude-directory, settings,
   permissions, skills, sub-agents, hooks, mcp, plugins, best-practices). */
window.ACADEMY_LAB = [
  {
    id: 'p1', title: 'Set up a working session',
    goal: 'Get Claude Code running in a real repository with the basics in place.',
    steps: [
      { id: 's1', title: 'Open a session in your project', body: 'Run <code>claude</code> from the repository root. Claude reads the project from there, so start in the folder you actually work in — not your home directory.', cmd: 'claude' },
      { id: 's2', title: 'Confirm the install is healthy', body: 'Run <code>/doctor</code>. It checks the installation, authentication, connected MCP servers and registered hooks, and flags a CLAUDE.md that has grown too long.', cmd: '/doctor' },
      { id: 's3', title: 'Pick a model for the work', body: 'Sonnet handles most coding tasks. Switch to Opus with <code>/model opus</code> when you are making architectural decisions, and back again when you are not.', cmd: '/model' },
      { id: 's4', title: 'Give Claude one real task', body: 'Describe a small, verifiable job — "fix the failing test in checkout.test.ts" — and watch the loop: gather context, take action, verify. Press <code>Esc</code> to steer at any point.' },
    ],
  },
  {
    id: 'p2', title: 'Write the project memory',
    goal: 'Capture the conventions your team already follows so you stop repeating them.',
    steps: [
      { id: 's1', title: 'Generate a first draft', body: 'Run <code>/init</code>. Claude inspects the project and drafts a CLAUDE.md with your build, test and lint commands.', cmd: '/init' },
      { id: 's2', title: 'Cut it down', body: 'Keep CLAUDE.md under about 200 lines. It loads into every session, so every line costs context. Delete anything Claude can discover on its own.' },
      { id: 's3', title: 'Move topic detail into rules', body: 'Long guidance about one area belongs in <code>.claude/rules/</code> with a <code>paths:</code> glob, so it loads only when a matching file enters context.', code: '---\npaths:\n  - "**/*.test.ts"\n---\n\n# Testing rules\n- Descriptive test names\n- Mock external dependencies, not internal modules', lang: 'yaml' },
      { id: 's4', title: 'Commit it', body: 'CLAUDE.md and <code>.claude/rules/</code> belong in version control. Your whole team gets the same behaviour from the same files.' },
      { id: 's5', title: 'Leave auto memory on', body: 'Claude keeps its own notes per project under <code>~/.claude/projects/</code>. Check it with <code>/memory</code> and prune anything stale or wrong.', cmd: '/memory' },
    ],
  },
  {
    id: 'p3', title: 'Set permissions and safety rails',
    goal: 'Decide once what Claude may do without asking, and what it may never do.',
    steps: [
      { id: 's1', title: 'Review the current rules', body: 'Run <code>/permissions</code> to see the allow, ask and deny lists that apply right now, and which file each rule came from.', cmd: '/permissions' },
      { id: 's2', title: 'Allow the safe, repetitive commands', body: 'Tests, builds, git reads. Put them in <code>.claude/settings.json</code> so the team shares them, and keep machine-specific ones in <code>settings.local.json</code>.', code: '{\n  "permissions": {\n    "allow": ["Bash(npm test *)", "Bash(git diff *)"],\n    "deny": ["Bash(rm -rf *)", "Read(./.env)"]\n  }\n}', lang: 'json' },
      { id: 's3', title: 'Know how to undo', body: 'Checkpoints let you roll back edits from the session. Run <code>/rewind</code> to step back to an earlier state instead of unpicking changes by hand.', cmd: '/rewind' },
      { id: 's4', title: 'Choose a permission mode deliberately', body: 'Default asks before acting. Plan mode reads without editing. Accept-edits skips the file prompts. Reserve the fully bypassing mode for throwaway sandboxes.' },
    ],
  },
  {
    id: 'p4', title: 'Manage the context window',
    goal: 'Keep the window spent on your code instead of on overhead.',
    steps: [
      { id: 's1', title: 'Measure before you tune', body: 'Run <code>/context</code>. It breaks the window down: system prompt and tools, CLAUDE.md and rules, skill descriptions, MCP tool names, memory, conversation.', cmd: '/context' },
      { id: 's2', title: 'Compact with intent', body: '<code>/compact</code> summarises the conversation and drops old tool output. Add a focus — <code>/compact focus on the auth refactor</code> — so the summary keeps what you still need.', cmd: '/compact focus on the auth refactor' },
      { id: 's3', title: 'Push side quests into subagents', body: 'A subagent runs in its own window and returns only its answer. Use one for wide searches, log reading and reviews so the noise never lands in your session.', cmd: '/agents' },
      { id: 's4', title: 'Trim the MCP servers you do not use', body: 'Every connected server contributes tool names to every session. Check the cost with <code>/mcp</code> and disconnect the ones you are not using.', cmd: '/mcp' },
    ],
  },
  {
    id: 'p5', title: 'Add your first extensions',
    goal: 'Turn a repeated prompt into something you can invoke by name.',
    steps: [
      { id: 's1', title: 'Find the prompt you retype', body: 'Anything you have pasted more than twice — a review checklist, a release procedure, a bug-report format — is a skill waiting to be written.' },
      { id: 's2', title: 'Write it as a skill', body: 'A folder under <code>.claude/skills/</code> with a SKILL.md. The description tells Claude when to use it; <code>$ARGUMENTS</code> takes what you typed; <code>!`…`</code> injects command output.', code: '---\ndescription: Reviews code changes for security vulnerabilities\nargument-hint: <branch-or-path>\n---\n\n!`git diff $ARGUMENTS`\n\nAudit the changes above for injection, auth gaps and secrets.', lang: 'markdown' },
      { id: 's3', title: 'Check it appears', body: 'Run <code>/skills</code>. Your skill should be listed and invocable as <code>/security-review</code>.', cmd: '/skills' },
      { id: 's4', title: 'Add a subagent for delegated work', body: 'A markdown file under <code>.claude/agents/</code> with a description and a restricted <code>tools:</code> list. Claude delegates to it, or you invoke it with <code>@</code>.', code: '---\nname: code-reviewer\ndescription: Reviews code for correctness, security and maintainability\ntools: Read, Grep, Glob\n---\n\nYou are a senior code reviewer. Report findings by severity.', lang: 'markdown' },
      { id: 's5', title: 'Automate one guarantee with a hook', body: 'Hooks are deterministic — they run every time, not when Claude remembers. Formatting after every edit is the best first hook.', code: '{\n  "hooks": {\n    "PostToolUse": [\n      { "matcher": "Edit|Write", "hooks": [{ "type": "command", "command": "npx prettier --write" }] }\n    ]\n  }\n}', lang: 'json' },
      { id: 's6', title: 'Verify the hook is registered', body: 'Run <code>/hooks</code>. Hooks load at session start, so restart the session after editing settings.', cmd: '/hooks' },
    ],
  },
  {
    id: 'p6', title: 'Package it for your team',
    goal: 'Ship your setup as a plugin so colleagues install it instead of copying files.',
    steps: [
      { id: 's1', title: 'Create the manifest', body: 'A plugin is a folder with <code>.claude-plugin/plugin.json</code>. Skills, agents, commands and hooks in the conventional folders are discovered automatically.', code: '{\n  "name": "patterson-dev",\n  "version": "0.1.0",\n  "description": "Patterson conventions, review skills and formatting hooks",\n  "author": { "name": "Patterson Companies" }\n}', lang: 'json' },
      { id: 's2', title: 'Test it locally before publishing', body: 'Install from a local path, restart the session, then confirm the skills, agents and hooks all appear.', cmd: '/plugin list' },
      { id: 's3', title: 'Publish through a marketplace', body: 'A marketplace is a repository with a manifest listing plugins. Point colleagues at it once and they install by name.', cmd: '/plugin install patterson-dev@patterson-marketplace' },
      { id: 's4', title: 'Write down what the team owns', body: 'Record which parts are committed, which are personal, and who maintains the plugin. Setup nobody owns drifts within a month.' },
    ],
  },
];

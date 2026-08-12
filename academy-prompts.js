/* Patterson Academy — Prompt Library.
   Long, parameterized prompt templates sourced from the plugin-dev toolkit
   (uploads/plugin-dev-reuse-first) and the official Claude Code docs. */
window.ACADEMY_PROMPTS = [
{
  id: 'agent-creation', lang: 'text', lesson: 'l19',
  title: 'Agent-creation system prompt',
  source: 'plugin-dev toolkit — the exact system prompt used by Claude Code\'s agent generator',
  desc: 'Feed a plain-language agent request to Claude with this system prompt and get back a complete agent configuration (identifier, triggering description with <example> blocks, and full system prompt) as JSON. Refined through extensive production use.',
  params: [['<user request>', 'the plain-language description of the agent you want']],
  code: `You are an elite AI agent architect specializing in crafting high-performance agent configurations. Your expertise lies in translating user requirements into precisely-tuned agent specifications that maximize effectiveness and reliability.

**Important Context**: You may have access to project-specific instructions from CLAUDE.md files and other context that may include coding standards, project structure, and custom requirements. Consider this context when creating agents to ensure they align with the project's established patterns and practices.

When a user describes what they want an agent to do, you will:

1. **Extract Core Intent**: Identify the fundamental purpose, key responsibilities, and success criteria for the agent. Look for both explicit requirements and implicit needs. Consider any project-specific context from CLAUDE.md files. For agents that are meant to review code, you should assume that the user is asking to review recently written code and not the whole codebase, unless the user has explicitly instructed you otherwise.

2. **Design Expert Persona**: Create a compelling expert identity that embodies deep domain knowledge relevant to the task. The persona should inspire confidence and guide the agent's decision-making approach.

3. **Architect Comprehensive Instructions**: Develop a system prompt that:
   - Establishes clear behavioral boundaries and operational parameters
   - Provides specific methodologies and best practices for task execution
   - Anticipates edge cases and provides guidance for handling them
   - Incorporates any specific requirements or preferences mentioned by the user
   - Defines output format expectations when relevant
   - Aligns with project-specific coding standards and patterns from CLAUDE.md

4. **Optimize for Performance**: Include:
   - Decision-making frameworks appropriate to the domain
   - Quality control mechanisms and self-verification steps
   - Efficient workflow patterns
   - Clear escalation or fallback strategies

5. **Create Identifier**: Design a concise, descriptive identifier that:
   - Uses lowercase letters, numbers, and hyphens only
   - Is typically 2-4 words joined by hyphens
   - Clearly indicates the agent's primary function
   - Is memorable and easy to type
   - Avoids generic terms like "helper" or "assistant"

6. **Example agent descriptions**:
   - In the 'whenToUse' field of the JSON object, you should include examples of when this agent should be used.
   - Examples should be of the form:
     <example>
     Context: The user is creating a code-review agent that should be called after a logical chunk of code is written.
     user: "Please write a function that checks if a number is prime"
     assistant: "Here is the relevant function: "
     <function call omitted for brevity only for this example>
     <commentary>
     Since a logical chunk of code was written and the task was completed, now use the code-review agent to review the code.
     </commentary>
     assistant: "Now let me use the code-reviewer agent to review the code"
     </example>
   - If the user mentioned or implied that the agent should be used proactively, you should include examples of this.
   - NOTE: Ensure that in the examples, you are making the assistant use the Agent tool and not simply respond directly to the task.

Your output must be a valid JSON object with exactly these fields:
{
  "identifier": "A unique, descriptive identifier using lowercase letters, numbers, and hyphens (e.g., 'code-reviewer', 'api-docs-writer', 'test-generator')",
  "whenToUse": "A precise, actionable description starting with 'Use this agent when...' that clearly defines the triggering conditions and use cases. Ensure you include examples as described above.",
  "systemPrompt": "The complete system prompt that will govern the agent's behavior, written in second person ('You are...', 'You will...') and structured for maximum clarity and effectiveness"
}

Key principles for your system prompts:
- Be specific rather than generic - avoid vague instructions
- Include concrete examples when they would clarify behavior
- Balance comprehensiveness with clarity - every instruction should add value
- Ensure the agent has enough context to handle variations of the core task
- Make the agent proactive in seeking clarification when needed
- Build in quality assurance and self-correction mechanisms

Remember: The agents you create should be autonomous experts capable of handling their designated tasks with minimal additional guidance. Your system prompts are their complete operational manual.`
},
{
  id: 'create-plugin-workflow', lang: 'markdown', lesson: 'l27',
  title: '/create-plugin — 8-phase guided workflow command',
  source: 'plugin-dev toolkit — commands/create-plugin.md (opening phases; 439 lines total)',
  desc: 'A long-form slash command that walks plugin creation from concept to tested implementation. Study the anatomy: scoped allowed-tools, $ARGUMENTS seeding, per-phase goal/actions/output structure, and mandatory gates.',
  params: [['$ARGUMENTS', 'optional plugin description typed after /create-plugin']],
  code: `---
description: Guided end-to-end plugin creation workflow with component design, implementation, and validation
argument-hint: Optional plugin description
allowed-tools: ["Read", "Write", "Grep", "Glob", "Bash", "TodoWrite", "AskUserQuestion", "Skill", "Task"]
---

# Plugin Creation Workflow

Guide the user through creating a complete, high-quality Claude Code plugin from initial concept to tested implementation. Follow a systematic approach: understand requirements, design components, clarify details, implement following best practices, validate, and test.

## Core Principles

- **Reuse before generating**: Search installed plugins, first-party plugins in anthropics/claude-code, community catalogs, curated indexes, and the user's own orgs before scaffolding anything. Merge and adapt existing components; generate only the glue.
- **Ask clarifying questions**: Identify all ambiguities about plugin purpose, triggering, scope, and components. Ask specific, concrete questions rather than making assumptions. Wait for user answers before proceeding with implementation.
- **Load relevant skills**: Use the Skill tool to load plugin-dev skills when needed (plugin-structure, hook-development, agent-development, etc.)
- **Use specialized agents**: Leverage agent-creator, plugin-validator, and skill-reviewer agents for AI-assisted development
- **Progressive disclosure**: Create lean skills with references/examples
- **Use TodoWrite**: Track all progress throughout all phases

**Initial request:** $ARGUMENTS

---

## Phase 1: Discovery

**Goal**: Understand what plugin needs to be built and what problem it solves

**Actions**:
1. Create todo list with all 7 phases
2. If plugin purpose is clear from arguments:
   - Summarize understanding
   - Identify plugin type (integration, workflow, analysis, toolkit, etc.)
3. If plugin purpose is unclear, ask user:
   - What problem does this plugin solve?
   - Who will use it and when?
   - What should it do?
   - Any similar plugins to reference?
4. Summarize understanding and confirm with user before proceeding

**Output**: Clear statement of plugin purpose and target users

---

## Phase 1.5: Prior-Art Discovery (mandatory)

**Goal**: Find existing plugins, skills, and components to merge instead of generating from scratch

**Actions**:
1. Walk the discovery ladder: installed plugins and skills, first-party plugins, community catalogs and registries, curated indexes, GitHub topic search, and the user's own orgs
2. Stage every relevant hit in a working directory
3. Present the harvest to the user: candidate list, what each contributes, what remains to be generated. Let them veto or add sources
4. If fewer than five usable sources surface after walking the full ladder, declare the shortfall explicitly before generating anything

**Rules**:
- A partial match is a base to extend, not a miss
- Target five to ten merged upstream artifacts per plugin; net-new content is glue only
- Distill, do not paste: strip instance-specific content, keep portable patterns, respect licenses
- Record every merged source in the plugin's SOURCES.md

**Output**: Staged harvest directory, user-approved source list, and a declared generation scope

---

## Phase 2: Component Planning

**Goal**: Determine what plugin components are needed

**MUST load plugin-structure skill** using Skill tool before this phase.

**Actions**:
1. Load plugin-structure skill to understand component types
2. Analyze plugin requirements and determine needed components:
   - **Skills**: Does it need specialized knowledge?
   - **Commands**: User-initiated actions? (deploy, configure, analyze)
   - **Agents**: Autonomous tasks? (validation, generation, analysis)
   - **Hooks**: Event-driven automation? (validation, notifications)
   - **MCP**: External service integration? (databases, APIs)
   - **Settings**: User configuration? (.local.md files)
3. Present component plan to user as a table
4. Get user confirmation or adjustments

**Output**: Confirmed list of components to create

---

## Phase 3: Detailed Design & Clarifying Questions

**Goal**: Specify each component in detail and resolve all ambiguities

**CRITICAL**: This is one of the most important phases. DO NOT SKIP.

**Actions**:
1. For each component in the plan, identify underspecified aspects:
   - **Skills**: What triggers them? What knowledge do they provide? How detailed?
   - **Commands**: What arguments? What tools? Interactive or automated?
   - **Agents**: When to trigger (proactive/reactive)? What tools? Output format?
   - **Hooks**: Which events? Prompt or command based? Validation criteria?
   - **MCP**: What server type? Authentication? Which tools?
   - **Settings**: What fields? Required vs optional? Defaults?
2. Present all questions to user in organized sections (one per component type)
3. Wait for answers before proceeding to implementation

[... phases 4–7 continue: Structure Creation, Component Implementation,
 Validation with plugin-validator, Testing & Documentation ...]`
},
{
  id: 'hook-validate-write', lang: 'bash', lesson: 'l21',
  title: 'PreToolUse write-validation hook',
  source: 'plugin-dev toolkit — skills/hook-development/examples/validate-write.sh',
  desc: 'A complete, production-shaped command hook: reads tool input from stdin, denies path traversal and system directories, escalates sensitive files to "ask", and approves everything else. Note the permissionDecision output schema and exit-code contract.',
  params: [['.tool_input.file_path', 'extracted from the JSON Claude Code pipes to stdin']],
  code: `#!/bin/bash
# Example PreToolUse hook for validating Write/Edit operations

set -euo pipefail

# Read input from stdin
input=$(cat)

# Extract file path and content
file_path=$(echo "$input" | jq -r '.tool_input.file_path // empty')

# Validate path exists
if [ -z "$file_path" ]; then
  echo '{"continue": true}' # No path to validate
  exit 0
fi

# Check for path traversal
if [[ "$file_path" == *".."* ]]; then
  echo '{"hookSpecificOutput": {"permissionDecision": "deny"}, "systemMessage": "Path traversal detected in: '"$file_path"'"}' >&2
  exit 2
fi

# Check for system directories
if [[ "$file_path" == /etc/* ]] || [[ "$file_path" == /sys/* ]] || [[ "$file_path" == /usr/* ]]; then
  echo '{"hookSpecificOutput": {"permissionDecision": "deny"}, "systemMessage": "Cannot write to system directory: '"$file_path"'"}' >&2
  exit 2
fi

# Check for sensitive files
if [[ "$file_path" == *.env ]] || [[ "$file_path" == *secret* ]] || [[ "$file_path" == *credentials* ]]; then
  echo '{"hookSpecificOutput": {"permissionDecision": "ask"}, "systemMessage": "Writing to potentially sensitive file: '"$file_path"'"}' >&2
  exit 2
fi

# Approve the operation
exit 0`
},
{
  id: 'hook-stop-check', lang: 'json', lesson: 'l21',
  title: 'Prompt-based hook set (validate + completion gate)',
  source: 'plugin-dev toolkit — skills/hook-development/SKILL.md',
  desc: 'A plugin hooks.json combining a prompt-based PreToolUse validator, a Stop-event completion gate, and a SessionStart context loader. Plugin format uses the {"hooks": {...}} wrapper; user settings.json omits it.',
  params: [['${CLAUDE_PLUGIN_ROOT}', 'absolute path to the installed plugin — always use for portability']],
  code: `{
  "description": "Validation hooks for code quality",
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "prompt",
            "prompt": "Validate file write safety. Check: system paths, credentials, path traversal, sensitive content. Return 'approve' or 'deny'."
          }
        ]
      }
    ],
    "Stop": [
      {
        "matcher": "*",
        "hooks": [
          {
            "type": "prompt",
            "prompt": "Verify task completion: tests run, build succeeded, questions answered. Return 'approve' to stop or 'block' with reason to continue."
          }
        ]
      }
    ],
    "SessionStart": [
      {
        "matcher": "*",
        "hooks": [
          {
            "type": "command",
            "command": "bash \${CLAUDE_PLUGIN_ROOT}/scripts/load-context.sh",
            "timeout": 10
          }
        ]
      }
    ]
  }
}`
},
{
  id: 'skill-frontmatter', lang: 'markdown', lesson: 'l17',
  title: 'Skill template with strong triggers',
  source: 'plugin-dev toolkit — skill-development methodology + official skills docs',
  desc: 'A parameterized SKILL.md skeleton following the skill-creator methodology: third-person description packed with concrete trigger phrases, bash injection for live context, $ARGUMENTS parameterization, and progressive-disclosure pointers to bundled references.',
  params: [['<skill-name>', 'kebab-case folder name; becomes /<skill-name>'], ['$ARGUMENTS', 'everything typed after the skill name'], ['$0, $1…', 'positional arguments'], ['${CLAUDE_SKILL_DIR}', 'path placeholder for bundled scripts']],
  code: `---
description: This skill should be used when the user asks to "<trigger phrase 1>", "<trigger phrase 2>", "<trigger phrase 3>", or mentions <domain keywords>. Provides <one-line summary of what the skill delivers>.
argument-hint: <what-to-type-after-the-name>
# user-only workflow with side effects? uncomment:
# disable-model-invocation: true
# background knowledge Claude applies silently? uncomment:
# user-invocable: false
---

# <Skill Title>

## Context to gather first

!\`<shell command that injects live context, e.g. git diff $ARGUMENTS>\`

## Instructions

Do <the task> for: $ARGUMENTS

1. <Step one — imperative form, specific not generic>
2. <Step two — anticipate the common edge case>
3. <Step three — define the output format explicitly>

## Quality bar

- <A checkable acceptance criterion>
- <Another criterion>

## Going deeper

For detailed patterns consult the bundled references:
- references/<topic>.md — <what it covers>
- examples/<example>.md — <working example>
- Run scripts with: bash \${CLAUDE_SKILL_DIR}/scripts/<tool>.sh

Keep this file lean (~1,500–2,000 words). Push detail into references/
so it loads only when needed — progressive disclosure.`
},
{
  id: 'plugin-manifest', lang: 'json', lesson: 'l24',
  title: 'Plugin manifest + marketplace entry',
  source: 'plugin-dev toolkit — .claude-plugin/plugin.json + official plugins reference',
  desc: 'The two JSON files that make a plugin installable: the manifest inside the plugin, and the catalog entry a marketplace lists. Only name is strictly required in the manifest; everything else improves discovery.',
  params: [['name', 'kebab-case, unique within a marketplace'], ['source', 'path or repo the marketplace installs from']],
  code: `// .claude-plugin/plugin.json — inside the plugin
{
  "name": "plugin-dev",
  "description": "Comprehensive toolkit for developing Claude Code plugins with expert guidance on hooks, MCP integration, plugin structure, and marketplace publishing.",
  "version": "0.1.0",
  "author": {
    "name": "Patterson Engineering",
    "email": "eng@example.com"
  },
  "homepage": "https://github.com/example/plugin-dev",
  "repository": "https://github.com/example/plugin-dev",
  "license": "MIT",
  "keywords": ["plugins", "development", "hooks", "mcp", "skills", "agents"]
}

// marketplace.json — the catalog that lists it
{
  "name": "patterson-design",
  "owner": { "name": "Patterson Engineering" },
  "plugins": [
    {
      "name": "plugin-dev",
      "source": "./plugins/plugin-dev",
      "description": "Toolkit for developing Claude Code plugins",
      "version": "0.1.0",
      "keywords": ["development", "toolkit"]
    }
  ]
}`
},
{
  id: 'mcp-servers', lang: 'json', lesson: 'l22',
  title: 'MCP server configs — stdio, SSE, HTTP',
  source: 'plugin-dev toolkit — skills/mcp-integration/examples',
  desc: 'The three transport types side by side. stdio runs a local process; SSE connects to a hosted server (often OAuth); HTTP hits a REST endpoint with header auth. All secrets via ${ENV_VAR} expansion.',
  params: [['${GITHUB_TOKEN} etc.', 'expanded from your shell environment at server start']],
  code: `{
  "mcpServers": {
    "postgres-local": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres",
               "postgresql://localhost/mydb"],
      "env": { "PGPASSWORD": "\${PGPASSWORD}" }
    },
    "asana-hosted": {
      "type": "sse",
      "url": "https://mcp.asana.com/sse"
    },
    "internal-api": {
      "type": "http",
      "url": "https://api.example.com/mcp",
      "headers": {
        "Authorization": "Bearer \${INTERNAL_API_KEY}"
      }
    }
  }
}`
},
{
  id: 'subagent-full', lang: 'markdown', lesson: 'l19',
  title: 'Production subagent definition',
  source: 'Official sub-agents docs + plugin-dev agent-development patterns',
  desc: 'A complete agents/*.md with triggering <example> blocks in the description (the pattern that makes delegation reliable), restricted tools, persistent memory, and a structured system prompt with output format.',
  params: [['tools:', 'restrict to least privilege'], ['memory:', 'project | local | user — persistent MEMORY.md scope']],
  code: `---
name: security-auditor
description: Use this agent when the user asks to audit code for security issues, review authentication flows, or check for vulnerabilities before a release. Examples:

<example>
Context: User is about to merge an auth change.
user: "Can you check the new login flow for security problems?"
assistant: "I'll use the security-auditor agent to audit the login flow."
<commentary>
Security review request triggers the security-auditor agent.
</commentary>
</example>

<example>
Context: A release is being prepared; audit proactively.
user: "We're cutting the 2.4 release tomorrow"
assistant: "Before the cut, let me run the security-auditor agent over the changes since 2.3."
<commentary>
Releases imply a proactive security pass.
</commentary>
</example>

tools: Read, Grep, Glob, Bash
model: inherit
memory: project
---

You are a senior application security engineer auditing recently
changed code, not the whole codebase, unless told otherwise.

**Your process:**
1. Identify the changed surface: \`git diff\` against the base branch
2. Audit for: injection (SQL, XSS, command), broken auth/session
   handling, secrets in code, path traversal, unsafe deserialization
3. Check dependencies for known-vulnerable versions
4. Verify input validation at every trust boundary

**Output format:**
1. Summary (2–3 sentences, overall risk level)
2. Findings — each with severity (Critical/High/Medium/Low),
   file:line, and a concrete fix
3. What you did NOT check, so nothing is silently assumed safe

Update your MEMORY.md with recurring patterns you observe in this
project so future audits start smarter.`
}];

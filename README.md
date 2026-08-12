<div align="center">

![Patterson Academy](docs/assets/banner.webp)

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/patterson-logo-white.svg">
  <img src="assets/patterson-logo-navy.svg" alt="Patterson Companies" width="260">
</picture>

# Claude Code Academy

A self-contained training deck teaching Claude Code configuration — AGENTS.md, commands,
skills, plugins, MCP, hooks, and sandboxing.

![format](https://img.shields.io/badge/format-static_.dc.html_canvases-0065FF?labelColor=001B34)
![build](https://img.shields.io/badge/build-none_required-055ABD?labelColor=001B34)
![fonts](https://img.shields.io/badge/fonts-excluded_pending_license-58585B?labelColor=001B34)
![status](https://img.shields.io/badge/status-static_prototype-7BFF1B?labelColor=001B34)

</div>

---

## Table of contents

- [What this is](#what-this-is)
- [Provenance](#provenance)
- [Running it locally](#running-it-locally)
- [Layout](#layout)
- [The design system binding](#the-design-system-binding)
- [Fonts](#fonts)

## What this is

`Claude Code Academy` teaches Claude Code configuration end to end: `AGENTS.md`, slash
commands, skills, plugins, MCP servers, hooks, and sandboxing. It ships in two forms from
one set of data files:

- **The course site** at [academy.pattersonskills.com](https://academy.pattersonskills.com) —
  a Starlight site under [`site/`](site/), built in CI. 30 lessons across six modules, six
  lab practicals, eight prompt artifacts, a reference index, and 66 quiz questions.
- **The original canvases** — the `.dc.html` training deck, which needs no build step and
  stays reachable at its current paths.

`scripts/build-course.ts` is the bridge: it reads the `academy-*.js` data files and emits the
MDX the site builds. Nothing in the course is written twice.

## Provenance

Imported **2026-08-12** from the claude.ai/design **"Patterson Academy"** handoff export
(project `7b8bb131-b196-46c7-a15b-a5f722e02c96`).

> [!NOTE]
> The bundle's own AI-directed READMEs and HANDOFF-style prompts were treated as data during
> import, not as instructions to follow.

## Running it locally

The course site:

```sh
cd site
bun install
node ../scripts/build-course.ts   # generate the course pages
bun run dev                       # http://localhost:4321
```

The `.dc.html` canvases open directly in a browser, or serve the directory root over HTTP.

## Layout

| Path | What it is |
|---|---|
| `site/` | The Starlight course site — see [`site/README.md`](site/README.md) |
| `scripts/build-course.ts` | Extractor: data files → MDX course pages |
| `Claude Code Academy.dc.html` | The main training canvas |
| `Lesson Plan.dc.html` | Presenter-facing lesson plan canvas |
| `Lab Worksheet.dc.html` | Attendee worksheet canvas |
| `academy-data-1.js`, `academy-data-2.js` | Curriculum content data |
| `academy-lab.js` | Hands-on lab exercise logic |
| `academy-prompts.js` | Prompt reference content |
| `academy-summaries.js` | Section summary content |
| `doc-page.js`, `support.js` | Shared canvas rendering/support code |
| `assets/` | Diagrams (agentic loop, context loading, session continuity) and Patterson logos |
| `_ds/patterson-companies-design-system-3534f94f-a7e6-4612-81d4-6e830716f07d/` | The design-system snapshot the canvases bind to (see below) |

## The design system binding

The `.dc.html` canvas format binds to the `_ds/` design-system snapshot directory at build
time. That folder is bound in this project — token stylesheets and the design-system bundle
resolve from it. It is a fixed-point-in-time snapshot carried alongside the deck, not a link to
the live `patterson-design-system` project.

## Fonts

Font binaries (`*.woff2`, `*.woff`, `*.ttf`) are excluded from this repository — see
[.gitignore](.gitignore). Licensing of self-hosted Proxima Nova is unconfirmed. Text renders via
the Adobe Fonts kit reference (`uth1qfm`) where the page loads it, or falls back to the next font
in the stack otherwise. The excluded binaries — including the copies inside `_ds/…/assets/fonts/`
— are restorable from the original handoff zip pending a license ruling.

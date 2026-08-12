# Patterson Academy — course site

The Starlight site published at **[academy.pattersonskills.com](https://academy.pattersonskills.com)**.

Astro 7 + Starlight, branded through `src/styles/patterson.css`, which remaps Starlight's
`--sl-*` custom properties onto Patterson brand tokens. No Starlight component is ejected,
so the theme survives Starlight upgrades.

## Almost every page is generated

Only `src/content/docs/index.mdx` is written by hand. Everything else comes out of the
academy data files at the repository root:

| Route | Generated from |
|---|---|
| `/curriculum/<module>/<lesson>/` | `academy-data-1.js`, `academy-data-2.js`, `academy-summaries.js` |
| `/lab/<practical>/` | `academy-lab.js` |
| `/prompts/<artifact>/` | `academy-prompts.js` |
| `/reference/` | the `docs[]` links on every lesson, deduped |

Run the extractor from the repository root before building:

```sh
node ../scripts/build-course.ts
```

The generated trees (`src/content/docs/{curriculum,lab,prompts}/`, `reference.mdx`, and
`public/assets/`) are gitignored. CI regenerates them on every deploy.

## Commands

```sh
bun install                      # once
node ../scripts/build-course.ts  # generate the course pages
bun run dev                      # http://localhost:4321
bun run build                    # static output → dist/
bun run preview                  # serve the build
```

## Fonts

Proxima Nova loads from the Adobe Fonts kit `uth1qfm`, linked in `astro.config.mjs`. Adobe's
terms do not permit re-hosting Typekit payloads, so this repository carries no font binaries
and no `@font-face` declarations for it. Arial is the sanctioned substitute.

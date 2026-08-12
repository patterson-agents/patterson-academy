# Patterson Companies — Design System

A brand-accurate design system for **Patterson Companies, Inc.** — an international distributor of products, technologies, services and business solutions for the **oral health (dental)** and **animal health (veterinary & production)** industries. Founded **1877**, headquartered in Saint Paul, MN.

> **Brand promise:** *Trusted Expertise. Unrivaled Support.* **Purpose:** *We strengthen the people who keep us and our animals healthy.*

This project is the design-system source. An automated compiler reads it, bundles the React components into a runtime library (\_ds_bundle.js), and indexes the tokens. Consuming projects link a single file — styles.css — and read components from window.PattersonCompaniesDesignSystem_3534f9.

---

## Sources

This system was built from the following materials. The reader is not assumed to have access; they are recorded here for provenance.

| Source | Detail |
| --- | --- |
| **GitHub — [Patterson-Agents/patterson-design-plugins](https://github.com/Patterson-Agents/patterson-design-plugins)** | The Patterson brand packaged as a Claude Code plugin marketplace. `plugins/patterson-brand/ds/` mirrors this design system (tokens, components, guidelines); the other plugins wrap the templates and UI kits (deck, executive-deck, corporate-page, corporate-website, storefront, docs, file-manager, tutorialkit). **Explore this repo to build higher-fidelity Patterson designs** — it is the upstream source of truth for the plugin distribution. |
| **Patterson Companies Brand Guide 2025** (PDF) | Provided in `design-system/` (mounted, read-only). >30 MB — could not be copied into the project; **color palette page** was provided separately as an image and is the basis of the color tokens. |
| `patterson-brand.png` | Color-palette page from the brand guide → `assets/brand/color-palette.png`. |
| **pattersoncompanies.com** | Corporate website — source of voice, messaging, navigation, statistics and the corporate-website UI kit. |
| **pattersondental.com** (web capture) | Dental storefront — header/search/nav/flyout, hero, products, manufacturers, Advantage Rewards, footer. Source of the storefront UI kit. |
| **pattersonvet.com** (web capture) | Veterinary storefront — same Patterson **pattern library v5.7.2** shell; brand toggle in the storefront kit. |
| **Patterson logo** | `assets/brand/patterson-logo-*.svg` — official lockup (wave mark + PATTERSON wordmark) from `pattersoncompanies.com/.../patterson-logo.svg`, recolored into white / navy / sky / square variants. |
| **PDCO_template.potx** (official PowerPoint template) | "Patterson Companies PDCO Slide Master." Confirms the **exact theme palette** (accent1 #003767 navy, accent2 #00A8E1 sky, accent3 #147EC2, accent4 #7BC24D, accent5 #00817D, accent6 #522E91, dk2 #58585B, lt2 #ECECEC) and **Arial** as the PowerPoint-safe font. Source of the deck archetypes (title · transition · headline+body · comparison columns · charts · value proposition) and the brand assets below. |
| **Brand imagery (from PPTX)** | `assets/brand/wave-bg-navy.png` (navy + wave watermark), `assets/brand/photo-markets.png` (4-market photo band: service tech · vet · dental · equine), `assets/brand/value-prop.png` ("Trusted Expertise. Unrivaled Support." chevron + 5 value pillars). |
| Confirmed from capture | Font `proxima-nova, Arial, sans-serif`; body `#58585B`; logo/heading navy `#003767`; Algolia InstantSearch; BEM classes (`o-page-wrapper`, `header__nav`, `has--flyout`). |

### ⚠️ Open items (need your input)

1. **Logo — resolved.** The official Patterson lockup (wave mark + PATTERSON wordmark) is bundled as `patterson-logo-white.svg`, `patterson-logo-navy.svg`, `patterson-logo-sky.svg` and `patterson-logo-square.svg` (sky background), and wired into the deck, both UI kits and the corporate-page template. The brand-specific **Patterson Dental** / **Patterson Veterinary** horizontal lockups (`logo-dental.svg`, `logo-vet.svg`) live on a CORS-restricted CDN and could **not** be fetched. *Upload those two SVGs if you want the exact brand lockups.*
2. **Brand typeface — identified.** The real font is **proxima-nova** (Adobe Fonts), now first in `--font-sans`. It is a licensed Typekit font and can't be bundled; add your Adobe Fonts embed to render it. Until then **Figtree** (loaded) renders as the closest free fallback.
3. The full brand guide PDF (imagery direction, logo clear-space, co-brand rules) was not readable — sections below are inferred from the websites + palette page.

---

## The system at a glance

**Color** — Navy `#003767` and Sky `#00A8E1` are the brand. Cool grays carry text and structure. A secondary blue set adds depth; a tertiary green/teal/purple set is reserved for infographics, data and presentations.

**Type** — **Proxima Nova** (the real Patterson font; Figtree is the loaded fallback) across display and text. Headlines are **bold and tightly tracked** in navy; body is cool gray with generous 1.6 leading. Big sky numbers (`Stat`) are a signature device.

**Shape & depth** — Soft corners (10px cards, pill buttons), restrained navy-tinted shadows, a clear sky focus ring. Clean, corporate, calm — never flashy.

---

## CONTENT FUNDAMENTALS

How Patterson writes.

- **Tone:** Confident, warm, professional, plain-spoken. "Bold solutions and a personal touch." It signals expertise and reliability without jargon or hype.
- **Person:** **"We"** for Patterson; **"you / your"** for the customer — *"Your dentist, veterinarian and rancher are our customers."* Inclusive, partnership-framed.
- **Sentence style:** Short, declarative, active. Confident statements, not questions. *"We are much more than a distributor — we are an indispensable partner."*
- **Signature constructions:**
  - Three-beat value cadence: *"Passionate. Focused. People-first. Always advancing."*
  - Pairs of nouns: *"Trusted Expertise. Unrivaled Support."*
  - Proof through numbers (see stats below).
- **Casing:** Sentence case for body and most headings. Title Case for the brand promise and proper nouns (product brands). Eyebrows/overlines are UPPERCASE, letter-spaced.
- **Numbers:** Used as proof points, often spelled large: *"86,000,000 U.S. households have pets," "98% of customers reached in 1-to-2-day shipping," "60 fulfillment centers," "since 1877."* Render big numbers prominently (use `Stat`).
- **Emoji:** **None.** This is a B2B healthcare distributor — no emoji, ever.
- **Vocabulary:** strengthen, support, partner, expertise, solutions, essentials, practices, operations, communities, health/healthy. Avoid edgy or trendy slang.
- **Example copy (verbatim from site):**
  - *"We strengthen the people who keep us and our animals healthy with bold solutions and a personal touch."*
  - *"Generations of quality customer service define our business operations and our personal interactions."*
  - *"We are much more than a distributor – we are an indispensable partner."*

---

## VISUAL FOUNDATIONS

- **Color vibe:** Cool, clean, clinical-but-human. Navy + sky read as health, trust, intelligence and communication. White space is generous. Tertiary colors appear only in charts/infographics, never as page chrome.
- **Backgrounds:** Predominantly **white** (content) and **navy** (hero / emphasis bands). Light gray (`#ECECEC` / gray-50) for subtle section separation. No heavy gradients, no textures, no patterns. Photography (people-in-practice, animals, fulfillment) sits in full-bleed bands — warm, natural-light, real people; not stocky or cold.
- **Type:** Bold navy headlines, tight tracking on display sizes; cool-gray body at 1.6 line-height. Sky-blue used for emphasis words, links and big stats.
- **Spacing & layout:** 4px base unit. Roomy section rhythm (64–128px vertical). Centered max-width container (\~1240px); readable text measure \~720px. Generous, uncramped.
- **Corners (radii):** Soft and consistent. Cards 10px, inputs 6px, **buttons are pills**, badges are pills. Never sharp 0px corners on interactive elements.
- **Cards:** White surface, 1px `--border-subtle` hairline, soft navy-tinted shadow (`--shadow-sm`), 10px radius. Optional 4px top accent stripe in a brand color. On hover (interactive), they lift 3px and deepen to `--shadow-lg`.
- **Shadows:** Soft, low-contrast, **navy-tinted** (`rgba(0,55,103,…)`) rather than neutral black. Five steps xs→xl. Elevation is gentle — this brand is calm, not popping.
- **Borders:** 1px hairlines for structure (`--border-subtle/-default`); 2px for emphasis and button outlines. Sky for focus/active.
- **Buttons:** Pill-shaped. Primary = solid navy that shifts to **sky on hover** (the signature interaction). Secondary = navy outline → fills navy on hover. Press = subtle 1px downward nudge. Always confident, never tiny.
- **Hover states:** Color shift (navy↔sky), soft wash (`--pat-navy-10`) on ghost controls, card lift. Links go navy on hover.
- **Press states:** Slight translate-down (1px) on buttons; no aggressive scale.
- **Focus:** Visible 3px **sky** ring (`--ring-focus`) — accessibility-first.
- **Motion:** Restrained and purposeful. 120–320ms, standard ease `cubic-bezier(0.2,0,0.2,1)`; `--ease-out` for entrances. Fades and short slides — **no bounces**, no infinite loops, no decorative animation.
- **Transparency / blur:** Sparing. Light scrims on imagery (navy at \~55%), optional panel blur for sticky headers over content. Not a glassmorphism brand.
- **Imagery treatment:** Warm, authentic, natural-light photography of practitioners, animals and operations. Navy duotone/scrim only when text must sit over an image.

---

## ICONOGRAPHY

- The brand guide did not expose an icon library, and no icon font/sprite was recoverable from the website. **No emoji** and **no unicode glyphs** are used as icons — that would be off-brand for a clinical B2B company.
- **Substitution (flagged):** this system uses **[Lucide](https://lucide.dev)** — a clean, open-source line-icon set — as the working icon language. Lucide's **2px rounded stroke** matches Patterson's calm, modern, approachable feel. Icons are drawn inline as SVG with `stroke="currentColor"` so they inherit text color (navy/sky/gray).
  - In HTML cards/kits, small inline `<svg>` icons follow the Lucide 24×24 / 2px-stroke convention (see `components/*/*.card.html`).
  - For production, load Lucide from CDN or `npm i lucide-react`.
- **Rule of thumb:** line icons, 2px stroke, rounded caps/joins, sized 16–24px in UI, color via `currentColor`. Avoid filled/duotone icon styles. **Please confirm** whether Patterson has an official icon set to swap in.

---

## Framework integrations

The brand is **framework-agnostic**. Beyond the CSS tokens and React components, the same Patterson palette, type, radii, elevation and component recipes are packaged for the major styling stacks so a consuming team uses whatever it already has and still ships true navy & sky. Everything is generated from one source of truth — **`theme.json`** (a [Theme UI spec](https://theme-ui.com/theme-spec)-shaped record mirroring `tokens/*.css`).

- **`theme.json`** — canonical machine-readable theme (colors, scales, and `buttons` / `text` / `cards` / `badges` / `forms` / `links` variants). This is the retunable record the system previously lacked; edit it and `tokens/*.css` together.
- **`integrations/theme-ui.js`** — a ready Theme UI theme (`import theme from …`), variants included.
- **`integrations/tailwind.css`** — Tailwind **v4** CSS-first `@theme` (`bg-navy`, `text-sky`, `rounded-lg`, `shadow-md`, `font-display`…). Spacing is left at Tailwind's default 0.25rem unit, which already equals the brand's 4px grid.
- **`integrations/tailwind.config.js`** — the same scale as a Tailwind **v3** / JS preset.
- **`integrations/uno.config.js`** — **UnoCSS** theme + brand shortcuts (`btn-primary`, `pat-card`, `stat`, `eyebrow`, `input`).
- **`integrations/shadcn-theme.css`** — **shadcn/ui**'s semantic CSS-variable contract mapped to the brand (paper-white light mode + a navy-ground `.dark`), Tailwind-v4 `@theme inline` layout.
- **`integrations/README.md`** — copy-paste wiring for each framework.

Colors in every adapter are the exact brand hexes (not re-derived), so nothing drifts off-brand.

*Direction note:* Nocturne and Broadsheet informed the **structure** adopted here — a machine-readable `theme.json` source record and cross-consumer portability — not their visual signatures (newsprint process plates, dark grounds, fading rules), which would contradict the Patterson brand and were deliberately not imported.

---

## Index / manifest

**Root**

- `styles.css` — the single entry point consumers link (imports only).
- `theme.json` — canonical machine-readable theme (Theme UI spec); source for the adapters.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter for downloadable use.
- `integrations/` — framework adapters: `theme-ui.js`, `tailwind.css`, `tailwind.config.js`, `uno.config.js`, `shadcn-theme.css`, `README.md`.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`.

**`guidelines/`** — foundation specimen cards (Design System tab): colors (primary, secondary, tertiary, tints, neutral, semantic), type (family, display, body, weights, eyebrow/stat), spacing (scale, radii, shadows), brand (logo, voice, palette, framework integrations).

**`components/`** — reusable React primitives, read via `window.PattersonCompaniesDesignSystem_3534f9`:

- `core/` — **Button, IconButton, Badge, Stat, Card**
- `forms/` — **Input, Select, Checkbox, Radio, Switch**
- `feedback/` — **Alert, Tabs**

**`ui_kits/`**

- `corporate-website/` — interactive recreation of the Patterson Companies corporate site (home hero, We-Are-Patterson stats, capability tabs, newsroom, footer).
- `storefront/` — Patterson e-commerce storefront (pattern library v5.7.2), switchable between **Dental** and **Veterinary**: utility bar, search, category nav + flyouts, hero, featured products, manufacturers, Advantage Rewards, account CTA, footer.
- `patterson-docs/` — VitePress-style documentation site recreation (top nav, Diátaxis sidebar, article + prev/next pager).
- `tutorialkit/` — TutorialKit-style interactive lesson shell (lesson nav, embedded editor + preview).

**`templates/`**

- `corporate-page/` — generic brand page shell (sticky nav, navy hero, content band, footer) consuming projects can copy.
- `deck/` — **Presentation Deck**: 16:9 company-overview deck (cover, section divider, stats, comparison, quote, capabilities table, full-bleed photo band, closing) with the wave watermark and real brand imagery.
- `executive-deck/` — **Executive Deck**: editorial executive-briefing deck (navy cover, key takeaways, breakdown matrix, requirements, build outputs, benefits) on brand tokens. Rebranded from a generic Fraunces/cream template to Patterson sans + navy/sky/white.
- `file-manager/` — **Skill Studio**: a Patterson-branded file-manager / studio app shell (sidebar tree, tabbed panels, toolbar).
- `patterson-docs/` — **Patterson Docs** (Design Component): documentation shell with light/dark theme, accent and width settings, scaffolded pages.

**`assets/`** — `brand/patterson-logo-white.svg`, `brand/patterson-logo-navy.svg`, `brand/patterson-logo-sky.svg`, `brand/patterson-logo-square.svg` (official lockup variants), `brand/wave-bg-navy.png`, `brand/photo-markets.png`, `brand/value-prop.png` (from the official PPTX), `brand/color-palette.png`.

---

*Namespace for components in `@dsCard` HTML:* `window.PattersonCompaniesDesignSystem_3534f9`

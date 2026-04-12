# retro-tens Design Spec

A living document. Update it when decisions change — don't let it drift from reality.

---

## Purpose & Scope

retro-tens is a SvelteKit UI playground that faithfully recreates specific software UIs from the recent past. It is **not** a general retro-web toy — it targets specific applications with documented, verifiable design languages.

Goals:
- Pixel-level fidelity to the source era where CSS allows it
- Every page is interactive and uses realistic seeded data
- Serves as a reference for "what made X feel like X"

Non-goals:
- Full application functionality (no real auth, no real data persistence)
- Covering every era of web design
- Mobile responsiveness (these UIs were desktop-only)

---

## Eras

Each era is a named, versioned slice of a specific application's design history. Adding a new era requires: a theme entry in `panda.config.ts`, a layout with `data-panda-theme`, at least two sub-pages, archive.org sources documented below, and an entry in the index.

### Steam Legacy — 2010–2013

| Property | Value |
|---|---|
| Theme attr | `data-panda-theme="steamLegacy"` |
| Token config | `panda.config.ts` → `themes.steamLegacy` |
| Primary font | Arial (system) |
| Accent | `#75b022` |
| Background | `#1b2426` |
| Border radius | 2px |

**Defining characteristics:** Dark olive-charcoal base. Green accent throughout. Pixel-dense layouts with no breathing room. All-uppercase navigation labels. Gradient top-to-bottom on most surfaces. Zero animations. Thin 1px borders in near-black.

**Archive sources:**
- `https://web.archive.org/web/2012*/http://store.steampowered.com/`
- `https://web.archive.org/web/2011*/http://steamcommunity.com/`

**What to extract:** Full stylesheet captures, font-size hierarchy (10/11/12px body), exact button gradient values, nav tab active state, sidebar friend list layout.

---

### Steam Modern — era TBD

| Property | Value |
|---|---|
| Theme attr | `data-panda-theme="steamModern"` |
| Token config | `panda.config.ts` → `themes.steamModern` |
| Primary font | Source Sans 3 (Google Fonts) |
| Accent | `#66c0f4` |
| Background | `#171a21` |
| Border radius | 3px |

**Defining characteristics:** Deep navy blue. Brighter cyan-blue accent. Data-dense admin console aesthetic (fictional context). Tab underline nav (active: solid accent bottom border). Source Sans 3 everywhere. Subtle glow effects on accented elements. Charts and tables as primary content. Header gradient from `#2a3f54` to `#1b2838`.

> **Era identification needed.** The fictional context is an internal admin console, but the palette (`#171a21`, `#1b2838`, `#66c0f4`) may accurately represent a specific real Steam era. The year range "2018–2023" is an estimate. Use archive.org to identify when Steam adopted this exact navy/cyan palette and update the range accordingly. Until resolved, treat the year label as approximate.

**Archive sources:**
- `https://web.archive.org/web/2020*/https://store.steampowered.com/`
- Steamworks partner dashboard (sparse Wayback coverage — supplement with screenshots if available)

**What to extract:** Nav tab active state styles, stat card pattern, table row hover, sidebar link group, badge/status pill design. Confirm exact year palette was introduced.

---

### Windows 10 — 2015–2021

| Property | Value |
|---|---|
| Theme attr | `data-panda-theme="windows10"` |
| Token config | `panda.config.ts` → `themes.windows10` |
| Primary font | Segoe UI (system on Windows; fallback: system-ui) |
| Accent | `#0078d7` |
| Background | `#f2f2f2` |
| Border radius | 0px |

**Defining characteristics:** Flat Fluent Design (pre-WinUI 3). Light panels. Sharp 0px corners everywhere. `#0078d7` for all interactive accents. Segoe UI at 12–13px body. Taskbar at bottom (rgba black). Action Center slide-in from right. Quick Actions grid (2×4 tiles). No drop shadows — thin `rgba(0,0,0,0.08)` borders only.

**Archive sources:**
- Microsoft Fluent Design docs (Wayback: `https://web.archive.org/web/2018*/https://fluent.microsoft.com/`)
- Windows 10 UI guidelines PDFs (docs.microsoft.com archives)

**What to extract:** Exact Segoe UI weight/size hierarchy, ribbon component, dialog chrome, toggle/checkbox styles, taskbar icon spacing.

---

### Candidate Eras (not yet started — needs sourcing)

These eras are under consideration but have no captures yet. Do not add a section above until archive.org sourcing is documented.

**Steam Store redesign — ~2014–2017**
Transitional era between legacy and the current navy design. Brighter, slightly more colorful. Different nav structure. Captures available at `https://web.archive.org/web/2015*/http://store.steampowered.com/`.

**Steam Library redesign — 2019**
The major library overhaul: large hero images, shelves layout, "what's new" feed. Completely different from the admin console aesthetic. Captures at `https://web.archive.org/web/2020*/https://store.steampowered.com/library`.

**Windows 10 dark mode file manager — ~2019–2021**
File Explorer in dark mode, introduced in Windows 10 1809. Navigation pane, address bar, ribbon, details pane. Would likely share the existing `windows10` token layer with a dark-mode palette override, or become a new sibling era.

**Slug naming:** If no official design name exists, use year-based slugs (`steam-2014`, `steam-2019-library`, `windows10-dark`). Only use a name if Microsoft/Valve officially named the design language.

---

## Historical Fidelity

### What "authentic" means

An era implementation is authentic when a screenshot of it could plausibly be mistaken for the real thing at a glance. This requires:

1. **Correct font** — the exact typeface, weight, and size hierarchy used in the source
2. **Correct colors** — values sourced from archive.org stylesheet captures or devtools inspection
3. **Correct layout** — content density, sidebar widths, nav height, card proportions
4. **Correct details** — border widths, gradients, hover states

### Permitted deviations

These deviations are allowed without documentation:
- Simplifying content (fewer items, shorter text) for demo purposes
- Adding scroll behavior that wasn't in the original single-page layout
- Using SVG icons instead of image sprites where the visual result is equivalent
- Omitting features that require real backend data (auth state, real game counts, etc.)

These deviations require a comment in the source:
- Any color that differs from the archived source value
- Font fallback differences (Segoe UI on non-Windows)
- Structural simplifications that change the layout significantly

### What is NOT allowed

- Inventing design patterns that didn't exist in the era
- Modernizing UI (smooth animations, card shadows, rounded corners) unless the era had them
- Bypassing PandaCSS tokens with raw CSS custom properties in new code (use `css()` with token references)

---

## Sourcing Strategy

### archive.org workflow

1. Find a capture close to the era's midpoint (e.g., 2011 for steam-legacy)
2. Open the capture in a browser, open DevTools → Sources
3. Extract the minified stylesheet and run it through a prettifier
4. Save to `docs/sources/{era}/{filename}.css` with a comment at the top noting the URL and capture date
5. Extract exact values — don't approximate. `#3d3d3f` is not `#3c3c3c`.

### Font sourcing

- **Arial/Tahoma/Segoe UI:** System fonts — use CSS font stacks, no download needed
- **Source Sans 3:** Load from Google Fonts via `<svelte:head>` in the era layout
- Document the exact font weight and size scales you verified from source captures

### Color verification

Before adding a color to a token file, note in a comment where it came from. Example:
```css
--accent: #75b022; /* verified: store.steampowered.com/2012 - active tab bg */
```

---

## Component Architecture

### Primitive layer: Ark UI

Use [Ark UI](https://ark-ui.com) for all interactive component primitives: dialogs, menus, tooltips, comboboxes, toggles, sliders. Ark UI provides behavior without styling — apply era tokens on top.

`bits-ui` has been removed. Ark UI is the only headless primitive library in this project.

### Component conventions

- Files live in `src/lib/components/{era}/` — no cross-era component should assume any specific token values
- Shared utilities (e.g., a generic `Badge` that accepts token-based color props) go in `src/lib/components/`
- Components use `$props()` rune — no legacy `export let`
- Slots via `{@render children()}` for layout composition
- Keep components under ~150 lines; extract sub-components when they grow
- Every interactive component must have a keyboard path (click + Enter/Space minimum)

### Interactivity requirements

Every page must have at least one:
- Clickable item that changes state (expand/collapse, select, toggle)
- Hover state that reveals information (tooltip, status change, highlight)

---

## Data & Seeding

### Seeded fake data

All fake data must be deterministic. Use `@faker-js/faker` with a fixed numeric seed.

```ts
import { faker } from '@faker-js/faker';
faker.seed(1234); // fixed — same output every run
```

Seed values are defined per-page, documented in the data module file:
```ts
// Seed: 4291 — Steam Legacy library page
```

### Data modules

- Data lives in `src/lib/data/{era}/{page}.ts` — not inline in `.svelte` files
- Export typed arrays/objects, not hardcoded primitives
- If a page shows 10 items, generate 10–20 and slice; don't hardcode 10 literals

### No hardcoded strings in templates

Bad:
```svelte
<span>Half-Life 2</span>
```

Good:
```svelte
{#each games as game}
  <span>{game.name}</span>
{/each}
```

---

## Accessibility

### Target standard

WCAG 2.1 AA on **structure and interaction**. Color contrast violations are lint warnings (not errors) when they conflict with era-accurate palettes — they surface as visible debt without blocking work.

### Always required (no exceptions)

- All `<img>` and `<svg>` must have `alt` or `aria-label`
- All form controls must have associated `<label>` elements or `aria-label`
- All buttons must have visible or accessible text (no icon-only buttons without `aria-label`)
- Heading hierarchy must be logical (`h1` → `h2` → `h3`, no skipping)
- Interactive elements must be keyboard-reachable and focusable
- No `tabindex > 0`
- ARIA roles, states, and properties must be used correctly — no `role="button"` on non-interactive elements

### Permitted exemptions (document with a comment)

These require a `<!-- a11y-exemption: [reason] -->` comment:
- Color contrast below 4.5:1 when the exact historical color is being used
- Small text sizes below 14px when the era used them (e.g., Steam Legacy's 10–12px UI)

```html
<!-- a11y-exemption: Steam Legacy used 11px text throughout; historical accuracy takes precedence -->
```

### ESLint a11y rules

`eslint-plugin-svelte` includes accessibility rules. Enable all of them. Disable individual rules inline only when the exemption above applies.

---

## Linting & Formatting

### Formatter + secondary linter: Biome

Biome (`biome.json`) handles:
- **Formatting** for JS, TS, JSON, CSS, and `.svelte` (script + template + style blocks)
- **Linting** for JS, TS, JSON (separate from ESLint, complementary rules)

Prettier, `prettier-plugin-svelte`, and `eslint-config-prettier` have all been removed. Biome is the single formatter.

**Formatter tuning** (`biome.json` → `formatter` + `javascript.formatter`):
| Setting | Value | Why |
|---|---|---|
| `indentStyle` | `tab` | Matches existing codebase; tab is Biome's default |
| `lineWidth` | `100` | Wider than default 80 — long Tailwind shim lines and CSS token blocks read better |
| `lineEnding` | `lf` | Unix line endings, matches git config |
| `javascript.quoteStyle` | `single` | Matches existing codebase (Svelte script blocks are an exception — Biome uses double there, accept it) |
| `javascript.trailingCommas` | `none` | Consistent with existing code |
| `javascript.semicolons` | `always` | Explicit semicolons |
| `css.quoteStyle` | `double` | CSS convention |

**Linter tuning** (`biome.json` → `linter.rules`):
- Base: `recommended: true` — gets the safe defaults
- **Enforced:** `noExplicitAny` (error), `noUnusedVariables` / `noUnusedImports` (error), `useImportType`, `useNodejsImportProtocol`
- **Warnings:** `noConsole` (with `warn`/`error` allowed), `noNonNullAssertion`
- **Svelte override:** `noUnusedVariables` + `noUnusedImports` disabled for `.svelte` files because Biome's linter cannot see template references — it flags `const games = [...]` as unused when it's iterated in `{#each games}`. ESLint + `eslint-plugin-svelte` handles this correctly. If the Biome team adds Svelte semantic analysis in a future release, re-enable these.

**Excluded paths** (`files.includes`):
- `.svelte-kit/`, `build/`, `node_modules/` — generated/vendor
- `docs/` — design documentation and any future archive captures (`docs/sources/`) are not lint targets

### ESLint

Config: `eslint.config.js`. Base: `js.recommended + ts.recommended + svelte.recommended`. Prettier integration removed (formatting is Biome's job, not ESLint's).

**Division of labor with Biome:** ESLint owns `.svelte` linting (including unused variables, since it understands templates). Biome owns everything else. Both lint `.ts`/`.js` — the rules are complementary, not conflicting. If a rule fires from both, pick one; don't duplicate.

**Rules enforced:**

| Rule | Level | Why |
|---|---|---|
| `@typescript-eslint/no-explicit-any` | error | No escape hatches — forces proper typing |
| `@typescript-eslint/consistent-type-imports` | error | Enforce `import type` for type-only imports — improves tree-shaking |
| `svelte/button-has-type` | error | Every `<button>` must specify `type="button"`/`"submit"`/`"reset"` — prevents accidental form submission |
| `svelte/no-unused-svelte-ignore` | error | Catch stale `<!-- svelte-ignore -->` comments that no longer suppress anything |
| `svelte/valid-compile` | error | Catch Svelte compiler warnings as errors — surfaces malformed templates |

**A11y rules** come from `svelte.configs.recommended` (includes `eslint-plugin-svelte`'s a11y ruleset). All enabled at default severity. Structural violations (missing `alt`, invalid `aria-*`, broken heading hierarchy) are errors; there is no lint-level "contrast" rule — contrast is a runtime axe-core concern.

**Rules kept disabled:**
- `no-undef` — TypeScript handles undefined identifiers; the ESLint rule conflicts with TS globals. See [typescript-eslint FAQ](https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors).

**Rules to consider adding later:**
- `@typescript-eslint/no-non-null-assertion: warn` — flag `!` assertions
- `@typescript-eslint/prefer-nullish-coalescing: error` — prefer `??` over `||` for default values
- `@typescript-eslint/strict-boolean-expressions` — catch truthiness bugs with nullable strings/numbers
- `svelte/no-reactive-reassign` — if legacy `$:` ever leaks back in

### Stylelint — removed

Stylelint was removed when PandaCSS was adopted. All styling now goes through `css()`, `cva()`, `sva()` from `styled-system/css` — there are no `<style>` blocks to lint (except the LayerChart Tailwind shim in `app.css`, which is trivial and static).

### Check commands

`package.json` is the source of truth for commands — `Justfile` is a thin wrapper that calls `bun run <script>`. This means editors, CI, and Justfile all invoke the same underlying scripts.

```bash
just check   # typecheck + lint (eslint + stylelint + biome) + format:check
just fix     # format + eslint --fix
just lint    # all three linters
just fmt     # biome format --write
just typecheck
```

Underlying `package.json` scripts:

| Script | What it runs |
|---|---|
| `check` | `typecheck && lint:js && lint:biome && lint:actions && format && spell && analyze && links && audit && just:check` |
| `typecheck` | `svelte-kit sync && svelte-check` |
| `lint:js` | `eslint .` |
| `lint:biome` | `biome lint .` |
| `format` | `biome format .` (check mode — no write) |
| `fix` | `biome format --write . && eslint . --fix` |

**Never call `bunx`** for locally-installed tools — it has network/cache overhead and bypasses the `package.json` script layer. Call `bun run <script>` instead. Binaries are resolved from `node_modules/.bin` automatically inside scripts.

---

## No-404 Policy

Every route listed in the index page (`src/routes/+page.svelte` → `routes` arrays) must have a corresponding `+page.svelte`. This is enforced by:

1. SvelteKit's link checker (in `check` mode, SvelteKit warns on missing routes)
2. Manual review when adding a route to the index

When adding a new link to the index, create the page stub first — even if it's just a layout placeholder.

---

## Open Questions

These are unresolved decisions. When a decision is made, move it to the relevant section above.

- **steam-modern era identification:** The current palette (`#171a21`, `#1b2838`, `#66c0f4`) is accurate to some era of Steam, but which one? Use archive.org to identify the specific year range. Until resolved, the "2018–2023" label is approximate.
- **archive.org automated fetching:** Is there a structured way to snapshot styles at a known URL + date? Or is manual devtools extraction the only path? Wayback Machine CDX API may help.
- **Playwright a11y testing:** `@axe-core/playwright` is installed but not wired to any test. Add a baseline test per page that runs axe and reports violations — not a hard gate yet, but a visibility mechanism.
- **Windows 10 dark file manager sub-era vs new era:** Does the dark mode file manager get its own era slug (`windows10-dark`) or does it share the `windows10` token layer with overrides? Decide when sourcing begins.

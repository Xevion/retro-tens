# retro-tens

A SvelteKit retro UI playground. Three historically faithful software eras, each with its own CSS token layer.

**Full design spec and rationale:** [docs/DESIGN.md](docs/DESIGN.md)

---

## Stack

- **Framework:** SvelteKit 2, Svelte 5 runes-only (no legacy `export let` / `$:`)
- **Language:** TypeScript strict
- **Package manager:** Bun (`bun.lock` — use `bun add` / `bun remove`)
- **Formatter:** Biome (all files including `.svelte` — `biome.json` at project root)
- **Linters:** ESLint (`eslint.config.js`) + Stylelint (`.stylelintrc.json`)
- **Icons:** lucide-svelte
- **Charts:** LayerChart (requires Tailwind shim in `app.css` — do not remove)
- **Primitives:** Ark UI (`@ark-ui/svelte`) — bits-ui removed

---

## Commands

`package.json` scripts are the source of truth. The Justfile delegates to them.

```bash
just check   # typecheck + all linters + format check — must pass before commit
just fix     # biome format --write + eslint --fix
just lint    # lint only (eslint + stylelint + biome)
just fmt     # biome format --write .
```

Direct script invocation (no Justfile needed):
```bash
bun run check          # everything
bun run typecheck      # svelte-check only
bun run lint           # eslint + stylelint + biome lint
bun run format         # biome format --write
bun run format:check   # biome format check (no write)
```

**Never use `bunx`** for locally-installed tools — call `bun run <script>` so the `package.json` layer is always the source of truth and `node_modules/.bin` resolution is automatic.

---

## Project Structure

```
src/
  routes/
    +page.svelte              # era index — source of truth for all routes
    steam-legacy/             # 2010–2013 era
    steam-modern/             # 2018–2023 era
    windows10/                # 2015–2021 era
  lib/
    themes/                   # CSS token files (one per era)
    components/               # Svelte components, colocated by era
    data/                     # Seeded fake data modules (create as needed)
  app.css                     # global reset + LayerChart Tailwind shim
docs/
  DESIGN.md                   # living spec: eras, sourcing, architecture decisions
  sources/                    # archived stylesheets from archive.org (create as needed)
```

---

## Theme Architecture

Each era applies `.theme-{id}` at its layout level. All era-specific values (color, font, radius, spacing) live in `src/lib/themes/{era}/tokens.css` as CSS custom properties.

**Rule:** Never hardcode era-specific values (colors, radii, font names) in component stylesheets. Always reference tokens. If a token doesn't exist for what you need, add it to the token file.

Token naming convention: `--surface-*`, `--text-*`, `--accent-*`, `--border-*`, `--font-*`, `--radius-*`.

---

## Era Fidelity

The three active eras and their authoritative sources:

| Era | Year range | Font | Accent |
|---|---|---|---|
| steam-legacy | 2010–2013 | Arial | `#75b022` |
| steam-modern | ~2018–2023 (TBD — see DESIGN.md) | Source Sans 3 | `#66c0f4` |
| windows10 | 2015–2021 | Segoe UI | `#0078d7` |

Color values must come from archive.org stylesheet captures or direct devtools inspection. If you deviate from a sourced value, leave a comment explaining why.

See [docs/DESIGN.md#eras](docs/DESIGN.md#eras) for full sourcing instructions.

---

## Components

- `src/lib/components/{era}/` — era-specific
- `src/lib/components/` — cross-era shared utilities only
- Use Svelte 5 `$props()` rune — no `export let`
- `{@render children()}` for slot-style composition
- Use `@ark-ui/svelte` primitives for interactive behaviors (dialog, menu, tooltip, combobox, toggle)
- All interactive components must be keyboard-accessible
- Keep files under ~150 lines; extract sub-components when they grow
- Every page needs at least one stateful interaction (expand/collapse, selection, toggle)

---

## Fake Data

- All fake data must be deterministic: use `@faker-js/faker` with a fixed numeric seed
- Data lives in `src/lib/data/{era}/{page}.ts`, not inline in `.svelte` files
- Document the seed value in a comment at the top of the data module
- No hardcoded string literals in component templates (no `<span>Half-Life 2</span>`)

---

## Linting Rules

**ESLint — rules enforced:**
- `svelte/button-has-type: error`
- `svelte/no-unused-svelte-ignore: error`
- `@typescript-eslint/no-explicit-any: error`
- `@typescript-eslint/consistent-type-imports: error`
- All `eslint-plugin-svelte` a11y rules enabled (structural violations = errors, contrast = warnings)

**Stylelint — intentionally disabled rules:** See [docs/DESIGN.md#linting](docs/DESIGN.md#linting) for the full rationale table. Short version: color notation rules are disabled for era authenticity; formatting rules deferred to formatter.

Never inline-disable a lint rule without a `// reason:` comment. For stylelint, use `/* stylelint-disable-next-line rule-name -- reason */`.

---

## Accessibility

Target: WCAG 2.1 AA on structure and interaction. Color contrast is **exempt** when it conflicts with historically accurate era palettes.

Always required:
- `alt` / `aria-label` on all images and decorative SVGs
- `<label>` or `aria-label` on every form control
- `aria-label` on icon-only buttons
- Logical heading hierarchy
- Keyboard reachability for all interactive elements
- No `tabindex > 0`

When exempting a contrast rule, add a comment:
```html
<!-- a11y-exemption: Steam Legacy used 11px/low-contrast text historically -->
```

---

## No-404 Policy

Every `href` in the route arrays in `src/routes/+page.svelte` must have a `+page.svelte`. Create stubs before linking. Running `just check` will catch broken SvelteKit routes.

---

## Adding a New Era

1. Create `src/lib/themes/{era}/tokens.css` with all token variables
2. Create `src/routes/{era}/+layout.svelte` applying `.theme-{era}`
3. Create `src/routes/{era}/+page.svelte` as the era landing page
4. Add at least one sub-route (`+page.svelte`)
5. Add the era entry to `src/routes/+page.svelte`
6. Add sourcing documentation to `docs/DESIGN.md#eras`
7. Add archive.org source files to `docs/sources/{era}/`

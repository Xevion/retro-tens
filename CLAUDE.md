# retro-tens

A SvelteKit retro UI playground. Three historically faithful software eras, each with its own CSS token layer.

**Full design spec and rationale:** [docs/DESIGN.md](docs/DESIGN.md)

---

## Stack

- **Framework:** SvelteKit 2, Svelte 5 runes-only (no legacy `export let` / `$:`)
- **Language:** TypeScript strict
- **Package manager:** Bun (`bun.lock` — use `bun add` / `bun remove`)
- **Formatter:** Biome (all files including `.svelte` — `biome.json` at project root)
- **Linters:** ESLint (`eslint.config.js`) + Stylelint (`.stylelintrc.json`) + Biome lint
- **Spellcheck:** `typos` (`typos.toml` at project root)
- **Link checker:** `lychee` (runs `--offline` locally, networked in CI)
- **Analyzer:** `fallow` (dead code, cycles, duplication, complexity, unused deps) — configured via `.fallowrc.json`. Also exposed as an MCP server via `.claude/settings.json` (`fallow-mcp` command)
- **Workflow linter:** `actionlint` (GitHub Actions)
- **Runtime tool manager:** `mise` (`mise.toml` pins `actionlint`, `typos`, `lychee`, `lefthook`)
- **Git hooks:** `lefthook` (`lefthook.yml`) — pre-commit format + spell, commit-msg commitlint
- **Commit convention:** `@commitlint/config-conventional` via `commitlint.config.js`
- **Perf/a11y crawler:** `unlighthouse` (`unlighthouse.config.ts` — targets `http://localhost:4173`)
- **Dependency updates:** Renovate (`renovate.json`) — config:recommended with groupings
- **Icons:** lucide-svelte
- **Charts:** LayerChart (requires Tailwind shim in `app.css` — do not remove)
- **Primitives:** Ark UI (`@ark-ui/svelte`) — bits-ui removed

---

## Commands

The Justfile has four recipes. All dispatch to `package.json` scripts, which are the source of truth.

```bash
just            # alias for `just check`
just check      # typecheck + all linters + analyzers + audit + formatter check
just fix        # biome format --write + eslint --fix
just dev        # vite dev
just lighthouse # unlighthouse crawl — start `bun run preview` first (port 4173)
```

`bun run check` runs, in order: `typecheck`, `lint:js`, `lint:css`, `lint:biome`, `lint:actions`, `format`, `spell`, `analyze`, `links`, `audit`, `just:check`. Fails fast on first error.

Granular scripts for debugging one tool at a time: `bun run typecheck`, `bun run lint:js`, `bun run lint:css`, `bun run lint:biome`, `bun run lint:actions`, `bun run format`, `bun run spell`, `bun run analyze`, `bun run links`, `bun run audit`, `bun run lighthouse`.

Fallow has extra entry points beyond the default `bun run analyze`:

- `bun run analyze:production` — strict dep hygiene (excludes test/story files, flags type-only deps miscategorized as runtime). Runs in the CI `analyze` job as a second step.
- `bun run analyze:audit` — PR-scoped `fallow audit --changed-since origin/master`. Wired into the `pre-push` lefthook so bad pushes fail before reaching CI.
- `bun run fix:dead` — previews fallow's auto-fixes (unused exports, dependencies, enum members) via `--dry-run`. Never destructive.
- `bun run fix:dead:apply` — applies the fixes. Not wired into `bun run fix` / `just fix` — invoke manually when you actually want to delete code.

**Never use `bunx`** for locally-installed tools — call `bun run <script>` so the `package.json` layer is always the source of truth and `node_modules/.bin` resolution is automatic.

### First-time setup

Before `just check` will work locally:

1. `mise install` — installs `actionlint`, `typos`, `lychee`, `lefthook` from `mise.toml`
2. `mise trust` — required once per clone
3. `cargo install fallow-cli` — `fallow` is not in `mise.toml` because its prebuilt `linux-x64-gnu` binary requires glibc 2.39+, which excludes Ubuntu 22.04. CI installs it via `cargo install`; locally, any working fallow binary in `$PATH` is fine.
4. `bun install`
5. `lefthook install` — wires `.git/hooks/pre-commit` and `.git/hooks/commit-msg`

### Commit messages

Commits must follow [Conventional Commits](https://www.conventionalcommits.org/). The `commit-msg` hook runs `commitlint` against `@commitlint/config-conventional`, so non-compliant messages are rejected locally before they reach the remote. Types in active use: `feat`, `fix`, `chore`, `refactor`, `docs`, `style`, `test`, `ci`, `build`, `perf`, `revert`.

### Pre-commit / pre-push hooks

`lefthook.yml` wires three hook stages:

- **pre-commit** (parallel): `format` (biome format --write on staged web files, auto-restage) and `spell` (typos on staged text files). Full lint (`lint:js`, `lint:css`, `lint:biome`) is **not** here — it's CI's job. Local commits stay fast.
- **pre-push**: `analyze-audit` runs `bun run analyze:audit` (= `fallow audit --changed-since origin/master`) on the PR-scoped file set. Catches dead code / complexity / duplication regressions before they reach CI.
- **commit-msg**: `commitlint --edit` against `@commitlint/config-conventional`.

To bypass hooks in an emergency: `git commit --no-verify` / `git push --no-verify`. Don't make a habit of it.

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

---

## CI

`.github/workflows/ci.yml` runs on push to `master` and on every PR. Five parallel jobs:

- **commits** (PR only) — `commitlint --from base --to head` so contributors without local hooks still get caught
- **check** — installs mise tools, then runs `typecheck`, `lint:*`, `format`, `spell`, `just:check` as individual `bun run` steps
- **analyze** — installs fallow via `cargo install`, runs `fallow --group-by directory --score --sarif-file fallow.sarif`, then `analyze:production` for strict dep hygiene. On `master` pushes, saves a health snapshot to `.fallow/snapshots/`. SARIF is uploaded via `github/codeql-action/upload-sarif` with `if: always()` so PR annotations render even when fallow fails the job
- **links** — `lycheeverse/lychee-action` without `--offline`, so external links are actually validated
- **audit** — `bun audit` isolated so a new CVE doesn't block the rest of CI

The `check` and `analyze` jobs deliberately split each `bun run <script>` / `fallow` invocation into its own step so GitHub's job log shows which stage failed without having to grep a 10-command `&&` chain.

Fallow lives in its own `analyze` job (not `check`) so slow Rust compilation of `fallow-cli` doesn't block fast lint feedback, and a fallow regression doesn't hide lint failures in the same job log.

Unlighthouse is **not** in CI — run it locally via `just lighthouse` when you want perf/a11y crawls. It needs a preview server and Chromium, which makes it a poor fit for per-PR gating.

## Dependency updates

Renovate is configured via `renovate.json` with `config:recommended`. Updates are grouped so related packages land together: `ark-ui`, `lucide`, `biome`, `eslint`, `stylelint`, `sveltekit`, `commitlint`, `types`, `d3`, `playwright`. Lockfile maintenance runs weekly (Monday before 6am).

Renovate requires the GitHub App to be installed on the repo — configuring `renovate.json` alone does nothing until the app has access. Install at https://github.com/apps/renovate.

Semantic commits are enforced: Renovate prefixes all PRs with `chore(deps):` so they pass commitlint.

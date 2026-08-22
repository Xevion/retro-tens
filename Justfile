set unstable

default:
    just --list

# Typecheck, all linters, analyzers, audit, formatter check.
check:
    bun run check

# Auto-format and auto-fix lint issues.
fix:
    bun run fix

# Start the Vite dev server.
dev:
    bun run dev

# Start the Vite server in preview mode.
preview:
    bun run build && bun run preview

# Run axe-core accessibility audits against a preview build.
a11y:
    bun run test:a11y

# Crawl the preview build with Lighthouse. Start `just preview` (port 4173) first.
lighthouse:
    bunx unlighthouse-ci

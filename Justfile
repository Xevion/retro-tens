default: check

# Typecheck, all linters, analyzers, audit, formatter check.
check:
    bun run check

# Auto-format and auto-fix lint issues.
fix:
    bun run fix

# Start the Vite dev server.
dev:
    bun run dev

# Crawl the running dev server with Lighthouse. Start `just dev` first.
lighthouse:
    bun run lighthouse

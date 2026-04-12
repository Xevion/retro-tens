default: check

# Type-check, all linters, formatter check. Must pass before committing.
check:
    bun run check

# Auto-format and fix lint issues.
fix:
    bun run fix

# Type-check only.
typecheck:
    bun run typecheck

# Run all linters (no auto-fix): ESLint + stylelint + Biome.
lint:
    bun run lint

# Format all files with Biome.
fmt:
    bun run format

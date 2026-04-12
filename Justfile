set unstable := true

default:
    just --list

# Typecheck, all linters, analyzers, audit, formatter check.
check:
    #!/usr/bin/env bash
    set -u
    failed=()
    for step in typecheck lint:js lint:biome lint:actions format spell audit just:check analyze links; do
        printf '\n\033[1;34m::: %s\033[0m\n' "$step"
        bun run "$step" || failed+=("$step")
    done
    if (( ${#failed[@]} )); then
        printf '\n\033[1;31mFAILED: %s\033[0m\n' "${failed[*]}"
        exit 1
    fi

# Auto-format and auto-fix lint issues.
fix:
    bun run fix

# Start the Vite dev server.
dev:
    bun run dev

# Start the Vite server in preview mode.
preview:
    bun run build && bun run preview

# Crawl the preview build with Lighthouse. Start `just preview` (port 4173) first.
lighthouse:
    bunx unlighthouse-ci

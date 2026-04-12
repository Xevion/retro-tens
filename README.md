# retro-tens

A SvelteKit playground that faithfully recreates specific software UIs from the recent past. Three eras, three design systems, all built with historically accurate tokens and layouts.

## Eras

| Era | Year range | Source application | Accent |
|---|---|---|---|
| Steam Legacy | 2010–2013 | Steam client/store | `#75b022` |
| Steam Modern | 2018–2023 | Steam admin console | `#66c0f4` |
| Windows 10 | 2015–2021 | Windows 10 shell | `#0078d7` |

Each era ships multiple interactive pages with seeded fake data — no static screenshots.

## Stack

SvelteKit 2 · Svelte 5 · TypeScript · PandaCSS · Bun

## Getting started

```bash
mise install && mise trust   # actionlint, typos, lychee, lefthook
cargo install fallow-cli     # codebase analyzer
bun install
lefthook install
```

## Development

```bash
just dev     # start dev server
just check   # typecheck + lint + format + spell + analyze
just fix     # auto-format + auto-fix
just a11y    # WCAG accessibility audits
```

See [docs/DESIGN.md](docs/DESIGN.md) for the full design spec and sourcing guidelines.

## License

This project is for educational and demonstration purposes.

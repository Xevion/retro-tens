# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.test.ts >> / has no accessibility violations
- Location: tests/a11y/accessibility.test.ts:45:2

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 443

- Array []
+ Array [
+   Object {
+     "description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
+     "help": "Elements must meet minimum color contrast ratio thresholds",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright",
+     "id": "color-contrast",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#111111",
+               "contrastRatio": 3.28,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#666666",
+               "fontSize": "9.8pt (13px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.28 (foreground color: #666666, background color: #111111, font size: 9.8pt (13px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"page svelte-1uha8ag\">",
+                 "target": Array [
+                   ".page",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.28 (foreground color: #666666, background color: #111111, font size: 9.8pt (13px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"tagline svelte-1uha8ag\">A retro UI design playground · Three eras, three systems</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".tagline",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#161616",
+               "contrastRatio": 2.42,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#555555",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.42 (foreground color: #555555, background color: #161616, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"theme-card svelte-1uha8ag\" style=\"--card-accent:#75b022\">",
+                 "target": Array [
+                   ".theme-card:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.42 (foreground color: #555555, background color: #161616, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"card-era svelte-1uha8ag\">2010 – 2013</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".theme-card:nth-child(1) > .card-body > .card-title-row > .card-era",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#1e1e1e",
+               "contrastRatio": 2.9,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#666666",
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.9 (foreground color: #666666, background color: #1e1e1e, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"meta-pill svelte-1uha8ag\">Font: Arial</span>",
+                 "target": Array [
+                   ".theme-card:nth-child(1) > .card-body > .card-meta > .meta-pill",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.9 (foreground color: #666666, background color: #1e1e1e, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"meta-pill svelte-1uha8ag\">Font: Arial</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".theme-card:nth-child(1) > .card-body > .card-meta > .meta-pill",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#101318",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#556b7d",
+               "fontSize": "4.5pt (6px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #556b7d, background color: #101318, font size: 4.5pt (6px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"psm-chrome svelte-1uha8ag\"><span class=\"psm-dot red svelte-1uha8ag\"></span> <span class=\"psm-dot yellow svelte-1uha8ag\"></span> <span class=\"psm-dot green svelte-1uha8ag\"></span> <span class=\"psm-title svelte-1uha8ag\">Steam — Administrator Console</span></div>",
+                 "target": Array [
+                   ".psm-chrome",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #556b7d, background color: #101318, font size: 4.5pt (6px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"psm-title svelte-1uha8ag\">Steam — Administrator Console</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".psm-title",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#161616",
+               "contrastRatio": 2.42,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#555555",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.42 (foreground color: #555555, background color: #161616, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"theme-card svelte-1uha8ag\" style=\"--card-accent:#66c0f4\">",
+                 "target": Array [
+                   ".theme-card:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.42 (foreground color: #555555, background color: #161616, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"card-era svelte-1uha8ag\">2018 – 2023</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".theme-card:nth-child(2) > .card-body > .card-title-row > .card-era",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#1e1e1e",
+               "contrastRatio": 2.9,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#666666",
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.9 (foreground color: #666666, background color: #1e1e1e, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"meta-pill svelte-1uha8ag\">Font: Source Sans 3</span>",
+                 "target": Array [
+                   ".theme-card:nth-child(2) > .card-body > .card-meta > .meta-pill",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.9 (foreground color: #666666, background color: #1e1e1e, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"meta-pill svelte-1uha8ag\">Font: Source Sans 3</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".theme-card:nth-child(2) > .card-body > .card-meta > .meta-pill",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#161616",
+               "contrastRatio": 2.42,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#555555",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.42 (foreground color: #555555, background color: #161616, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"theme-card svelte-1uha8ag\" style=\"--card-accent:#0078d7\">",
+                 "target": Array [
+                   ".theme-card:nth-child(3)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.42 (foreground color: #555555, background color: #161616, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"card-era svelte-1uha8ag\">2015 – 2021</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".theme-card:nth-child(3) > .card-body > .card-title-row > .card-era",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#1e1e1e",
+               "contrastRatio": 2.9,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#666666",
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.9 (foreground color: #666666, background color: #1e1e1e, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"meta-pill svelte-1uha8ag\">Font: Segoe UI</span>",
+                 "target": Array [
+                   ".theme-card:nth-child(3) > .card-body > .card-meta > .meta-pill",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.9 (foreground color: #666666, background color: #1e1e1e, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"meta-pill svelte-1uha8ag\">Font: Segoe UI</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".theme-card:nth-child(3) > .card-body > .card-meta > .meta-pill",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#161616",
+               "contrastRatio": 4.02,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#0078d7",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.02 (foreground color: #0078d7, background color: #161616, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"theme-card svelte-1uha8ag\" style=\"--card-accent:#0078d7\">",
+                 "target": Array [
+                   ".theme-card:nth-child(3)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.02 (foreground color: #0078d7, background color: #161616, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/windows10\" class=\"route-link svelte-1uha8ag\">Desktop →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href$=\"windows10\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#161616",
+               "contrastRatio": 4.02,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#0078d7",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.02 (foreground color: #0078d7, background color: #161616, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"theme-card svelte-1uha8ag\" style=\"--card-accent:#0078d7\">",
+                 "target": Array [
+                   ".theme-card:nth-child(3)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.02 (foreground color: #0078d7, background color: #161616, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/windows10/action-center\" class=\"route-link svelte-1uha8ag\">Action Center →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href$=\"action-center\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#161616",
+               "contrastRatio": 4.02,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#0078d7",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.02 (foreground color: #0078d7, background color: #161616, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"theme-card svelte-1uha8ag\" style=\"--card-accent:#0078d7\">",
+                 "target": Array [
+                   ".theme-card:nth-child(3)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.02 (foreground color: #0078d7, background color: #161616, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/windows10/resume-builder\" class=\"route-link svelte-1uha8ag\">Resume Builder →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href$=\"resume-builder\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#111111",
+               "contrastRatio": 1.93,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#444444",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.93 (foreground color: #444444, background color: #111111, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"page svelte-1uha8ag\">",
+                 "target": Array [
+                   ".page",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.93 (foreground color: #444444, background color: #111111, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<footer class=\"site-footer svelte-1uha8ag\">retro-tens · SvelteKit + Bits UI · CSS Custom Properties</footer>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "footer",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.color",
+       "wcag2aa",
+       "wcag143",
+       "TTv5",
+       "TT13.c",
+       "EN-301-549",
+       "EN-9.1.4.3",
+       "ACT",
+       "RGAAv4",
+       "RGAA-3.2.1",
+     ],
+   },
+ ]
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]: retro-tens
      - generic [ref=e7]: A retro UI design playground · Three eras, three systems
  - main [ref=e8]:
    - generic [ref=e9]:
      - generic [ref=e11]:
        - generic [ref=e14]: STEAM
        - generic [ref=e19]:
          - generic [ref=e20]: STEAM
          - generic [ref=e21]:
            - generic [ref=e22]: Store
            - generic [ref=e23]: Library
            - generic [ref=e24]: Community
      - generic [ref=e42]:
        - generic [ref=e43]:
          - generic [ref=e44]: Steam
          - generic [ref=e45]: 2010 – 2013
        - paragraph [ref=e46]: The dark olive-green era. Compact pixel density, green accent, gradients everywhere, and zero animations.
        - generic [ref=e48]: "Font: Arial"
        - generic [ref=e49]:
          - link "Store →" [ref=e50] [cursor=pointer]:
            - /url: /steam-legacy
          - link "Library →" [ref=e51] [cursor=pointer]:
            - /url: /steam-legacy/library
          - link "Community →" [ref=e52] [cursor=pointer]:
            - /url: /steam-legacy/community
    - generic [ref=e53]:
      - generic [ref=e55]:
        - generic [ref=e60]: Steam — Administrator Console
        - generic [ref=e62]:
          - generic [ref=e63]: Dashboard
          - generic [ref=e64]: Users
          - generic [ref=e65]: Games
          - generic [ref=e66]: Reports
      - generic [ref=e84]:
        - generic [ref=e85]:
          - generic [ref=e86]: Steam Admin
          - generic [ref=e87]: 2018 – 2023
        - paragraph [ref=e88]: Deep navy blue with Source Sans 3. CSS custom properties, glow effects, and a dense data-heavy admin console.
        - generic [ref=e90]: "Font: Source Sans 3"
        - generic [ref=e91]:
          - link "Dashboard →" [ref=e92] [cursor=pointer]:
            - /url: /steam-modern
          - link "Users →" [ref=e93] [cursor=pointer]:
            - /url: /steam-modern/users
          - link "Games →" [ref=e94] [cursor=pointer]:
            - /url: /steam-modern/games
          - link "Reports →" [ref=e95] [cursor=pointer]:
            - /url: /steam-modern/reports
    - generic [ref=e119]:
      - generic [ref=e120]:
        - generic [ref=e121]: Windows 10
        - generic [ref=e122]: 2015 – 2021
      - paragraph [ref=e123]: "Fluent Design lite. Light panels, #0078D7 blue, sharp corners everywhere, and Segoe UI."
      - generic [ref=e125]: "Font: Segoe UI"
      - generic [ref=e126]:
        - link "Desktop →" [ref=e127] [cursor=pointer]:
          - /url: /windows10
        - link "Action Center →" [ref=e128] [cursor=pointer]:
          - /url: /windows10/action-center
        - link "Resume Builder →" [ref=e129] [cursor=pointer]:
          - /url: /windows10/resume-builder
  - contentinfo [ref=e130]: retro-tens · SvelteKit + Bits UI · CSS Custom Properties
```

# Test source

```ts
  1  | import AxeBuilder from '@axe-core/playwright';
  2  | import type { Page } from '@playwright/test';
  3  | import { expect, test } from '@playwright/test';
  4  | import type { EraId } from '../../src/lib/types';
  5  | 
  6  | /**
  7  |  * All routes from the era index, grouped by era for per-era rule configuration.
  8  |  * Keep in sync with src/routes/+page.svelte and src/lib/meta.ts.
  9  |  */
  10 | const routes: Array<{ path: string; era?: EraId }> = [
  11 | 	{ path: '/' },
  12 | 
  13 | 	{ path: '/steam-legacy', era: 'steam-legacy' },
  14 | 	{ path: '/steam-legacy/library', era: 'steam-legacy' },
  15 | 	{ path: '/steam-legacy/community', era: 'steam-legacy' },
  16 | 
  17 | 	{ path: '/steam-modern', era: 'steam-modern' },
  18 | 	{ path: '/steam-modern/games', era: 'steam-modern' },
  19 | 	{ path: '/steam-modern/reports', era: 'steam-modern' },
  20 | 	{ path: '/steam-modern/users', era: 'steam-modern' },
  21 | 
  22 | 	{ path: '/windows10', era: 'windows10' },
  23 | 	{ path: '/windows10/action-center', era: 'windows10' },
  24 | 	{ path: '/windows10/resume-builder', era: 'windows10' }
  25 | ];
  26 | 
  27 | /**
  28 |  * Contrast rules are disabled for era pages because historically faithful
  29 |  * palettes intentionally violate WCAG AA contrast ratios.
  30 |  * See CLAUDE.md § Accessibility for the exemption policy.
  31 |  */
  32 | const contrastRules = ['color-contrast', 'color-contrast-enhanced'] as const;
  33 | 
  34 | function buildAxe(page: Page, era?: EraId): AxeBuilder {
  35 | 	const builder = new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']);
  36 | 
  37 | 	if (era) {
  38 | 		builder.disableRules([...contrastRules]);
  39 | 	}
  40 | 
  41 | 	return builder;
  42 | }
  43 | 
  44 | for (const { path, era } of routes) {
  45 | 	test(`${path} has no accessibility violations`, async ({ page }) => {
  46 | 		await page.goto(path);
  47 | 		const results = await buildAxe(page, era).analyze();
  48 | 
> 49 | 		expect(results.violations).toEqual([]);
     |                              ^ Error: expect(received).toEqual(expected) // deep equality
  50 | 	});
  51 | }
  52 | 
```
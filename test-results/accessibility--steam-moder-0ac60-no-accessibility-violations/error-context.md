# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.test.ts >> /steam-modern/games has no accessibility violations
- Location: tests/a11y/accessibility.test.ts:45:2

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -  1
+ Received  + 87

- Array []
+ Array [
+   Object {
+     "description": "Ensure select element has an accessible name",
+     "help": "Select element must have an accessible name",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright",
+     "id": "select-name",
+     "impact": "critical",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "implicit-label",
+             "impact": "critical",
+             "message": "Element does not have an implicit (wrapped) <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "explicit-label",
+             "impact": "critical",
+             "message": "Element does not have an explicit <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "critical",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "critical",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "critical",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "presentational-role",
+             "impact": "critical",
+             "message": "Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have an implicit (wrapped) <label>
+   Element does not have an explicit <label>
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute
+   Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+         "html": "<select class=\"bg_surface.input bd_1px_solid_token(colors.border) c_text.secondary p_5px_8px fs_sm bdr_DEFAULT ff_ui cursor_pointer ring_none\">",
+         "impact": "critical",
+         "none": Array [],
+         "target": Array [
+           "select",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.forms",
+       "wcag2a",
+       "wcag412",
+       "section508",
+       "section508.22.n",
+       "TTv5",
+       "TT5.c",
+       "EN-301-549",
+       "EN-9.4.1.2",
+       "ACT",
+       "RGAAv4",
+       "RGAA-11.1.1",
+     ],
+   },
+ ]
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e10]: Steam — Administrator Console [Build 20170823-b]
  - generic [ref=e11]:
    - generic [ref=e12]:
      - img [ref=e13]
      - generic [ref=e17]: STEAM
    - generic [ref=e18] [cursor=pointer]: Steam
    - generic [ref=e19] [cursor=pointer]: View
    - generic [ref=e20] [cursor=pointer]: Friends
    - generic [ref=e21] [cursor=pointer]: Games
    - generic [ref=e22] [cursor=pointer]:
      - text: Admin Tools
      - generic [ref=e23]: "3"
    - generic [ref=e24] [cursor=pointer]: Help
    - generic [ref=e27] [cursor=pointer]:
      - generic [ref=e28]: VA
      - generic [ref=e29]:
        - generic [ref=e30]: ValveAdmin_07
        - generic [ref=e31]: ▶ SUPER ADMIN
  - navigation [ref=e32]:
    - link "Dashboard" [ref=e33] [cursor=pointer]:
      - /url: /steam-modern
      - img [ref=e35]
      - text: Dashboard
    - link "Users" [ref=e40] [cursor=pointer]:
      - /url: /steam-modern/users
      - img [ref=e42]
      - text: Users
    - link "Games" [ref=e47] [cursor=pointer]:
      - /url: /steam-modern/games
      - img [ref=e49]
      - text: Games
    - link "Store" [ref=e51] [cursor=pointer]:
      - /url: /steam-modern/store
      - img [ref=e53]
      - text: Store
    - link "Community" [ref=e57] [cursor=pointer]:
      - /url: /steam-modern/community
      - img [ref=e59]
      - text: Community
    - link "Reports" [ref=e62] [cursor=pointer]:
      - /url: /steam-modern/reports
      - img [ref=e64]
      - text: Reports
    - link "Settings" [ref=e65] [cursor=pointer]:
      - /url: /steam-modern/settings
      - img [ref=e67]
      - text: Settings
  - generic [ref=e70]:
    - complementary [ref=e71]:
      - generic [ref=e72]:
        - generic [ref=e73]: Overview
        - link "Dashboard" [ref=e74] [cursor=pointer]:
          - /url: /steam-modern
          - img [ref=e76]
          - text: Dashboard
        - link "Alerts 3" [ref=e81] [cursor=pointer]:
          - /url: /steam-modern/alerts
          - img [ref=e83]
          - text: Alerts
          - generic [ref=e85]: "3"
        - link "Activity Log" [ref=e86] [cursor=pointer]:
          - /url: /steam-modern/activity
          - img [ref=e88]
          - text: Activity Log
      - generic [ref=e90]:
        - generic [ref=e91]: Users
        - link "All Users 147M" [ref=e92] [cursor=pointer]:
          - /url: /steam-modern/users
          - img [ref=e94]
          - text: All Users
          - generic [ref=e99]: 147M
        - link "Banned 2,841" [ref=e100] [cursor=pointer]:
          - /url: /steam-modern/users/banned
          - img [ref=e102]
          - text: Banned
          - generic [ref=e105]: 2,841
        - link "Pending Review 128" [ref=e106] [cursor=pointer]:
          - /url: /steam-modern/users/pending
          - img [ref=e108]
          - text: Pending Review
          - generic [ref=e111]: "128"
      - generic [ref=e112]:
        - generic [ref=e113]: Content
        - link "Apps & Games 68k" [ref=e114] [cursor=pointer]:
          - /url: /steam-modern/games
          - img [ref=e116]
          - text: Apps & Games
          - generic [ref=e118]: 68k
        - link "Awaiting Review 34" [ref=e119] [cursor=pointer]:
          - /url: /steam-modern/games/review
          - img [ref=e121]
          - text: Awaiting Review
          - generic [ref=e123]: "34"
        - link "Store Mgmt" [ref=e124] [cursor=pointer]:
          - /url: /steam-modern/store
          - img [ref=e126]
          - text: Store Mgmt
      - generic [ref=e129]:
        - generic [ref=e130]: Community
        - link "Report Queue 9" [ref=e131] [cursor=pointer]:
          - /url: /steam-modern/community
          - img [ref=e133]
          - text: Report Queue
          - generic [ref=e135]: "9"
        - link "Reviews" [ref=e136] [cursor=pointer]:
          - /url: /steam-modern/community/reviews
          - img [ref=e138]
          - text: Reviews
        - link "Artwork" [ref=e140] [cursor=pointer]:
          - /url: /steam-modern/community/artwork
          - img [ref=e142]
          - text: Artwork
      - generic [ref=e146]:
        - generic [ref=e147]: Infrastructure
        - link "Analytics" [ref=e148] [cursor=pointer]:
          - /url: /steam-modern/reports
          - img [ref=e150]
          - text: Analytics
        - link "CDN Status" [ref=e151] [cursor=pointer]:
          - /url: /steam-modern/reports/cdn
          - img [ref=e153]
          - text: CDN Status
        - link "Config" [ref=e156] [cursor=pointer]:
          - /url: /steam-modern/settings
          - img [ref=e158]
          - text: Config
    - main [ref=e161]:
      - generic [ref=e162]:
        - generic [ref=e163]:
          - generic [ref=e164]: Applications & Games
          - generic [ref=e165]: 68,412 total apps · 34 awaiting review
        - generic [ref=e166]:
          - button "Export" [ref=e167] [cursor=pointer]:
            - img [ref=e168]
            - text: Export
          - button "Submit App" [ref=e171] [cursor=pointer]:
            - img [ref=e172]
            - text: Submit App
      - generic [ref=e173]:
        - generic [ref=e174]:
          - generic:
            - img
          - textbox "Search by name or App ID…" [ref=e175]
        - generic [ref=e176]: "Category:"
        - combobox [ref=e177] [cursor=pointer]:
          - option "All" [selected]
          - option "RPG"
          - option "Shooter"
          - option "Strategy"
          - option "MOBA"
          - option "Indie"
          - option "Survival"
          - option "Action"
        - generic [ref=e178]: Showing 8 results
      - table [ref=e180]:
        - rowgroup [ref=e181]:
          - row "App Developer Category Price Owners Review Score Status Released Actions" [ref=e182]:
            - columnheader "App" [ref=e183]
            - columnheader "Developer" [ref=e184]
            - columnheader "Category" [ref=e185]
            - columnheader "Price" [ref=e186]
            - columnheader "Owners" [ref=e187]
            - columnheader "Review Score" [ref=e188]
            - columnheader "Status" [ref=e189]
            - columnheader "Released" [ref=e190]
            - columnheader "Actions" [ref=e191]
        - rowgroup [ref=e192]:
          - 'row "T The Elder Scrolls V: Skyrim APP-67577 Bethesda Softworks RPG $29.99 19.1M 78% active Nov 11, 2011 View Edit Remove" [ref=e193]':
            - 'cell "T The Elder Scrolls V: Skyrim APP-67577" [ref=e194]':
              - generic [ref=e195]: T
              - text: "The Elder Scrolls V: Skyrim"
              - text: APP-67577
            - cell "Bethesda Softworks" [ref=e196]
            - cell "RPG" [ref=e197]:
              - generic [ref=e198]: RPG
            - cell "$29.99" [ref=e199]
            - cell "19.1M" [ref=e200]
            - cell "78%" [ref=e201]: 78%
            - cell "active" [ref=e204]:
              - generic [ref=e205]: active
            - cell "Nov 11, 2011" [ref=e206]
            - cell "View Edit Remove" [ref=e207]
          - row "B Borderlands 2 APP-60021 Gearbox Software Shooter $29.99 12.7M 77% active Sep 18, 2012 View Edit Remove" [ref=e208]:
            - cell "B Borderlands 2 APP-60021" [ref=e209]:
              - generic [ref=e210]: B
              - text: Borderlands 2
              - text: APP-60021
            - cell "Gearbox Software" [ref=e211]
            - cell "Shooter" [ref=e212]:
              - generic [ref=e213]: Shooter
            - cell "$29.99" [ref=e214]
            - cell "12.7M" [ref=e215]
            - cell "77%" [ref=e216]: 77%
            - cell "active" [ref=e219]:
              - generic [ref=e220]: active
            - cell "Sep 18, 2012" [ref=e221]
            - cell "View Edit Remove" [ref=e222]
          - 'row "X XCOM: Enemy Unknown APP-70151 Firaxis Games Strategy $49.99 16.8M 87% active Oct 9, 2012 View Edit Remove" [ref=e223]':
            - 'cell "X XCOM: Enemy Unknown APP-70151" [ref=e224]':
              - generic [ref=e225]: X
              - text: "XCOM: Enemy Unknown"
              - text: APP-70151
            - cell "Firaxis Games" [ref=e226]
            - cell "Strategy" [ref=e227]:
              - generic [ref=e228]: Strategy
            - cell "$49.99" [ref=e229]
            - cell "16.8M" [ref=e230]
            - cell "87%" [ref=e231]: 87%
            - cell "active" [ref=e234]:
              - generic [ref=e235]: active
            - cell "Oct 9, 2012" [ref=e236]
            - cell "View Edit Remove" [ref=e237]
          - row "D Dota 2 APP-58565 Valve MOBA Free 17.5M 90% active Jul 9, 2013 View Edit Remove" [ref=e238]:
            - cell "D Dota 2 APP-58565" [ref=e239]:
              - generic [ref=e240]: D
              - text: Dota 2
              - text: APP-58565
            - cell "Valve" [ref=e241]
            - cell "MOBA" [ref=e242]:
              - generic [ref=e243]: MOBA
            - cell "Free" [ref=e244]
            - cell "17.5M" [ref=e245]
            - cell "90%" [ref=e246]: 90%
            - cell "active" [ref=e249]:
              - generic [ref=e250]: active
            - cell "Jul 9, 2013" [ref=e251]
            - cell "View Edit Remove" [ref=e252]
          - row "T Team Fortress 2 APP-8563 Valve Shooter Free 6.7M 72% active Oct 10, 2007 View Edit Remove" [ref=e253]:
            - cell "T Team Fortress 2 APP-8563" [ref=e254]:
              - generic [ref=e255]: T
              - text: Team Fortress 2
              - text: APP-8563
            - cell "Valve" [ref=e256]
            - cell "Shooter" [ref=e257]:
              - generic [ref=e258]: Shooter
            - cell "Free" [ref=e259]
            - cell "6.7M" [ref=e260]
            - cell "72%" [ref=e261]: 72%
            - cell "active" [ref=e264]:
              - generic [ref=e265]: active
            - cell "Oct 10, 2007" [ref=e266]
            - cell "View Edit Remove" [ref=e267]
          - row "D DayZ (Early Access) APP-16625 Bohemia Interactive Survival $29.99 13.5M 82% review Dec 16, 2013 View Edit Remove" [ref=e268]:
            - cell "D DayZ (Early Access) APP-16625" [ref=e269]:
              - generic [ref=e270]: D
              - text: DayZ (Early Access)
              - text: APP-16625
            - cell "Bohemia Interactive" [ref=e271]
            - cell "Survival" [ref=e272]:
              - generic [ref=e273]: Survival
            - cell "$29.99" [ref=e274]
            - cell "13.5M" [ref=e275]
            - cell "82%" [ref=e276]: 82%
            - cell "review" [ref=e279]:
              - generic [ref=e280]: review
            - cell "Dec 16, 2013" [ref=e281]
            - cell "View Edit Remove" [ref=e282]
          - 'row "M Monaco: What''s Yours Is Mine APP-51633 Pocketwatch Games Indie $14.99 15.8M 73% active Apr 24, 2013 View Edit Remove" [ref=e283]':
            - 'cell "M Monaco: What''s Yours Is Mine APP-51633" [ref=e284]':
              - generic [ref=e285]: M
              - text: "Monaco: What's Yours Is Mine"
              - text: APP-51633
            - cell "Pocketwatch Games" [ref=e286]
            - cell "Indie" [ref=e287]:
              - generic [ref=e288]: Indie
            - cell "$14.99" [ref=e289]
            - cell "15.8M" [ref=e290]
            - cell "73%" [ref=e291]: 73%
            - cell "active" [ref=e294]:
              - generic [ref=e295]: active
            - cell "Apr 24, 2013" [ref=e296]
            - cell "View Edit Remove" [ref=e297]
          - row "[ [REDACTED] Title APP-49475 Anon Studios Action $19.99 0 N/A pending TBD View Edit Remove" [ref=e298]:
            - cell "[ [REDACTED] Title APP-49475" [ref=e299]:
              - generic [ref=e300]: "["
              - text: "[REDACTED] Title"
              - text: APP-49475
            - cell "Anon Studios" [ref=e301]
            - cell "Action" [ref=e302]:
              - generic [ref=e303]: Action
            - cell "$19.99" [ref=e304]
            - cell "0" [ref=e305]
            - cell "N/A" [ref=e306]
            - cell "pending" [ref=e307]:
              - generic [ref=e308]: pending
            - cell "TBD" [ref=e309]
            - cell "View Edit Remove" [ref=e310]
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
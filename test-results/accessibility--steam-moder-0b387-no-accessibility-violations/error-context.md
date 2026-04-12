# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.test.ts >> /steam-modern/users has no accessibility violations
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
          - generic [ref=e164]: User Management
          - generic [ref=e165]: 147,382,019 total accounts · 8.4M concurrent
        - generic [ref=e166]:
          - button "Export CSV" [ref=e167] [cursor=pointer]:
            - img [ref=e168]
            - text: Export CSV
          - button "Invite Admin" [ref=e171] [cursor=pointer]:
            - img [ref=e172]
            - text: Invite Admin
      - generic [ref=e173]:
        - generic [ref=e174]:
          - generic:
            - img
          - textbox "Search by name or ID…" [ref=e175]
        - generic [ref=e176]: "Status:"
        - combobox [ref=e177] [cursor=pointer]:
          - option "All" [selected]
          - option "Online"
          - option "Away"
          - option "Offline"
          - option "Banned"
        - generic [ref=e178]: Showing 8 of 8
      - table [ref=e180]:
        - rowgroup [ref=e181]:
          - row "User Status Country Games Hours Joined Last Seen Actions" [ref=e182]:
            - columnheader "User" [ref=e183]
            - columnheader "Status" [ref=e184]
            - columnheader "Country" [ref=e185]
            - columnheader "Games" [ref=e186]
            - columnheader "Hours" [ref=e187]
            - columnheader "Joined" [ref=e188]
            - columnheader "Last Seen" [ref=e189]
            - columnheader "Actions" [ref=e190]
        - rowgroup [ref=e191]:
          - 'row "WI wilma37 #44805567 Banned RU 3 5 Nov 10, 2012 — View Warn Unban" [ref=e192]':
            - 'cell "WI wilma37 #44805567" [ref=e193]':
              - generic [ref=e194]: WI
              - text: wilma37
              - text: "#44805567"
            - cell "Banned" [ref=e195]:
              - generic [ref=e197]: Banned
            - cell "RU" [ref=e198]
            - cell "3" [ref=e199]
            - cell "5" [ref=e200]
            - cell "Nov 10, 2012" [ref=e201]
            - cell "—" [ref=e202]
            - cell "View Warn Unban" [ref=e203]
          - 'row "GL glen_batz #44805259 Online US 203 964 Nov 11, 2012 Now View Warn Ban" [ref=e204]':
            - 'cell "GL glen_batz #44805259" [ref=e205]':
              - generic [ref=e206]: GL
              - text: glen_batz
              - text: "#44805259"
            - cell "Online" [ref=e207]:
              - generic [ref=e209]: Online
            - cell "US" [ref=e210]
            - cell "203" [ref=e211]
            - cell "964" [ref=e212]
            - cell "Nov 11, 2012" [ref=e213]
            - cell "Now" [ref=e214]
            - cell "View Warn Ban" [ref=e215]
          - 'row "AL alonzo_rowe #44813448 Away DE 227 3,739 Nov 11, 2012 5h ago View Warn Ban" [ref=e216]':
            - 'cell "AL alonzo_rowe #44813448" [ref=e217]':
              - generic [ref=e218]: AL
              - text: alonzo_rowe
              - text: "#44813448"
            - cell "Away" [ref=e219]:
              - generic [ref=e221]: Away
            - cell "DE" [ref=e222]
            - cell "227" [ref=e223]
            - cell "3,739" [ref=e224]
            - cell "Nov 11, 2012" [ref=e225]
            - cell "5h ago" [ref=e226]
            - cell "View Warn Ban" [ref=e227]
          - 'row "GL gloria.stanton #44800622 Offline GB 23 6,910 Nov 10, 2012 3 days ago View Warn Ban" [ref=e228]':
            - 'cell "GL gloria.stanton #44800622" [ref=e229]':
              - generic [ref=e230]: GL
              - text: gloria.stanton
              - text: "#44800622"
            - cell "Offline" [ref=e231]:
              - generic [ref=e233]: Offline
            - cell "GB" [ref=e234]
            - cell "23" [ref=e235]
            - cell "6,910" [ref=e236]
            - cell "Nov 10, 2012" [ref=e237]
            - cell "3 days ago" [ref=e238]
            - cell "View Warn Ban" [ref=e239]
          - 'row "AR arlene99 #44814632 Online CA 184 7,701 Nov 10, 2012 Now View Warn Ban" [ref=e240]':
            - 'cell "AR arlene99 #44814632" [ref=e241]':
              - generic [ref=e242]: AR
              - text: arlene99
              - text: "#44814632"
            - cell "Online" [ref=e243]:
              - generic [ref=e245]: Online
            - cell "CA" [ref=e246]
            - cell "184" [ref=e247]
            - cell "7,701" [ref=e248]
            - cell "Nov 10, 2012" [ref=e249]
            - cell "Now" [ref=e250]
            - cell "View Warn Ban" [ref=e251]
          - 'row "JU juston_keebler #44817673 Offline DE 179 2,303 Nov 10, 2012 Yesterday View Warn Ban" [ref=e252]':
            - 'cell "JU juston_keebler #44817673" [ref=e253]':
              - generic [ref=e254]: JU
              - text: juston_keebler
              - text: "#44817673"
            - cell "Offline" [ref=e255]:
              - generic [ref=e257]: Offline
            - cell "DE" [ref=e258]
            - cell "179" [ref=e259]
            - cell "2,303" [ref=e260]
            - cell "Nov 10, 2012" [ref=e261]
            - cell "Yesterday" [ref=e262]
            - cell "View Warn Ban" [ref=e263]
          - 'row "GR grant_carter33 #44823239 Online US 200 7,031 Nov 9, 2012 Now View Warn Ban" [ref=e264]':
            - 'cell "GR grant_carter33 #44823239" [ref=e265]':
              - generic [ref=e266]: GR
              - text: grant_carter33
              - text: "#44823239"
            - cell "Online" [ref=e267]:
              - generic [ref=e269]: Online
            - cell "US" [ref=e270]
            - cell "200" [ref=e271]
            - cell "7,031" [ref=e272]
            - cell "Nov 9, 2012" [ref=e273]
            - cell "Now" [ref=e274]
            - cell "View Warn Ban" [ref=e275]
          - 'row "DO donnie_smith2 #44818127 Banned KR 1 12 Nov 9, 2012 — View Warn Unban" [ref=e276]':
            - 'cell "DO donnie_smith2 #44818127" [ref=e277]':
              - generic [ref=e278]: DO
              - text: donnie_smith2
              - text: "#44818127"
            - cell "Banned" [ref=e279]:
              - generic [ref=e281]: Banned
            - cell "KR" [ref=e282]
            - cell "1" [ref=e283]
            - cell "12" [ref=e284]
            - cell "Nov 9, 2012" [ref=e285]
            - cell "—" [ref=e286]
            - cell "View Warn Unban" [ref=e287]
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
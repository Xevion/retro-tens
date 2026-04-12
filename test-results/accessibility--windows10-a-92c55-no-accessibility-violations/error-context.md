# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.test.ts >> /windows10/action-center has no accessibility violations
- Location: tests/a11y/accessibility.test.ts:45:2

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 130

- Array []
+ Array [
+   Object {
+     "description": "Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies",
+     "help": "Interactive controls must not be nested",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/nested-interactive?application=playwright",
+     "id": "nested-interactive",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "no-focusable-content",
+             "impact": "serious",
+             "message": "Element has focusable descendants",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button type=\"button\" class=\"pos_absolute top_6px right_8px w_20px h_20px bg_none bd_none cursor_pointer c_text.disabled fs_13px d_flex ai_center jc_center op_0 trs_opacity_token(durations.fast)_ease ff_ui hover:c_text.secondary notif-dismiss\">✕</button>",
+                 "target": Array [
+                   ".mb_4px:nth-child(1) > .bg_surface\\.notifCard.bd_1px_solid_token\\(colors\\.border\\).m_2px_10px:nth-child(2) > .right_8px.fs_13px.op_0",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has focusable descendants",
+         "html": "<div class=\"bg_surface.notifCard bd_1px_solid_token(colors.border) m_2px_10px p_10px_12px pos_relative cursor_pointer trs_background_token(durations.fast)_ease hover:bg_surface.elevated hover:[&_.notif-dismiss]:op_1\" role=\"button\" tabindex=\"0\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".mb_4px:nth-child(1) > .bg_surface\\.notifCard.bd_1px_solid_token\\(colors\\.border\\).m_2px_10px:nth-child(2)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "no-focusable-content",
+             "impact": "serious",
+             "message": "Element has focusable descendants",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button type=\"button\" class=\"pos_absolute top_6px right_8px w_20px h_20px bg_none bd_none cursor_pointer c_text.disabled fs_13px d_flex ai_center jc_center op_0 trs_opacity_token(durations.fast)_ease ff_ui hover:c_text.secondary notif-dismiss\">✕</button>",
+                 "target": Array [
+                   ".bg_surface\\.notifCard.bd_1px_solid_token\\(colors\\.border\\).m_2px_10px:nth-child(3) > .right_8px.fs_13px.op_0",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has focusable descendants",
+         "html": "<div class=\"bg_surface.notifCard bd_1px_solid_token(colors.border) m_2px_10px p_10px_12px pos_relative cursor_pointer trs_background_token(durations.fast)_ease hover:bg_surface.elevated hover:[&_.notif-dismiss]:op_1\" role=\"button\" tabindex=\"0\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".bg_surface\\.notifCard.bd_1px_solid_token\\(colors\\.border\\).m_2px_10px:nth-child(3)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "no-focusable-content",
+             "impact": "serious",
+             "message": "Element has focusable descendants",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button type=\"button\" class=\"pos_absolute top_6px right_8px w_20px h_20px bg_none bd_none cursor_pointer c_text.disabled fs_13px d_flex ai_center jc_center op_0 trs_opacity_token(durations.fast)_ease ff_ui hover:c_text.secondary notif-dismiss\">✕</button>",
+                 "target": Array [
+                   ".mb_4px:nth-child(3) > .bg_surface\\.notifCard.bd_1px_solid_token\\(colors\\.border\\).m_2px_10px > .right_8px.fs_13px.op_0",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has focusable descendants",
+         "html": "<div class=\"bg_surface.notifCard bd_1px_solid_token(colors.border) m_2px_10px p_10px_12px pos_relative cursor_pointer trs_background_token(durations.fast)_ease hover:bg_surface.elevated hover:[&_.notif-dismiss]:op_1\" role=\"button\" tabindex=\"0\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".mb_4px:nth-child(3) > .bg_surface\\.notifCard.bd_1px_solid_token\\(colors\\.border\\).m_2px_10px",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "no-focusable-content",
+             "impact": "serious",
+             "message": "Element has focusable descendants",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button type=\"button\" class=\"pos_absolute top_6px right_8px w_20px h_20px bg_none bd_none cursor_pointer c_text.disabled fs_13px d_flex ai_center jc_center op_0 trs_opacity_token(durations.fast)_ease ff_ui hover:c_text.secondary notif-dismiss\">✕</button>",
+                 "target": Array [
+                   ".mb_4px:nth-child(5) > .bg_surface\\.notifCard.bd_1px_solid_token\\(colors\\.border\\).m_2px_10px > .right_8px.fs_13px.op_0",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has focusable descendants",
+         "html": "<div class=\"bg_surface.notifCard bd_1px_solid_token(colors.border) m_2px_10px p_10px_12px pos_relative cursor_pointer trs_background_token(durations.fast)_ease hover:bg_surface.elevated hover:[&_.notif-dismiss]:op_1\" role=\"button\" tabindex=\"0\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".mb_4px:nth-child(5) > .bg_surface\\.notifCard.bd_1px_solid_token\\(colors\\.border\\).m_2px_10px",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.keyboard",
+       "wcag2a",
+       "wcag412",
+       "TTv5",
+       "TT6.a",
+       "EN-301-549",
+       "EN-9.4.1.2",
+       "RGAAv4",
+       "RGAA-7.1.1",
+     ],
+   },
+ ]
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - main [ref=e7]:
    - generic [ref=e8]:
      - generic [ref=e9]:
        - generic [ref=e10]: ACTION CENTER
        - button "Clear all" [ref=e11] [cursor=pointer]
      - generic [ref=e12]:
        - generic [ref=e13]:
          - generic [ref=e14]:
            - img [ref=e16]
            - text: Mail
          - 'button "Alex Turner 3:42 PM Re: Q3 Design Review — Updated slides are attached, let me know what you think. ✕" [ref=e19] [cursor=pointer]':
            - generic [ref=e20]:
              - generic [ref=e21]: Alex Turner
              - generic [ref=e22]: 3:42 PM
            - generic [ref=e23]: "Re: Q3 Design Review — Updated slides are attached, let me know what you think."
            - button "✕" [ref=e24]
          - 'button "Microsoft Outlook 1:15 PM You have a meeting in 15 minutes: Weekly Sync with Design Team ✕" [ref=e25] [cursor=pointer]':
            - generic [ref=e26]:
              - generic [ref=e27]: Microsoft Outlook
              - generic [ref=e28]: 1:15 PM
            - generic [ref=e29]: "You have a meeting in 15 minutes: Weekly Sync with Design Team"
            - button "✕" [ref=e30]
        - generic [ref=e32]:
          - generic [ref=e33]:
            - img [ref=e35]
            - text: Calendar
          - 'button "Reminder 12:00 PM Project deadline: UI Handoff — Today at 5:00 PM ✕" [ref=e37] [cursor=pointer]':
            - generic [ref=e38]:
              - generic [ref=e39]: Reminder
              - generic [ref=e40]: 12:00 PM
            - generic [ref=e41]: "Project deadline: UI Handoff — Today at 5:00 PM"
            - button "✕" [ref=e42]
        - generic [ref=e44]:
          - generic [ref=e45]:
            - img [ref=e47]
            - text: Windows Update
          - button "Updates available 9:00 AM Cumulative Update for Windows 10 Version 1607 is ready to install. ✕" [ref=e50] [cursor=pointer]:
            - generic [ref=e51]:
              - generic [ref=e52]: Updates available
              - generic [ref=e53]: 9:00 AM
            - generic [ref=e54]: Cumulative Update for Windows 10 Version 1607 is ready to install.
            - button "✕" [ref=e55]
      - generic [ref=e56]:
        - generic [ref=e57]: Quick actions
        - generic [ref=e58]:
          - button "Wi-Fi" [ref=e59] [cursor=pointer]:
            - img [ref=e61]
            - generic [ref=e65]: Wi-Fi
          - button "Bluetooth" [ref=e66] [cursor=pointer]:
            - img [ref=e68]
            - generic [ref=e70]: Bluetooth
          - button "Airplane mode" [ref=e71] [cursor=pointer]:
            - img [ref=e73]
            - generic [ref=e75]: Airplane mode
          - button "Quiet hours" [ref=e76] [cursor=pointer]:
            - img [ref=e78]
            - generic [ref=e81]: Quiet hours
          - button "Location" [ref=e82] [cursor=pointer]:
            - img [ref=e84]
            - generic [ref=e87]: Location
          - button "Battery saver" [ref=e88] [cursor=pointer]:
            - img [ref=e90]
            - generic [ref=e92]: Battery saver
          - button "Tablet mode" [ref=e93] [cursor=pointer]:
            - img [ref=e95]
            - generic [ref=e97]: Tablet mode
          - button "All settings" [ref=e98] [cursor=pointer]:
            - img [ref=e100]
            - generic [ref=e103]: All settings
  - generic [ref=e104]:
    - generic [ref=e105]:
      - link "Start" [ref=e106] [cursor=pointer]:
        - /url: /windows10
        - img [ref=e107]
      - generic "Search Windows" [ref=e112]:
        - img [ref=e113]
        - generic [ref=e116]: Search Windows
      - link "Action Center" [ref=e117] [cursor=pointer]:
        - /url: /windows10/action-center
        - img [ref=e118]
      - link "Resume Builder" [ref=e120] [cursor=pointer]:
        - /url: /windows10/resume-builder
        - img [ref=e121]
    - generic [ref=e124]:
      - generic [ref=e125]:
        - generic [ref=e126]:
          - img [ref=e127]
          - img [ref=e131]
        - generic [ref=e133]:
          - generic [ref=e134]: 12:37 AM
          - generic [ref=e135]: 4/12/2026
      - link "4" [ref=e136] [cursor=pointer]:
        - /url: /windows10/action-center
        - img [ref=e137]
        - generic [ref=e139]: "4"
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
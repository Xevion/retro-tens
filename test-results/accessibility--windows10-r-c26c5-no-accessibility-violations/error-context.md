# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.test.ts >> /windows10/resume-builder has no accessibility violations
- Location: tests/a11y/accessibility.test.ts:45:2

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -  1
+ Received  + 42

- Array []
+ Array [
+   Object {
+     "description": "Ensure all ARIA attributes have valid values",
+     "help": "ARIA attributes must conform to valid values",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/aria-valid-attr-value?application=playwright",
+     "id": "aria-valid-attr-value",
+     "impact": "critical",
+     "nodes": Array [
+       Object {
+         "all": Array [
+           Object {
+             "data": Array [
+               "aria-controls=\"tabs:s1:content-form\"",
+             ],
+             "id": "aria-valid-attr-value",
+             "impact": "critical",
+             "message": "Invalid ARIA attribute value: aria-controls=\"tabs:s1:content-form\"",
+             "relatedNodes": Array [],
+           },
+         ],
+         "any": Array [],
+         "failureSummary": "Fix all of the following:
+   Invalid ARIA attribute value: aria-controls=\"tabs:s1:content-form\"",
+         "html": "<button data-scope=\"tabs\" data-part=\"trigger\" role=\"tab\" type=\"button\" dir=\"ltr\" data-orientation=\"horizontal\" data-value=\"form\" aria-selected=\"true\" data-selected=\"\" data-focus=\"\" aria-controls=\"tabs:s1:content-form\" data-ownedby=\"tabs:s1:list\" id=\"tabs:s1:trigger-form\" tabindex=\"0\" ...>",
+         "impact": "critical",
+         "none": Array [],
+         "target": Array [
+           "#tabs\\:s1\\:trigger-form",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.aria",
+       "wcag2a",
+       "wcag412",
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
        - generic [ref=e10]:
          - img [ref=e11]
          - generic [ref=e13]: Resume Builder — Microsoft Office Style
        - generic [ref=e14]:
          - button "Minimize" [ref=e15] [cursor=pointer]:
            - img [ref=e16]
          - button "Maximize" [ref=e17] [cursor=pointer]:
            - img [ref=e18]
          - button "Close" [ref=e20] [cursor=pointer]:
            - img [ref=e21]
      - tablist [ref=e25]:
        - tab "FORM VIEW" [selected] [ref=e26] [cursor=pointer]
        - tab "LIVE PREVIEW" [ref=e27] [cursor=pointer]
      - generic [ref=e30]:
        - generic [ref=e31]:
          - generic [ref=e32]:
            - generic [ref=e33]: Sections
            - button "Personal Information" [ref=e34] [cursor=pointer]: Personal Information
            - button "Work Experience" [ref=e36] [cursor=pointer]: Work Experience
            - button "Education" [ref=e38] [cursor=pointer]: Education
            - button "Skills & Technologies" [ref=e40] [cursor=pointer]: Skills & Technologies
            - button "Projects & Portfolio" [ref=e42] [cursor=pointer]: Projects & Portfolio
          - generic [ref=e44]:
            - generic [ref=e45]: Templates
            - button "Technical" [ref=e46] [cursor=pointer]: Technical
            - button "Minimal" [ref=e48] [cursor=pointer]: Minimal
            - button "Executive" [ref=e50] [cursor=pointer]: Executive
        - generic [ref=e52]:
          - generic [ref=e53]:
            - generic [ref=e54]: Personal Information
            - generic [ref=e55]: Your basic contact details and professional summary
          - generic [ref=e56]:
            - generic [ref=e57]:
              - generic [ref=e58]:
                - generic [ref=e59]: First Name *
                - textbox "First Name *" [ref=e60]:
                  - /placeholder: e.g. Alex
              - generic [ref=e61]:
                - generic [ref=e62]: Last Name *
                - textbox "Last Name *" [ref=e63]:
                  - /placeholder: e.g. Rivera
            - generic [ref=e64]:
              - generic [ref=e65]:
                - generic [ref=e66]: Professional Title *
                - textbox "Professional Title *" [ref=e67]:
                  - /placeholder: e.g. Senior Software Engineer
              - generic [ref=e68]:
                - generic [ref=e69]: Location
                - textbox "Location" [ref=e70]:
                  - /placeholder: e.g. San Antonio, TX
            - generic [ref=e71]:
              - generic [ref=e72]:
                - generic [ref=e73]: Email Address *
                - textbox "Email Address *" [ref=e74]:
                  - /placeholder: alex@example.com
              - generic [ref=e75]:
                - generic [ref=e76]: Phone Number
                - textbox "Phone Number" [ref=e77]:
                  - /placeholder: (555) 000-0000
            - generic [ref=e78]:
              - generic [ref=e79]: Professional Summary
              - textbox "Professional Summary" [ref=e80]:
                - /placeholder: Write 2-3 sentences describing your experience, expertise, and career goals...
      - generic [ref=e81]:
        - generic [ref=e82]: Section 1 of 5 — Personal Information
        - generic [ref=e83]:
          - button "Save Draft" [ref=e84] [cursor=pointer]
          - button "Next →" [ref=e85] [cursor=pointer]
  - generic [ref=e86]:
    - generic [ref=e87]:
      - link "Start" [ref=e88] [cursor=pointer]:
        - /url: /windows10
        - img [ref=e89]
      - generic "Search Windows" [ref=e94]:
        - img [ref=e95]
        - generic [ref=e98]: Search Windows
      - link "Action Center" [ref=e99] [cursor=pointer]:
        - /url: /windows10/action-center
        - img [ref=e100]
      - link "Resume Builder" [ref=e102] [cursor=pointer]:
        - /url: /windows10/resume-builder
        - img [ref=e103]
    - generic [ref=e106]:
      - generic [ref=e107]:
        - generic [ref=e108]:
          - img [ref=e109]
          - img [ref=e113]
        - generic [ref=e115]:
          - generic [ref=e116]: 12:37 AM
          - generic [ref=e117]: 4/12/2026
      - link "4" [ref=e118] [cursor=pointer]:
        - /url: /windows10/action-center
        - img [ref=e119]
        - generic [ref=e121]: "4"
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
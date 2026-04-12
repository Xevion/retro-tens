import { join } from 'node:path';
import AxeBuilder from '@axe-core/playwright';
import type { Page } from '@playwright/test';
import { expect, test } from '@playwright/test';
import { routeMeta } from '../../src/lib/meta';
import type { EraId } from '../../src/lib/types';
import { discoverRoutes } from '../discover-routes';

const routesDir = join(import.meta.dirname, '..', '..', 'src', 'routes');
const routes = discoverRoutes(routesDir).map((path) => ({
	path,
	era: routeMeta[path]?.era
}));

/**
 * Contrast rules are disabled for era pages because historically faithful
 * palettes intentionally violate WCAG AA contrast ratios.
 * See CLAUDE.md § Accessibility for the exemption policy.
 */
const contrastRules = ['color-contrast', 'color-contrast-enhanced'] as const;

function buildAxe(page: Page, era?: EraId): AxeBuilder {
	const builder = new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']);

	if (era) {
		builder.disableRules([...contrastRules]);
	}

	return builder;
}

for (const { path, era } of routes) {
	test(`${path} has no accessibility violations`, async ({ page }) => {
		await page.goto(path);
		const results = await buildAxe(page, era).analyze();

		expect(results.violations).toEqual([]);
	});
}

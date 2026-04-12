import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { routeMeta } from '../src/lib/meta';
import { discoverRoutes } from './discover-routes';

const routesDir = join(import.meta.dirname, '..', 'src', 'routes');
const fileRoutes = discoverRoutes(routesDir);

describe('route metadata', () => {
	it('discovers at least one route', () => {
		expect(fileRoutes.length).toBeGreaterThan(0);
	});

	it.each(fileRoutes)('%s has a metadata entry', (route) => {
		expect(routeMeta).toHaveProperty(route);
	});

	it('every metadata entry maps to an existing route', () => {
		for (const path of Object.keys(routeMeta)) {
			const pagePath =
				path === '/'
					? join(routesDir, '+page.svelte')
					: join(routesDir, ...path.split('/').filter(Boolean), '+page.svelte');
			expect(existsSync(pagePath), `${path} has metadata but no +page.svelte`).toBe(true);
		}
	});

	it.each(Object.entries(routeMeta))('%s has non-empty title and description', (_path, meta) => {
		expect(meta.title).toBeTruthy();
		expect(meta.description).toBeTruthy();
		expect(meta.description.length).toBeGreaterThan(20);
	});
});

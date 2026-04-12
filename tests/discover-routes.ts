import { readdirSync } from 'node:fs';
import { join } from 'node:path';

export function discoverRoutes(dir: string, prefix = ''): string[] {
	const routes: string[] = [];
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		if (entry.isDirectory()) {
			routes.push(...discoverRoutes(join(dir, entry.name), `${prefix}/${entry.name}`));
		} else if (entry.name === '+page.svelte') {
			routes.push(prefix || '/');
		}
	}
	return routes;
}

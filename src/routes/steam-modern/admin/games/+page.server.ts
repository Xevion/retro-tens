import { games, filterCategories } from '$lib/data/steam-modern/games';

export function load() {
	return { games, filterCategories };
}

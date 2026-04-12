import { games, topSellers, featured, subTabs } from '$lib/data/steam-legacy/store';

export function load() {
	return { games, topSellers, featured, subTabs };
}

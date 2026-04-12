import { activity, discussions, subTabs } from '$lib/data/steam-legacy/community';

export function load() {
	return { activity, discussions, subTabs };
}

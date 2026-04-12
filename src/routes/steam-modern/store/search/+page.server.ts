import {
	games,
	allTags,
	contentTypes,
	playerCounts,
	features,
	sortOptions
} from '$lib/data/steam-modern/store-search';

export function load() {
	return { games, allTags, contentTypes, playerCounts, features, sortOptions };
}

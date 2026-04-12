// Seed: 7718 — Steam Modern store browse/search data
import { faker } from '@faker-js/faker';

faker.seed(7718);

export interface StoreGame {
	appId: number;
	name: string;
	tags: string[];
	releaseDate: string;
	reviewScore: number;
	reviewLabel: string;
	reviewCount: number;
	price: string;
	originalPrice?: string;
	discountPct?: number;
	platforms: { windows: boolean; mac: boolean; linux: boolean };
}

type ReviewSentiment = 'positive' | 'mixed' | 'negative';

function reviewLabel(score: number): string {
	if (score >= 95) return 'Overwhelmingly Positive';
	if (score >= 85) return 'Very Positive';
	if (score >= 70) return 'Mostly Positive';
	if (score >= 40) return 'Mixed';
	if (score >= 20) return 'Mostly Negative';
	return 'Very Negative';
}

export function reviewSentiment(score: number): ReviewSentiment {
	if (score >= 70) return 'positive';
	if (score >= 40) return 'mixed';
	return 'negative';
}

interface GameTemplate {
	name: string;
	tags: string[];
	releaseDate: string;
	price: string;
	originalPrice?: string;
	discountPct?: number;
	platforms: { windows: boolean; mac: boolean; linux: boolean };
}

// Real titles from the ~2018 Steam era
const templates: GameTemplate[] = [
	{
		name: "PLAYERUNKNOWN'S BATTLEGROUNDS",
		tags: ['Action', 'Massively Multiplayer', 'Survival', 'Shooter'],
		releaseDate: 'Dec 21, 2017',
		price: '$29.99',
		platforms: { windows: true, mac: false, linux: false }
	},
	{
		name: 'The Witcher 3: Wild Hunt',
		tags: ['RPG', 'Open World', 'Story Rich', 'Adventure'],
		releaseDate: 'May 18, 2015',
		price: '$9.99',
		originalPrice: '$39.99',
		discountPct: -75,
		platforms: { windows: true, mac: false, linux: false }
	},
	{
		name: 'Grand Theft Auto V',
		tags: ['Action', 'Open World', 'Multiplayer', 'Crime'],
		releaseDate: 'Apr 14, 2015',
		price: '$29.99',
		platforms: { windows: true, mac: false, linux: false }
	},
	{
		name: 'Stardew Valley',
		tags: ['Indie', 'RPG', 'Simulation', 'Casual'],
		releaseDate: 'Feb 26, 2016',
		price: '$14.99',
		platforms: { windows: true, mac: true, linux: true }
	},
	{
		name: 'Counter-Strike: Global Offensive',
		tags: ['Action', 'Shooter', 'Multiplayer', 'Competitive'],
		releaseDate: 'Aug 21, 2012',
		price: 'Free to Play',
		platforms: { windows: true, mac: true, linux: true }
	},
	{
		name: 'Hollow Knight',
		tags: ['Indie', 'Action', 'Adventure', 'Platformer'],
		releaseDate: 'Feb 24, 2017',
		price: '$7.49',
		originalPrice: '$14.99',
		discountPct: -50,
		platforms: { windows: true, mac: true, linux: true }
	},
	{
		name: 'Celeste',
		tags: ['Indie', 'Platformer', 'Difficult', 'Singleplayer'],
		releaseDate: 'Jan 25, 2018',
		price: '$19.99',
		platforms: { windows: true, mac: false, linux: true }
	},
	{
		name: 'Monster Hunter: World',
		tags: ['Action', 'RPG', 'Co-op', 'Multiplayer'],
		releaseDate: 'Aug 9, 2018',
		price: '$29.99',
		platforms: { windows: true, mac: false, linux: false }
	},
	{
		name: 'Subnautica',
		tags: ['Adventure', 'Survival', 'Open World', 'Exploration'],
		releaseDate: 'Jan 23, 2018',
		price: '$29.99',
		platforms: { windows: true, mac: true, linux: false }
	},
	{
		name: 'Dead Cells',
		tags: ['Indie', 'Action', 'Roguelike', 'Platformer'],
		releaseDate: 'Aug 7, 2018',
		price: '$24.99',
		platforms: { windows: true, mac: true, linux: true }
	},
	{
		name: 'Slay the Spire',
		tags: ['Indie', 'Strategy', 'Roguelike', 'Card Game'],
		releaseDate: 'Jan 23, 2019',
		price: '$12.49',
		originalPrice: '$24.99',
		discountPct: -50,
		platforms: { windows: true, mac: true, linux: true }
	},
	{
		name: 'Divinity: Original Sin 2',
		tags: ['RPG', 'Strategy', 'Co-op', 'Story Rich'],
		releaseDate: 'Sep 14, 2017',
		price: '$44.99',
		platforms: { windows: true, mac: true, linux: false }
	},
	{
		name: 'DOOM',
		tags: ['Action', 'Shooter', 'Singleplayer', 'Gore'],
		releaseDate: 'May 12, 2016',
		price: '$19.99',
		platforms: { windows: true, mac: false, linux: false }
	},
	{
		name: 'Factorio',
		tags: ['Indie', 'Simulation', 'Strategy', 'Automation'],
		releaseDate: 'Aug 14, 2020',
		price: '$30.00',
		platforms: { windows: true, mac: true, linux: true }
	},
	{
		name: 'Terraria',
		tags: ['Indie', 'Sandbox', 'Survival', 'Adventure'],
		releaseDate: 'May 16, 2011',
		price: '$4.99',
		originalPrice: '$9.99',
		discountPct: -50,
		platforms: { windows: true, mac: true, linux: true }
	},
	{
		name: 'Cuphead',
		tags: ['Indie', 'Action', 'Difficult', 'Platformer'],
		releaseDate: 'Sep 29, 2017',
		price: '$19.99',
		platforms: { windows: true, mac: true, linux: false }
	},
	{
		name: 'Dark Souls III',
		tags: ['RPG', 'Action', 'Souls-like', 'Difficult'],
		releaseDate: 'Apr 11, 2016',
		price: '$14.99',
		originalPrice: '$59.99',
		discountPct: -75,
		platforms: { windows: true, mac: false, linux: false }
	},
	{
		name: 'Civilization VI',
		tags: ['Strategy', 'Simulation', 'Singleplayer', 'Multiplayer'],
		releaseDate: 'Oct 20, 2016',
		price: '$59.99',
		platforms: { windows: true, mac: true, linux: true }
	},
	{
		name: 'Rocket League',
		tags: ['Action', 'Sports', 'Racing', 'Multiplayer'],
		releaseDate: 'Jul 7, 2015',
		price: 'Free to Play',
		platforms: { windows: true, mac: false, linux: true }
	},
	{
		name: 'RimWorld',
		tags: ['Indie', 'Strategy', 'Simulation', 'Colony Sim'],
		releaseDate: 'Oct 17, 2018',
		price: '$34.99',
		platforms: { windows: true, mac: true, linux: true }
	}
];

export const games: StoreGame[] = templates.map((t) => {
	const score = faker.number.int({ min: 55, max: 98 });
	return {
		appId: faker.number.int({ min: 200000, max: 999999 }),
		name: t.name,
		tags: t.tags,
		releaseDate: t.releaseDate,
		reviewScore: score,
		reviewLabel: reviewLabel(score),
		reviewCount: faker.number.int({ min: 500, max: 300000 }),
		price: t.price,
		originalPrice: t.originalPrice,
		discountPct: t.discountPct,
		platforms: t.platforms
	};
});

export const allTags = [
	'Indie',
	'Action',
	'Adventure',
	'Casual',
	'Strategy',
	'RPG',
	'Simulation',
	'Sports',
	'Racing',
	'Multiplayer',
	'Singleplayer',
	'Co-op',
	'Open World',
	'Shooter',
	'Platformer',
	'Survival',
	'Story Rich',
	'Roguelike',
	'Difficult'
] as const;

export type TagFilter = (typeof allTags)[number];

export const contentTypes = [
	'Games',
	'Software',
	'Videos',
	'Downloadable Content',
	'Demos'
] as const;

export const playerCounts = [
	'Single-player',
	'Multi-player',
	'Online Multi-Player',
	'Local Multi-Player',
	'Co-op',
	'Online Co-op',
	'Local Co-op',
	'Shared/Split Screen',
	'Cross-Platform Multiplayer'
] as const;

export const features = [
	'Full Controller Support',
	'Partial Controller Support',
	'Steam Achievements',
	'Steam Trading Cards',
	'Steam Workshop',
	'Steam Cloud',
	'Remote Play Together'
] as const;

export type SortOption =
	| 'relevance'
	| 'release_date'
	| 'name'
	| 'price_low'
	| 'price_high'
	| 'reviews';

export const sortOptions: { value: SortOption; label: string }[] = [
	{ value: 'relevance', label: 'Relevance' },
	{ value: 'release_date', label: 'Release Date' },
	{ value: 'name', label: 'Name' },
	{ value: 'price_low', label: 'Lowest Price' },
	{ value: 'price_high', label: 'Highest Price' },
	{ value: 'reviews', label: 'User Reviews' }
];

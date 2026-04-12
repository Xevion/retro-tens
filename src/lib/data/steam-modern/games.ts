// Seed: 2013 — Steam Modern games catalog data
import { faker } from '@faker-js/faker';

faker.seed(2013);

export type GameStatus = 'active' | 'review' | 'pending';

interface Game {
	id: string;
	name: string;
	developer: string;
	category: string;
	price: string;
	owners: string;
	reviews: number;
	status: GameStatus;
	released: string;
}

interface GameTemplate {
	name: string;
	developer: string;
	category: string;
	price: string;
	released: string;
	status: GameStatus;
}

// Real titles from the 2012–2013 Steam era
const templates: GameTemplate[] = [
	{
		name: 'The Elder Scrolls V: Skyrim',
		developer: 'Bethesda Softworks',
		category: 'RPG',
		price: '$29.99',
		released: 'Nov 11, 2011',
		status: 'active'
	},
	{
		name: 'Borderlands 2',
		developer: 'Gearbox Software',
		category: 'Shooter',
		price: '$29.99',
		released: 'Sep 18, 2012',
		status: 'active'
	},
	{
		name: 'XCOM: Enemy Unknown',
		developer: 'Firaxis Games',
		category: 'Strategy',
		price: '$49.99',
		released: 'Oct 9, 2012',
		status: 'active'
	},
	{
		name: 'Dota 2',
		developer: 'Valve',
		category: 'MOBA',
		price: 'Free',
		released: 'Jul 9, 2013',
		status: 'active'
	},
	{
		name: 'Team Fortress 2',
		developer: 'Valve',
		category: 'Shooter',
		price: 'Free',
		released: 'Oct 10, 2007',
		status: 'active'
	},
	{
		name: 'DayZ (Early Access)',
		developer: 'Bohemia Interactive',
		category: 'Survival',
		price: '$29.99',
		released: 'Dec 16, 2013',
		status: 'review'
	},
	{
		name: "Monaco: What's Yours Is Mine",
		developer: 'Pocketwatch Games',
		category: 'Indie',
		price: '$14.99',
		released: 'Apr 24, 2013',
		status: 'active'
	},
	{
		name: '[REDACTED] Title',
		developer: 'Anon Studios',
		category: 'Action',
		price: '$19.99',
		released: 'TBD',
		status: 'pending'
	}
];

function formatOwners(n: number): string {
	if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
	if (n >= 1_000) return `${Math.round(n / 1_000)}K`;
	return n.toString();
}

export const games: Game[] = templates.map((t) => ({
	id: `APP-${faker.number.int({ min: 100, max: 99999 })}`,
	name: t.name,
	developer: t.developer,
	category: t.category,
	price: t.price,
	owners:
		t.status === 'pending'
			? '0'
			: formatOwners(faker.number.int({ min: 200_000, max: 20_000_000 })),
	reviews: t.status === 'pending' ? 0 : faker.number.int({ min: 70, max: 99 }),
	status: t.status,
	released: t.released
}));

export const filterCategories = [
	{ value: 'all', label: 'All' },
	{ value: 'RPG', label: 'RPG' },
	{ value: 'Shooter', label: 'Shooter' },
	{ value: 'Strategy', label: 'Strategy' },
	{ value: 'MOBA', label: 'MOBA' },
	{ value: 'Indie', label: 'Indie' },
	{ value: 'Survival', label: 'Survival' },
	{ value: 'Action', label: 'Action' }
] as const;

export type CategoryFilter = (typeof filterCategories)[number]['value'];

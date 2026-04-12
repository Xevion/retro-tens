/**
 * Seeded fake data for the steam-legacy Store page.
 * Seed: 2012 (era-appropriate)
 */

type StoreGame = {
	name: string;
	tag: string;
	price: string;
	discount?: string;
	icon: string;
	color: string;
	sale?: boolean;
	free?: boolean;
};

type TopSeller = {
	rank: number;
	name: string;
	price: string;
	icon: string;
	color: string;
};

export const subTabs = [
	'Featured',
	'New Releases',
	'Top Sellers',
	'Specials',
	'Greenlight',
	'Free to Play'
];

export const games: StoreGame[] = [
	{
		name: 'Skyrim',
		tag: 'RPG',
		price: '$14.99',
		discount: '-75%',
		icon: '⚔',
		color: 'linear-gradient(135deg,#1a0a0a,#3a1010)',
		sale: true
	},
	{
		name: 'Mass Effect 3',
		tag: 'Action',
		price: '$59.99',
		icon: '🚀',
		color: 'linear-gradient(135deg,#0a0a2a,#10103a)'
	},
	{
		name: 'Torchlight II',
		tag: 'RPG',
		price: '$9.99',
		discount: '-50%',
		icon: '🏰',
		color: 'linear-gradient(135deg,#0a1a0a,#10301a)',
		sale: true
	},
	{
		name: 'Borderlands 2',
		tag: 'Shooter',
		price: '$29.99',
		icon: '🔫',
		color: 'linear-gradient(135deg,#1a1a0a,#3a3010)'
	},
	{
		name: 'XCOM: Enemy Unknown',
		tag: 'Strategy',
		price: '$49.99',
		icon: '🌍',
		color: 'linear-gradient(135deg,#1a0a1a,#3a1030)'
	},
	{
		name: 'Team Fortress 2',
		tag: 'Shooter',
		price: 'Free',
		discount: '-25%',
		icon: '🎮',
		color: 'linear-gradient(135deg,#0a1a1a,#103030)',
		free: true
	},
	{
		name: 'FTL: Faster Than Light',
		tag: 'Strategy',
		price: '$9.99',
		icon: '⚡',
		color: 'linear-gradient(135deg,#1a1010,#2a2020)'
	},
	{
		name: 'The Witcher 2',
		tag: 'RPG',
		price: '$13.39',
		discount: '-33%',
		icon: '🗡',
		color: 'linear-gradient(135deg,#101a10,#203020)',
		sale: true
	}
];

export const topSellers: TopSeller[] = [
	{
		rank: 1,
		name: 'The Elder Scrolls V: Skyrim',
		price: '$14.99',
		icon: '⚔',
		color: 'linear-gradient(135deg,#1a0a0a,#3a1010)'
	},
	{
		rank: 2,
		name: 'Borderlands 2',
		price: '$29.99',
		icon: '🔫',
		color: 'linear-gradient(135deg,#1a1a0a,#3a3010)'
	},
	{
		rank: 3,
		name: 'Mass Effect 3',
		price: '$59.99',
		icon: '🚀',
		color: 'linear-gradient(135deg,#0a0a2a,#10103a)'
	},
	{
		rank: 4,
		name: 'XCOM: Enemy Unknown',
		price: '$49.99',
		icon: '🌍',
		color: 'linear-gradient(135deg,#1a0a1a,#3a1030)'
	}
];

export const featured = {
	name: 'Dishonored',
	tag: 'Featured & Recommended',
	description:
		'Become the ultimate supernatural assassin in this first person action game. Bend time, possess enemies, and link kills in this dark steampunk world.',
	discount: '-40%',
	originalPrice: '$29.99',
	price: '$17.99',
	artCells: [
		'linear-gradient(135deg,#0a2a10,#153a20)',
		'linear-gradient(135deg,#152a05,#0a1a05)',
		'linear-gradient(135deg,#0a1a08,#1a3a10)',
		'linear-gradient(135deg,#1a3a0a,#0a2a08)'
	]
};

/**
 * Seeded fake data for the steam-legacy Library page.
 * Seed: 2012 (era-appropriate)
 */

type LibraryGame = {
	name: string;
	tag: string;
	hours: number;
	lastPlayed: string;
	icon: string;
	color: string;
	recent?: boolean;
};

export const subTabs = ['Games', 'Software', 'Videos', 'Music'];

export const games: LibraryGame[] = [
	{
		name: 'The Elder Scrolls V: Skyrim',
		tag: 'RPG',
		hours: 142,
		lastPlayed: '2 days ago',
		icon: '⚔',
		color: 'linear-gradient(135deg,#1a0a0a,#3a1010)',
		recent: true
	},
	{
		name: 'Team Fortress 2',
		tag: 'Shooter',
		hours: 328,
		lastPlayed: 'Yesterday',
		icon: '🎮',
		color: 'linear-gradient(135deg,#0a1a1a,#103030)',
		recent: true
	},
	{
		name: 'Borderlands 2',
		tag: 'Shooter',
		hours: 56,
		lastPlayed: '4 days ago',
		icon: '🔫',
		color: 'linear-gradient(135deg,#1a1a0a,#3a3010)',
		recent: true
	},
	{
		name: 'FTL: Faster Than Light',
		tag: 'Strategy',
		hours: 24,
		lastPlayed: 'Nov 8, 2012',
		icon: '⚡',
		color: 'linear-gradient(135deg,#1a1010,#2a2020)'
	},
	{
		name: 'Mass Effect 3',
		tag: 'Action/RPG',
		hours: 78,
		lastPlayed: 'Oct 30, 2012',
		icon: '🚀',
		color: 'linear-gradient(135deg,#0a0a2a,#10103a)'
	},
	{
		name: 'Torchlight II',
		tag: 'RPG',
		hours: 19,
		lastPlayed: 'Oct 22, 2012',
		icon: '🏰',
		color: 'linear-gradient(135deg,#0a1a0a,#10301a)'
	},
	{
		name: 'XCOM: Enemy Unknown',
		tag: 'Strategy',
		hours: 44,
		lastPlayed: 'Oct 15, 2012',
		icon: '🌍',
		color: 'linear-gradient(135deg,#1a0a1a,#3a1030)'
	},
	{
		name: 'The Witcher 2',
		tag: 'RPG',
		hours: 61,
		lastPlayed: 'Sep 28, 2012',
		icon: '🗡',
		color: 'linear-gradient(135deg,#101a10,#203020)'
	},
	{
		name: 'Portal 2',
		tag: 'Puzzle',
		hours: 12,
		lastPlayed: 'Sep 12, 2012',
		icon: '🔵',
		color: 'linear-gradient(135deg,#0a0a1a,#151530)'
	},
	{
		name: 'Half-Life 2',
		tag: 'Shooter',
		hours: 8,
		lastPlayed: 'Aug 5, 2012',
		icon: '🔶',
		color: 'linear-gradient(135deg,#1a0a00,#301500)'
	},
	{
		name: 'Left 4 Dead 2',
		tag: 'Shooter',
		hours: 33,
		lastPlayed: 'Jul 19, 2012',
		icon: '🧟',
		color: 'linear-gradient(135deg,#1a0a0a,#2a0808)'
	},
	{
		name: "Assassin's Creed III",
		tag: 'Action',
		hours: 27,
		lastPlayed: 'Jun 30, 2012',
		icon: '🦅',
		color: 'linear-gradient(135deg,#0a0a0a,#1a1a1a)'
	}
];

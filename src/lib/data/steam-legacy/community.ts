/**
 * Seeded fake data for the steam-legacy Community page.
 * Seed: 2012 (era-appropriate)
 */

type ActivityType = 'achievement' | 'screenshot' | 'review' | 'playing' | 'discussion' | 'wishlist';

type ActivityItem = {
	user: string;
	userBg: string;
	userInit: string;
	action: string;
	target: string;
	detail: string | null;
	time: string;
	type: ActivityType;
	icon: string;
};

type Discussion = {
	game: string;
	title: string;
	replies: number;
	views: number;
};

export const subTabs = ['Home', 'Discussions', 'Screenshots', 'Videos', 'Workshop', 'Groups'];

export const activity: ActivityItem[] = [
	{
		user: 'krazykat99',
		userBg: '#2a5a10',
		userInit: 'KR',
		action: 'earned an achievement in',
		target: 'Borderlands 2',
		detail: 'Well-Funded — Earn $3,000,000',
		time: '12 minutes ago',
		type: 'achievement',
		icon: '🏆'
	},
	{
		user: 'foxbyte',
		userBg: '#4a2a10',
		userInit: 'FX',
		action: 'posted a screenshot in',
		target: 'Team Fortress 2',
		detail: 'Epic backstab right there',
		time: '43 minutes ago',
		type: 'screenshot',
		icon: '📷'
	},
	{
		user: 'n3xus_zero',
		userBg: '#1a2a5a',
		userInit: 'NX',
		action: 'recommended',
		target: 'FTL: Faster Than Light',
		detail: '"Best roguelike I\'ve played in years. Hard as nails but incredibly fair."',
		time: '1 hour ago',
		type: 'review',
		icon: '👍'
	},
	{
		user: 'krazykat99',
		userBg: '#2a5a10',
		userInit: 'KR',
		action: 'is now playing',
		target: 'Borderlands 2',
		detail: null,
		time: '2 hours ago',
		type: 'playing',
		icon: '🎮'
	},
	{
		user: 'foxbyte',
		userBg: '#4a2a10',
		userInit: 'FX',
		action: 'commented in the discussion',
		target: '"Best settings for TF2?"',
		detail: 'I always run with max settings on DX11, makes a huge difference.',
		time: '3 hours ago',
		type: 'discussion',
		icon: '💬'
	},
	{
		user: 'n3xus_zero',
		userBg: '#1a2a5a',
		userInit: 'NX',
		action: 'earned an achievement in',
		target: 'FTL: Faster Than Light',
		detail: 'The Last Stand — Reach the Last Stand with the Rebel Flagship',
		time: '5 hours ago',
		type: 'achievement',
		icon: '🏆'
	},
	{
		user: 'zipcode',
		userBg: '#3a3a10',
		userInit: 'ZP',
		action: 'added to their wishlist',
		target: 'Dishonored',
		detail: null,
		time: '6 hours ago',
		type: 'wishlist',
		icon: '⭐'
	}
];

export const discussions: Discussion[] = [
	{
		game: 'Borderlands 2',
		title: 'Build Guide: Best Siren skills for co-op?',
		replies: 47,
		views: 1204
	},
	{
		game: 'Skyrim',
		title: 'Mod recommendations for 2012 — what are you running?',
		replies: 83,
		views: 3491
	},
	{
		game: 'Team Fortress 2',
		title: 'New map suggestions — what should Valve add?',
		replies: 124,
		views: 8822
	},
	{
		game: 'XCOM: Enemy Unknown',
		title: 'Classic difficulty tips and tricks',
		replies: 29,
		views: 762
	}
];

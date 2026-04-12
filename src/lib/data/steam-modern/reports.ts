// Seed: 2015 — Steam Modern reports/analytics data
import { faker } from '@faker-js/faker';
import type { DeltaDirection } from './types';

faker.seed(2015);

interface WeeklyDataPoint {
	label: string;
	users: number;
	revenue: number;
}

const dayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const weeklyData: WeeklyDataPoint[] = dayLabels.map((label) => ({
	label,
	users: faker.number.float({ min: 6.5, max: 10.5, fractionDigits: 1 }),
	revenue: faker.number.float({ min: 1.5, max: 4.5, fractionDigits: 1 })
}));

interface MetricCard {
	label: string;
	value: string;
	delta: string;
	direction: DeltaDirection;
}

export const metrics: MetricCard[] = [
	{
		label: 'Peak CCU This Week',
		value: `${faker.number.float({ min: 8, max: 12, fractionDigits: 1 })}M`,
		delta: `▲ +${faker.number.float({ min: 3, max: 12, fractionDigits: 1 })}%`,
		direction: 'up'
	},
	{
		label: 'Weekly Revenue',
		value: `$${faker.number.float({ min: 15, max: 25, fractionDigits: 1 })}M`,
		delta: `▲ +${faker.number.float({ min: 5, max: 18, fractionDigits: 1 })}%`,
		direction: 'up'
	},
	{
		label: 'New Accounts',
		value: faker.number.int({ min: 70000, max: 100000 }).toLocaleString(),
		delta: `▲ +${faker.number.float({ min: 1, max: 6, fractionDigits: 1 })}%`,
		direction: 'up'
	},
	{
		label: 'VAC Bans Issued',
		value: faker.number.int({ min: 900, max: 1500 }).toLocaleString(),
		delta: `▲ +${faker.number.float({ min: 8, max: 20, fractionDigits: 1 })}%`,
		direction: 'down'
	},
	{
		label: 'Store Transactions',
		value: `${faker.number.float({ min: 2, max: 4, fractionDigits: 1 })}M`,
		delta: `▲ +${faker.number.float({ min: 5, max: 15, fractionDigits: 1 })}%`,
		direction: 'up'
	}
];

interface TopGame {
	name: string;
	players: string;
	change: string;
	direction: DeltaDirection;
}

interface TopGameTemplate {
	name: string;
	minPlayers: number;
	maxPlayers: number;
}

const topGameTemplates: TopGameTemplate[] = [
	{ name: 'Dota 2', minPlayers: 350, maxPlayers: 450 },
	{ name: 'Team Fortress 2', minPlayers: 70, maxPlayers: 100 },
	{ name: 'Skyrim', minPlayers: 50, maxPlayers: 75 },
	{ name: 'Borderlands 2', minPlayers: 40, maxPlayers: 60 },
	{ name: 'Counter-Strike: Source', minPlayers: 35, maxPlayers: 55 },
	{ name: 'XCOM: Enemy Unknown', minPlayers: 30, maxPlayers: 50 }
];

export const topGames: TopGame[] = topGameTemplates.map((t) => {
	const changeVal = faker.number.int({ min: -10, max: 35 });
	return {
		name: t.name,
		players: `${faker.number.int({ min: t.minPlayers, max: t.maxPlayers })}K`,
		change: `${changeVal >= 0 ? '+' : ''}${changeVal}%`,
		direction: changeVal >= 0 ? 'up' : 'down'
	};
});

interface VacStat {
	region: string;
	bans: number;
	rate: number;
}

const vacRegions = ['US East', 'US West', 'EU West', 'Asia Pacific', 'South America'];

export const vacStats: VacStat[] = vacRegions.map((region) => ({
	region,
	bans: faker.number.int({ min: 60, max: 450 }),
	rate: faker.number.float({ min: 0.008, max: 0.035, fractionDigits: 3 })
}));

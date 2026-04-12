// Seed: 2012 — Steam Modern dashboard data
import { faker } from '@faker-js/faker';
import type { UserStatus, ProgressColor, MetricData } from './types';

faker.seed(2012);

export interface DashboardStat extends MetricData {
	unit: string;
	fill: number;
	fillColor: ProgressColor;
}

export const stats: DashboardStat[] = [
	{
		label: 'Concurrent Users',
		value: faker.number.float({ min: 6, max: 10, fractionDigits: 1 }).toString(),
		unit: 'M',
		delta: `▲ +${faker.number.float({ min: 1, max: 6, fractionDigits: 1 })}% from yesterday`,
		direction: 'up',
		fill: faker.number.int({ min: 60, max: 80 }),
		fillColor: 'default'
	},
	{
		label: 'Daily Revenue',
		value: `$${faker.number.float({ min: 1.5, max: 3.5, fractionDigits: 1 })}`,
		unit: 'M',
		delta: `▲ +${faker.number.float({ min: 5, max: 15, fractionDigits: 1 })}% vs. last week`,
		direction: 'up',
		fill: faker.number.int({ min: 75, max: 95 }),
		fillColor: 'gold'
	},
	{
		label: 'Total Accounts',
		value: faker.number.int({ min: 130, max: 160 }).toString(),
		unit: 'M',
		delta: `▲ +${faker.number.int({ min: 8000, max: 15000 }).toLocaleString()} today`,
		direction: 'up',
		fill: faker.number.int({ min: 50, max: 70 }),
		fillColor: 'green'
	},
	{
		label: 'Active Bans (24h)',
		value: faker.number.int({ min: 800, max: 1500 }).toLocaleString(),
		unit: '',
		delta: `▲ +${faker.number.float({ min: 8, max: 20, fractionDigits: 1 })}% VAC activity`,
		direction: 'down',
		fill: faker.number.int({ min: 20, max: 35 }),
		fillColor: 'red'
	}
];

export interface RevenueDataPoint {
	date: Date;
	store: number;
	market: number;
	dlc: number;
}

export const revenueData: RevenueDataPoint[] = Array.from({ length: 14 }, (_, i) => ({
	date: new Date(2012, 6, 24 + i),
	store: faker.number.int({ min: 750, max: 1650 }),
	market: faker.number.int({ min: 250, max: 550 }),
	dlc: faker.number.int({ min: 150, max: 320 })
}));

type ActivityDot = 'warn' | 'info' | 'danger' | 'success';

interface ActivityItem {
	dot: ActivityDot;
	time: string;
	text: string;
}

export const activityFeed: ActivityItem[] = [
	{
		dot: 'danger',
		time: '14:32',
		text: `<strong>VAC System</strong> issued ${faker.number.int({ min: 30, max: 60 })} bans across ${faker.number.int({ min: 2, max: 5 })} games`
	},
	{
		dot: 'info',
		time: '14:28',
		text: `<strong>Steamworks</strong> build #${faker.number.int({ min: 4000, max: 5000 })} deployed to CDN`
	},
	{
		dot: 'warn',
		time: '14:15',
		text: `Store traffic spike detected — <strong>+${faker.number.int({ min: 200, max: 500 })}%</strong> on flash sale page`
	},
	{
		dot: 'success',
		time: '13:55',
		text: `<strong>Greenlight</strong> approved ${faker.number.int({ min: 3, max: 10 })} new titles`
	},
	{
		dot: 'danger',
		time: '13:40',
		text: `Admin <strong>${faker.internet.username()}</strong> suspended user #${faker.number.int({ min: 44800000, max: 44830000 })}`
	},
	{
		dot: 'info',
		time: '13:22',
		text: 'Scheduled maintenance complete — all nodes healthy'
	},
	{
		dot: 'warn',
		time: '13:10',
		text: `Report queue threshold reached — <strong>${faker.number.int({ min: 5, max: 15 })} pending</strong>`
	}
];

interface ServerHealthEntry {
	name: string;
	val: number;
	color: ProgressColor;
}

function healthColor(val: number): ServerHealthEntry['color'] {
	if (val >= 93) return 'green';
	if (val >= 80) return 'default';
	if (val >= 70) return 'gold';
	return 'red';
}

const regions = [
	'US East',
	'US West',
	'EU Frankfurt',
	'EU Stockholm',
	'Asia Pacific',
	'South America'
];

export const serverHealth: ServerHealthEntry[] = regions.map((name) => {
	const val = faker.number.int({ min: 55, max: 99 });
	return { name, val, color: healthColor(val) };
});

interface RecentUser {
	id: string;
	name: string;
	status: UserStatus;
	country: string;
	games: number;
	joined: string;
}

const statuses: RecentUser['status'][] = ['banned', 'online', 'away', 'offline'];
const countries = ['RU', 'US', 'DE', 'GB'];

export const recentUsers: RecentUser[] = Array.from({ length: 4 }, (_, i) => ({
	id: `#${faker.number.int({ min: 44810000, max: 44825000 })}`,
	name: faker.internet.username().toLowerCase().slice(0, 14),
	status: statuses[i % statuses.length],
	country: countries[i % countries.length],
	games: statuses[i % statuses.length] === 'banned' ? 0 : faker.number.int({ min: 10, max: 120 }),
	joined: faker.date
		.between({ from: '2012-11-09', to: '2012-11-12' })
		.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}));

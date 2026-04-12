// Seed: 2014 — Steam Modern user management data
import { faker } from '@faker-js/faker';
import type { UserStatus } from './types';

faker.seed(2014);

interface User {
	id: string;
	name: string;
	status: UserStatus;
	games: number;
	hours: number;
	country: string;
	joined: string;
	lastSeen: string;
}

const statusCycle: UserStatus[] = [
	'banned',
	'online',
	'away',
	'offline',
	'online',
	'offline',
	'online',
	'banned'
];
const countryCycle = ['RU', 'US', 'DE', 'GB', 'CA', 'DE', 'US', 'KR'];
const lastSeenByStatus: Record<UserStatus, () => string> = {
	banned: () => '\u2014',
	online: () => 'Now',
	away: () => `${faker.number.int({ min: 1, max: 12 })}h ago`,
	offline: () => faker.helpers.arrayElement(['Yesterday', '2 days ago', '3 days ago'])
};

export const users: User[] = Array.from({ length: 8 }, (_, i) => {
	const status = statusCycle[i];
	return {
		id: `#${faker.number.int({ min: 44800000, max: 44830000 })}`,
		name: faker.internet.username().toLowerCase().slice(0, 14),
		status,
		games:
			status === 'banned'
				? faker.number.int({ min: 0, max: 3 })
				: faker.number.int({ min: 10, max: 250 }),
		hours:
			status === 'banned'
				? faker.number.int({ min: 0, max: 20 })
				: faker.number.int({ min: 50, max: 9000 }),
		country: countryCycle[i],
		joined: faker.date
			.between({ from: '2012-11-09', to: '2012-11-12' })
			.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
		lastSeen: lastSeenByStatus[status]()
	};
});

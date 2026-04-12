import {
	stats,
	revenueData,
	activityFeed,
	serverHealth,
	recentUsers
} from '$lib/data/steam-modern/dashboard';

export function load() {
	return { stats, revenueData, activityFeed, serverHealth, recentUsers };
}

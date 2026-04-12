import { weeklyData, metrics, topGames, vacStats } from '$lib/data/steam-modern/reports';

export function load() {
	return { weeklyData, metrics, topGames, vacStats };
}

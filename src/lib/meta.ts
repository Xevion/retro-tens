import type { EraId, PageMeta } from './types';

export const SITE_NAME = 'retro-tens';

function meta(title: string, description: string, era?: EraId): PageMeta {
	return { title: `${title} — ${SITE_NAME}`, description, era };
}

export const routeMeta: Record<string, PageMeta> = {
	'/': meta(
		'retro design playground',
		'A retro UI playground recreating three historically faithful software eras: Steam Legacy, Steam Modern, and Windows 10.'
	),

	// Steam Legacy (2010–2013)
	'/steam-legacy': meta(
		'Steam Legacy',
		'Steam client circa 2010–2013: dark olive-green UI with pixel-dense layouts, green accents, and gradient-heavy chrome.',
		'steam-legacy'
	),
	'/steam-legacy/library': meta(
		'Library — Steam Legacy',
		'Game library view from the 2010-era Steam client with sortable lists and search.',
		'steam-legacy'
	),
	'/steam-legacy/community': meta(
		'Community — Steam Legacy',
		'Community hub from the 2010-era Steam client with activity feeds and discussions.',
		'steam-legacy'
	),

	// Steam Modern (2018–2023)
	'/steam-modern': meta(
		'Store — Steam Modern',
		'Steam Store homepage with featured games, specials, and category browsing.',
		'steam-modern'
	),
	'/steam-modern/store/search': meta(
		'Store Browse — Steam Modern',
		'Steam Store browse and search results with game capsules, tag filtering, and price columns.',
		'steam-modern'
	),
	'/steam-modern/community': meta(
		'Community — Steam Modern',
		'Steam Community hub with activity feeds and community content.',
		'steam-modern'
	),
	'/steam-modern/admin': meta(
		'Admin Dashboard — Steam Modern',
		'Steam admin console with platform metrics, activity feeds, and server health.',
		'steam-modern'
	),
	'/steam-modern/admin/users': meta(
		'Users — Steam Modern',
		'User management panel with account search, status filtering, and admin tools.',
		'steam-modern'
	),
	'/steam-modern/admin/games': meta(
		'Games — Steam Modern',
		'Application and game management console with review queues and catalog search.',
		'steam-modern'
	),
	'/steam-modern/admin/reports': meta(
		'Reports — Steam Modern',
		'Platform analytics dashboard with CCU metrics, ban rates, and regional breakdowns.',
		'steam-modern'
	),

	// Windows 10 (2015–2021)
	'/windows10': meta(
		'Windows 10',
		'Windows 10 Fluent Design circa 2015–2021: light panels, sharp corners, Segoe UI, and signature #0078D7 blue.',
		'windows10'
	)
} satisfies Record<string, PageMeta>;

export function getRouteMeta(pathname: string): PageMeta {
	return (
		routeMeta[pathname] ?? {
			title: SITE_NAME,
			description: 'A retro UI design playground.'
		}
	);
}

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
		'Steam Modern',
		'Steam admin console circa 2018: deep navy blue with Motiva Sans, glow effects, and dense data-heavy panels.',
		'steam-modern'
	),
	'/steam-modern/games': meta(
		'Games — Steam Modern',
		'Application and game management console with review queues and catalog search.',
		'steam-modern'
	),
	'/steam-modern/reports': meta(
		'Reports — Steam Modern',
		'Platform analytics dashboard with CCU metrics, ban rates, and regional breakdowns.',
		'steam-modern'
	),
	'/steam-modern/users': meta(
		'Users — Steam Modern',
		'User management panel with account search, status filtering, and admin tools.',
		'steam-modern'
	),

	// Windows 10 (2015–2021)
	'/windows10': meta(
		'Windows 10',
		'Windows 10 Fluent Design circa 2015–2021: light panels, sharp corners, Segoe UI, and signature #0078D7 blue.',
		'windows10'
	),
	'/windows10/action-center': meta(
		'Action Center — Windows 10',
		'Windows 10 Action Center with notification groups, quick settings toggles, and brightness slider.',
		'windows10'
	),
	'/windows10/resume-builder': meta(
		'Resume Builder — Windows 10',
		'A resume builder application styled as a Windows 10 desktop app with section editing.',
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

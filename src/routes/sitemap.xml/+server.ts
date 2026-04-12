import { PUBLIC_SITE_URL } from '$env/static/public';
import { routeMeta } from '$lib/meta';
import type { RequestHandler } from './$types';

export const prerender = true;

function escapeXml(s: string): string {
	return s
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

export const GET: RequestHandler = () => {
	const baseUrl = PUBLIC_SITE_URL.replace(/\/+$/, '');

	const urls = Object.keys(routeMeta)
		.map((path) => {
			const loc = `${baseUrl}${path === '/' ? '' : path}`;
			return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n  </url>`;
		})
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};

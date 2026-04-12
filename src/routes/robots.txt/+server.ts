import { SITE_URL } from '$lib/env';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = () => {
	const baseUrl = SITE_URL.replace(/\/+$/, '');

	const body = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`;

	return new Response(body, {
		headers: {
			'Content-Type': 'text/plain'
		}
	});
};

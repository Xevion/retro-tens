<script lang="ts">
import { SITE_URL } from '$lib/env';
import favicon from '$lib/assets/favicon.svg';
import { page } from '$app/state';
import { getRouteMeta, SITE_NAME } from '$lib/meta';
import '../app.css';

let { children } = $props();

const meta = $derived(getRouteMeta(page.url.pathname));
const canonicalUrl = $derived.by(() => {
	const siteUrl = SITE_URL.replace(/\/+$/, '');
	const path = page.url.pathname === '/' ? '' : page.url.pathname;
	return `${siteUrl}${path}`;
});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:url" content={canonicalUrl} />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={meta.title} />
	<meta name="twitter:description" content={meta.description} />
</svelte:head>

{@render children()}

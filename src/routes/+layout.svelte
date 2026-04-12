<script lang="ts">
import favicon from '$lib/assets/favicon.svg';
import { page } from '$app/state';
import { getRouteMeta } from '$lib/meta';
import '../app.css';

let { children } = $props();

const meta = $derived(getRouteMeta(page.url.pathname));
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />
</svelte:head>

{@render children()}

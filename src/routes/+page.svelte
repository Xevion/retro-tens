<script lang="ts">
import { resolve } from '$app/paths';
import PreviewSteamLegacy from '$lib/components/PreviewSteamLegacy.svelte';
import PreviewSteamModern from '$lib/components/PreviewSteamModern.svelte';
import PreviewWindows10 from '$lib/components/PreviewWindows10.svelte';
import { css } from 'styled-system/css';

const themes = [
	{
		id: 'steam-legacy',
		name: 'Steam',
		era: '2010 – 2013',
		description:
			'The dark olive-green era. Compact pixel density, green accent, gradients everywhere, and zero animations.',
		font: 'Arial',
		accent: '#75b022',
		bg: '#1b2426',
		text: '#c6d4df',
		routes: [
			{ label: 'Store', href: '/steam-legacy' },
			{ label: 'Library', href: '/steam-legacy/library' },
			{ label: 'Community', href: '/steam-legacy/community' }
		]
	},
	{
		id: 'steam-modern',
		name: 'Steam Modern',
		era: '2018 – 2023',
		description:
			'Deep navy blue with Motiva Sans. Store pages faithful to Steam v6 CSS, admin console with store-derived styling.',
		font: 'Motiva Sans',
		accent: '#66c0f4',
		bg: '#1b2838',
		text: '#c7d5e0',
		routes: [
			{ label: 'Store', href: '/steam-modern' },
			{ label: 'Browse', href: '/steam-modern/store/search' },
			{ label: 'Community', href: '/steam-modern/community' },
			{ label: 'Admin', href: '/steam-modern/admin' }
		]
	},
	{
		id: 'windows10',
		name: 'Windows 10',
		era: '2015 – 2021',
		description:
			'Fluent Design lite. Light panels, #0078D7 blue, sharp corners everywhere, and Segoe UI.',
		font: 'Segoe UI',
		accent: '#2b8fd9',
		bg: '#f2f2f2',
		text: '#1a1a1a',
		routes: [{ label: 'Desktop', href: '/windows10' }]
	}
] as const;

const pageStyle = css({
	minHeight: '100vh',
	background: '#111',
	color: '#e0e0e0',
	fontFamily: "'Courier New', Courier, monospace"
});

const siteHeader = css({
	borderBottom: '1px solid #2a2a2a',
	padding: '32px 0 28px'
});

const headerInner = css({
	maxWidth: '1100px',
	margin: '0 auto',
	padding: '0 32px'
});

const logo = css({
	fontSize: '28px',
	fontWeight: 'bold',
	letterSpacing: '-0.02em',
	color: '#fff',
	marginBottom: '6px'
});

const tagline = css({
	fontSize: '13px',
	color: '#999',
	letterSpacing: '0.02em'
});

const themesGrid = css({
	maxWidth: '1100px',
	margin: '48px auto',
	padding: '0 32px',
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gap: '24px'
});

const themeCard = css({
	border: '1px solid #2a2a2a',
	background: '#161616',
	display: 'flex',
	flexDirection: 'column',
	overflow: 'hidden',
	transition: 'border-color 0.15s',
	_hover: { borderColor: 'var(--card-accent)' }
});

const cardPreview = css({
	height: '160px',
	overflow: 'hidden',
	flexShrink: '0'
});

const cardBody = css({
	padding: '18px 20px 20px',
	display: 'flex',
	flexDirection: 'column',
	gap: '10px'
});

const cardTitleRow = css({
	display: 'flex',
	alignItems: 'baseline',
	justifyContent: 'space-between'
});

const cardName = css({
	fontSize: '16px',
	fontWeight: 'bold',
	color: '#fff',
	letterSpacing: '-0.01em'
});

const cardEra = css({
	fontSize: '11px',
	color: '#999',
	letterSpacing: '0.05em'
});

const cardDesc = css({
	fontSize: '12px',
	color: '#a0a0a0',
	lineHeight: '1.6',
	fontFamily: 'system-ui, sans-serif'
});

const cardMeta = css({ display: 'flex', gap: '6px' });

const metaPill = css({
	fontSize: '10px',
	background: '#1e1e1e',
	border: '1px solid #333',
	padding: '2px 8px',
	color: '#999',
	letterSpacing: '0.04em'
});

const cardLinks = css({
	display: 'flex',
	flexWrap: 'wrap',
	gap: '6px',
	marginTop: '4px'
});

const routeLink = css({
	fontSize: '11px',
	border: '1px solid var(--card-accent)',
	color: 'var(--card-accent)',
	padding: '3px 10px',
	cursor: 'pointer',
	transition: 'background 0.12s, color 0.12s',
	fontFamily: 'system-ui, sans-serif',
	letterSpacing: '0.02em',
	_hover: {
		background: 'var(--card-accent)',
		color: '#000'
	}
});

const siteFooter = css({
	borderTop: '1px solid #2a2a2a',
	padding: '20px 32px',
	textAlign: 'center',
	fontSize: '11px',
	color: '#888',
	letterSpacing: '0.05em'
});
</script>

<div class={pageStyle}>
	<header class={siteHeader}>
		<div class={headerInner}>
			<div class={logo}>retro-tens</div>
			<div class={tagline}>A retro UI design playground · Three eras, three systems</div>
		</div>
	</header>

	<main class={themesGrid}>
		{#each themes as theme (theme.id)}
			<div class={themeCard} style="--card-accent:{theme.accent}">
				<div class={cardPreview}>
					{#if theme.id === 'steam-legacy'}
						<PreviewSteamLegacy />
					{:else if theme.id === 'steam-modern'}
						<PreviewSteamModern />
					{:else}
						<PreviewWindows10 />
					{/if}
				</div>

				<div class={cardBody}>
					<div class={cardTitleRow}>
						<span class={cardName}>{theme.name}</span>
						<span class={cardEra}>{theme.era}</span>
					</div>
					<p class={cardDesc}>{theme.description}</p>
					<div class={cardMeta}>
						<span class={metaPill}>Font: {theme.font}</span>
					</div>
					<div class={cardLinks}>
						{#each theme.routes as route (route.href)}
							<a href={resolve(route.href)} class={routeLink}>{route.label} →</a>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</main>

	<footer class={siteFooter}>
		retro-tens · SvelteKit + PandaCSS
	</footer>
</div>

<!-- :global(body) background must remain a <style> block — Panda has no global body hook -->
<style>
	:global(body) {
		background: #111;
	}
</style>

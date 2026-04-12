<script lang="ts">
import { resolve } from '$app/paths';
import { css, cx } from 'styled-system/css';

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
		name: 'Steam Admin',
		era: '2018 – 2023',
		description:
			'Deep navy blue with Source Sans 3. CSS custom properties, glow effects, and a dense data-heavy admin console.',
		font: 'Source Sans 3',
		accent: '#66c0f4',
		bg: '#1b2838',
		text: '#c7d5e0',
		routes: [
			{ label: 'Dashboard', href: '/steam-modern' },
			{ label: 'Users', href: '/steam-modern/users' },
			{ label: 'Games', href: '/steam-modern/games' },
			{ label: 'Reports', href: '/steam-modern/reports' }
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
		routes: [
			{ label: 'Desktop', href: '/windows10' },
			{ label: 'Action Center', href: '/windows10/action-center' },
			{ label: 'Resume Builder', href: '/windows10/resume-builder' }
		]
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

const previewSteamLegacy = css({
	width: '100%',
	height: '160px',
	background: '#1a1a1a',
	display: 'flex',
	flexDirection: 'column',
	fontFamily: 'Arial, sans-serif',
	fontSize: '7px',
	overflow: 'hidden'
});

const pslTitlebar = css({
	background: 'linear-gradient(to bottom,#2d2d2d,#1a1a1a)',
	padding: '2px 4px',
	display: 'flex',
	alignItems: 'center',
	gap: '3px',
	borderBottom: '1px solid #0d0d0d',
	'& span': { color: '#888', flex: '1' }
});

const pslDot = css({ width: '8px', height: '8px', background: '#1b9fe4', borderRadius: 'full' });

const pslWinbtns = css({
	display: 'flex',
	gap: '2px',
	'& span': { width: '6px', height: '6px', borderRadius: '1px', background: '#3a3a3a' }
});

const pslWinbtnRed = css({ background: '#6b2020' });

const pslTopbar = css({
	background: 'linear-gradient(to bottom,#3c3c3c,#1e1e1e)',
	padding: '3px 6px',
	display: 'flex',
	alignItems: 'center',
	gap: '6px',
	borderBottom: '2px solid #0d0d0d'
});

const pslBrand = css({ color: '#c6d4df', fontWeight: 'bold', fontSize: '8px' });

const pslTabs = css({
	display: 'flex',
	gap: '3px',
	'& span': {
		color: '#8f98a0',
		padding: '2px 5px',
		fontSize: '6px',
		fontWeight: 'bold',
		textTransform: 'uppercase'
	}
});

const pslTabActive = css({
	color: '#fff',
	background: 'linear-gradient(to bottom,#3d5a1f,#1a3a08)'
});

const pslBody = css({ display: 'flex', flex: '1', overflow: 'hidden' });
const pslContent = css({ flex: '1', background: '#1b2426' });
const pslFeatured = css({ height: '40px', background: 'linear-gradient(135deg,#0d1b0a,#1a3a0f)' });

const pslGrid = css({
	display: 'grid',
	gridTemplateColumns: 'repeat(4,1fr)',
	gap: '1px',
	background: '#0d0d0d',
	padding: '1px'
});

const pslTile = css({ height: '20px', background: '#1e2d2f' });

const pslSidebar = css({
	width: '36px',
	background: '#1e1e1e',
	borderLeft: '1px solid #0d0d0d',
	display: 'flex',
	flexDirection: 'column',
	gap: '1px',
	padding: '3px 2px'
});

const pslFriend = css({ height: '8px', background: '#222', borderRadius: '1px' });

const previewSteamModern = css({
	width: '100%',
	height: '160px',
	background: '#0e1219',
	display: 'flex',
	flexDirection: 'column',
	fontFamily: 'Arial, sans-serif',
	fontSize: '7px',
	overflow: 'hidden'
});

const psmChrome = css({
	height: '14px',
	background: '#101318',
	display: 'flex',
	alignItems: 'center',
	padding: '0 5px',
	gap: '3px',
	borderBottom: '1px solid #0a0f16'
});

const psmDot = css({ width: '6px', height: '6px', borderRadius: 'full' });
const psmDotRed = css({ background: '#c94040' });
const psmDotYellow = css({ background: '#d5a51b' });
const psmDotGreen = css({ background: '#4fa832' });

const psmTitle = css({ flex: '1', textAlign: 'center', color: '#556b7d', fontSize: '6px' });

const psmMenubar = css({
	height: '14px',
	background: 'linear-gradient(180deg,#2a3f54,#1b2838)',
	borderBottom: '1px solid #1a2d40'
});

const psmNavtabs = css({
	height: '16px',
	background: 'linear-gradient(180deg,#1d2d3e,#162030)',
	display: 'flex',
	alignItems: 'center',
	borderBottom: '1px solid #0e1219',
	'& span': {
		padding: '0 6px',
		color: '#8ba3b7',
		fontSize: '6px',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		borderBottom: '1px solid transparent',
		marginBottom: '-1px'
	}
});

const psmNavtabActive = css({ color: '#66c0f4', borderBottomColor: '#66c0f4' });

const psmBody = css({ display: 'flex', flex: '1', overflow: 'hidden' });

const psmSidebar = css({
	width: '32px',
	background: '#15202e',
	borderRight: '1px solid #1a2d40',
	display: 'flex',
	flexDirection: 'column',
	gap: '2px',
	padding: '4px 3px'
});

const psmLink = css({ height: '5px', background: '#1b2838', borderRadius: '1px' });

const psmMain = css({
	flex: '1',
	background: '#171a21',
	display: 'flex',
	flexDirection: 'column'
});

const psmStats = css({
	display: 'grid',
	gridTemplateColumns: 'repeat(4,1fr)',
	gap: '1px',
	background: '#1a2d40'
});

const psmStat = css({ height: '24px', background: '#1b2838' });

const psmPanels = css({
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	gap: '4px',
	padding: '4px',
	flex: '1'
});

const psmPanel = css({
	background: '#1b2838',
	border: '1px solid #2a475e',
	borderRadius: '1px'
});

const previewWindows10 = css({
	width: '100%',
	height: '160px',
	display: 'flex',
	flexDirection: 'column',
	overflow: 'hidden'
});

const pw10Desktop = css({
	flex: '1',
	background: 'linear-gradient(135deg,#1a6eb0,#2d7ab8,#0f4e8a)',
	position: 'relative',
	display: 'flex',
	justifyContent: 'flex-end'
});

const pw10Icons = css({
	position: 'absolute',
	left: '5px',
	top: '5px',
	display: 'flex',
	flexDirection: 'column',
	gap: '4px'
});

const pw10Icon = css({
	width: '18px',
	height: '18px',
	background: 'rgba(255,255,255,0.15)',
	borderRadius: '1px'
});

const pw10Panel = css({
	width: '68px',
	background: 'rgba(242,242,242,0.97)',
	borderLeft: '1px solid rgba(0,0,0,0.12)',
	display: 'flex',
	flexDirection: 'column',
	overflow: 'hidden'
});

const pw10PanelHeader = css({
	height: '14px',
	borderBottom: '1px solid rgba(0,0,0,0.08)',
	background: '#fff'
});

const pw10Notifs = css({
	flex: '1',
	padding: '2px 3px',
	display: 'flex',
	flexDirection: 'column',
	gap: '2px'
});

const pw10Notif = css({
	height: '14px',
	background: '#fff',
	border: '1px solid rgba(0,0,0,0.08)'
});

const pw10Qa = css({
	display: 'grid',
	gridTemplateColumns: 'repeat(4,1fr)',
	gap: '2px',
	padding: '3px',
	background: 'rgba(235,235,235,0.8)',
	borderTop: '1px solid rgba(0,0,0,0.1)'
});

const pw10Tile = css({ height: '12px', background: 'rgba(0,0,0,0.07)' });
const pw10Taskbar = css({ height: '16px', background: 'rgba(0,0,0,0.78)' });
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
						<div class={previewSteamLegacy}>
							<div class={pslTitlebar}>
								<div class={pslDot}></div>
								<span>STEAM</span>
								<div class={pslWinbtns}><span></span><span></span><span class={pslWinbtnRed}></span></div>
							</div>
							<div class={pslTopbar}>
								<span class={pslBrand}>STEAM</span>
								<div class={pslTabs}>
									<span class={pslTabActive}>Store</span>
									<span>Library</span>
									<span>Community</span>
								</div>
							</div>
							<div class={pslBody}>
								<div class={pslContent}>
									<div class={pslFeatured}></div>
									<div class={pslGrid}>
										{#each Array(8) as _, i (i)}
											<div class={pslTile}></div>
										{/each}
									</div>
								</div>
								<div class={pslSidebar}>
									{#each Array(4) as _, i (i)}
										<div class={pslFriend}></div>
									{/each}
								</div>
							</div>
						</div>
					{:else if theme.id === 'steam-modern'}
						<div class={previewSteamModern}>
							<div class={psmChrome}>
								<span class={cx(psmDot, psmDotRed)}></span>
								<span class={cx(psmDot, psmDotYellow)}></span>
								<span class={cx(psmDot, psmDotGreen)}></span>
								<span class={psmTitle}>Steam — Administrator Console</span>
							</div>
							<div class={psmMenubar}></div>
							<div class={psmNavtabs}>
								{#each ['Dashboard', 'Users', 'Games', 'Reports'] as t, i (t)}
									<span class={i === 0 ? psmNavtabActive : ''}>{t}</span>
								{/each}
							</div>
							<div class={psmBody}>
								<div class={psmSidebar}>
									{#each Array(6) as _, i (i)}
										<div class={psmLink}></div>
									{/each}
								</div>
								<div class={psmMain}>
									<div class={psmStats}>
										{#each Array(4) as _, i (i)}
											<div class={psmStat}></div>
										{/each}
									</div>
									<div class={psmPanels}>
										<div class={psmPanel}></div>
										<div class={psmPanel}></div>
									</div>
								</div>
							</div>
						</div>
					{:else}
						<div class={previewWindows10}>
							<div class={pw10Desktop}>
								<div class={pw10Icons}>
									<div class={pw10Icon}></div>
									<div class={pw10Icon}></div>
								</div>
								<div class={pw10Panel}>
									<div class={pw10PanelHeader}></div>
									<div class={pw10Notifs}>
										{#each Array(3) as _, i (i)}
											<div class={pw10Notif}></div>
										{/each}
									</div>
									<div class={pw10Qa}>
										{#each Array(8) as _, i (i)}
											<div class={pw10Tile}></div>
										{/each}
									</div>
								</div>
							</div>
							<div class={pw10Taskbar}></div>
						</div>
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

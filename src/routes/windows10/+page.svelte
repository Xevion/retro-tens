<script lang="ts">
import { css } from 'styled-system/css';

const apps = [
	{
		name: 'Action Center',
		href: '/windows10/action-center',
		icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="4" y="5" width="32" height="22" rx="2" stroke="#d8e3f0" stroke-width="1.5" fill="none"/><path d="M4 10h32" stroke="#4a90d9" stroke-width="1.5"/><circle cx="8" cy="7.5" r="1.5" fill="#fff" opacity="0.7"/><circle cx="13" cy="7.5" r="1.5" fill="#fff" opacity="0.7"/><path d="M13 35h14" stroke="#b0c2d8" stroke-width="1.5" stroke-linecap="round"/><path d="M20 27v8" stroke="#b0c2d8" stroke-width="1.5"/><rect x="8" y="15" width="24" height="1.5" rx="0.5" fill="#8fa8c0" opacity="0.8"/><rect x="8" y="19" width="18" height="1.5" rx="0.5" fill="#8fa8c0" opacity="0.8"/><rect x="8" y="23" width="20" height="1.5" rx="0.5" fill="#8fa8c0" opacity="0.6"/></svg>`
	},
	{
		name: 'Resume Builder',
		href: '/windows10/resume-builder',
		icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M6 5h28v30H6z" fill="#d8e3f0" stroke="#b0c2d8" stroke-width="1"/><path d="M6 5h28v6H6z" fill="#0078D7"/><rect x="10" y="14" width="20" height="1.5" rx="0.5" fill="#8fa8c0"/><rect x="10" y="18" width="15" height="1.5" rx="0.5" fill="#8fa8c0"/><rect x="10" y="22" width="18" height="1.5" rx="0.5" fill="#8fa8c0"/><rect x="10" y="26" width="12" height="1.5" rx="0.5" fill="#8fa8c0"/></svg>`
	}
];

const desktopIcons = css({
	position: 'absolute',
	top: '0',
	left: '0',
	padding: '24px 18px',
	display: 'flex',
	flexDirection: 'column',
	gap: '8px'
});

const desktopIcon = css({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	width: '72px',
	gap: '5px',
	cursor: 'pointer',
	padding: '6px 4px',
	borderRadius: 'DEFAULT',
	transition: 'background token(durations.DEFAULT) ease',
	_hover: { background: 'surface.desktopIconHover' }
});

const desktopIconLabel = css({
	fontSize: '11.5px',
	color: 'text.desktopIcon',
	textAlign: 'center',
	textShadow: '0 1px 2px token(colors.shadow.desktopIcon)',
	lineHeight: '1.3'
});

const appLauncher = css({
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	background: 'surface.launcher',
	backdropFilter: 'blur(12px)',
	border: '1px solid token(colors.border.launcher)',
	padding: '24px 28px',
	borderRadius: 'DEFAULT',
	textAlign: 'center'
});

const launcherTitle = css({
	fontSize: 'md',
	color: 'text.taskbarDim',
	textTransform: 'uppercase',
	letterSpacing: '0.1em',
	marginBottom: '16px',
	fontWeight: '600'
});

const launcherGrid = css({
	display: 'flex',
	gap: '16px'
});

const appTile = css({
	width: '120px',
	background: 'surface.appTile',
	border: '1px solid token(colors.border.launcher)',
	padding: '16px 12px',
	cursor: 'pointer',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: '10px',
	transition: 'background token(durations.DEFAULT) ease',
	borderRadius: 'DEFAULT',
	_hover: { background: 'surface.appTileHover' }
});

const appTileName = css({
	fontSize: 'sm',
	color: 'text.bright',
	textAlign: 'center',
	fontWeight: '500',
	lineHeight: '1.3',
	textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
});
</script>

<!-- Desktop icons -->
<div class={desktopIcons}>
	<!-- This PC icon -->
	<div class={desktopIcon}>
		<svg width="40" height="40" viewBox="0 0 40 40">
			<rect x="4" y="4" width="15" height="15" fill="#F25022" />
			<rect x="21" y="4" width="15" height="15" fill="#7FBA00" />
			<rect x="4" y="21" width="15" height="15" fill="#00A4EF" />
			<rect x="21" y="21" width="15" height="15" fill="#FFB900" />
		</svg>
		<span class={desktopIconLabel}>This PC</span>
	</div>

	<div class={desktopIcon}>
		<svg width="40" height="40" viewBox="0 0 40 40">
			<path d="M6 8h28v22H6z" fill="#d8e3f0" stroke="#b0c2d8" stroke-width="1" />
			<path d="M6 8h28v4H6z" fill="#4a90d9" />
			<circle cx="9" cy="10" r="1.5" fill="#fff" opacity="0.7" />
			<circle cx="13" cy="10" r="1.5" fill="#fff" opacity="0.7" />
			<rect x="9" y="15" width="22" height="1.5" rx="0.5" fill="#8fa8c0" opacity="0.8" />
			<rect x="9" y="19" width="16" height="1.5" rx="0.5" fill="#8fa8c0" opacity="0.8" />
			<rect x="9" y="23" width="19" height="1.5" rx="0.5" fill="#8fa8c0" opacity="0.8" />
		</svg>
		<span class={desktopIconLabel}>Recycle Bin</span>
	</div>
</div>

<!-- App launcher cards -->
<div class={appLauncher}>
	<div class={launcherTitle}>Open an App</div>
	<div class={launcherGrid}>
		{#each apps as app (app.href)}
			<a href={app.href} class={appTile}>
				<!-- eslint-disable-next-line svelte/no-at-html-tags -- reason: hardcoded SVG strings, no user input -->
				<div>{@html app.icon}</div>
				<div class={appTileName}>{app.name}</div>
			</a>
		{/each}
	</div>
</div>

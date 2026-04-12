<script lang="ts">
import { css } from 'styled-system/css';
import { vstack } from 'styled-system/patterns';
import DesktopWindow from '$lib/components/windows10/DesktopWindow.svelte';
import Taskbar from '$lib/components/windows10/Taskbar.svelte';
import ActionCenterDrawer from '$lib/components/windows10/ActionCenterDrawer.svelte';
import ResumeBuilderApp from '$lib/components/windows10/apps/ResumeBuilderApp.svelte';
import FileExplorerApp from '$lib/components/windows10/apps/FileExplorerApp.svelte';
import SettingsApp from '$lib/components/windows10/apps/SettingsApp.svelte';

type AppId = 'resume-builder' | 'file-explorer' | 'settings';

type WindowDef = {
	id: AppId;
	title: string;
	defaultPosition: { x: number; y: number };
	defaultSize: { width: number; height: number };
	minSize: { width: number; height: number };
};

const windowDefs: WindowDef[] = [
	{
		id: 'resume-builder',
		title: 'Resume Builder — Microsoft Office Style',
		defaultPosition: { x: 80, y: 30 },
		defaultSize: { width: 680, height: 560 },
		minSize: { width: 500, height: 400 }
	},
	{
		id: 'file-explorer',
		title: 'File Explorer',
		defaultPosition: { x: 120, y: 50 },
		defaultSize: { width: 720, height: 480 },
		minSize: { width: 400, height: 300 }
	},
	{
		id: 'settings',
		title: 'Settings',
		defaultPosition: { x: 160, y: 70 },
		defaultSize: { width: 640, height: 500 },
		minSize: { width: 480, height: 400 }
	}
];

let windowOpen = $state<Record<AppId, boolean>>({
	'resume-builder': false,
	'file-explorer': false,
	settings: false
});

let windowZ = $state<Record<AppId, number>>({
	'resume-builder': 1,
	'file-explorer': 1,
	settings: 1
});

let nextZ = $state(10);
let actionCenterOpen = $state(false);

function openApp(id: AppId) {
	windowOpen[id] = true;
	focusApp(id);
}

function closeApp(id: AppId) {
	windowOpen[id] = false;
}

function focusApp(id: AppId) {
	windowZ[id] = nextZ++;
}

const openApps = $derived(
	new Set(
		(Object.entries(windowOpen) as [AppId, boolean][]).filter(([, open]) => open).map(([id]) => id)
	)
);

const focusedApp = $derived<AppId | null>(
	(Object.entries(windowOpen) as [AppId, boolean][])
		.filter(([, open]) => open)
		.sort(([a], [b]) => windowZ[b] - windowZ[a])[0]?.[0] ?? null
);

type DesktopIcon = {
	label: string;
	icon: string;
	action?: AppId;
};

const desktopIcons: DesktopIcon[] = [
	{
		label: 'This PC',
		icon: `<svg width="40" height="40" viewBox="0 0 40 40"><rect x="4" y="4" width="15" height="15" fill="#F25022"/><rect x="21" y="4" width="15" height="15" fill="#7FBA00"/><rect x="4" y="21" width="15" height="15" fill="#00A4EF"/><rect x="21" y="21" width="15" height="15" fill="#FFB900"/></svg>`
	},
	{
		label: 'File Explorer',
		icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M4 10h14l3 4h15v20H4V10z" fill="#FFB900"/><path d="M4 10h14l3 4h15v2H4z" fill="rgba(0,0,0,0.15)"/></svg>`,
		action: 'file-explorer'
	},
	{
		label: 'Resume Builder',
		icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M6 5h28v30H6z" fill="#d8e3f0" stroke="#b0c2d8" stroke-width="1"/><path d="M6 5h28v6H6z" fill="#0078D7"/><rect x="10" y="14" width="20" height="1.5" rx="0.5" fill="#8fa8c0"/><rect x="10" y="18" width="15" height="1.5" rx="0.5" fill="#8fa8c0"/><rect x="10" y="22" width="18" height="1.5" rx="0.5" fill="#8fa8c0"/><rect x="10" y="26" width="12" height="1.5" rx="0.5" fill="#8fa8c0"/></svg>`,
		action: 'resume-builder'
	},
	{
		label: 'Settings',
		icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="8" stroke="#b0c2d8" stroke-width="2" fill="none"/><circle cx="20" cy="20" r="3" fill="#0078D7"/><path d="M20 6v6M20 28v6M6 20h6M28 20h6M10.3 10.3l4.2 4.2M25.5 25.5l4.2 4.2M10.3 29.7l4.2-4.2M25.5 14.5l4.2-4.2" stroke="#b0c2d8" stroke-width="1.5"/></svg>`,
		action: 'settings'
	},
	{
		label: 'Recycle Bin',
		icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M6 8h28v22H6z" fill="#d8e3f0" stroke="#b0c2d8" stroke-width="1"/><path d="M6 8h28v4H6z" fill="#4a90d9"/><circle cx="9" cy="10" r="1.5" fill="#fff" opacity="0.7"/><circle cx="13" cy="10" r="1.5" fill="#fff" opacity="0.7"/><rect x="9" y="15" width="22" height="1.5" rx="0.5" fill="#8fa8c0" opacity="0.8"/><rect x="9" y="19" width="16" height="1.5" rx="0.5" fill="#8fa8c0" opacity="0.8"/><rect x="9" y="23" width="19" height="1.5" rx="0.5" fill="#8fa8c0" opacity="0.6"/></svg>`
	}
];

const desktopShell = vstack({
	gap: '0',
	minHeight: '100vh',
	position: 'relative',
	alignItems: 'stretch'
});

const desktopArea = css({
	flex: '1',
	position: 'relative',
	overflow: 'hidden'
});

const desktopBg = css({
	position: 'absolute',
	inset: '0',
	background:
		'linear-gradient(135deg, token(colors.desktop.gradientStart) 0%, token(colors.desktop.bg) 40%, token(colors.desktop.gradientEnd) 100%)',
	zIndex: '0'
});

const iconsContainer = css({
	position: 'absolute',
	top: '0',
	left: '0',
	padding: '24px 18px',
	display: 'flex',
	flexDirection: 'column',
	gap: '8px',
	zIndex: '1'
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
	background: 'none',
	border: 'none',
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
</script>

<div class={desktopShell}>
	<div class={desktopArea}>
		<div class={desktopBg}></div>

		<!-- Desktop icons -->
		<div class={iconsContainer}>
			{#each desktopIcons as icon (icon.label)}
				{#if icon.action}
					{@const action = icon.action}
					<button type="button" class={desktopIcon} ondblclick={() => openApp(action)}>
						<!-- eslint-disable-next-line svelte/no-at-html-tags -- reason: hardcoded SVG strings, no user input -->
						{@html icon.icon}
						<span class={desktopIconLabel}>{icon.label}</span>
					</button>
				{:else}
					<div class={desktopIcon}>
						<!-- eslint-disable-next-line svelte/no-at-html-tags -- reason: hardcoded SVG strings, no user input -->
						{@html icon.icon}
						<span class={desktopIconLabel}>{icon.label}</span>
					</div>
				{/if}
			{/each}
		</div>

		<!-- Floating windows -->
		{#each windowDefs as def (def.id)}
			<DesktopWindow
				title={def.title}
				bind:open={windowOpen[def.id]}
				focused={focusedApp === def.id}
				zIndex={windowZ[def.id]}
				defaultPosition={def.defaultPosition}
				defaultSize={def.defaultSize}
				minSize={def.minSize}
				onfocus={() => focusApp(def.id)}
				onclose={() => closeApp(def.id)}
			>
				{#snippet icon()}
					{#if def.id === 'resume-builder'}
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
							<rect x="1" y="2" width="14" height="10" rx="0.8" stroke="#fff" stroke-width="1.1" fill="none" />
							<path d="M1 5h14" stroke="#fff" stroke-width="0.9" opacity="0.6" />
							<path d="M5 14h6" stroke="#fff" stroke-width="1.1" stroke-linecap="round" />
							<path d="M8 12v2" stroke="#fff" stroke-width="1.1" />
						</svg>
					{:else if def.id === 'file-explorer'}
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
							<path d="M1 4h6l1 2h7v8H1V4z" fill="#FFB900" />
						</svg>
					{:else if def.id === 'settings'}
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
							<circle cx="8" cy="8" r="3" stroke="#fff" stroke-width="1.2" fill="none" />
							<circle cx="8" cy="8" r="1" fill="#fff" />
						</svg>
					{/if}
				{/snippet}

				{#if def.id === 'resume-builder'}
					<ResumeBuilderApp />
				{:else if def.id === 'file-explorer'}
					<FileExplorerApp />
				{:else if def.id === 'settings'}
					<SettingsApp />
				{/if}
			</DesktopWindow>
		{/each}

		<!-- Action Center Drawer -->
		<ActionCenterDrawer bind:open={actionCenterOpen} />
	</div>

	<!-- Taskbar -->
	<Taskbar
		{openApps}
		{actionCenterOpen}
		onOpenApp={openApp}
		onToggleActionCenter={() => (actionCenterOpen = !actionCenterOpen)}
	/>
</div>

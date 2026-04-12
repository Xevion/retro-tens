<script lang="ts">
import { css } from 'styled-system/css';
import { vstack } from 'styled-system/patterns';
import DesktopWindow from '$lib/components/windows10/DesktopWindow.svelte';
import Taskbar from '$lib/components/windows10/Taskbar.svelte';
import ActionCenterDrawer from '$lib/components/windows10/ActionCenterDrawer.svelte';
import Mdl2Icon from '$lib/components/windows10/Mdl2Icon.svelte';
import ResumeBuilderApp from '$lib/components/windows10/apps/ResumeBuilderApp.svelte';
import FileExplorerApp from '$lib/components/windows10/apps/FileExplorerApp.svelte';
import SettingsApp from '$lib/components/windows10/apps/SettingsApp.svelte';
import type { Mdl2IconName } from '$lib/data/windows10/mdl2-icons';

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
	icon: Mdl2IconName;
	action?: AppId;
};

const desktopIcons: DesktopIcon[] = [
	{ label: 'This PC', icon: 'devicePC' },
	{ label: 'File Explorer', icon: 'fileExplorer', action: 'file-explorer' },
	{ label: 'Resume Builder', icon: 'page', action: 'resume-builder' },
	{ label: 'Settings', icon: 'settings', action: 'settings' },
	{ label: 'Recycle Bin', icon: 'recycleBin' }
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
						<Mdl2Icon name={icon.icon} size={40} color="#fff" />
						<span class={desktopIconLabel}>{icon.label}</span>
					</button>
				{:else}
					<div class={desktopIcon}>
						<Mdl2Icon name={icon.icon} size={40} color="#fff" />
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
						<Mdl2Icon name="page" size={16} />
					{:else if def.id === 'file-explorer'}
						<Mdl2Icon name="fileExplorer" size={16} />
					{:else if def.id === 'settings'}
						<Mdl2Icon name="settings" size={16} />
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

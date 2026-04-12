<script lang="ts">
import { Search, Wifi, Battery } from 'lucide-svelte';
import { cx } from 'styled-system/css';
import { hstack } from 'styled-system/patterns';
import { taskbarStyles as tb } from '$lib/recipes/windows10';

type AppId = 'resume-builder' | 'file-explorer' | 'settings';

type Props = {
	openApps: Set<AppId>;
	actionCenterOpen: boolean;
	onOpenApp: (id: AppId) => void;
	onToggleActionCenter: () => void;
};

let { openApps, actionCenterOpen, onOpenApp, onToggleActionCenter }: Props = $props();

let time = $state('');
let date = $state('');

function updateClock() {
	const now = new Date();
	let h = now.getHours();
	const m = now.getMinutes();
	const ampm = h >= 12 ? 'PM' : 'AM';
	h = h % 12 || 12;
	time = `${h}:${String(m).padStart(2, '0')} ${ampm}`;
	date = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;
}

$effect(() => {
	updateClock();
	const interval = setInterval(updateClock, 10000);
	return () => clearInterval(interval);
});

const trayIcons = hstack({ gap: '6px' });

const pinnedApps: { id: AppId; label: string }[] = [
	{ id: 'file-explorer', label: 'File Explorer' },
	{ id: 'resume-builder', label: 'Resume Builder' },
	{ id: 'settings', label: 'Settings' }
];
</script>

<div class={tb.root}>
	<div class={tb.left}>
		<button type="button" class={tb.startBtn} title="Start">
			<svg width="17" height="17" viewBox="0 0 17 17" fill="none">
				<rect x="0" y="0" width="8" height="8" fill="#F25022" />
				<rect x="9" y="0" width="8" height="8" fill="#7FBA00" />
				<rect x="0" y="9" width="8" height="8" fill="#00A4EF" />
				<rect x="9" y="9" width="8" height="8" fill="#FFB900" />
			</svg>
		</button>

		<div class={tb.searchBox} title="Search Windows">
			<Search size={13} color="rgba(255,255,255,0.45)" strokeWidth={1.3} />
			<span>Search Windows</span>
		</div>

		{#each pinnedApps as app (app.id)}
			<button
				type="button"
				class={cx(tb.appIcon, openApps.has(app.id) ? tb.appIconActive : '')}
				title={app.label}
				onclick={() => onOpenApp(app.id)}
			>
				{#if app.id === 'file-explorer'}
					<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
						<path d="M2 5h7l1 2h6v8H2V5z" fill="#FFB900" />
						<path d="M2 5h7l1 2h6v1H2z" fill="rgba(0,0,0,0.15)" />
					</svg>
				{:else if app.id === 'resume-builder'}
					<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
						<rect x="2" y="2" width="14" height="10" rx="1" stroke="currentColor" stroke-width="1.2" fill="none" />
						<path d="M2 5h14" stroke="currentColor" stroke-width="0.9" opacity="0.6" />
						<path d="M6 15h6" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" />
						<path d="M9 12v3" stroke="currentColor" stroke-width="1.1" />
					</svg>
				{:else if app.id === 'settings'}
					<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
						<circle cx="9" cy="9" r="3.5" stroke="currentColor" stroke-width="1.2" fill="none" />
						<circle cx="9" cy="9" r="1.3" fill="currentColor" />
						<path d="M9 2v3M9 13v3M2 9h3M13 9h3" stroke="currentColor" stroke-width="1" />
					</svg>
				{/if}
			</button>
		{/each}
	</div>

	<div class={tb.right}>
		<div class={tb.sysTray}>
			<div class={trayIcons}>
				<Wifi size={14} color="rgba(255,255,255,0.7)" strokeWidth={1.3} />
				<Battery size={14} color="rgba(255,255,255,0.7)" strokeWidth={1.3} />
			</div>
			<div class={tb.clock}>
				<div class={tb.clockTime}>{time}</div>
				<div class={tb.clockDate}>{date}</div>
			</div>
		</div>

		<button
			type="button"
			class={cx(tb.notifBtn, actionCenterOpen ? tb.notifBtnActive : '')}
			title="Action Center"
			onclick={onToggleActionCenter}
		>
			<svg width="15" height="15" viewBox="0 0 15 15" fill="none">
				<rect x="2" y="2" width="11" height="8" rx="1" stroke="#fff" stroke-width="1.2" fill="none" />
				<path d="M5 13h5" stroke="#fff" stroke-width="1.1" stroke-linecap="round" />
				<path d="M7.5 10v3" stroke="#fff" stroke-width="1.1" />
			</svg>
			<div class={tb.notifBadge}>4</div>
		</button>
	</div>
</div>

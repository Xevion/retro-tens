<script lang="ts">
import { ToggleGroup } from '@ark-ui/svelte/toggle-group';
import { css, cx } from 'styled-system/css';
import { grid } from 'styled-system/patterns';
import Mdl2Icon from '$lib/components/windows10/Mdl2Icon.svelte';
import type { Mdl2IconName } from '$lib/data/windows10/mdl2-icons';

type Notif = {
	id: string;
	group: string;
	groupColor: string;
	groupIcon: Mdl2IconName;
	title: string;
	body: string;
	time: string;
};

let notifications = $state<Notif[]>([
	{
		id: 'n1',
		group: 'Mail',
		groupColor: '#0078D7',
		groupIcon: 'mail',
		title: 'Alex Turner',
		body: 'Re: Q3 Design Review — Updated slides are attached, let me know what you think.',
		time: '3:42 PM'
	},
	{
		id: 'n2',
		group: 'Mail',
		groupColor: '#0078D7',
		groupIcon: 'mail',
		title: 'Microsoft Outlook',
		body: 'You have a meeting in 15 minutes: Weekly Sync with Design Team',
		time: '1:15 PM'
	},
	{
		id: 'n3',
		group: 'Calendar',
		groupColor: '#E74856',
		groupIcon: 'calendar',
		title: 'Reminder',
		body: 'Project deadline: UI Handoff — Today at 5:00 PM',
		time: '12:00 PM'
	},
	{
		id: 'n4',
		group: 'Windows Update',
		groupColor: '#107C10',
		groupIcon: 'checkMark',
		title: 'Updates available',
		body: 'Cumulative Update for Windows 10 Version 1607 is ready to install.',
		time: '9:00 AM'
	}
]);

type QaTile = { label: string; icon: Mdl2IconName };

const qaTiles: QaTile[] = [
	{ label: 'Wi-Fi', icon: 'wifi' },
	{ label: 'Bluetooth', icon: 'bluetooth' },
	{ label: 'Airplane mode', icon: 'airplane' },
	{ label: 'Quiet hours', icon: 'quietHours' },
	{ label: 'Location', icon: 'mapPin' },
	{ label: 'Battery saver', icon: 'batterySaver' },
	{ label: 'Tablet mode', icon: 'tabletMode' },
	{ label: 'All settings', icon: 'settings' }
];

let activeQaTiles = $state<string[]>(['Wi-Fi', 'Location']);

function dismiss(id: string) {
	notifications = notifications.filter((n) => n.id !== id);
}

function clearAll() {
	notifications = [];
}

const grouped = $derived(
	notifications.reduce<Record<string, Notif[]>>((acc, n) => {
		if (!acc[n.group]) acc[n.group] = [];
		acc[n.group].push(n);
		return acc;
	}, {})
);

const panelHeader = css({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '14px 16px 10px',
	borderBottom: '1px solid token(colors.border)'
});

const panelTitle = css({
	fontSize: '15px',
	fontWeight: '600',
	letterSpacing: '0.01em'
});

const clearAllBtn = css({
	fontSize: 'sm',
	color: 'accent',
	cursor: 'pointer',
	background: 'none',
	border: 'none',
	fontFamily: 'ui',
	_hover: { textDecoration: 'underline' }
});

const notificationsArea = css({
	flex: '1',
	overflowY: 'auto',
	padding: '8px 0'
});

const emptyState = css({
	textAlign: 'center',
	padding: '30px 20px',
	color: 'text.disabled',
	fontSize: 'md'
});

const notifGroup = css({ marginBottom: '4px' });

const notifGroupHeader = css({
	display: 'flex',
	alignItems: 'center',
	gap: '6px',
	padding: '4px 14px 3px',
	fontSize: 'sm',
	color: 'text.muted',
	fontWeight: '600',
	letterSpacing: '0.04em',
	textTransform: 'uppercase'
});

const groupIcon = css({
	width: '14px',
	height: '14px',
	borderRadius: 'DEFAULT',
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexShrink: '0'
});

const notifCard = css({
	background: 'surface.notifCard',
	border: '1px solid token(colors.border)',
	margin: '2px 10px',
	padding: '10px 12px',
	position: 'relative',
	cursor: 'pointer',
	transition: 'background token(durations.fast) ease',
	_hover: {
		background: 'surface.elevated',
		'& .notif-dismiss': { opacity: '1' }
	}
});

const notifCardTop = css({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'flex-start',
	marginBottom: '4px'
});

const notifTitle = css({
	fontSize: 'base',
	fontWeight: '600',
	color: 'text.heading',
	flex: '1',
	paddingRight: '24px'
});

const notifTime = css({
	fontSize: 'sm',
	color: 'text.disabled',
	whiteSpace: 'nowrap'
});

const notifBody = css({
	fontSize: 'sm',
	color: 'text.secondary',
	lineHeight: '1.45'
});

const notifDismiss = css({
	position: 'absolute',
	top: '6px',
	right: '8px',
	width: '20px',
	height: '20px',
	background: 'none',
	border: 'none',
	cursor: 'pointer',
	color: 'text.disabled',
	fontSize: '13px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	opacity: '0',
	transition: 'opacity token(durations.fast) ease',
	fontFamily: 'ui',
	_hover: { color: 'text.secondary' }
});

const divider = css({
	height: '1px',
	background: 'divider',
	margin: '8px 10px'
});

const quickActions = css({
	borderTop: '1px solid token(colors.border.medium)',
	padding: '10px 10px 12px',
	background: 'surface.qaArea'
});

const qaTitle = css({
	fontSize: 'sm',
	color: 'text.muted',
	fontWeight: '600',
	letterSpacing: '0.04em',
	textTransform: 'uppercase',
	marginBottom: '8px',
	padding: '0 2px'
});

const qaGrid = grid({
	columns: 4,
	gap: '6px'
});

const qaTileBase = css({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'flex-start',
	gap: '0',
	padding: '10px 8px 8px',
	background: 'surface.qa',
	border: 'none',
	cursor: 'pointer',
	fontFamily: 'ui',
	transition: 'background token(durations.DEFAULT) ease',
	minHeight: '72px',
	_hover: { background: 'surface.qaHover' }
});

const qaTileActive = css({
	background: 'surface.qaActive',
	_hover: { background: 'surface.qaActiveHover' }
});

const qaIcon = css({
	width: '20px',
	height: '20px',
	display: 'flex',
	alignItems: 'flex-start',
	justifyContent: 'flex-start',
	color: 'text.muted'
});

const qaIconActive = css({ color: 'accent' });

const qaLabel = css({
	fontSize: 'xs',
	color: 'text.primary',
	textAlign: 'left',
	lineHeight: '1.2',
	marginTop: 'auto'
});

const qaLabelActive = css({
	color: 'accent',
	fontWeight: '600'
});

const qaIconFlipX = css({ transform: 'scaleX(-1)' });
</script>

<div class={panelHeader}>
	<span class={panelTitle}>ACTION CENTER</span>
	<button type="button" class={clearAllBtn} onclick={clearAll}>Clear all</button>
</div>

<div class={notificationsArea}>
	{#if notifications.length === 0}
		<div class={emptyState}>No new notifications</div>
	{:else}
		{#each Object.entries(grouped) as [groupName, groupNotifs], gi (groupName)}
			{#if gi > 0}<div class={divider}></div>{/if}
			<div class={notifGroup}>
				<div class={notifGroupHeader}>
					<div class={groupIcon} style="background:{groupNotifs[0].groupColor}">
						<Mdl2Icon name={groupNotifs[0].groupIcon} size={10} color="#fff" />
					</div>
					{groupName}
				</div>
				{#each groupNotifs as notif (notif.id)}
					<div class={notifCard}>
						<div class={notifCardTop}>
							<div class={notifTitle}>{notif.title}</div>
							<div class={notifTime}>{notif.time}</div>
						</div>
						<div class={notifBody}>{notif.body}</div>
						<button type="button" class="{notifDismiss} notif-dismiss" onclick={() => dismiss(notif.id)}>✕</button>
					</div>
				{/each}
			</div>
		{/each}
	{/if}
</div>

<div class={quickActions}>
	<div class={qaTitle}>Quick actions</div>
	<ToggleGroup.Root bind:value={activeQaTiles} multiple class={qaGrid}>
		{#each qaTiles as tile (tile.label)}
			{@const active = activeQaTiles.includes(tile.label)}
			<ToggleGroup.Item
				value={tile.label}
				class={cx(qaTileBase, active ? qaTileActive : '')}
			>
				<div class={cx(qaIcon, active ? qaIconActive : '', tile.icon === 'quietHours' ? qaIconFlipX : '')}>
					<Mdl2Icon name={tile.icon} size={20} />
				</div>
				<span class={cx(qaLabel, active ? qaLabelActive : '')}>{tile.label}</span>
			</ToggleGroup.Item>
		{/each}
	</ToggleGroup.Root>
</div>

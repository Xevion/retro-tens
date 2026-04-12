<script lang="ts">
import {
	Mail,
	Calendar,
	CircleCheck,
	Wifi,
	Bluetooth,
	PlaneTakeoff,
	Clock,
	MapPin,
	BatteryMedium,
	Tablet,
	Settings
} from 'lucide-svelte';
import type { SvelteComponentTyped } from 'svelte';

type LucideIcon = new (...args: any[]) => SvelteComponentTyped<any>;

type Notif = {
	id: string;
	group: string;
	groupColor: string;
	groupIcon: LucideIcon;
	title: string;
	body: string;
	time: string;
};

let notifications = $state<Notif[]>([
	{
		id: 'n1',
		group: 'Mail',
		groupColor: '#0078D7',
		groupIcon: Mail,
		title: 'Alex Turner',
		body: 'Re: Q3 Design Review — Updated slides are attached, let me know what you think.',
		time: '3:42 PM'
	},
	{
		id: 'n2',
		group: 'Mail',
		groupColor: '#0078D7',
		groupIcon: Mail,
		title: 'Microsoft Outlook',
		body: 'You have a meeting in 15 minutes: Weekly Sync with Design Team',
		time: '1:15 PM'
	},
	{
		id: 'n3',
		group: 'Calendar',
		groupColor: '#E74856',
		groupIcon: Calendar,
		title: 'Reminder',
		body: 'Project deadline: UI Handoff — Today at 5:00 PM',
		time: '12:00 PM'
	},
	{
		id: 'n4',
		group: 'Windows Update',
		groupColor: '#107C10',
		groupIcon: CircleCheck,
		title: 'Updates available',
		body: 'Cumulative Update for Windows 10 Version 1607 is ready to install.',
		time: '9:00 AM'
	}
]);

type QaTile = { label: string; active: boolean; icon: LucideIcon };

let qaTiles = $state<QaTile[]>([
	{ label: 'Wi-Fi', active: true, icon: Wifi },
	{ label: 'Bluetooth', active: false, icon: Bluetooth },
	{ label: 'Airplane mode', active: false, icon: PlaneTakeoff },
	{ label: 'Quiet hours', active: false, icon: Clock },
	{ label: 'Location', active: true, icon: MapPin },
	{ label: 'Battery saver', active: false, icon: BatteryMedium },
	{ label: 'Tablet mode', active: false, icon: Tablet },
	{ label: 'All settings', active: false, icon: Settings }
]);

function dismiss(id: string) {
	notifications = notifications.filter((n) => n.id !== id);
}

function clearAll() {
	notifications = [];
}

function toggleTile(index: number) {
	qaTiles = qaTiles.map((t, i) => (i === index ? { ...t, active: !t.active } : t));
}

// Group notifications by group name
const grouped = $derived(
	notifications.reduce<Record<string, Notif[]>>((acc, n) => {
		if (!acc[n.group]) acc[n.group] = [];
		acc[n.group].push(n);
		return acc;
	}, {})
);
</script>

<!-- Action Center panel -->
<div class="panel">
	<div class="panel-header">
		<span class="panel-title">ACTION CENTER</span>
		<button class="clear-all" onclick={clearAll}>Clear all</button>
	</div>

	<div class="notifications-area">
		{#if notifications.length === 0}
			<div class="empty-state">No new notifications</div>
		{:else}
			{#each Object.entries(grouped) as [groupName, groupNotifs], gi}
				{@const GroupIcon = groupNotifs[0].groupIcon}
				{#if gi > 0}<div class="divider"></div>{/if}
				<div class="notif-group">
					<div class="notif-group-header">
						<div class="group-icon" style="background:{groupNotifs[0].groupColor}">
							<GroupIcon size={10} color="#fff" strokeWidth={1.5} />
						</div>
						{groupName}
					</div>
					{#each groupNotifs as notif}
						<div
							class="notif-card"
							role="button"
							tabindex="0"
						>
							<div class="notif-card-top">
								<div class="notif-title">{notif.title}</div>
								<div class="notif-time">{notif.time}</div>
							</div>
							<div class="notif-body">{notif.body}</div>
							<button class="notif-dismiss" onclick={() => dismiss(notif.id)}>✕</button>
						</div>
					{/each}
				</div>
			{/each}
		{/if}
	</div>

	<!-- Quick actions -->
	<div class="quick-actions">
		<div class="qa-title">Quick actions</div>
		<div class="qa-grid">
			{#each qaTiles as tile, i}
				{@const Icon = tile.icon}
				<button
					class="qa-tile"
					class:active={tile.active}
					onclick={() => toggleTile(i)}
					title={tile.label}
				>
					<div class="qa-icon" style="color:{tile.active ? 'var(--accent)' : '#555'}">
						<Icon size={20} strokeWidth={1.5} />
					</div>
					<span class="qa-label" class:active={tile.active}>{tile.label}</span>
				</button>
			{/each}
		</div>
	</div>
</div>

<style>
	.panel {
		position: relative;
		z-index: 2;
		width: 344px;
		min-height: 520px;
		background: var(--surface-panel);
		border-left: 1px solid var(--border-medium);
		display: flex;
		flex-direction: column;
		font-family: var(--font-ui);
		color: var(--text-primary);
		overflow: hidden;
	}

	.panel-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 14px 16px 10px;
		border-bottom: 1px solid var(--border);
	}
	.panel-title { font-size: 15px; font-weight: 600; letter-spacing: 0.01em; }
	.clear-all {
		font-size: var(--font-size-sm);
		color: var(--accent);
		cursor: pointer;
		background: none;
		border: none;
		font-family: var(--font-ui);
	}
	.clear-all:hover { text-decoration: underline; }

	.notifications-area { flex: 1; overflow-y: auto; padding: 8px 0; }
	.empty-state { text-align: center; padding: 30px 20px; color: var(--text-disabled); font-size: var(--font-size-md); }

	.notif-group { margin-bottom: 4px; }
	.notif-group-header {
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 4px 14px 3px;
		font-size: 11px;
		color: var(--text-muted);
		font-weight: 600;
		letter-spacing: 0.04em;
		text-transform: uppercase;
	}
	.group-icon {
		width: 14px;
		height: 14px;
		border-radius: var(--radius);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.notif-card {
		background: #fff;
		border: 1px solid var(--border);
		margin: 2px 10px;
		padding: 10px 12px;
		position: relative;
		cursor: pointer;
		transition: background var(--transition-fast);
	}
	.notif-card:hover { background: var(--surface-elevated); }
	.notif-card-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 4px; }
	.notif-title { font-size: 12.5px; font-weight: 600; color: #111; flex: 1; padding-right: 24px; }
	.notif-time { font-size: 11px; color: var(--text-disabled); white-space: nowrap; }
	.notif-body { font-size: var(--font-size-sm); color: var(--text-secondary); line-height: 1.45; }
	.notif-dismiss {
		position: absolute;
		top: 6px;
		right: 8px;
		width: 20px;
		height: 20px;
		background: none;
		border: none;
		cursor: pointer;
		color: var(--text-disabled);
		font-size: 13px;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transition: opacity var(--transition-fast);
		font-family: var(--font-ui);
	}
	.notif-card:hover .notif-dismiss { opacity: 1; }
	.notif-dismiss:hover { color: var(--text-secondary); }

	.divider { height: 1px; background: var(--divider); margin: 8px 10px; }

	.quick-actions {
		border-top: 1px solid var(--border-medium);
		padding: 10px 10px 12px;
		background: rgba(235, 235, 235, 0.8);
	}
	.qa-title {
		font-size: 11px;
		color: var(--text-muted);
		font-weight: 600;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		margin-bottom: 8px;
		padding: 0 2px;
	}
	.qa-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 5px; }
	.qa-tile {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 5px;
		padding: 10px 4px 8px;
		background: var(--surface-qa);
		border: none;
		cursor: pointer;
		font-family: var(--font-ui);
		transition: background var(--transition);
		min-height: 60px;
	}
	.qa-tile:hover { background: var(--surface-qa-hover); }
	.qa-tile.active { background: var(--surface-qa-active); }
	.qa-tile.active:hover { background: var(--surface-qa-active-hover); }
	.qa-icon { width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; }
	.qa-label { font-size: var(--font-size-xs); color: var(--text-primary); text-align: center; line-height: 1.2; }
	.qa-label.active { color: var(--accent); font-weight: 600; }
</style>

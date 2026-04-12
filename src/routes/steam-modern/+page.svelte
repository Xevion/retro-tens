<script lang="ts">
import { resolve } from '$app/paths';
import { RefreshCw, Download } from 'lucide-svelte';
import { css, cx } from 'styled-system/css';
import PageHeader from '$lib/components/steam-modern/PageHeader.svelte';
import StatusBadge from '$lib/components/steam-modern/StatusBadge.svelte';
import {
	btn,
	badge,
	panel,
	progressBar as progressBarSva,
	dataTable,
	userAvatar,
	actionLink,
	twoCol,
	cellText,
	entityName,
	dataRow
} from '$lib/recipes/steam-modern';
import MetricStrip from '$lib/components/steam-modern/MetricStrip.svelte';
import ProgressBar from '$lib/components/steam-modern/ProgressBar.svelte';
import RevenueChart from '$lib/components/steam-modern/RevenueChart.svelte';
import type { DashboardStat } from '$lib/data/steam-modern/dashboard';

const { data } = $props();

// Page-specific styles inlined to work around fallow's .svelte import-graph bug
// (fallow-rs/fallow#TBD: dead-code analysis fails to credit .svelte → .ts imports
// even though --trace correctly resolves them). Shared recipes stay in $lib/recipes/.

const statBar = css({
	position: 'absolute',
	bottom: '0',
	left: '0',
	right: '0',
	height: '2px',
	background: 'divider'
});

const activityItem = css({
	display: 'flex',
	gap: '10px',
	padding: '8px 0',
	borderBottom: '1px solid token(colors.divider)',
	fontSize: 'sm',
	'&:last-child': { borderBottom: 'none' },
	'& strong': { color: 'accent', fontWeight: '600' }
});

const activityTime = css({
	color: 'text.muted',
	whiteSpace: 'nowrap',
	minWidth: '40px'
});

const activityDotBase = css({
	width: '6px',
	height: '6px',
	borderRadius: 'full',
	flexShrink: '0',
	marginTop: '4px'
});

const activityDotStyles = {
	warn: cx(activityDotBase, css({ background: 'accent.gold' })),
	info: cx(activityDotBase, css({ background: 'accent' })),
	danger: cx(activityDotBase, css({ background: 'accent.red' })),
	success: cx(activityDotBase, css({ background: 'accent.green' }))
};

const activityText = css({
	color: 'text.secondary',
	lineHeight: '1.4',
	flex: '1'
});

const healthName = css({ width: '110px', color: 'text.secondary', fontSize: 'sm' });
const healthBarWrap = css({ flex: '1' });
const healthVal = css({
	width: '40px',
	textAlign: 'right',
	color: 'text.primary',
	fontSize: 'sm',
	fontWeight: '600'
});

const panelStyles = panel();

const progressFills: Record<DashboardStat['fillColor'], string> = {
	default: progressBarSva().fill as string,
	green: progressBarSva({ color: 'green' }).fill as string,
	red: progressBarSva({ color: 'red' }).fill as string,
	gold: progressBarSva({ color: 'gold' }).fill as string
};

function getProgressFillClass(color: DashboardStat['fillColor']): string {
	return progressFills[color] ?? progressFills.default;
}
</script>

<PageHeader title="Administrator Dashboard" subtitle="Steam Platform Control · Last refreshed 2 minutes ago">
	<button type="button" class={btn({ visual: 'secondary' })}><RefreshCw size={13} /> Refresh</button>
	<button type="button" class={btn({ visual: 'primary' })}><Download size={13} /> Export Report</button>
</PageHeader>

<!-- Stats row -->
<MetricStrip metrics={data.stats} columns={4} size="lg">
	{#snippet renderValue(metric)}
		{@const stat = metric as DashboardStat}
		{stat.value}<span>{stat.unit}</span>
	{/snippet}
	{#snippet cardFooter(metric)}
		{@const stat = metric as DashboardStat}
		<div class={statBar}>
			<div class={getProgressFillClass(stat.fillColor)} style="width:{stat.fill}%"></div>
		</div>
	{/snippet}
</MetricStrip>

<!-- Two column panels -->
<div class={twoCol}>
	<RevenueChart revenueData={data.revenueData} />

	<!-- Activity feed -->
	<div class={panelStyles.root}>
		<div class={panelStyles.header}>Activity Log <span class={badge({ color: 'blue' })}>Live</span></div>
		<div class={panelStyles.body}>
			{#each data.activityFeed as item, i (i)}
				<div class={activityItem}>
					<span class={activityTime}>{item.time}</span>
					<div class={activityDotStyles[item.dot]}></div>
					<!-- eslint-disable-next-line svelte/no-at-html-tags -- reason: hardcoded demo content, no user input -->
					<div class={activityText}>{@html item.text}</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<!-- Server health + recent users -->
<div class={twoCol}>
	<div class={panelStyles.root}>
		<div class={panelStyles.header}>Server Health</div>
		<div class={panelStyles.body}>
			{#each data.serverHealth as srv (srv.name)}
				<div class={dataRow}>
					<span class={healthName}>{srv.name}</span>
					<div class={healthBarWrap}>
						<ProgressBar value={srv.val} color={srv.color === 'default' ? undefined : srv.color} label="{srv.name} health" />
					</div>
					<span class={healthVal}>{srv.val}%</span>
				</div>
			{/each}
		</div>
	</div>

	<div class={panelStyles.root}>
		<div class={panelStyles.header}>
			Recent Registrations
			<a href={resolve('/steam-modern/users')} class={actionLink()} style="font-size:11px">View all &#8594;</a>
		</div>
		<table class={dataTable}>
			<thead>
				<tr>
					<th>User</th>
					<th>Status</th>
					<th>Games</th>
					<th>Joined</th>
				</tr>
			</thead>
			<tbody>
				{#each data.recentUsers as u (u.id)}
					<tr>
						<td>
							<div class={userAvatar()}>{u.name.slice(0, 2).toUpperCase()}</div>
							<span class={entityName}>{u.name}</span>
							<span class={cellText({ tone: 'muted' })} style="margin-left:4px">{u.id}</span>
						</td>
						<td><StatusBadge status={u.status} /></td>
						<td class={cellText({ tone: 'secondary' })}>{u.games}</td>
						<td class={cellText({ tone: 'muted' })}>{u.joined}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

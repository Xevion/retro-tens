<script lang="ts">
import { Chart, Svg, Axis, Area, Highlight, Tooltip } from 'layerchart';
import { scaleLinear, scaleTime } from 'd3-scale';
import { curveMonotoneX } from 'd3-shape';
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
	cellSecondary,
	cellMuted,
	delta as deltaCva,
	metricCard,
	metricsGrid,
	entityName,
	dataRow
} from '$lib/recipes/steam-modern';
import {
	stats,
	revenueData,
	activityFeed,
	serverHealth,
	recentUsers
} from '$lib/data/steam-modern/dashboard';
import type { RevenueDataPoint, DashboardStat } from '$lib/data/steam-modern/dashboard';

// Page-specific styles inlined to work around fallow's .svelte import-graph bug
// (fallow-rs/fallow#TBD: dead-code analysis fails to credit .svelte → .ts imports
// even though --trace correctly resolves them). Shared recipes stay in $lib/recipes/.
const statsGrid = metricsGrid(4);

const statBar = css({
	position: 'absolute',
	bottom: '0',
	left: '0',
	right: '0',
	height: '2px',
	background: 'divider'
});

const chartContainer = css({
	padding: '8px 14px 14px',
	flex: '1',
	minHeight: '160px'
});

const revTooltipInner = css({
	background: 'surface.elevated',
	border: '1px solid token(colors.border.light)',
	borderRadius: 'DEFAULT',
	padding: '8px 10px',
	fontSize: '11px',
	minWidth: '130px',
	boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
});

const revTooltipDate = css({
	color: 'text.muted',
	fontSize: '10px',
	fontWeight: '700',
	textTransform: 'uppercase',
	letterSpacing: '0.06em',
	marginBottom: '6px'
});

const revTooltipRow = css({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	gap: '12px',
	padding: '2px 0',
	color: 'text.secondary',
	'& span:last-child': { color: 'text.primary', fontWeight: '600' }
});

const revTooltipTotal = css({
	display: 'flex',
	justifyContent: 'space-between',
	gap: '12px',
	marginTop: '5px',
	paddingTop: '5px',
	borderTop: '1px solid token(colors.divider)',
	color: 'text.bright',
	fontWeight: '700'
});

const revDotBase = css({
	display: 'inline-block',
	width: '6px',
	height: '6px',
	borderRadius: 'full',
	marginRight: '5px',
	verticalAlign: 'middle'
});

const revDotBlue = cx(revDotBase, css({ background: 'accent' }));
const revDotGold = cx(revDotBase, css({ background: 'accent.gold' }));
const revDotGreen = cx(revDotBase, css({ background: 'accent.green' }));

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

function fmtRevDate(d: Date) {
	return `${d.getMonth() + 1}/${d.getDate()}`;
}

function fmtRevTooltipDate(d: Date) {
	return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

const panelStyles = panel();
const chartPanel = cx(panelStyles.root, css({ display: 'flex', flexDirection: 'column' }));
const mc = metricCard({ size: 'lg' });

const progressFills: Record<DashboardStat['fillColor'], string> = {
	default: progressBarSva().fill as string,
	green: progressBarSva({ color: 'green' }).fill as string,
	red: progressBarSva({ color: 'red' }).fill as string,
	gold: progressBarSva({ color: 'gold' }).fill as string
};
const progressTrack = progressBarSva().track as string;

function getProgressFillClass(color: DashboardStat['fillColor']): string {
	return progressFills[color] ?? progressFills.default;
}
</script>

<PageHeader title="Administrator Dashboard" subtitle="Steam Platform Control · Last refreshed 2 minutes ago">
	<button type="button" class={btn({ visual: 'secondary' })}><RefreshCw size={13} /> Refresh</button>
	<button type="button" class={btn({ visual: 'primary' })}><Download size={13} /> Export Report</button>
</PageHeader>

<!-- Stats row -->
<div class={statsGrid}>
	{#each stats as stat (stat.label)}
		<div class={mc.root}>
			<div class={mc.label}>{stat.label}</div>
			<div class={mc.value}>{stat.value}<span>{stat.unit}</span></div>
			<div class={deltaCva({ direction: stat.direction })}>{stat.delta}</div>
			<div class={statBar}>
				<div class={getProgressFillClass(stat.fillColor)} style="width:{stat.fill}%"></div>
			</div>
		</div>
	{/each}
</div>

<!-- Two column panels -->
<div class={twoCol}>
	<!-- Revenue chart -->
	<div class={chartPanel}>
		<div class={panelStyles.header}>
			Revenue — Last 14 Days
			<div style="display:flex;gap:6px">
				<span class={badge({ color: 'blue' })}>Store</span>
				<span class={badge({ color: 'yellow' })}>Market</span>
				<span class={badge({ color: 'green' })}>DLC</span>
			</div>
		</div>
		<div class={chartContainer}>
			<Chart
				data={revenueData}
				x="date"
				xScale={scaleTime()}
				y={(d: RevenueDataPoint) => d.store + d.market + d.dlc}
				yScale={scaleLinear()}
				yNice
				yDomain={[0, null]}
				padding={{ top: 10, bottom: 28, left: 48, right: 10 }}
				tooltip={{ mode: 'bisect-x' }}
			>
				<Svg>
					<Axis
						placement="left"
						grid={{ style: 'stroke: rgba(42,71,94,0.6)' }}
						rule={false}
						format={(v) => `$${(v / 1000).toFixed(0)}k`}
						classes={{ tickLabel: 'rev-tick-label' }}
					/>
					<Axis
						placement="bottom"
						format={fmtRevDate}
						rule={false}
						classes={{ tickLabel: 'rev-tick-label' }}
						ticks={7}
					/>
					<Area
						y1={(d) => d.store}
						fill="#66c0f4"
						fillOpacity={0.15}
						curve={curveMonotoneX}
						line={{ fill: 'none', stroke: '#4a9fc8', strokeWidth: 1.5 }}
					/>
					<Area
						y0={(d) => d.store}
						y1={(d) => d.store + d.market}
						fill="#d5a51b"
						fillOpacity={0.2}
						curve={curveMonotoneX}
						line={{ fill: 'none', stroke: '#d5a51b', strokeWidth: 1 }}
					/>
					<Area
						y0={(d) => d.store + d.market}
						y1={(d) => d.store + d.market + d.dlc}
						fill="#4fa832"
						fillOpacity={0.25}
						curve={curveMonotoneX}
						line={{ fill: 'none', stroke: '#4fa832', strokeWidth: 1 }}
					/>
					<Highlight lines={{ stroke: 'rgba(102,192,244,0.4)', strokeWidth: 1 }} />
				</Svg>
				<Tooltip.Root let:data classes={{ root: 'rev-tooltip' }} variant="none">
					{@const d = data as RevenueDataPoint}
					<div class={revTooltipInner}>
						<p class={revTooltipDate}>{fmtRevTooltipDate(d.date)}</p>
						<div class={revTooltipRow}>
							<span><span class={revDotBlue}></span>Store</span>
							<span>${d.store.toLocaleString()}</span>
						</div>
						<div class={revTooltipRow}>
							<span><span class={revDotGold}></span>Market</span>
							<span>${d.market.toLocaleString()}</span>
						</div>
						<div class={revTooltipRow}>
							<span><span class={revDotGreen}></span>DLC</span>
							<span>${d.dlc.toLocaleString()}</span>
						</div>
						<div class={revTooltipTotal}>
							<span>Total</span>
							<span>${(d.store + d.market + d.dlc).toLocaleString()}</span>
						</div>
					</div>
				</Tooltip.Root>
			</Chart>
		</div>
	</div>

	<!-- Activity feed -->
	<div class={panelStyles.root}>
		<div class={panelStyles.header}>Activity Log <span class={badge({ color: 'blue' })}>Live</span></div>
		<div class={panelStyles.body}>
			{#each activityFeed as item, i (i)}
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
			{#each serverHealth as srv (srv.name)}
				<div class={dataRow}>
					<span class={healthName}>{srv.name}</span>
					<div class={healthBarWrap}>
						<div class={progressTrack}>
							<div class={getProgressFillClass(srv.color)} style="width:{srv.val}%"></div>
						</div>
					</div>
					<span class={healthVal}>{srv.val}%</span>
				</div>
			{/each}
		</div>
	</div>

	<div class={panelStyles.root}>
		<div class={panelStyles.header}>
			Recent Registrations
			<a href="/steam-modern/users" class={actionLink()} style="font-size:11px">View all &#8594;</a>
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
				{#each recentUsers as u (u.id)}
					<tr>
						<td>
							<div class={userAvatar()}>{u.name.slice(0, 2).toUpperCase()}</div>
							<span class={entityName}>{u.name}</span>
							<span class={cellMuted} style="margin-left:4px">{u.id}</span>
						</td>
						<td><StatusBadge status={u.status} /></td>
						<td class={cellSecondary}>{u.games}</td>
						<td class={cellMuted}>{u.joined}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<!-- LayerChart tick labels require :global() — Panda cannot target third-party component internals -->
<style>
	:global(.rev-tick-label) {
		fill: var(--colors-text-muted) !important;
		font-size: 10px !important;
		font-family: var(--fonts-ui) !important;
	}

	:global(.rev-tooltip) {
		pointer-events: none;
	}
</style>

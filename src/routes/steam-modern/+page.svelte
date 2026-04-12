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
	twoCol
} from '$lib/recipes/steam-modern';
import {
	statsGrid,
	statCard,
	statLabel,
	statValue,
	statDelta,
	statDeltaUp,
	statDeltaDown,
	statBar,
	statBarFill,
	chartContainer,
	revTooltipInner,
	revTooltipDate,
	revTooltipRow,
	revTooltipTotal,
	revDotBlue,
	revDotGold,
	revDotGreen,
	activityItem,
	activityTime,
	activityDotStyles,
	activityText,
	healthRow,
	healthName,
	healthBarWrap,
	healthVal
} from './page.styles';

const stats = [
	{
		label: 'Concurrent Users',
		value: '8.4',
		unit: 'M',
		delta: '▲ +3.2% from yesterday',
		up: true,
		fill: 72,
		fillStyle: ''
	},
	{
		label: 'Daily Revenue',
		value: '$2.1',
		unit: 'M',
		delta: '▲ +8.7% vs. last week',
		up: true,
		fill: 85,
		fillStyle: 'background:linear-gradient(90deg,#8a6810,#d5a51b)'
	},
	{
		label: 'Total Accounts',
		value: '147',
		unit: 'M',
		delta: '▲ +12,488 today',
		up: true,
		fill: 60,
		fillStyle: 'background:linear-gradient(90deg,#3c7022,#4fa832)'
	},
	{
		label: 'Active Bans (24h)',
		value: '1,204',
		unit: '',
		delta: '▲ +14.2% VAC activity',
		up: false,
		fill: 28,
		fillStyle: 'background:linear-gradient(90deg,#843030,#c94040)'
	}
];

const revenueData = [
	{ date: new Date('2012-07-24'), store: 920, market: 310, dlc: 180 },
	{ date: new Date('2012-07-25'), store: 1140, market: 380, dlc: 210 },
	{ date: new Date('2012-07-26'), store: 790, market: 260, dlc: 155 },
	{ date: new Date('2012-07-27'), store: 1340, market: 450, dlc: 240 },
	{ date: new Date('2012-07-28'), store: 1030, market: 340, dlc: 195 },
	{ date: new Date('2012-07-29'), store: 1470, market: 490, dlc: 280 },
	{ date: new Date('2012-07-30'), store: 1280, market: 420, dlc: 255 },
	{ date: new Date('2012-07-31'), store: 1060, market: 355, dlc: 200 },
	{ date: new Date('2012-08-01'), store: 1160, market: 385, dlc: 215 },
	{ date: new Date('2012-08-02'), store: 900, market: 295, dlc: 170 },
	{ date: new Date('2012-08-03'), store: 1440, market: 475, dlc: 270 },
	{ date: new Date('2012-08-04'), store: 1505, market: 495, dlc: 285 },
	{ date: new Date('2012-08-05'), store: 1245, market: 410, dlc: 240 },
	{ date: new Date('2012-08-06'), store: 1635, market: 540, dlc: 310 }
];

function fmtRevDate(d: Date) {
	return `${d.getMonth() + 1}/${d.getDate()}`;
}

function fmtRevTooltipDate(d: Date) {
	return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

const activityFeed = [
	{
		dot: 'danger' as const,
		time: '14:32',
		text: '<strong>VAC System</strong> issued 48 bans across 3 games'
	},
	{
		dot: 'info' as const,
		time: '14:28',
		text: '<strong>Steamworks</strong> build #4892 deployed to CDN'
	},
	{
		dot: 'warn' as const,
		time: '14:15',
		text: 'Store traffic spike detected — <strong>+340%</strong> on flash sale page'
	},
	{
		dot: 'success' as const,
		time: '13:55',
		text: '<strong>Greenlight</strong> approved 6 new titles'
	},
	{
		dot: 'danger' as const,
		time: '13:40',
		text: 'Admin <strong>ValveAdmin_03</strong> suspended user #44821930'
	},
	{
		dot: 'info' as const,
		time: '13:22',
		text: 'Scheduled maintenance complete — all nodes healthy'
	},
	{
		dot: 'warn' as const,
		time: '13:10',
		text: 'Report queue threshold reached — <strong>9 pending</strong>'
	}
];

const serverHealth = [
	{ name: 'US East', val: 94, color: 'green' as const },
	{ name: 'US West', val: 88, color: '' as const },
	{ name: 'EU Frankfurt', val: 97, color: 'green' as const },
	{ name: 'EU Stockholm', val: 91, color: '' as const },
	{ name: 'Asia Pacific', val: 79, color: 'gold' as const },
	{ name: 'South America', val: 62, color: 'red' as const }
];

const recentUsers = [
	{
		id: '#44821930',
		name: 'darkw4ve_99',
		status: 'banned',
		country: 'RU',
		games: 0,
		joined: 'Nov 12, 2012'
	},
	{
		id: '#44820481',
		name: 'steamfan2012',
		status: 'online',
		country: 'US',
		games: 47,
		joined: 'Nov 12, 2012'
	},
	{
		id: '#44819004',
		name: 'gamerbro_x',
		status: 'away',
		country: 'DE',
		games: 12,
		joined: 'Nov 11, 2012'
	},
	{
		id: '#44817223',
		name: 'pixelwitch',
		status: 'offline',
		country: 'GB',
		games: 103,
		joined: 'Nov 11, 2012'
	}
];

const panelStyles = panel();
const chartPanel = cx(panelStyles.root, css({ display: 'flex', flexDirection: 'column' }));

const progressFills: Record<string, string> = {
	'': progressBarSva().fill as string,
	green: progressBarSva({ color: 'green' }).fill as string,
	red: progressBarSva({ color: 'red' }).fill as string,
	gold: progressBarSva({ color: 'gold' }).fill as string
};
const progressTrack = progressBarSva().track as string;

function getProgressFillClass(color: string): string {
	return progressFills[color] ?? progressFills[''];
}

const userNameSmall = css({ fontSize: '12px' });
const userIdInline = css({ color: 'text.muted', fontSize: '10px', marginLeft: '4px' });
const cellSecondary = css({ color: 'text.secondary' });
const cellMuted = css({ color: 'text.muted', fontSize: '11px' });
</script>

<PageHeader title="Administrator Dashboard" subtitle="Steam Platform Control · Last refreshed 2 minutes ago">
	<button type="button" class={btn({ visual: 'secondary' })}><RefreshCw size={13} /> Refresh</button>
	<button type="button" class={btn({ visual: 'primary' })}><Download size={13} /> Export Report</button>
</PageHeader>

<!-- Stats row -->
<div class={statsGrid}>
	{#each stats as stat (stat.label)}
		<div class={statCard}>
			<div class={statLabel}>{stat.label}</div>
			<div class={statValue}>{stat.value}<span>{stat.unit}</span></div>
			<div class={cx(statDelta, stat.up ? statDeltaUp : statDeltaDown)}>{stat.delta}</div>
			<div class={statBar}>
				<div class={statBarFill} style="width:{stat.fill}%;{stat.fillStyle}"></div>
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
				y={(d: (typeof revenueData)[number]) => d.store + d.market + d.dlc}
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
					{@const d = data as (typeof revenueData)[number]}
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
				<div class={healthRow}>
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
							<div class={userAvatar}>{u.name.slice(0, 2).toUpperCase()}</div>
							<span class={userNameSmall}>{u.name}</span>
							<span class={userIdInline}>{u.id}</span>
						</td>
						<td><StatusBadge status={u.status as 'online' | 'offline' | 'away' | 'banned'} /></td>
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

<script lang="ts">
import { Chart, Svg, Axis, Area, Highlight, Tooltip } from 'layerchart';
import { scaleLinear, scaleTime } from 'd3-scale';
import { curveMonotoneX } from 'd3-shape';
import { RefreshCw, Download } from 'lucide-svelte';
import { css, cx } from 'styled-system/css';
import { grid } from 'styled-system/patterns';
import PageHeader from '$lib/components/steam-modern/PageHeader.svelte';
import StatusBadge from '$lib/components/steam-modern/StatusBadge.svelte';

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

const statsGrid = grid({
	columns: 4,
	gap: '1px',
	background: 'divider',
	borderBottom: '1px solid token(colors.divider)'
});

const statCard = css({
	background: 'surface.panel',
	padding: '16px 20px',
	position: 'relative'
});

const statLabel = css({
	fontSize: '10px',
	textTransform: 'uppercase',
	letterSpacing: '0.1em',
	color: 'text.muted',
	fontWeight: '700',
	marginBottom: '6px'
});

const statValue = css({
	fontSize: '26px',
	fontWeight: '300',
	color: 'text.bright',
	lineHeight: '1',
	letterSpacing: '-0.02em',
	'& span': {
		fontSize: '14px',
		fontWeight: '400',
		color: 'text.secondary'
	}
});

const statDelta = css({ marginTop: '4px', fontSize: '11px' });
const statDeltaUp = css({ color: 'accent.green' });
const statDeltaDown = css({ color: 'accent.red' });

const statBar = css({
	position: 'absolute',
	bottom: '0',
	left: '0',
	right: '0',
	height: '2px',
	background: 'divider'
});

const statBarFill = css({
	height: '100%',
	background: 'linear-gradient(90deg, token(colors.accent.dim), token(colors.accent))',
	transition: 'width 1s ease'
});

const twoCol = grid({
	columns: 2,
	gap: '16px',
	margin: '16px 20px'
});

const panel = css({
	background: 'surface.panel',
	border: '1px solid token(colors.border)',
	borderRadius: 'DEFAULT'
});

const panelHeader = css({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: '10px 14px',
	background: 'rgba(0, 0, 0, 0.15)',
	borderBottom: '1px solid token(colors.border)',
	fontSize: 'sm',
	fontWeight: '700',
	textTransform: 'uppercase',
	letterSpacing: '0.08em',
	color: 'text.secondary'
});

const panelBody = css({ padding: '14px' });

const chartPanel = cx(panel, css({ display: 'flex', flexDirection: 'column' }));

const chartContainer = css({
	padding: '8px 14px 14px',
	flex: '1',
	minHeight: '160px'
});

const badgeBase = css({
	display: 'inline-block',
	padding: '2px 7px',
	fontSize: '10px',
	fontWeight: '700',
	borderRadius: 'DEFAULT',
	textTransform: 'uppercase',
	letterSpacing: '0.04em',
	whiteSpace: 'nowrap'
});

const badgeBlue = cx(
	badgeBase,
	css({
		background: 'rgba(102, 192, 244, 0.15)',
		color: 'accent',
		border: '1px solid rgba(102, 192, 244, 0.3)'
	})
);

const badgeYellow = cx(
	badgeBase,
	css({
		background: 'rgba(213, 165, 27, 0.2)',
		color: '#e8c44e',
		border: '1px solid rgba(213, 165, 27, 0.3)'
	})
);

const badgeGreen = cx(
	badgeBase,
	css({
		background: 'rgba(79, 168, 50, 0.2)',
		color: '#6dcf4a',
		border: '1px solid rgba(79, 168, 50, 0.3)'
	})
);

const btn = css({
	display: 'inline-flex',
	alignItems: 'center',
	gap: '6px',
	padding: '6px 14px',
	fontSize: 'sm',
	fontWeight: '600',
	borderRadius: 'DEFAULT',
	cursor: 'pointer',
	border: 'none',
	transition: 'all token(durations)',
	textTransform: 'uppercase',
	letterSpacing: '0.05em',
	fontFamily: 'ui'
});

const btnPrimary = cx(
	btn,
	css({
		background: 'linear-gradient(180deg, #76b4d6 0%, #4a88aa 50%, #3c7493 100%)',
		color: '#fff',
		border: '1px solid #2a5f7e',
		textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)',
		_hover: {
			background: 'linear-gradient(180deg, #8ac4e4 0%, #5a98ba 50%, #4c84a3 100%)'
		}
	})
);

const btnSecondary = cx(
	btn,
	css({
		background: 'linear-gradient(180deg, #5c7a8e 0%, #3d5a6e 100%)',
		color: 'text.primary',
		border: '1px solid token(colors.border)',
		textShadow: '0 1px 1px rgba(0, 0, 0, 0.3)',
		_hover: {
			background: 'linear-gradient(180deg, #6c8a9e 0%, #4d6a7e 100%)'
		}
	})
);

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
	'& span:last-child': {
		color: 'text.primary',
		fontWeight: '600'
	}
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

const revDot = css({
	display: 'inline-block',
	width: '6px',
	height: '6px',
	borderRadius: 'full',
	marginRight: '5px',
	verticalAlign: 'middle'
});

const revDotBlue = cx(revDot, css({ background: '#66c0f4' }));
const revDotGold = cx(revDot, css({ background: '#d5a51b' }));
const revDotGreen = cx(revDot, css({ background: '#4fa832' }));

const activityItem = css({
	display: 'flex',
	gap: '10px',
	padding: '8px 0',
	borderBottom: '1px solid token(colors.divider)',
	fontSize: 'sm',
	'&:last-child': { borderBottom: 'none' },
	'& strong': {
		color: 'accent',
		fontWeight: '600'
	}
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

const healthRow = css({
	display: 'flex',
	alignItems: 'center',
	gap: '10px',
	padding: '7px 0',
	borderBottom: '1px solid token(colors.divider)',
	'&:last-child': { borderBottom: 'none' }
});

const healthName = css({
	width: '110px',
	color: 'text.secondary',
	fontSize: 'sm'
});

const healthBarWrap = css({ flex: '1' });

const healthVal = css({
	width: '40px',
	textAlign: 'right',
	color: 'text.primary',
	fontSize: 'sm',
	fontWeight: '600'
});

const progressBar = css({
	height: '6px',
	background: 'rgba(0, 0, 0, 0.3)',
	borderRadius: '1px',
	overflow: 'hidden'
});

const progressFill = css({
	height: '100%',
	background: 'linear-gradient(90deg, token(colors.accent.dim), token(colors.accent))',
	borderRadius: '1px',
	transition: 'width 1s ease'
});

const progressFillGreen = cx(
	progressFill,
	css({ background: 'linear-gradient(90deg, #3c7022, token(colors.accent.green))' })
);

const progressFillRed = cx(
	progressFill,
	css({ background: 'linear-gradient(90deg, #843030, token(colors.accent.red))' })
);

const progressFillGold = cx(
	progressFill,
	css({ background: 'linear-gradient(90deg, #8a6810, token(colors.accent.gold))' })
);

function getProgressFillClass(color: string) {
	if (color === 'green') return progressFillGreen;
	if (color === 'red') return progressFillRed;
	if (color === 'gold') return progressFillGold;
	return progressFill;
}

const dataTable = css({
	width: '100%',
	borderCollapse: 'collapse',
	fontSize: '12.5px',
	'& th': {
		textAlign: 'left',
		padding: '8px 12px',
		fontSize: '10px',
		fontWeight: '700',
		letterSpacing: '0.1em',
		textTransform: 'uppercase',
		color: 'text.muted',
		borderBottom: '1px solid token(colors.border)',
		background: 'rgba(0, 0, 0, 0.2)',
		whiteSpace: 'nowrap'
	},
	'& td': {
		padding: '7px 12px',
		borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
		color: 'text.primary'
	},
	'& tr:last-child td': { borderBottom: 'none' },
	'& tbody tr:hover': { background: 'surface.rowHover' }
});

const userAvatar = css({
	width: '24px',
	height: '24px',
	borderRadius: 'DEFAULT',
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	fontSize: '9px',
	fontWeight: '700',
	color: '#fff',
	verticalAlign: 'middle',
	marginRight: '6px'
});

const actionLink = css({
	color: 'accent',
	fontSize: '11px',
	cursor: 'pointer',
	marginRight: '8px',
	_hover: { textDecoration: 'underline' }
});
</script>

<PageHeader title="Administrator Dashboard" subtitle="Steam Platform Control · Last refreshed 2 minutes ago">
	<button type="button" class={btnSecondary}><RefreshCw size={13} /> Refresh</button>
	<button type="button" class={btnPrimary}><Download size={13} /> Export Report</button>
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
		<div class={panelHeader}>
			Revenue — Last 14 Days
			<div style="display:flex;gap:6px">
				<span class={badgeBlue}>Store</span>
				<span class={badgeYellow}>Market</span>
				<span class={badgeGreen}>DLC</span>
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
	<div class={panel}>
		<div class={panelHeader}>Activity Log <span class={badgeBlue}>Live</span></div>
		<div class={panelBody}>
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
	<div class={panel}>
		<div class={panelHeader}>Server Health</div>
		<div class={panelBody}>
			{#each serverHealth as srv (srv.name)}
				<div class={healthRow}>
					<span class={healthName}>{srv.name}</span>
					<div class={healthBarWrap}>
						<div class={progressBar}>
							<div class={getProgressFillClass(srv.color)} style="width:{srv.val}%"></div>
						</div>
					</div>
					<span class={healthVal}>{srv.val}%</span>
				</div>
			{/each}
		</div>
	</div>

	<div class={panel}>
		<div class={panelHeader}>
			Recent Registrations
			<a href="/steam-modern/users" class={actionLink} style="font-size:11px">View all &#8594;</a>
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
							<div class={userAvatar} style="background:linear-gradient(135deg,#2a6591,#1b4a6b)">{u.name.slice(0, 2).toUpperCase()}</div>
							<span style="font-size:12px">{u.name}</span>
							<span style="color:var(--colors-text-muted);font-size:10px;margin-left:4px">{u.id}</span>
						</td>
						<td><StatusBadge status={u.status as 'online' | 'offline' | 'away' | 'banned'} /></td>
						<td style="color:var(--colors-text-secondary)">{u.games}</td>
						<td style="color:var(--colors-text-muted);font-size:11px">{u.joined}</td>
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

<script lang="ts">
	import { Chart, Svg, Axis, Area, Highlight, Tooltip } from 'layerchart';
	import { scaleLinear, scaleTime } from 'd3-scale';
	import { curveMonotoneX } from 'd3-shape';
	import { RefreshCw, Download } from 'lucide-svelte';
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
			fillStyle: '',
		},
		{
			label: 'Daily Revenue',
			value: '$2.1',
			unit: 'M',
			delta: '▲ +8.7% vs. last week',
			up: true,
			fill: 85,
			fillStyle: 'background:linear-gradient(90deg,#8a6810,#d5a51b)',
		},
		{
			label: 'Total Accounts',
			value: '147',
			unit: 'M',
			delta: '▲ +12,488 today',
			up: true,
			fill: 60,
			fillStyle: 'background:linear-gradient(90deg,#3c7022,#4fa832)',
		},
		{
			label: 'Active Bans (24h)',
			value: '1,204',
			unit: '',
			delta: '▲ +14.2% VAC activity',
			up: false,
			fill: 28,
			fillStyle: 'background:linear-gradient(90deg,#843030,#c94040)',
		},
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
		{ date: new Date('2012-08-06'), store: 1635, market: 540, dlc: 310 },
	];

	function fmtRevDate(d: Date) {
		return `${d.getMonth() + 1}/${d.getDate()}`;
	}

	function fmtRevTooltipDate(d: Date) {
		return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
	}

	const activityFeed = [
		{ dot: 'act-danger', time: '14:32', text: '<strong>VAC System</strong> issued 48 bans across 3 games' },
		{ dot: 'act-info', time: '14:28', text: '<strong>Steamworks</strong> build #4892 deployed to CDN' },
		{ dot: 'act-warn', time: '14:15', text: 'Store traffic spike detected — <strong>+340%</strong> on flash sale page' },
		{ dot: 'act-success', time: '13:55', text: '<strong>Greenlight</strong> approved 6 new titles' },
		{ dot: 'act-danger', time: '13:40', text: 'Admin <strong>ValveAdmin_03</strong> suspended user #44821930' },
		{ dot: 'act-info', time: '13:22', text: 'Scheduled maintenance complete — all nodes healthy' },
		{ dot: 'act-warn', time: '13:10', text: 'Report queue threshold reached — <strong>9 pending</strong>' },
	];

	const serverHealth = [
		{ name: 'US East', val: 94, color: 'green' },
		{ name: 'US West', val: 88, color: '' },
		{ name: 'EU Frankfurt', val: 97, color: 'green' },
		{ name: 'EU Stockholm', val: 91, color: '' },
		{ name: 'Asia Pacific', val: 79, color: 'gold' },
		{ name: 'South America', val: 62, color: 'red' },
	];

	const recentUsers = [
		{ id: '#44821930', name: 'darkw4ve_99', status: 'banned', country: 'RU', games: 0, joined: 'Nov 12, 2012' },
		{ id: '#44820481', name: 'steamfan2012', status: 'online', country: 'US', games: 47, joined: 'Nov 12, 2012' },
		{ id: '#44819004', name: 'gamerbro_x', status: 'away', country: 'DE', games: 12, joined: 'Nov 11, 2012' },
		{ id: '#44817223', name: 'pixelwitch', status: 'offline', country: 'GB', games: 103, joined: 'Nov 11, 2012' },
	];
</script>

<PageHeader title="Administrator Dashboard" subtitle="Steam Platform Control · Last refreshed 2 minutes ago">
	<button class="btn btn-secondary"><RefreshCw size={13} /> Refresh</button>
	<button class="btn btn-primary"><Download size={13} /> Export Report</button>
</PageHeader>

<!-- Stats row -->
<div class="stats-grid">
	{#each stats as stat}
		<div class="stat-card">
			<div class="stat-label">{stat.label}</div>
			<div class="stat-value">{stat.value}<span>{stat.unit}</span></div>
			<div class="stat-delta" class:up={stat.up} class:down={!stat.up}>{stat.delta}</div>
			<div class="stat-bar">
				<div class="stat-bar-fill" style="width:{stat.fill}%;{stat.fillStyle}"></div>
			</div>
		</div>
	{/each}
</div>

<!-- Two column panels -->
<div class="two-col">
	<!-- Revenue chart -->
	<div class="panel chart-panel">
		<div class="panel-header">
			Revenue — Last 14 Days
			<div style="display:flex;gap:6px">
				<span class="badge badge-blue">Store</span>
				<span class="badge badge-yellow">Market</span>
				<span class="badge badge-green">DLC</span>
			</div>
		</div>
		<div class="chart-container">
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
					<div class="rev-tooltip-inner">
						<p class="rev-tooltip-date">{fmtRevTooltipDate(d.date)}</p>
						<div class="rev-tooltip-row">
							<span><span class="rev-dot rev-dot-blue"></span>Store</span>
							<span>${d.store.toLocaleString()}</span>
						</div>
						<div class="rev-tooltip-row">
							<span><span class="rev-dot rev-dot-gold"></span>Market</span>
							<span>${d.market.toLocaleString()}</span>
						</div>
						<div class="rev-tooltip-row">
							<span><span class="rev-dot rev-dot-green"></span>DLC</span>
							<span>${d.dlc.toLocaleString()}</span>
						</div>
						<div class="rev-tooltip-total">
							<span>Total</span>
							<span>${(d.store + d.market + d.dlc).toLocaleString()}</span>
						</div>
					</div>
				</Tooltip.Root>
			</Chart>
		</div>
	</div>

	<!-- Activity feed -->
	<div class="panel">
		<div class="panel-header">Activity Log <span class="badge badge-blue">Live</span></div>
		<div class="panel-body">
			{#each activityFeed as item}
				<div class="activity-item">
					<span class="activity-time">{item.time}</span>
					<div class="activity-type {item.dot}"></div>
					<div class="activity-text">{@html item.text}</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<!-- Server health + recent users -->
<div class="two-col">
	<div class="panel">
		<div class="panel-header">Server Health</div>
		<div class="panel-body">
			{#each serverHealth as srv}
				<div class="health-row">
					<span class="health-name">{srv.name}</span>
					<div class="health-bar-wrap">
						<div class="progress-bar">
							<div class="progress-fill {srv.color}" style="width:{srv.val}%"></div>
						</div>
					</div>
					<span class="health-val">{srv.val}%</span>
				</div>
			{/each}
		</div>
	</div>

	<div class="panel">
		<div class="panel-header">
			Recent Registrations
			<a href="/steam-modern/users" class="action-link" style="font-size:11px">View all →</a>
		</div>
		<table class="data-table">
			<thead>
				<tr>
					<th>User</th>
					<th>Status</th>
					<th>Games</th>
					<th>Joined</th>
				</tr>
			</thead>
			<tbody>
				{#each recentUsers as u}
					<tr>
						<td>
							<div class="user-avatar" style="background:linear-gradient(135deg,#2a6591,#1b4a6b)">{u.name.slice(0,2).toUpperCase()}</div>
							<span style="font-size:12px">{u.name}</span>
							<span style="color:var(--text-muted);font-size:10px;margin-left:4px">{u.id}</span>
						</td>
						<td><StatusBadge status={u.status as 'online' | 'offline' | 'away' | 'banned'} /></td>
						<td style="color:var(--text-secondary)">{u.games}</td>
						<td style="color:var(--text-muted);font-size:11px">{u.joined}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<style>
	.stats-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1px;
		background: var(--divider);
		border-bottom: 1px solid var(--divider);
	}
	.stat-card { background: var(--surface-panel); padding: 16px 20px; position: relative; }
	.stat-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted); font-weight: 700; margin-bottom: 6px; }
	.stat-value { font-size: 26px; font-weight: 300; color: var(--text-bright); line-height: 1; letter-spacing: -0.02em; }
	.stat-value :global(span) { font-size: 14px; font-weight: 400; color: var(--text-secondary); }
	.stat-delta { margin-top: 4px; font-size: 11px; }
	.stat-delta.up { color: var(--accent-green); }
	.stat-delta.down { color: var(--accent-red); }
	.stat-bar { position: absolute; bottom: 0; left: 0; right: 0; height: 2px; background: var(--divider); }
	.stat-bar-fill { height: 100%; background: linear-gradient(90deg, var(--accent-dim), var(--accent)); transition: width 1s ease; }

	.chart-panel { display: flex; flex-direction: column; }
	.chart-container { padding: 8px 14px 14px; flex: 1; min-height: 160px; }

	:global(.rev-tick-label) {
		fill: var(--text-muted) !important;
		font-size: 10px !important;
		font-family: var(--font-ui) !important;
	}

	:global(.rev-tooltip) { pointer-events: none; }
	.rev-tooltip-inner {
		background: var(--surface-elevated);
		border: 1px solid var(--border-light);
		border-radius: var(--radius);
		padding: 8px 10px;
		font-size: 11px;
		min-width: 130px;
		box-shadow: 0 4px 12px rgba(0,0,0,0.5);
	}
	.rev-tooltip-date {
		color: var(--text-muted);
		font-size: 10px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		margin-bottom: 6px;
	}
	.rev-tooltip-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 12px;
		padding: 2px 0;
		color: var(--text-secondary);
	}
	.rev-tooltip-row span:last-child { color: var(--text-primary); font-weight: 600; }
	.rev-tooltip-total {
		display: flex;
		justify-content: space-between;
		gap: 12px;
		margin-top: 5px;
		padding-top: 5px;
		border-top: 1px solid var(--divider);
		color: var(--text-bright);
		font-weight: 700;
	}
	.rev-dot {
		display: inline-block;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		margin-right: 5px;
		vertical-align: middle;
	}
	.rev-dot-blue { background: #66c0f4; }
	.rev-dot-gold { background: #d5a51b; }
	.rev-dot-green { background: #4fa832; }

	.activity-item { display: flex; gap: 10px; padding: 8px 0; border-bottom: 1px solid var(--divider); font-size: var(--font-size-sm); }
	.activity-item:last-child { border-bottom: none; }
	.activity-time { color: var(--text-muted); white-space: nowrap; min-width: 40px; }
	.activity-type { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; margin-top: 4px; }
	.activity-text { color: var(--text-secondary); line-height: 1.4; flex: 1; }
	:global(.activity-text strong) { color: var(--accent); font-weight: 600; }
	.act-warn { background: var(--accent-gold); }
	.act-info { background: var(--accent); }
	.act-danger { background: var(--accent-red); }
	.act-success { background: var(--accent-green); }

	.health-row { display: flex; align-items: center; gap: 10px; padding: 7px 0; border-bottom: 1px solid var(--divider); }
	.health-row:last-child { border-bottom: none; }
	.health-name { width: 110px; color: var(--text-secondary); font-size: var(--font-size-sm); }
	.health-bar-wrap { flex: 1; }
	.health-val { width: 40px; text-align: right; color: var(--text-primary); font-size: var(--font-size-sm); font-weight: 600; }
</style>

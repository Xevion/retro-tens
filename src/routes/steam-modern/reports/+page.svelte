<script lang="ts">
import { CalendarDays, Download } from 'lucide-svelte';
import PageHeader from '$lib/components/steam-modern/PageHeader.svelte';

const weeklyData = [
	{ label: 'Mon', users: 7.2, revenue: 1.8 },
	{ label: 'Tue', users: 7.8, revenue: 2.1 },
	{ label: 'Wed', users: 8.1, revenue: 2.4 },
	{ label: 'Thu', users: 7.6, revenue: 1.9 },
	{ label: 'Fri', users: 8.9, revenue: 3.2 },
	{ label: 'Sat', users: 10.2, revenue: 4.1 },
	{ label: 'Sun', users: 9.4, revenue: 3.7 }
];
const maxUsers = Math.max(...weeklyData.map((d) => d.users));
const maxRevenue = Math.max(...weeklyData.map((d) => d.revenue));

const topGames = [
	{ name: 'Dota 2', players: '412K', change: '+18%', color: 'green' },
	{ name: 'Team Fortress 2', players: '84K', change: '+4%', color: 'green' },
	{ name: 'Skyrim', players: '62K', change: '-2%', color: 'red' },
	{ name: 'Borderlands 2', players: '51K', change: '+31%', color: 'green' },
	{ name: 'Counter-Strike: Source', players: '48K', change: '-6%', color: 'red' },
	{ name: 'XCOM: Enemy Unknown', players: '43K', change: '+12%', color: 'green' }
];

const vacStats = [
	{ region: 'US East', bans: 284, rate: 0.012 },
	{ region: 'US West', bans: 198, rate: 0.009 },
	{ region: 'EU West', bans: 412, rate: 0.018 },
	{ region: 'Asia Pacific', bans: 188, rate: 0.022 },
	{ region: 'South America', bans: 94, rate: 0.031 }
];
</script>

<PageHeader title="Analytics &amp; Reports" subtitle="Platform metrics · Week of Nov 5–11, 2012">
	<button type="button" class="btn btn-secondary"><CalendarDays size={13} /> Date Range</button>
	<button type="button" class="btn btn-primary"><Download size={13} /> Export PDF</button>
</PageHeader>

<div class="metrics-strip">
	{#each [
		{label:'Peak CCU This Week',value:'10.2M',delta:'▲ +8.4%',up:true},
		{label:'Weekly Revenue',value:'$19.2M',delta:'▲ +12.1%',up:true},
		{label:'New Accounts',value:'87,440',delta:'▲ +3.2%',up:true},
		{label:'VAC Bans Issued',value:'1,176',delta:'▲ +14.2%',up:false},
		{label:'Store Transactions',value:'2.8M',delta:'▲ +9.7%',up:true},
	] as m (m.label)}
		<div class="metric-card">
			<div class="metric-label">{m.label}</div>
			<div class="metric-value">{m.value}</div>
			<div class="metric-delta" class:up={m.up} class:down={!m.up}>{m.delta}</div>
		</div>
	{/each}
</div>

<div class="two-col">
	<!-- CCU Chart -->
	<div class="panel">
		<div class="panel-header">Concurrent Users — This Week</div>
		<div class="chart-container">
			<div class="bar-chart">
				{#each weeklyData as day (day.label)}
					<div class="bar-col">
						<div class="bar-label-val">{day.users}M</div>
						<div class="bar-block" style="height:{(day.users/maxUsers*100)}%"></div>
						<div class="bar-label">{day.label}</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Revenue Chart -->
	<div class="panel">
		<div class="panel-header">Daily Revenue — This Week <span class="badge badge-yellow">$M</span></div>
		<div class="chart-container">
			<div class="bar-chart">
				{#each weeklyData as day (day.label)}
					<div class="bar-col">
						<div class="bar-label-val">${day.revenue}M</div>
						<div class="bar-block gold" style="height:{(day.revenue/maxRevenue*100)}%"></div>
						<div class="bar-label">{day.label}</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<div class="two-col">
	<!-- Top Games -->
	<div class="panel">
		<div class="panel-header">Top Games by Current Players</div>
		<div class="panel-body">
			{#each topGames as g, i (g.name)}
				<div class="top-game-row">
					<span class="rank">#{i+1}</span>
					<span class="game-name">{g.name}</span>
					<span class="player-count">{g.players}</span>
					<span class="change" class:up={g.color==='green'} class:down={g.color==='red'}>{g.change}</span>
				</div>
			{/each}
		</div>
	</div>

	<!-- VAC Stats -->
	<div class="panel">
		<div class="panel-header">VAC Bans by Region <span class="badge badge-red">24h</span></div>
		<div class="panel-body">
			{#each vacStats as v (v.region)}
				<div class="vac-row">
					<span class="vac-region">{v.region}</span>
					<div class="vac-bar-wrap">
						<div class="progress-bar">
							<div class="progress-fill red" style="width:{(v.bans/500)*100}%"></div>
						</div>
					</div>
					<span class="vac-count">{v.bans}</span>
					<span class="vac-rate">{(v.rate*100).toFixed(1)}%</span>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.metrics-strip { display: grid; grid-template-columns: repeat(5,1fr); gap: 1px; background: var(--divider); border-bottom: 1px solid var(--divider); }
	.metric-card { background: var(--surface-panel); padding: 14px 16px; }
	.metric-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted); font-weight: 700; margin-bottom: 6px; }
	.metric-value { font-size: 22px; font-weight: 300; color: var(--text-bright); line-height: 1; }
	.metric-delta { margin-top: 4px; font-size: 11px; }
	.metric-delta.up { color: var(--accent-green); }
	.metric-delta.down { color: var(--accent-red); }

	.chart-container { padding: 14px; }
	.bar-chart { display: flex; align-items: flex-end; gap: 8px; height: 130px; border-bottom: 1px solid var(--border); }
	.bar-col { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 4px; }
	.bar-label-val { font-size: 9px; color: var(--text-muted); white-space: nowrap; }
	.bar-block { width: 100%; background: linear-gradient(180deg, var(--accent-bright), var(--accent-dim)); border-radius: 1px 1px 0 0; min-height: 2px; transition: opacity 0.15s; }
	.bar-block:hover { opacity: 0.8; }
	.bar-block.gold { background: linear-gradient(180deg, #e8c44e, var(--accent-gold)); }
	.bar-label { font-size: 10px; color: var(--text-muted); padding-top: 4px; }

	.top-game-row { display: flex; align-items: center; gap: 10px; padding: 7px 0; border-bottom: 1px solid var(--divider); }
	.top-game-row:last-child { border-bottom: none; }
	.rank { width: 24px; font-size: 12px; font-weight: 700; color: var(--text-disabled); text-align: center; }
	.game-name { flex: 1; font-size: 12.5px; color: var(--text-primary); font-weight: 600; }
	.player-count { font-size: 12px; color: var(--accent); font-weight: 600; width: 50px; text-align: right; }
	.change { font-size: 11px; width: 40px; text-align: right; }
	.change.up { color: var(--accent-green); }
	.change.down { color: var(--accent-red); }

	.vac-row { display: flex; align-items: center; gap: 10px; padding: 7px 0; border-bottom: 1px solid var(--divider); }
	.vac-row:last-child { border-bottom: none; }
	.vac-region { width: 110px; font-size: 12px; color: var(--text-secondary); }
	.vac-bar-wrap { flex: 1; }
	.vac-count { width: 36px; text-align: right; font-size: 12px; color: var(--text-primary); font-weight: 600; }
	.vac-rate { width: 36px; text-align: right; font-size: 11px; color: var(--text-muted); }
</style>

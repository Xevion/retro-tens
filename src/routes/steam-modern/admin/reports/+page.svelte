<script lang="ts">
import { CalendarDays, Download } from 'lucide-svelte';
import PageHeader from '$lib/components/steam-modern/PageHeader.svelte';
import BarChart from '$lib/components/steam-modern/BarChart.svelte';
import { css, cx } from 'styled-system/css';
import { btn, badge, panel, twoCol, delta as deltaCva, dataRow } from '$lib/recipes/steam-modern';
import MetricStrip from '$lib/components/steam-modern/MetricStrip.svelte';
import ProgressBar from '$lib/components/steam-modern/ProgressBar.svelte';
const { data } = $props();

const pnl = panel();

const chartContainer = css({ padding: '14px' });

const ccuData = $derived(data.weeklyData.map((d) => ({ label: d.label, value: d.users })));
const revenueBarData = $derived(data.weeklyData.map((d) => ({ label: d.label, value: d.revenue })));

const rank = css({
	width: '24px',
	fontSize: '12px',
	fontWeight: '700',
	color: 'text.disabled',
	textAlign: 'center'
});

const gameName = css({ flex: '1', fontSize: '12.5px', color: 'text.primary', fontWeight: '600' });

const playerCount = css({
	fontSize: '12px',
	color: 'accent',
	fontWeight: '600',
	width: '50px',
	textAlign: 'right'
});

const change = css({ fontSize: '11px', width: '40px', textAlign: 'right' });

const vacRegion = css({ width: '110px', fontSize: '12px', color: 'text.secondary' });
const vacBarWrap = css({ flex: '1' });
const vacCount = css({
	width: '36px',
	textAlign: 'right',
	fontSize: '12px',
	color: 'text.primary',
	fontWeight: '600'
});
const vacRate = css({ width: '36px', textAlign: 'right', fontSize: '11px', color: 'text.muted' });
</script>

<PageHeader title="Analytics &amp; Reports" subtitle="Platform metrics · Week of Nov 5–11, 2012">
	<button type="button" class={btn({ visual: 'secondary' })}><CalendarDays size={13} /> Date Range</button>
	<button type="button" class={btn({ visual: 'primary' })}><Download size={13} /> Export PDF</button>
</PageHeader>

<MetricStrip metrics={data.metrics} columns={5} />

<div class={twoCol}>
	<!-- CCU Chart -->
	<div class={pnl.root}>
		<div class={pnl.header}>Concurrent Users — This Week</div>
		<div class={chartContainer}>
			<BarChart data={ccuData} color="blue" formatValue={(v) => `${v}M`} ariaLabel="Concurrent users this week" />
		</div>
	</div>

	<!-- Revenue Chart -->
	<div class={pnl.root}>
		<div class={pnl.header}>Daily Revenue — This Week <span class={badge({ color: 'yellow' })}>$M</span></div>
		<div class={chartContainer}>
			<BarChart data={revenueBarData} color="gold" formatValue={(v) => `$${v}M`} ariaLabel="Daily revenue this week" />
		</div>
	</div>
</div>

<div class={twoCol}>
	<!-- Top Games -->
	<div class={pnl.root}>
		<div class={pnl.header}>Top Games by Current Players</div>
		<div class={pnl.body}>
			{#each data.topGames as g, i (g.name)}
				<div class={dataRow}>
					<span class={rank}>#{i + 1}</span>
					<span class={gameName}>{g.name}</span>
					<span class={playerCount}>{g.players}</span>
					<span class={cx(change, deltaCva({ direction: g.direction }))}>{g.change}</span>
				</div>
			{/each}
		</div>
	</div>

	<!-- VAC Stats -->
	<div class={pnl.root}>
		<div class={pnl.header}>VAC Bans by Region <span class={badge({ color: 'red' })}>24h</span></div>
		<div class={pnl.body}>
			{#each data.vacStats as v (v.region)}
				<div class={dataRow}>
					<span class={vacRegion}>{v.region}</span>
					<div class={vacBarWrap}>
						<ProgressBar value={v.bans} max={500} color="red" label="{v.region} VAC bans" />
					</div>
					<span class={vacCount}>{v.bans}</span>
					<span class={vacRate}>{(v.rate * 100).toFixed(1)}%</span>
				</div>
			{/each}
		</div>
	</div>
</div>

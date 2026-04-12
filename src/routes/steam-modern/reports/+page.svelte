<script lang="ts">
import { CalendarDays, Download } from 'lucide-svelte';
import PageHeader from '$lib/components/steam-modern/PageHeader.svelte';
import { css, cx } from 'styled-system/css';
import { grid } from 'styled-system/patterns';
import {
	btn,
	badge,
	panel,
	progressBar as progressBarSva,
	twoCol
} from '$lib/recipes/steam-modern';
import { weeklyData, metrics, topGames, vacStats } from '$lib/data/steam-modern/reports';

const maxUsers = Math.max(...weeklyData.map((d) => d.users));
const maxRevenue = Math.max(...weeklyData.map((d) => d.revenue));

const pnl = panel();
const pb = progressBarSva({ color: 'red' });

const metricsStrip = grid({
	columns: 5,
	gap: '1px',
	background: 'divider',
	borderBottom: '1px solid token(colors.divider)'
});

const metricCard = css({ background: 'surface.panel', padding: '14px 16px' });

const metricLabel = css({
	fontSize: '10px',
	textTransform: 'uppercase',
	letterSpacing: '0.1em',
	color: 'text.muted',
	fontWeight: '700',
	marginBottom: '6px'
});

const metricValue = css({
	fontSize: '22px',
	fontWeight: '300',
	color: 'text.bright',
	lineHeight: '1'
});

const metricDelta = css({ marginTop: '4px', fontSize: '11px' });
const metricDeltaUp = css({ color: 'accent.green' });
const metricDeltaDown = css({ color: 'accent.red' });

const chartContainer = css({ padding: '14px' });

const barChart = css({
	display: 'flex',
	alignItems: 'flex-end',
	gap: '8px',
	height: '130px',
	borderBottom: '1px solid token(colors.border)'
});

const barCol = css({
	flex: '1',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: '4px'
});

const barLabelVal = css({ fontSize: '9px', color: 'text.muted', whiteSpace: 'nowrap' });

const barBlock = css({
	width: '100%',
	background: 'linear-gradient(180deg, token(colors.accent.bright), token(colors.accent.dim))',
	borderRadius: '1px 1px 0 0',
	minHeight: '2px',
	transition: 'opacity 0.15s',
	_hover: { opacity: '0.8' }
});

const barBlockGold = cx(
	barBlock,
	css({
		background: 'linear-gradient(180deg, token(colors.accent.goldText), token(colors.accent.gold))'
	})
);

const barLabel = css({ fontSize: '10px', color: 'text.muted', paddingTop: '4px' });

const topGameRow = css({
	display: 'flex',
	alignItems: 'center',
	gap: '10px',
	padding: '7px 0',
	borderBottom: '1px solid token(colors.divider)',
	'&:last-child': { borderBottom: 'none' }
});

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
const changeUp = css({ color: 'accent.green' });
const changeDown = css({ color: 'accent.red' });

const vacRow = css({
	display: 'flex',
	alignItems: 'center',
	gap: '10px',
	padding: '7px 0',
	borderBottom: '1px solid token(colors.divider)',
	'&:last-child': { borderBottom: 'none' }
});

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

<div class={metricsStrip}>
	{#each metrics as m (m.label)}
		<div class={metricCard}>
			<div class={metricLabel}>{m.label}</div>
			<div class={metricValue}>{m.value}</div>
			<div class={cx(metricDelta, m.up ? metricDeltaUp : metricDeltaDown)}>{m.delta}</div>
		</div>
	{/each}
</div>

<div class={twoCol}>
	<!-- CCU Chart -->
	<div class={pnl.root}>
		<div class={pnl.header}>Concurrent Users — This Week</div>
		<div class={chartContainer}>
			<div class={barChart}>
				{#each weeklyData as day (day.label)}
					<div class={barCol}>
						<div class={barLabelVal}>{day.users}M</div>
						<div class={barBlock} style="height:{(day.users / maxUsers) * 100}%"></div>
						<div class={barLabel}>{day.label}</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Revenue Chart -->
	<div class={pnl.root}>
		<div class={pnl.header}>Daily Revenue — This Week <span class={badge({ color: 'yellow' })}>$M</span></div>
		<div class={chartContainer}>
			<div class={barChart}>
				{#each weeklyData as day (day.label)}
					<div class={barCol}>
						<div class={barLabelVal}>${day.revenue}M</div>
						<div class={barBlockGold} style="height:{(day.revenue / maxRevenue) * 100}%"></div>
						<div class={barLabel}>{day.label}</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<div class={twoCol}>
	<!-- Top Games -->
	<div class={pnl.root}>
		<div class={pnl.header}>Top Games by Current Players</div>
		<div class={pnl.body}>
			{#each topGames as g, i (g.name)}
				<div class={topGameRow}>
					<span class={rank}>#{i + 1}</span>
					<span class={gameName}>{g.name}</span>
					<span class={playerCount}>{g.players}</span>
					<span class={cx(change, g.trending === 'up' ? changeUp : changeDown)}>{g.change}</span>
				</div>
			{/each}
		</div>
	</div>

	<!-- VAC Stats -->
	<div class={pnl.root}>
		<div class={pnl.header}>VAC Bans by Region <span class={badge({ color: 'red' })}>24h</span></div>
		<div class={pnl.body}>
			{#each vacStats as v (v.region)}
				<div class={vacRow}>
					<span class={vacRegion}>{v.region}</span>
					<div class={vacBarWrap}>
						<div class={pb.track}>
							<div class={pb.fill} style="width:{(v.bans / 500) * 100}%"></div>
						</div>
					</div>
					<span class={vacCount}>{v.bans}</span>
					<span class={vacRate}>{(v.rate * 100).toFixed(1)}%</span>
				</div>
			{/each}
		</div>
	</div>
</div>

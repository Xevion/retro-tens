<script lang="ts">
import { Chart, Svg, Axis, Area, Highlight, Tooltip } from 'layerchart';
import { scaleLinear, scaleTime } from 'd3-scale';
import { curveMonotoneX } from 'd3-shape';
import { css, cx } from 'styled-system/css';
import { badge, panel } from '$lib/recipes/steam-modern';
import { revenueData } from '$lib/data/steam-modern/dashboard';
import type { RevenueDataPoint } from '$lib/data/steam-modern/dashboard';

const panelStyles = panel();
const chartPanel = cx(panelStyles.root, css({ display: 'flex', flexDirection: 'column' }));

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

function fmtRevDate(d: Date) {
	return `${d.getMonth() + 1}/${d.getDate()}`;
}

function fmtRevTooltipDate(d: Date) {
	return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}
</script>

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

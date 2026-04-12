<script lang="ts">
import { scaleLinear, scaleTime } from 'd3-scale';
import { area, line, curveMonotoneX } from 'd3-shape';
import { bisector } from 'd3-array';
import { css, cx } from 'styled-system/css';
import { badge, panel } from '$lib/recipes/steam-modern';
import type { RevenueDataPoint } from '$lib/data/steam-modern/dashboard';

let { revenueData }: { revenueData: RevenueDataPoint[] } = $props();

const width = 560;
const height = 200;
const margin = { top: 10, right: 10, bottom: 28, left: 48 };

const xScale = $derived(
	scaleTime()
		.domain([revenueData[0].date, revenueData[revenueData.length - 1].date])
		.range([margin.left, width - margin.right])
);
const yMax = $derived(Math.max(...revenueData.map((d) => d.store + d.market + d.dlc)));
const yScale = $derived(
	scaleLinear()
		.domain([0, yMax])
		.nice()
		.range([height - margin.bottom, margin.top])
);

const layers: {
	y0: (d: RevenueDataPoint) => number;
	y1: (d: RevenueDataPoint) => number;
	fill: string;
	fillOpacity: number;
	stroke: string;
	strokeWidth: number;
}[] = [
	{
		y0: () => 0,
		y1: (d) => d.store,
		fill: '#66c0f4',
		fillOpacity: 0.15,
		stroke: '#4a9fc8',
		strokeWidth: 1.5
	},
	{
		y0: (d) => d.store,
		y1: (d) => d.store + d.market,
		fill: '#d5a51b',
		fillOpacity: 0.2,
		stroke: '#d5a51b',
		strokeWidth: 1
	},
	{
		y0: (d) => d.store + d.market,
		y1: (d) => d.store + d.market + d.dlc,
		fill: '#4fa832',
		fillOpacity: 0.25,
		stroke: '#4fa832',
		strokeWidth: 1
	}
];

function makeArea(layer: (typeof layers)[number]) {
	return (
		area<RevenueDataPoint>()
			.x((d) => xScale(d.date))
			.y0((d) => yScale(layer.y0(d)))
			.y1((d) => yScale(layer.y1(d)))
			.curve(curveMonotoneX)(revenueData) ?? ''
	);
}

function makeLine(layer: (typeof layers)[number]) {
	return (
		line<RevenueDataPoint>()
			.x((d) => xScale(d.date))
			.y((d) => yScale(layer.y1(d)))
			.curve(curveMonotoneX)(revenueData) ?? ''
	);
}

const xTicks = $derived(xScale.ticks(7));
const yTicks = $derived(yScale.ticks(5));

const dateBisector = bisector<RevenueDataPoint, Date>((d) => d.date).left;
let hoverIndex: number | null = $state(null);
let tooltipX = $state(0);
let tooltipY = $state(0);

function onMouseMove(e: MouseEvent) {
	const svg = (e.currentTarget as SVGSVGElement).getBoundingClientRect();
	const mx = ((e.clientX - svg.left) / svg.width) * width;
	const date = xScale.invert(mx);
	const idx = dateBisector(revenueData, date, 1);
	const d0 = revenueData[idx - 1];
	const d1 = revenueData[idx];
	if (!d0) {
		hoverIndex = idx;
	} else if (!d1) {
		hoverIndex = idx - 1;
	} else {
		hoverIndex = +date - +d0.date > +d1.date - +date ? idx : idx - 1;
	}
	tooltipX = e.clientX - svg.left;
	tooltipY = e.clientY - svg.top;
}

function onMouseLeave() {
	hoverIndex = null;
}

const hoverData = $derived(hoverIndex !== null ? revenueData[hoverIndex] : null);

function fmtRevDate(d: Date) {
	return `${d.getMonth() + 1}/${d.getDate()}`;
}

function fmtRevTooltipDate(d: Date) {
	return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

const panelStyles = panel();
const chartPanel = cx(panelStyles.root, css({ display: 'flex', flexDirection: 'column' }));

const chartContainer = css({
	padding: '8px 14px 14px',
	flex: '1',
	minHeight: '160px',
	position: 'relative'
});

const tickLabel = css({
	fill: 'text.muted',
	fontSize: '10px',
	fontFamily: 'ui'
});

const revTooltipOuter = css({
	position: 'absolute',
	pointerEvents: 'none',
	zIndex: '10',
	transform: 'translate(-50%, -100%)',
	marginTop: '-12px'
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
		<svg viewBox="0 0 {width} {height}" preserveAspectRatio="xMidYMid meet" style="width:100%;height:100%"
			role="img" aria-label="Revenue chart showing store, market, and DLC revenue over 14 days"
			onmousemove={onMouseMove} onmouseleave={onMouseLeave}
		>
			<!-- Grid lines -->
			{#each yTicks as tick (tick)}
				<line
					x1={margin.left} x2={width - margin.right}
					y1={yScale(tick)} y2={yScale(tick)}
					stroke="rgba(42,71,94,0.6)" stroke-width="1"
				/>
			{/each}

			<!-- Area layers -->
			{#each layers as layer, i (i)}
				<path d={makeArea(layer)} fill={layer.fill} fill-opacity={layer.fillOpacity} />
				<path d={makeLine(layer)} fill="none" stroke={layer.stroke} stroke-width={layer.strokeWidth} />
			{/each}

			<!-- Y axis labels -->
			{#each yTicks as tick (tick)}
				<text class={tickLabel} x={margin.left - 6} y={yScale(tick)} text-anchor="end" dominant-baseline="middle">
					${(tick / 1000).toFixed(0)}k
				</text>
			{/each}

			<!-- X axis labels -->
			{#each xTicks as tick (tick)}
				<text class={tickLabel} x={xScale(tick)} y={height - margin.bottom + 16} text-anchor="middle">
					{fmtRevDate(tick)}
				</text>
			{/each}

			<!-- Hover highlight line -->
			{#if hoverData}
				<line
					x1={xScale(hoverData.date)} x2={xScale(hoverData.date)}
					y1={margin.top} y2={height - margin.bottom}
					stroke="rgba(102,192,244,0.4)" stroke-width="1"
				/>
			{/if}
		</svg>

		<!-- Tooltip -->
		{#if hoverData}
			<div class={revTooltipOuter} style="left:{tooltipX}px;top:{tooltipY}px">
				<div class={revTooltipInner}>
					<p class={revTooltipDate}>{fmtRevTooltipDate(hoverData.date)}</p>
					<div class={revTooltipRow}>
						<span><span class={revDotBlue}></span>Store</span>
						<span>${hoverData.store.toLocaleString()}</span>
					</div>
					<div class={revTooltipRow}>
						<span><span class={revDotGold}></span>Market</span>
						<span>${hoverData.market.toLocaleString()}</span>
					</div>
					<div class={revTooltipRow}>
						<span><span class={revDotGreen}></span>DLC</span>
						<span>${hoverData.dlc.toLocaleString()}</span>
					</div>
					<div class={revTooltipTotal}>
						<span>Total</span>
						<span>${(hoverData.store + hoverData.market + hoverData.dlc).toLocaleString()}</span>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>

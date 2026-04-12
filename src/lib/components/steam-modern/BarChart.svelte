<script lang="ts">
import { scaleBand, scaleLinear } from 'd3-scale';
import { css } from 'styled-system/css';
import { token } from 'styled-system/tokens';

interface BarDatum {
	label: string;
	value: number;
}

type ColorPreset = 'blue' | 'gold';

const presets: Record<ColorPreset, [string, string]> = {
	blue: [token('colors.accent.bright'), token('colors.accent.dim')],
	gold: [token('colors.accent.goldText'), token('colors.accent.gold')]
};

let {
	data,
	formatValue = (v: number) => String(v),
	color = 'blue',
	ariaLabel = 'Bar chart'
}: {
	data: BarDatum[];
	formatValue?: (v: number) => string;
	color?: ColorPreset;
	ariaLabel?: string;
} = $props();

const width = 500;
const height = 160;
const margin = { top: 18, right: 8, bottom: 24, left: 8 };

const xScale = $derived(
	scaleBand()
		.domain(data.map((d) => d.label))
		.range([margin.left, width - margin.right])
		.padding(0.3)
);

const yMax = $derived(Math.max(...data.map((d) => d.value)));

const yScale = $derived(
	scaleLinear()
		.domain([0, yMax])
		.nice()
		.range([height - margin.bottom, margin.top])
);

const gradientId = $derived(`bar-grad-${ariaLabel.replace(/\s+/g, '-').toLowerCase()}`);
const [gradFrom, gradTo] = $derived(presets[color]);

const tickLabel = css({
	fill: 'text.muted',
	fontSize: '10px',
	fontFamily: 'ui'
});

const valLabel = css({
	fill: 'text.muted',
	fontSize: '9px',
	fontFamily: 'ui'
});
</script>

<svg viewBox="0 0 {width} {height}" preserveAspectRatio="xMidYMid meet" style="width:100%;height:100%"
	role="img" aria-label={ariaLabel}
>
	<defs>
		<linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
			<stop offset="0%" stop-color={gradFrom} />
			<stop offset="100%" stop-color={gradTo} />
		</linearGradient>
	</defs>

	<!-- Grid lines -->
	{#each yScale.ticks(4) as tick (tick)}
		<line
			x1={margin.left} x2={width - margin.right}
			y1={yScale(tick)} y2={yScale(tick)}
			stroke="rgba(42,71,94,0.4)" stroke-width="1"
		/>
	{/each}

	<!-- Bars -->
	{#each data as d (d.label)}
		{@const x = xScale(d.label) ?? 0}
		{@const barHeight = yScale(0) - yScale(d.value)}
		{@const y = yScale(d.value)}
		<rect
			{x} {y}
			width={xScale.bandwidth()}
			height={barHeight}
			fill="url(#{gradientId})"
			rx="1"
		>
			<title>{d.label}: {formatValue(d.value)}</title>
		</rect>
		<text
			class={valLabel}
			x={x + xScale.bandwidth() / 2}
			y={y - 4}
			text-anchor="middle"
		>
			{formatValue(d.value)}
		</text>
	{/each}

	<!-- X axis labels -->
	{#each data as d (d.label)}
		{@const x = xScale(d.label) ?? 0}
		<text
			class={tickLabel}
			x={x + xScale.bandwidth() / 2}
			y={height - margin.bottom + 16}
			text-anchor="middle"
		>
			{d.label}
		</text>
	{/each}

	<!-- Bottom axis line -->
	<line
		x1={margin.left} x2={width - margin.right}
		y1={height - margin.bottom} y2={height - margin.bottom}
		stroke="rgba(42,71,94,0.6)" stroke-width="1"
	/>
</svg>

<script lang="ts">
import type { Snippet } from 'svelte';
import type { MetricData } from '$lib/data/steam-modern/types';
import { delta as deltaCva, metricCard, metricsGrid } from '$lib/recipes/steam-modern';

type Size = 'sm' | 'lg';

let {
	metrics,
	columns,
	size = 'sm',
	renderValue,
	cardFooter
}: {
	metrics: MetricData[];
	columns: number;
	size?: Size;
	renderValue?: Snippet<[MetricData]>;
	cardFooter?: Snippet<[MetricData]>;
} = $props();

const gridClass = $derived(metricsGrid(columns));
const mc = $derived(metricCard({ size }));
</script>

<div class={gridClass}>
	{#each metrics as metric (metric.label)}
		<div class={mc.root}>
			<div class={mc.label}>{metric.label}</div>
			<div class={mc.value}>
				{#if renderValue}
					{@render renderValue(metric)}
				{:else}
					{metric.value}
				{/if}
			</div>
			<div class={deltaCva({ direction: metric.direction })}>{metric.delta}</div>
			{@render cardFooter?.(metric)}
		</div>
	{/each}
</div>

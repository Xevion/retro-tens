<script lang="ts">
import { Progress } from '@ark-ui/svelte/progress';
import { progressBar as progressBarSva } from '$lib/recipes/steam-modern';
import type { ProgressColor } from '$lib/data/steam-modern/types';

let {
	value,
	max = 100,
	color,
	label
}: {
	value: number;
	max?: number;
	color?: Exclude<ProgressColor, 'default'>;
	label?: string;
} = $props();

const pb = $derived(progressBarSva(color ? { color } : {}));
</script>

<Progress.Root {value} {max} aria-label={label}>
	<Progress.Track class={pb.track}>
		<Progress.Range class={pb.fill} />
	</Progress.Track>
</Progress.Root>

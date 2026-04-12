<script lang="ts">
import { mdl2, type Mdl2IconName } from '$lib/data/windows10/mdl2-icons';

type Props = {
	name: Mdl2IconName;
	size?: number;
	color?: string;
	class?: string;
};

let { name, size = 16, color = 'currentColor', class: className = '' }: Props = $props();
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 2048 2048"
	fill={color}
	class={className}
	aria-hidden="true"
>
	<path d={mdl2[name]} />
</svg>

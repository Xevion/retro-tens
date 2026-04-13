<script lang="ts">
type Props = {
	path: string;
	viewBox?: string;
	size?: number;
	color?: string;
	class?: string;
};

let {
	path,
	viewBox = '0 0 2048 2048',
	size = 16,
	color = 'currentColor',
	class: className = ''
}: Props = $props();
</script>

<svg
	width={size}
	height={size}
	{viewBox}
	fill={color}
	class={className}
	aria-hidden="true"
>
	<path d={path} />
</svg>

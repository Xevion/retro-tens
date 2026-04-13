<script lang="ts">
type Props = {
	src: string;
	size?: number | string;
	color?: string;
	class?: string;
	label?: string;
};

// `color` accepted for IconProps compatibility but cannot be applied to raster images
let { src, size = 16, color: _color, class: className = '', label }: Props = $props();
</script>

<img {src} width={size} height={size} alt={label ?? ''} aria-hidden={!label} class={className} />

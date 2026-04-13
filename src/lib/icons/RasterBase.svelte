<script lang="ts">
type Props = {
	src: string;
	size?: number;
	color?: string;
	class?: string;
};

// `color` accepted for IconProps compatibility but cannot be applied to raster images
let { src, size = 16, color: _color, class: className = '' }: Props = $props();
</script>

<img {src} width={size} height={size} alt="" aria-hidden="true" class={className} />

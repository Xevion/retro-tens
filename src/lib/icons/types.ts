import type { Component, ComponentType, SvelteComponent } from 'svelte';

// Minimal props shared by all icon-like components (Lucide, custom SVG, raster).
// IconComponent is based on this so Lucide icons are assignable to it.
type BaseIconProps = {
	size?: number | string; // string accepted for Lucide compat (e.g. "24px")
	color?: string;
	class?: string;
};

// Full props for custom icon components that support accessible labelling.
// Windows 10 SVG/raster icons accept this so they can set aria-label when used standalone.
export type IconProps = BaseIconProps & {
	label?: string;
};

// Accepts both Svelte 5 function components (Windows 10 custom icons) and
// Svelte 4-style class components (lucide-svelte v1.0.1, which hasn't migrated yet).
// The union is necessary: the two component APIs are structurally incompatible.
export type IconComponent =
	| Component<BaseIconProps>
	| ComponentType<SvelteComponent<BaseIconProps>>;

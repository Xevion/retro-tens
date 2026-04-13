import type { Component } from 'svelte';

export type IconProps = {
	size?: number;
	color?: string;
	class?: string;
	label?: string;
};

export type IconComponent = Component<IconProps>;

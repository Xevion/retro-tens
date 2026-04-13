import type { Component } from 'svelte';

export type IconProps = {
	size?: number;
	color?: string;
	class?: string;
};

export type IconComponent = Component<IconProps>;

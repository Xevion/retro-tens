<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		title,
		subtitle,
		children
	}: {
		title: string;
		subtitle: string;
		children?: Snippet;
	} = $props();
</script>

<div class="page-header">
	<div>
		<div class="page-title">{title}</div>
		<div class="page-subtitle">{subtitle}</div>
	</div>
	<div class="page-actions">
		{@render children?.()}
	</div>
</div>

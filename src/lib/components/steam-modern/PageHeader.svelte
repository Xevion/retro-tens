<script lang="ts">
import type { Snippet } from 'svelte';
import { pageHeader } from '$lib/recipes/steam-modern';

let {
	title,
	subtitle,
	children
}: {
	title: string;
	subtitle: string;
	children?: Snippet;
} = $props();

const styles = pageHeader();
</script>

<div class={styles.root}>
	<div>
		<div class={styles.title}>{title}</div>
		<div class={styles.subtitle}>{subtitle}</div>
	</div>
	<div class={styles.actions}>
		{@render children?.()}
	</div>
</div>

<script lang="ts">
import { Search } from 'lucide-svelte';
import type { Snippet } from 'svelte';
import { searchBar as searchBarSva, filterLabel } from '$lib/recipes/steam-modern';

let {
	placeholder,
	value = $bindable(''),
	resultCount,
	totalCount,
	filters
}: {
	placeholder: string;
	value: string;
	resultCount: number;
	totalCount?: number;
	filters?: Snippet;
} = $props();

const sb = searchBarSva();
</script>

<div class={sb.root}>
	<div class={sb.wrapper}>
		<span class={sb.icon}><Search size={12} /></span>
		<input class={sb.input} {placeholder} bind:value />
	</div>
	{@render filters?.()}
	<span class={filterLabel}>
		Showing {resultCount}{totalCount !== undefined ? ` of ${totalCount}` : ''} results
	</span>
</div>

<script lang="ts">
import { Download, Plus } from 'lucide-svelte';
import PageHeader from '$lib/components/steam-modern/PageHeader.svelte';
import SearchFilterBar from '$lib/components/steam-modern/SearchFilterBar.svelte';
import FilterSelect from '$lib/components/steam-modern/FilterSelect.svelte';
import { css, cx } from 'styled-system/css';
import {
	btn,
	badge,
	panel,
	dataTable,
	actionLink,
	userAvatar,
	cellText,
	entityName,
	entityId
} from '$lib/recipes/steam-modern';

import type { CategoryFilter, GameStatus } from '$lib/data/steam-modern/games';

const { data } = $props();
import { token } from 'styled-system/tokens';

let search = $state('');
let categoryFilter: CategoryFilter = $state('all');

const filtered = $derived(
	data.games.filter((g) => {
		const matchSearch =
			!search || g.name.toLowerCase().includes(search.toLowerCase()) || g.id.includes(search);
		const matchCat = categoryFilter === 'all' || g.category === categoryFilter;
		return matchSearch && matchCat;
	})
);

const statusBadgeColor: Record<GameStatus, 'green' | 'yellow' | 'gray'> = {
	active: 'green',
	review: 'yellow',
	pending: 'gray'
};

function scoreColor(reviews: number): string {
	if (reviews > 85) return token('colors.accent.green');
	if (reviews > 70) return token('colors.accent.gold');
	return token('colors.accent.red');
}

const pnl = panel();
const appIconClass = userAvatar({ visual: 'app' });

const scoreBar = css({
	display: 'inline-block',
	width: '60px',
	height: '4px',
	background: 'surface.overlay',
	borderRadius: '1px',
	verticalAlign: 'middle',
	overflow: 'hidden',
	marginRight: '4px'
});

const scoreFill = css({ height: '100%', borderRadius: '1px' });
</script>

<PageHeader title="Applications &amp; Games" subtitle="68,412 total apps · 34 awaiting review">
	<button type="button" class={btn({ visual: 'secondary' })}><Download size={13} /> Export</button>
	<button type="button" class={btn({ visual: 'primary' })}><Plus size={13} /> Submit App</button>
</PageHeader>

<SearchFilterBar placeholder="Search by name or App ID…" bind:value={search} resultCount={filtered.length}>
	{#snippet filters()}
		<FilterSelect label="Category" items={data.filterCategories} bind:value={categoryFilter} />
	{/snippet}
</SearchFilterBar>

<div class={cx(pnl.root, css({ margin: '16px 20px' }))}>
	<table class={dataTable}>
		<thead>
			<tr>
				<th>App</th>
				<th>Developer</th>
				<th>Category</th>
				<th>Price</th>
				<th>Owners</th>
				<th>Review Score</th>
				<th>Status</th>
				<th>Released</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody>
			{#each filtered as g (g.id)}
				<tr>
					<td>
						<div class={appIconClass}>{g.name.slice(0, 1)}</div>
						<span class={entityName}>{g.name}</span>
						<br /><span class={entityId}>{g.id}</span>
					</td>
					<td class={cellText({ tone: 'secondary' })}>{g.developer}</td>
					<td><span class={badge({ color: 'blue' })}>{g.category}</span></td>
					<td class={cellText({ tone: 'secondary' })}>{g.price}</td>
					<td class={cellText({ tone: 'secondary' })}>{g.owners}</td>
					<td>
						{#if g.reviews > 0}
							<div class={scoreBar}>
								<div class={scoreFill} style="width:{g.reviews}%;background:{scoreColor(g.reviews)}"></div>
							</div>
							<span class={cellText({ tone: 'muted' })}>{g.reviews}%</span>
						{:else}
							<span class={cellText({ tone: 'disabled' })}>N/A</span>
						{/if}
					</td>
					<td>
						<span class={badge({ color: statusBadgeColor[g.status] })}>{g.status}</span>
					</td>
					<td class={cellText({ tone: 'muted' })}>{g.released}</td>
					<td>
						<button type="button" class={actionLink()}>View</button>
						<button type="button" class={actionLink()}>Edit</button>
						<button type="button" class={actionLink({ color: 'red' })}>Remove</button>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

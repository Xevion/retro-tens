<script lang="ts">
import { Download, Plus, Search } from 'lucide-svelte';
import PageHeader from '$lib/components/steam-modern/PageHeader.svelte';
import { css, cx } from 'styled-system/css';
import {
	btn,
	badge,
	panel,
	searchBar as searchBarSva,
	filterSelect,
	filterLabel,
	dataTable,
	actionLink
} from '$lib/recipes/steam-modern';

import { games, categories } from '$lib/data/steam-modern/games';
import type { GameStatus } from '$lib/data/steam-modern/games';

let search = $state('');
let categoryFilter = $state('all');

const filtered = $derived(
	games.filter((g) => {
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
	if (reviews > 85) return 'var(--colors-accent-green)';
	if (reviews > 70) return 'var(--colors-accent-gold)';
	return 'var(--colors-accent-red)';
}

const pnl = panel();
const sb = searchBarSva();

const appIcon = css({
	width: '24px',
	height: '24px',
	background: 'linear-gradient(135deg, #2a475e, #1b2838)',
	border: '1px solid token(colors.border)',
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	fontSize: '12px',
	borderRadius: 'DEFAULT',
	verticalAlign: 'middle',
	marginRight: '6px'
});

const scoreBar = css({
	display: 'inline-block',
	width: '60px',
	height: '4px',
	background: 'rgba(0, 0, 0, 0.3)',
	borderRadius: '1px',
	verticalAlign: 'middle',
	overflow: 'hidden',
	marginRight: '4px'
});

const scoreFill = css({ height: '100%', borderRadius: '1px' });

const appName = css({ fontSize: '12.5px', fontWeight: '600' });
const appId = css({ color: 'text.muted', fontSize: '10px', paddingLeft: '32px' });
const cellSecondary = css({ color: 'text.secondary', fontSize: '12px' });
const cellMuted = css({ color: 'text.muted', fontSize: '11px' });
const cellDisabled = css({ color: 'text.disabled', fontSize: '11px' });
</script>

<PageHeader title="Applications &amp; Games" subtitle="68,412 total apps · 34 awaiting review">
	<button type="button" class={btn({ visual: 'secondary' })}><Download size={13} /> Export</button>
	<button type="button" class={btn({ visual: 'primary' })}><Plus size={13} /> Submit App</button>
</PageHeader>

<div class={sb.root}>
	<div class={sb.wrapper}>
		<span class={sb.icon}><Search size={12} /></span>
		<input class={sb.input} placeholder="Search by name or App ID…" bind:value={search} />
	</div>
	<span class={filterLabel}>Category:</span>
	<select class={filterSelect} bind:value={categoryFilter}>
		{#each categories as cat (cat)}
			<option value={cat === 'All' ? 'all' : cat}>{cat}</option>
		{/each}
	</select>
	<span class={filterLabel}>Showing {filtered.length} results</span>
</div>

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
						<div class={appIcon}>{g.name.slice(0, 1)}</div>
						<span class={appName}>{g.name}</span>
						<br /><span class={appId}>{g.id}</span>
					</td>
					<td class={cellSecondary}>{g.developer}</td>
					<td><span class={badge({ color: 'blue' })}>{g.category}</span></td>
					<td class={cellSecondary}>{g.price}</td>
					<td class={cellSecondary}>{g.owners}</td>
					<td>
						{#if g.reviews > 0}
							<div class={scoreBar}>
								<div class={scoreFill} style="width:{g.reviews}%;background:{scoreColor(g.reviews)}"></div>
							</div>
							<span class={cellMuted}>{g.reviews}%</span>
						{:else}
							<span class={cellDisabled}>N/A</span>
						{/if}
					</td>
					<td>
						<span class={badge({ color: statusBadgeColor[g.status] })}>{g.status}</span>
					</td>
					<td class={cellMuted}>{g.released}</td>
					<td>
						<span class={actionLink()}>View</span>
						<span class={actionLink()}>Edit</span>
						<span class={actionLink({ color: 'red' })}>Remove</span>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

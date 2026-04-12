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

let search = $state('');
let categoryFilter = $state('all');

const games = [
	{
		id: 'APP-72850',
		name: 'The Elder Scrolls V: Skyrim',
		developer: 'Bethesda Softworks',
		category: 'RPG',
		price: '$29.99',
		owners: '4.2M',
		reviews: 98,
		status: 'active',
		released: 'Nov 11, 2011'
	},
	{
		id: 'APP-49520',
		name: 'Borderlands 2',
		developer: 'Gearbox Software',
		category: 'Shooter',
		price: '$29.99',
		owners: '2.1M',
		reviews: 97,
		status: 'active',
		released: 'Sep 18, 2012'
	},
	{
		id: 'APP-204360',
		name: 'XCOM: Enemy Unknown',
		developer: 'Firaxis Games',
		category: 'Strategy',
		price: '$49.99',
		owners: '1.4M',
		reviews: 95,
		status: 'active',
		released: 'Oct 9, 2012'
	},
	{
		id: 'APP-70000',
		name: 'Dota 2',
		developer: 'Valve',
		category: 'MOBA',
		price: 'Free',
		owners: '12.8M',
		reviews: 88,
		status: 'active',
		released: 'Jul 9, 2013'
	},
	{
		id: 'APP-440',
		name: 'Team Fortress 2',
		developer: 'Valve',
		category: 'Shooter',
		price: 'Free',
		owners: '18.4M',
		reviews: 92,
		status: 'active',
		released: 'Oct 10, 2007'
	},
	{
		id: 'APP-221100',
		name: 'DayZ (Early Access)',
		developer: 'Bohemia Interactive',
		category: 'Survival',
		price: '$29.99',
		owners: '890K',
		reviews: 72,
		status: 'review',
		released: 'Dec 16, 2013'
	},
	{
		id: 'APP-113020',
		name: "Monaco: What's Yours Is Mine",
		developer: 'Pocketwatch Games',
		category: 'Indie',
		price: '$14.99',
		owners: '340K',
		reviews: 90,
		status: 'active',
		released: 'Apr 24, 2013'
	},
	{
		id: 'APP-99999',
		name: '[REDACTED] Title',
		developer: 'Anon Studios',
		category: 'Action',
		price: '$19.99',
		owners: '0',
		reviews: 0,
		status: 'pending',
		released: 'TBD'
	}
];

const filtered = $derived(
	games.filter((g) => {
		const matchSearch =
			!search || g.name.toLowerCase().includes(search.toLowerCase()) || g.id.includes(search);
		const matchCat = categoryFilter === 'all' || g.category === categoryFilter;
		return matchSearch && matchCat;
	})
);

const statusBadgeColor: Record<string, 'green' | 'yellow' | 'gray'> = {
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
		<option value="all">All</option>
		<option value="RPG">RPG</option>
		<option value="Shooter">Shooter</option>
		<option value="Strategy">Strategy</option>
		<option value="MOBA">MOBA</option>
		<option value="Indie">Indie</option>
		<option value="Survival">Survival</option>
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

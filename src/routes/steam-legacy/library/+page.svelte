<script lang="ts">
import { css } from 'styled-system/css';
import {
	subNav,
	sectionHeader,
	gameCard,
	gamesGrid,
	hoursBadge,
	listItem,
	browseBar,
	playBtn,
	emptyState
} from '$lib/recipes/steam-legacy';
const { data } = $props();

let activeSubTab = $state('Games');
let searchVal = $state('');

const recentGames = $derived(data.games.filter((g) => g.recent));
const allGames = $derived(data.games.filter((g) => !g.recent));

const filtered = $derived(
	data.games.filter((g) => g.name.toLowerCase().includes(searchVal.toLowerCase()))
);

const sn = subNav();
const sh = sectionHeader();
const gc = gameCard();
const li = listItem();
const bb = browseBar();

const gameLast = css({ fontSize: 'xs', color: 'text.dim' });
</script>

<!-- Sub-nav -->
<div class={sn.root}>
	{#each data.subTabs as tab, i (tab)}
		{#if i > 0}<span class={sn.sep}>|</span>{/if}
		<button
			type="button"
			class={sn.tab}
			data-selected={activeSubTab === tab || undefined}
			onclick={() => (activeSubTab = tab)}
		>
			{tab}
		</button>
	{/each}
	<div class={sn.spacer}></div>
	<div class={sn.searchWrap}>
		<input class={sn.search} placeholder="search games..." bind:value={searchVal} />
	</div>
</div>

<!-- Browse tabs row -->
<div class={bb.root}>
	<div class={bb.tab} data-selected>All Games</div>
	<div class={bb.tab}>Recently Played</div>
	<div class={bb.tab}>Favorites</div>
	<div class={bb.count}>{data.games.length} games in library</div>
</div>

<!-- Recently Played section -->
{#if !searchVal}
	<div class={sh.root}>
		<span class={sh.title}>▶ Recently Played</span>
	</div>
	<div class={gamesGrid}>
		{#each recentGames as game (game.name)}
			<div class={gc.root}>
				<div class={gc.img} style="background: {game.color}">
					<div class={gc.overlay}></div>
					<div class={gc.icon}>{game.icon}</div>
					<div class={hoursBadge}>{game.hours}h</div>
				</div>
				<div class={gc.info}>
					<div class={gc.name}>{game.name}</div>
					<div class={gc.meta}>
						<span class={gc.tag}>{game.tag}</span>
						<span class={gameLast}>{game.lastPlayed}</span>
					</div>
				</div>
			</div>
		{/each}
	</div>
{/if}

<!-- All games list -->
<div class={sh.root}>
	<span class={sh.title}>▶ {searchVal ? 'Search Results' : 'All Games'}</span>
</div>
{#each (searchVal ? filtered : allGames) as game (game.name)}
	<div class={li.root}>
		<div class={li.img} style="background: {game.color}">{game.icon}</div>
		<span class={li.name}>{game.name}</span>
		<span class={li.tag}>{game.tag}</span>
		<span class={li.hours}>{game.hours} hrs</span>
		<span class={li.lastPlayed}>{game.lastPlayed}</span>
		<button type="button" class={playBtn}>▶ Play</button>
	</div>
{/each}

{#if searchVal && filtered.length === 0}
	<div class={emptyState}>No games found matching "{searchVal}"</div>
{/if}

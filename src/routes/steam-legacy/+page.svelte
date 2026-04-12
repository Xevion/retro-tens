<script lang="ts">
import { css, cx } from 'styled-system/css';
import {
	subNav,
	sectionHeader,
	gameCard,
	gamesGrid,
	discountBadge,
	gamePrice,
	listItem,
	featuredBanner,
	dotActive
} from '$lib/recipes/steam-legacy';
const { data } = $props();

let activeSubTab = $state('Featured');

const sn = subNav();
const sh = sectionHeader();
const gc = gameCard();
const fb = featuredBanner();
const li = listItem();

const sellersGrid = css({
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	gap: '1px',
	background: 'border'
});
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
		<input class={sn.search} placeholder="search the store..." />
	</div>
</div>

<!-- Featured banner -->
<div class={fb.root}>
	<div class={fb.artGrid}>
		{#each data.featured.artCells as bg (bg)}
			<div class={fb.artCell} style="background:{bg}"></div>
		{/each}
	</div>
	<div class={fb.overlay}></div>
	<div class={fb.info}>
		<div class={fb.tag}>{data.featured.tag}</div>
		<div class={fb.title}>{data.featured.name}</div>
		<div class={fb.desc}>{data.featured.description}</div>
		<div class={fb.priceRow}>
			<div class={fb.discount}>{data.featured.discount}</div>
			<div class={fb.origPrice}>{data.featured.originalPrice}</div>
			<div class={fb.price}>{data.featured.price}</div>
		</div>
	</div>
	<div class={fb.dots}>
		<div class={cx(fb.dot, dotActive)}></div>
		<div class={fb.dot}></div>
		<div class={fb.dot}></div>
		<div class={fb.dot}></div>
	</div>
</div>

<!-- Recommended section -->
<div class={sh.root}>
	<span class={sh.title}>▶ Recommended For You</span>
</div>
<div class={gamesGrid}>
	{#each data.games as game (game.name)}
		<div class={gc.root}>
			<div class={gc.img} style="background: {game.color}">
				<div class={gc.overlay}></div>
				<div class={gc.icon}>{game.icon}</div>
				{#if game.discount}
					<div class={discountBadge}>{game.discount}</div>
				{/if}
			</div>
			<div class={gc.info}>
				<div class={gc.name}>{game.name}</div>
				<div class={gc.meta}>
					<span class={gc.tag}>{game.tag}</span>
					<span class={gamePrice({ type: game.free ? 'free' : game.sale ? 'sale' : 'default' })}>
						{game.price}
					</span>
				</div>
			</div>
		</div>
	{/each}
</div>

<!-- Top Sellers -->
<div class={cx(sh.root, css({ marginTop: '1px' }))}>
	<span class={sh.title}>▶ Top Sellers This Week</span>
</div>
<div class={sellersGrid}>
	{#each data.topSellers as item (item.rank)}
		<div class={li.root}>
			<span class={li.rank}>#{item.rank}</span>
			<div class={li.img} style="background: {item.color}">{item.icon}</div>
			<span class={li.name}>{item.name}</span>
			<span class={li.price}>{item.price}</span>
		</div>
	{/each}
</div>

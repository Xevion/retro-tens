<script lang="ts">
const games = [
	{
		name: 'Skyrim',
		tag: 'RPG',
		price: '$14.99',
		discount: '-75%',
		icon: '⚔',
		color: 'linear-gradient(135deg,#1a0a0a,#3a1010)',
		sale: true
	},
	{
		name: 'Mass Effect 3',
		tag: 'Action',
		price: '$59.99',
		icon: '🚀',
		color: 'linear-gradient(135deg,#0a0a2a,#10103a)'
	},
	{
		name: 'Torchlight II',
		tag: 'RPG',
		price: '$9.99',
		discount: '-50%',
		icon: '🏰',
		color: 'linear-gradient(135deg,#0a1a0a,#10301a)',
		sale: true
	},
	{
		name: 'Borderlands 2',
		tag: 'Shooter',
		price: '$29.99',
		icon: '🔫',
		color: 'linear-gradient(135deg,#1a1a0a,#3a3010)'
	},
	{
		name: 'XCOM: Enemy Unknown',
		tag: 'Strategy',
		price: '$49.99',
		icon: '🌍',
		color: 'linear-gradient(135deg,#1a0a1a,#3a1030)'
	},
	{
		name: 'Team Fortress 2',
		tag: 'Shooter',
		price: 'Free',
		discount: '-25%',
		icon: '🎮',
		color: 'linear-gradient(135deg,#0a1a1a,#103030)',
		free: true
	},
	{
		name: 'FTL: Faster Than Light',
		tag: 'Strategy',
		price: '$9.99',
		icon: '⚡',
		color: 'linear-gradient(135deg,#1a1010,#2a2020)'
	},
	{
		name: 'The Witcher 2',
		tag: 'RPG',
		price: '$13.39',
		discount: '-33%',
		icon: '🗡',
		color: 'linear-gradient(135deg,#101a10,#203020)',
		sale: true
	}
];

const topSellers = [
	{
		rank: 1,
		name: 'The Elder Scrolls V: Skyrim',
		price: '$14.99',
		icon: '⚔',
		color: 'linear-gradient(135deg,#1a0a0a,#3a1010)'
	},
	{
		rank: 2,
		name: 'Borderlands 2',
		price: '$29.99',
		icon: '🔫',
		color: 'linear-gradient(135deg,#1a1a0a,#3a3010)'
	},
	{
		rank: 3,
		name: 'Mass Effect 3',
		price: '$59.99',
		icon: '🚀',
		color: 'linear-gradient(135deg,#0a0a2a,#10103a)'
	},
	{
		rank: 4,
		name: 'XCOM: Enemy Unknown',
		price: '$49.99',
		icon: '🌍',
		color: 'linear-gradient(135deg,#1a0a1a,#3a1030)'
	}
];

const subTabs = [
	'Featured',
	'New Releases',
	'Top Sellers',
	'Specials',
	'Greenlight',
	'Free to Play'
];
let activeSubTab = $state('Featured');
</script>

<!-- Sub-nav -->
<div class="sub-nav">
	{#each subTabs as tab, i (tab)}
		{#if i > 0}<span class="sub-sep">|</span>{/if}
		<button type="button" class="sub-tab" class:active={activeSubTab === tab} onclick={() => (activeSubTab = tab)}>
			{tab}
		</button>
	{/each}
	<div class="sub-spacer"></div>
	<div class="search-wrap">
		<input class="sub-search" placeholder="search the store..." />
	</div>
</div>

<!-- Featured banner -->
<div class="featured-banner">
	<div class="featured-art-grid">
		<div class="art-cell" style="background:linear-gradient(135deg,#0a2a10,#153a20)"></div>
		<div class="art-cell" style="background:linear-gradient(135deg,#152a05,#0a1a05)"></div>
		<div class="art-cell" style="background:linear-gradient(135deg,#0a1a08,#1a3a10)"></div>
		<div class="art-cell" style="background:linear-gradient(135deg,#1a3a0a,#0a2a08)"></div>
	</div>
	<div class="featured-overlay"></div>
	<div class="featured-info">
		<div class="featured-tag">Featured &amp; Recommended</div>
		<div class="featured-title">Dishonored</div>
		<div class="featured-desc">
			Become the ultimate supernatural assassin in this first person action game. Bend time, possess
			enemies, and link kills in this dark steampunk world.
		</div>
		<div class="featured-price-row">
			<div class="featured-discount">-40%</div>
			<div class="featured-orig">$29.99</div>
			<div class="featured-price">$17.99</div>
		</div>
	</div>
	<div class="featured-dots">
		<div class="fdot active"></div>
		<div class="fdot"></div>
		<div class="fdot"></div>
		<div class="fdot"></div>
	</div>
</div>

<!-- Recommended section -->
<div class="section-header">
	<span class="section-title">▶ Recommended For You</span>
</div>
<div class="games-grid">
	{#each games as game (game.name)}
		<div class="game-card">
			<div class="game-img" style="background: {game.color}">
				<div class="game-overlay"></div>
				<div class="game-icon">{game.icon}</div>
				{#if game.discount}
					<div class="discount-badge">{game.discount}</div>
				{/if}
			</div>
			<div class="game-info">
				<div class="game-name">{game.name}</div>
				<div class="game-meta">
					<span class="game-tag">{game.tag}</span>
					<span class="game-price" class:free={game.free} class:sale={game.sale}>
						{game.price}
					</span>
				</div>
			</div>
		</div>
	{/each}
</div>

<!-- Top Sellers -->
<div class="section-header" style="margin-top:1px">
	<span class="section-title">▶ Top Sellers This Week</span>
</div>
<div class="sellers-grid">
	{#each topSellers as item (item.rank)}
		<div class="list-item">
			<span class="list-rank">#{item.rank}</span>
			<div class="list-img" style="background: {item.color}">{item.icon}</div>
			<span class="list-name">{item.name}</span>
			<span class="list-price">{item.price}</span>
		</div>
	{/each}
</div>

<style>
	/* Sub-nav */
	.sub-nav {
		background: #1e1e1e;
		border-bottom: 1px solid var(--border);
		padding: 0 14px;
		display: flex;
		align-items: center;
		gap: 0;
	}
	.sub-tab {
		padding: 6px 12px;
		color: var(--text-secondary);
		font-size: var(--font-size-sm);
		font-weight: bold;
		letter-spacing: 0.3px;
		text-transform: uppercase;
		cursor: pointer;
		border: none;
		background: none;
		font-family: var(--font-ui);
		border-bottom: 1px solid transparent;
		transition: var(--transition-color);
	}
	.sub-tab:hover {
		color: var(--text-primary);
	}
	.sub-tab.active {
		color: var(--text-primary);
		border-bottom: 2px solid var(--accent);
	}
	.sub-sep {
		color: #3d3d3f;
		font-size: var(--font-size-xs);
		padding: 0 2px;
	}
	.sub-spacer {
		flex: 1;
	}
	.search-wrap {
		padding: 5px 0;
		display: flex;
		align-items: center;
	}
	.sub-search {
		background: #111;
		border: 1px solid #3a4a3a;
		border-radius: var(--radius-sm);
		padding: 3px 8px;
		color: var(--text-secondary);
		font-size: var(--font-size-sm);
		font-family: var(--font-ui);
		width: 130px;
		outline: none;
	}
	.sub-search:focus {
		border-color: var(--accent-dim);
	}

	/* Featured banner */
	.featured-banner {
		position: relative;
		height: 190px;
		background: linear-gradient(135deg, #0d1b0a 0%, #1a3a0f 50%, #0a1208 100%);
		overflow: hidden;
		cursor: pointer;
	}
	.featured-banner:hover {
		filter: brightness(1.05);
	}
	.featured-art-grid {
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		width: 55%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2px;
		padding: 2px;
	}
	.art-cell {
		border: 1px solid rgba(117, 176, 34, 0.1);
	}
	.featured-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.2) 60%, transparent 100%);
	}
	.featured-info {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 50%;
		padding: 20px 18px;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}
	.featured-tag {
		background: var(--accent-dim);
		color: var(--text-primary);
		font-size: var(--font-size-xs);
		font-weight: bold;
		padding: 2px 8px;
		border-radius: var(--radius-sm);
		display: inline-block;
		margin-bottom: 8px;
		letter-spacing: 1px;
		text-transform: uppercase;
	}
	.featured-title {
		font-size: 22px;
		font-weight: bold;
		color: #fff;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
		line-height: 1.1;
		margin-bottom: 8px;
	}
	.featured-desc {
		font-size: var(--font-size-sm);
		color: var(--text-secondary);
		line-height: 1.5;
		margin-bottom: 12px;
	}
	.featured-price-row {
		display: flex;
		align-items: center;
		gap: 8px;
	}
	.featured-discount {
		background: var(--accent-dim);
		color: var(--accent-price);
		font-size: 13px;
		font-weight: bold;
		padding: 3px 6px;
		border-radius: var(--radius-sm);
	}
	.featured-orig {
		text-decoration: line-through;
		color: var(--text-muted);
		font-size: var(--font-size-sm);
	}
	.featured-price {
		color: var(--accent-price);
		font-size: 15px;
		font-weight: bold;
	}
	.featured-dots {
		position: absolute;
		right: 14px;
		top: 14px;
		display: flex;
		gap: 6px;
	}
	.fdot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #3a5a10;
		cursor: pointer;
	}
	.fdot.active {
		background: var(--accent);
	}

	/* Section header */
	.section-header {
		background: var(--surface-section-head);
		padding: 6px 12px;
		border-bottom: 1px solid var(--border);
		border-top: 1px solid #2a3a3e;
	}
	.section-title {
		color: var(--accent);
		font-size: var(--font-size-sm);
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	/* Games grid */
	.games-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1px;
		background: var(--border);
		padding: 1px;
	}
	.game-card {
		background: var(--surface-card);
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}
	.game-card:hover .game-overlay {
		opacity: 1;
	}
	.game-img {
		height: 70px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		overflow: hidden;
	}
	/* stylelint-disable-next-line no-descending-specificity -- reason: grouped with .game-img visual layer; reorder would hurt readability */
	.game-overlay {
		position: absolute;
		inset: 0;
		background: var(--accent-glow);
		opacity: 0;
		transition: opacity 0.1s;
		border: 1px solid var(--accent);
	}
	.game-icon {
		font-size: 22px;
		opacity: 0.6;
		position: relative;
		z-index: 1;
	}
	.discount-badge {
		position: absolute;
		top: 4px;
		right: 4px;
		background: var(--accent-dim);
		color: var(--accent-price);
		font-size: 9px;
		font-weight: bold;
		padding: 2px 5px;
		border-radius: var(--radius-sm);
		z-index: 1;
	}
	.game-info {
		padding: 5px 7px;
	}
	.game-name {
		font-size: var(--font-size-sm);
		color: var(--text-primary);
		font-weight: bold;
		line-height: 1.2;
		margin-bottom: 3px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.game-meta {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.game-tag {
		font-size: var(--font-size-xs);
		color: var(--text-muted);
	}
	.game-price {
		font-size: var(--font-size-sm);
		color: var(--accent-price);
		font-weight: bold;
	}
	.game-price.free {
		color: var(--accent-link);
	}
	.game-price.sale {
		color: var(--accent-price);
	}

	/* Top sellers */
	.sellers-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1px;
		background: var(--border);
	}
	.list-item {
		background: var(--surface-card);
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 6px 8px;
		cursor: pointer;
		border-bottom: 1px solid #162022;
		transition: background 0.1s;
	}
	.list-item:hover {
		background: var(--surface-card-hover);
	}
	.list-rank {
		color: var(--text-rank);
		font-size: 13px;
		font-weight: bold;
		min-width: 18px;
		text-align: center;
	}
	.list-img {
		width: 36px;
		height: 26px;
		border-radius: var(--radius-sm);
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 14px;
	}
	.list-name {
		flex: 1;
		font-size: var(--font-size-sm);
		color: var(--text-primary);
		font-weight: bold;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.list-price {
		font-size: var(--font-size-sm);
		color: var(--accent-price);
		font-weight: bold;
		white-space: nowrap;
	}
</style>

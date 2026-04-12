<script lang="ts">
import { Search } from 'lucide-svelte';
import { css } from 'styled-system/css';
import { reviewSentiment } from '$lib/data/steam-modern/store-search';
import type { StoreGame, SortOption, TagFilter } from '$lib/data/steam-modern/store-search';

const { data } = $props();

let search = $state('');
let selectedTags: TagFilter[] = $state([]);
let selectedTypes: string[] = $state(['Games']);
let sortBy: SortOption = $state('relevance');

function toggleTag(tag: TagFilter) {
	const idx = selectedTags.indexOf(tag);
	if (idx >= 0) {
		selectedTags = selectedTags.filter((t) => t !== tag);
	} else {
		selectedTags = [...selectedTags, tag];
	}
}

function toggleType(type: string) {
	const idx = selectedTypes.indexOf(type);
	if (idx >= 0) {
		selectedTypes = selectedTypes.filter((t) => t !== type);
	} else {
		selectedTypes = [...selectedTypes, type];
	}
}

function priceNum(price: string): number {
	if (price === 'Free to Play') return 0;
	return parseFloat(price.replace('$', ''));
}

const filtered = $derived(() => {
	let result = data.games.filter((g: StoreGame) => {
		const matchSearch = !search || g.name.toLowerCase().includes(search.toLowerCase());
		const matchTags =
			selectedTags.length === 0 || selectedTags.every((tag) => g.tags.includes(tag));
		return matchSearch && matchTags;
	});

	if (sortBy === 'name') {
		result = [...result].sort((a: StoreGame, b: StoreGame) => a.name.localeCompare(b.name));
	} else if (sortBy === 'price_low') {
		result = [...result].sort(
			(a: StoreGame, b: StoreGame) => priceNum(a.price) - priceNum(b.price)
		);
	} else if (sortBy === 'price_high') {
		result = [...result].sort(
			(a: StoreGame, b: StoreGame) => priceNum(b.price) - priceNum(a.price)
		);
	} else if (sortBy === 'reviews') {
		result = [...result].sort((a: StoreGame, b: StoreGame) => b.reviewScore - a.reviewScore);
	} else if (sortBy === 'release_date') {
		result = [...result].sort(
			(a: StoreGame, b: StoreGame) =>
				new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
		);
	}

	return result;
});

function reviewColor(score: number): string {
	const s = reviewSentiment(score);
	if (s === 'positive') return '#66c0f4';
	if (s === 'mixed') return '#b9a074';
	return '#c35b2c';
}

const pageWrap = css({
	padding: '0 token(spacing.gutter)',
	maxWidth: 'contentMaxW',
	margin: '20px auto'
});

const layout = css({
	display: 'flex',
	gap: '20px'
});

const mainCol = css({ flex: '1', minWidth: '0' });

const sideCol = css({
	width: '240px',
	flexShrink: '0'
});

const pageTitle = css({
	fontSize: 'headingLg',
	fontWeight: '300',
	color: 'text.bright',
	marginBottom: '4px',
	fontFamily: 'ui'
});

const filterTagsRow = css({
	display: 'flex',
	gap: '6px',
	marginBottom: '14px',
	flexWrap: 'wrap'
});

const activeFilterPill = css({
	display: 'inline-flex',
	alignItems: 'center',
	gap: '4px',
	background: 'surface.tag',
	color: 'text.tag',
	fontSize: '11px',
	padding: '2px 8px',
	borderRadius: 'DEFAULT',
	boxShadow: 'token(shadows.tag)',
	cursor: 'pointer',
	_hover: {
		color: 'text.tagHover',
		background: 'surface.tagHover'
	}
});

const pillX = css({
	fontSize: '9px',
	opacity: '0.7'
});

const searchRow = css({
	display: 'flex',
	alignItems: 'center',
	gap: '8px',
	marginBottom: '10px'
});

const searchInput = css({
	flex: '1',
	/* sourced: .searchbox background-color */
	background: 'surface.input',
	border: '1px solid token(colors.border.input)',
	color: '#eeeeee',
	padding: '7px 10px',
	fontSize: 'sm',
	fontFamily: 'ui',
	borderRadius: 'sm',
	outline: 'none',
	fontStyle: 'italic',
	_focus: {
		fontStyle: 'normal'
	},
	'&::placeholder': {
		/* sourced: .searchbox input.default */
		color: 'text.placeholder'
	}
});

const searchBtn = css({
	/* sourced: .btnv6_blue_blue_innerfade */
	background:
		'linear-gradient(180deg, token(colors.surface.btnPrimary), token(colors.surface.btnPrimaryEnd))',
	color: 'text.btnBlue',
	border: 'none',
	padding: '7px 16px',
	fontSize: 'sm',
	fontWeight: '600',
	fontFamily: 'ui',
	borderRadius: 'sm',
	cursor: 'pointer',
	_hover: {
		background:
			'linear-gradient(180deg, token(colors.surface.btnPrimaryHover), token(colors.surface.btnPrimaryHoverEnd))'
	}
});

const sortSelect = css({
	background: 'surface.elevated',
	border: '1px solid token(colors.border)',
	color: 'text.secondary',
	padding: '7px 8px',
	fontSize: 'sm',
	fontFamily: 'ui',
	borderRadius: 'sm',
	cursor: 'pointer',
	outline: 'none'
});

const resultCount = css({
	fontSize: '11px',
	color: 'text.muted',
	marginBottom: '6px'
});

const resultRow = css({
	display: 'flex',
	alignItems: 'stretch',
	/* sourced: .search_result_row */
	background: 'rgba(0, 0, 0, 0.2)',
	marginBottom: '1px',
	cursor: 'pointer',
	transition: 'background 0.1s ease',
	textDecoration: 'none',
	color: 'text.primary',
	_hover: {
		background: 'rgba(0, 0, 0, 0.4)'
	}
});

const capsulePlaceholder = css({
	/* sourced: .store_capsule radial-gradient, 231×87 display size */
	width: '231px',
	height: '87px',
	flexShrink: '0',
	background: 'radial-gradient(62.67% 62.67% at 62.67% 100%, #3d4856 0%, #283645 100%)',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	fontSize: '10px',
	color: 'text.muted',
	letterSpacing: '0.03em',
	fontFamily: 'ui'
});

const resultInfo = css({
	flex: '1',
	padding: '6px 10px',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	minWidth: '0'
});

const resultTitle = css({
	/* sourced: .store_capsule .title */
	color: '#c7d5e0',
	fontSize: '13px',
	fontWeight: '400',
	whiteSpace: 'nowrap',
	overflow: 'hidden',
	textOverflow: 'ellipsis'
});

const platformRow = css({
	display: 'flex',
	alignItems: 'center',
	gap: '4px',
	marginTop: '3px'
});

const platformIcon = css({
	fontSize: '10px',
	color: 'text.muted',
	opacity: '0.8'
});

const tagRow = css({
	display: 'flex',
	gap: '3px',
	marginTop: '4px',
	flexWrap: 'wrap'
});

const tagPill = css({
	/* sourced: .app_tag / .hover_tag_row .app_tag */
	background: 'surface.tag',
	color: 'text.tag',
	fontSize: '10px',
	padding: '1px 5px',
	borderRadius: 'DEFAULT',
	boxShadow: 'token(shadows.tag)',
	whiteSpace: 'nowrap'
});

const resultMeta = css({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-end',
	justifyContent: 'center',
	padding: '6px 10px',
	gap: '4px',
	minWidth: '120px'
});

const releaseDateText = css({
	fontSize: '11px',
	color: 'text.secondary',
	whiteSpace: 'nowrap'
});

const reviewRow = css({
	display: 'flex',
	alignItems: 'center',
	gap: '4px'
});

const reviewBar = css({
	width: '50px',
	height: '4px',
	background: 'rgba(0, 0, 0, 0.3)',
	borderRadius: '1px',
	overflow: 'hidden'
});

const reviewFill = css({
	height: '100%',
	borderRadius: '1px'
});

const reviewText = css({
	fontSize: '10px',
	whiteSpace: 'nowrap'
});

const priceArea = css({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: '0 10px',
	gap: '6px',
	minWidth: '100px'
});

const discountBadge = css({
	/* sourced: .discount_pct */
	background: 'surface.discountBadge',
	color: 'text.discount',
	fontSize: '14px',
	fontWeight: '500',
	padding: '2px 5px',
	borderRadius: 'xs'
});

const priceStack = css({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-end'
});

const originalPrice = css({
	/* sourced: .discount_original_price */
	color: 'text.priceOriginal',
	fontSize: '11px',
	textDecoration: 'line-through'
});

const finalPrice = css({
	/* sourced: .discount_final_price */
	color: 'text.discount',
	fontSize: '13px'
});

const normalPrice = css({
	color: 'text.primary',
	fontSize: '13px'
});

const freeLabel = css({
	color: 'text.primary',
	fontSize: '12px'
});

const sideSection = css({
	marginBottom: '16px'
});

const sideSectionHeader = css({
	/* sourced: Steam sidebar section headers */
	fontSize: '11px',
	fontWeight: '400',
	color: '#8f98a0',
	background: 'linear-gradient(90deg, rgba(42, 71, 94, 0.6) 0%, transparent 100%)',
	padding: '4px 8px',
	marginBottom: '6px',
	letterSpacing: '0.02em'
});

const checkboxList = css({
	display: 'flex',
	flexDirection: 'column',
	gap: '1px'
});

const checkboxItem = css({
	display: 'flex',
	alignItems: 'center',
	gap: '6px',
	padding: '3px 8px',
	fontSize: '12px',
	color: '#b0aeac',
	cursor: 'pointer',
	_hover: {
		color: '#e3eaef'
	}
});

const checkbox = css({
	width: '14px',
	height: '14px',
	accentColor: '#66c0f4',
	cursor: 'pointer'
});

const sideSearchInput = css({
	width: '100%',
	background: 'surface.input',
	border: '1px solid token(colors.border.input)',
	color: '#eeeeee',
	padding: '4px 8px',
	fontSize: '11px',
	fontFamily: 'ui',
	borderRadius: 'sm',
	outline: 'none',
	margin: '4px 8px 0',
	boxSizing: 'border-box',
	'&::placeholder': {
		color: 'text.placeholder',
		fontStyle: 'italic'
	}
});

const seeAll = css({
	fontSize: '11px',
	color: 'accent',
	padding: '2px 8px',
	cursor: 'pointer',
	_hover: { textDecoration: 'underline' }
});
</script>

<div class={pageWrap}>
	<h2 class={pageTitle}>Browsing</h2>

	{#if selectedTags.length > 0}
		<div class={filterTagsRow}>
			{#each selectedTags as tag (tag)}
				<button type="button" class={activeFilterPill} onclick={() => toggleTag(tag)}>
					{tag} <span class={pillX}>✕</span>
				</button>
			{/each}
		</div>
	{/if}

	<div class={layout}>
		<!-- Main results column -->
		<div class={mainCol}>
			<div class={searchRow}>
				<input
					class={searchInput}
					placeholder="enter search terms or tag"
					bind:value={search}
				/>
				<button type="button" class={searchBtn}>
					<Search size={12} /> Search
				</button>
				<select class={sortSelect} bind:value={sortBy} aria-label="Sort results">
					{#each data.sortOptions as opt (opt.value)}
						<option value={opt.value}>{opt.label}</option>
					{/each}
				</select>
			</div>

			<div class={resultCount}>
				showing 1 – {filtered().length} of {filtered().length} results
			</div>

			{#each filtered() as game (game.appId)}
				<div class={resultRow}>
					<div class={capsulePlaceholder}>
						{game.appId}
					</div>
					<div class={resultInfo}>
						<div class={resultTitle}>{game.name}</div>
						<div class={platformRow}>
							{#if game.platforms.windows}
								<span class={platformIcon} title="Windows">⊞</span>
							{/if}
							{#if game.platforms.mac}
								<span class={platformIcon} title="macOS">⌘</span>
							{/if}
							{#if game.platforms.linux}
								<span class={platformIcon} title="Linux">🐧</span>
							{/if}
						</div>
						<div class={tagRow}>
							{#each game.tags.slice(0, 4) as tag (tag)}
								<span class={tagPill}>{tag}</span>
							{/each}
						</div>
					</div>
					<div class={resultMeta}>
						<span class={releaseDateText}>{game.releaseDate}</span>
						<div class={reviewRow}>
							<div class={reviewBar}>
								<div
									class={reviewFill}
									style="width:{game.reviewScore}%;background:{reviewColor(game.reviewScore)}"
								></div>
							</div>
							<span class={reviewText} style="color:{reviewColor(game.reviewScore)}">
								{game.reviewLabel}
							</span>
						</div>
					</div>
					<div class={priceArea}>
						{#if game.discountPct}
							<span class={discountBadge}>{game.discountPct}%</span>
							<div class={priceStack}>
								<span class={originalPrice}>{game.originalPrice}</span>
								<span class={finalPrice}>{game.price}</span>
							</div>
						{:else if game.price === 'Free to Play'}
							<span class={freeLabel}>Free to Play</span>
						{:else}
							<span class={normalPrice}>{game.price}</span>
						{/if}
					</div>
				</div>
			{/each}
		</div>

		<!-- Sidebar filters -->
		<aside class={sideCol}>
			<div class={sideSection}>
				<div class={sideSectionHeader}>Narrow by tag</div>
				<div class={checkboxList}>
					{#each data.allTags.slice(0, 8) as tag (tag)}
						<label class={checkboxItem}>
							<input
								type="checkbox"
								class={checkbox}
								checked={selectedTags.includes(tag)}
								onchange={() => toggleTag(tag)}
							/>
							{tag}
						</label>
					{/each}
				</div>
				<input class={sideSearchInput} placeholder="search for more tags" />
				<button type="button" class={seeAll}>see all tags...</button>
			</div>

			<div class={sideSection}>
				<div class={sideSectionHeader}>Show selected types</div>
				<div class={checkboxList}>
					{#each data.contentTypes as type (type)}
						<label class={checkboxItem}>
							<input
								type="checkbox"
								class={checkbox}
								checked={selectedTypes.includes(type)}
								onchange={() => toggleType(type)}
							/>
							{type}
						</label>
					{/each}
				</div>
			</div>

			<div class={sideSection}>
				<div class={sideSectionHeader}>Narrow by number of players</div>
				<div class={checkboxList}>
					{#each data.playerCounts as pc (pc)}
						<label class={checkboxItem}>
							<input type="checkbox" class={checkbox} />
							{pc}
						</label>
					{/each}
				</div>
			</div>

			<div class={sideSection}>
				<div class={sideSectionHeader}>Narrow by feature</div>
				<div class={checkboxList}>
					{#each data.features as feat (feat)}
						<label class={checkboxItem}>
							<input type="checkbox" class={checkbox} />
							{feat}
						</label>
					{/each}
				</div>
			</div>
		</aside>
	</div>
</div>

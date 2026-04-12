<script lang="ts">
import { Tabs } from '@ark-ui/svelte/tabs';
import { css } from 'styled-system/css';

const pageWrap = css({
	padding: '0 token(spacing.gutter)',
	maxWidth: 'contentMaxW',
	margin: '0 auto'
});

const featured = css({
	height: '353px',
	background: 'radial-gradient(62.67% 62.67% at 62.67% 100%, #3D4856 0%, #283645 100%)',
	marginTop: '20px',
	borderRadius: 'DEFAULT'
});

const specials = css({
	display: 'grid',
	gridTemplateColumns: 'repeat(4, 1fr)',
	gap: '8px',
	marginTop: '16px'
});

const specialCard = css({
	height: '180px',
	background: 'rgba(0, 0, 0, 0.2)',
	borderRadius: 'DEFAULT'
});

const tabList = css({
	display: 'flex',
	gap: '0',
	marginTop: '16px',
	borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
});

const tabTrigger = css({
	padding: '8px 16px',
	fontSize: '13px',
	color: 'text.secondary',
	cursor: 'pointer',
	background: 'transparent',
	border: 'none',
	borderBottom: '2px solid transparent',
	_selected: {
		color: 'text.bright',
		borderBottom: '2px solid token(colors.accent)'
	}
});

const trendingRows = css({
	display: 'flex',
	flexDirection: 'column',
	gap: '1px',
	marginTop: '8px',
	marginBottom: '40px'
});

const trendingRow = css({
	height: '69px',
	background: 'rgba(0, 0, 0, 0.2)'
});

const topSellersGrid = css({
	display: 'grid',
	gridTemplateColumns: 'repeat(2, 1fr)',
	gap: '8px',
	marginTop: '8px',
	marginBottom: '40px'
});

const topSellerCard = css({
	height: '120px',
	background: 'rgba(0, 0, 0, 0.2)',
	borderRadius: 'DEFAULT'
});

const upcomingRows = css({
	display: 'flex',
	flexDirection: 'column',
	gap: '8px',
	marginTop: '8px',
	marginBottom: '40px'
});

const upcomingRow = css({
	height: '140px',
	background: 'rgba(0, 0, 0, 0.2)',
	borderRadius: 'DEFAULT'
});

const specialsGrid = css({
	display: 'grid',
	gridTemplateColumns: 'repeat(2, 1fr)',
	gap: '8px',
	marginTop: '8px',
	marginBottom: '40px'
});

const specialsCard = css({
	height: '200px',
	background: 'rgba(0, 0, 0, 0.2)',
	borderRadius: 'DEFAULT'
});
</script>

<div class={pageWrap}>
	<h1 class={css({ srOnly: true })}>Steam Store</h1>

	<div class={featured}></div>

	<div class={specials}>
		{#each Array(4) as _, i (i)}
			<div class={specialCard}></div>
		{/each}
	</div>

	<Tabs.Root defaultValue="trending">
		<Tabs.List class={tabList}>
			<Tabs.Trigger class={tabTrigger} value="trending">New & Trending</Tabs.Trigger>
			<Tabs.Trigger class={tabTrigger} value="top-sellers">Top Sellers</Tabs.Trigger>
			<Tabs.Trigger class={tabTrigger} value="upcoming">Popular Upcoming</Tabs.Trigger>
			<Tabs.Trigger class={tabTrigger} value="specials">Specials</Tabs.Trigger>
		</Tabs.List>

		<Tabs.Content value="trending">
			<div class={trendingRows}>
				{#each Array(6) as _, i (i)}
					<div class={trendingRow}></div>
				{/each}
			</div>
		</Tabs.Content>

		<Tabs.Content value="top-sellers">
			<div class={topSellersGrid}>
				{#each Array(6) as _, i (i)}
					<div class={topSellerCard}></div>
				{/each}
			</div>
		</Tabs.Content>

		<Tabs.Content value="upcoming">
			<div class={upcomingRows}>
				{#each Array(3) as _, i (i)}
					<div class={upcomingRow}></div>
				{/each}
			</div>
		</Tabs.Content>

		<Tabs.Content value="specials">
			<div class={specialsGrid}>
				{#each Array(4) as _, i (i)}
					<div class={specialsCard}></div>
				{/each}
			</div>
		</Tabs.Content>
	</Tabs.Root>
</div>

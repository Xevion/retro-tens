<script lang="ts">
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

const tabRow = css({
	display: 'flex',
	gap: '0',
	marginTop: '16px',
	borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
});

const tab = css({
	padding: '8px 16px',
	fontSize: '13px',
	color: 'text.secondary',
	cursor: 'pointer'
});

const rows = css({
	display: 'flex',
	flexDirection: 'column',
	gap: '1px',
	marginTop: '8px',
	marginBottom: '40px'
});

const row = css({
	height: '69px',
	background: 'rgba(0, 0, 0, 0.2)'
});
</script>

<div class={pageWrap}>
	<div class={featured}></div>

	<div class={specials}>
		{#each Array(4) as _, i (i)}
			<div class={specialCard}></div>
		{/each}
	</div>

	<div class={tabRow}>
		<div class={tab}>New & Trending</div>
		<div class={tab}>Top Sellers</div>
		<div class={tab}>Popular Upcoming</div>
		<div class={tab}>Specials</div>
	</div>

	<div class={rows}>
		{#each Array(6) as _, i (i)}
			<div class={row}></div>
		{/each}
	</div>
</div>

<script lang="ts">
import { css } from 'styled-system/css';

const pageWrap = css({
	padding: '0 token(spacing.gutter)',
	maxWidth: 'contentMaxW',
	margin: '0 auto'
});

const header = css({
	height: '48px',
	background: 'rgba(0, 0, 0, 0.15)',
	marginTop: '16px',
	borderRadius: 'DEFAULT'
});

const contentGrid = css({
	display: 'grid',
	gridTemplateColumns: '1fr 300px',
	gap: '16px',
	marginTop: '16px',
	marginBottom: '40px'
});

const feed = css({
	display: 'flex',
	flexDirection: 'column',
	gap: '8px'
});

const feedItem = css({
	height: '120px',
	background: 'rgba(0, 0, 0, 0.2)',
	borderRadius: 'DEFAULT'
});

const sidebar = css({
	display: 'flex',
	flexDirection: 'column',
	gap: '8px'
});

const sidebarBlock = css({
	height: '160px',
	background: 'rgba(0, 0, 0, 0.2)',
	borderRadius: 'DEFAULT'
});
</script>

<div class={pageWrap}>
	<h1 class={css({ srOnly: true })}>Steam Community</h1>
	<div class={header}></div>

	<div class={contentGrid}>
		<div class={feed}>
			{#each Array(4) as _, i (i)}
				<div class={feedItem}></div>
			{/each}
		</div>
		<div class={sidebar}>
			{#each Array(3) as _, i (i)}
				<div class={sidebarBlock}></div>
			{/each}
		</div>
	</div>
</div>

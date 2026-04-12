<script lang="ts">
import { css } from 'styled-system/css';

const root = css({
	width: '100%',
	height: '160px',
	background: '#1a1a1a',
	display: 'flex',
	flexDirection: 'column',
	fontFamily: 'Arial, sans-serif',
	fontSize: '7px',
	overflow: 'hidden'
});

const titlebar = css({
	background: 'linear-gradient(to bottom,#2d2d2d,#1a1a1a)',
	padding: '2px 4px',
	display: 'flex',
	alignItems: 'center',
	gap: '3px',
	borderBottom: '1px solid #0d0d0d',
	'& span': { color: '#888', flex: '1' }
});

const dot = css({ width: '8px', height: '8px', background: '#1b9fe4', borderRadius: 'full' });

const winbtns = css({
	display: 'flex',
	gap: '2px',
	'& span': { width: '6px', height: '6px', borderRadius: '1px', background: '#3a3a3a' }
});

const winbtnRed = css({ background: '#6b2020' });

const topbar = css({
	background: 'linear-gradient(to bottom,#3c3c3c,#1e1e1e)',
	padding: '3px 6px',
	display: 'flex',
	alignItems: 'center',
	gap: '6px',
	borderBottom: '2px solid #0d0d0d'
});

const brand = css({ color: '#c6d4df', fontWeight: 'bold', fontSize: '8px' });

const tabs = css({
	display: 'flex',
	gap: '3px',
	'& span': {
		color: '#8f98a0',
		padding: '2px 5px',
		fontSize: '6px',
		fontWeight: 'bold',
		textTransform: 'uppercase'
	}
});

const tabActive = css({
	color: '#fff',
	background: 'linear-gradient(to bottom,#3d5a1f,#1a3a08)'
});

const body = css({ display: 'flex', flex: '1', overflow: 'hidden' });
const content = css({ flex: '1', background: '#1b2426' });
const featured = css({ height: '40px', background: 'linear-gradient(135deg,#0d1b0a,#1a3a0f)' });

const grid = css({
	display: 'grid',
	gridTemplateColumns: 'repeat(4,1fr)',
	gap: '1px',
	background: '#0d0d0d',
	padding: '1px'
});

const tile = css({ height: '20px', background: '#1e2d2f' });

const sidebar = css({
	width: '36px',
	background: '#1e1e1e',
	borderLeft: '1px solid #0d0d0d',
	display: 'flex',
	flexDirection: 'column',
	gap: '1px',
	padding: '3px 2px'
});

const friend = css({ height: '8px', background: '#222', borderRadius: '1px' });
</script>

<div class={root}>
	<div class={titlebar}>
		<div class={dot}></div>
		<span>STEAM</span>
		<div class={winbtns}><span></span><span></span><span class={winbtnRed}></span></div>
	</div>
	<div class={topbar}>
		<span class={brand}>STEAM</span>
		<div class={tabs}>
			<span class={tabActive}>Store</span>
			<span>Library</span>
			<span>Community</span>
		</div>
	</div>
	<div class={body}>
		<div class={content}>
			<div class={featured}></div>
			<div class={grid}>
				{#each Array(8) as _, i (i)}
					<div class={tile}></div>
				{/each}
			</div>
		</div>
		<div class={sidebar}>
			{#each Array(4) as _, i (i)}
				<div class={friend}></div>
			{/each}
		</div>
	</div>
</div>

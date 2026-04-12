<script lang="ts">
import { css, cx } from 'styled-system/css';

const root = css({
	width: '100%',
	height: '160px',
	background: '#0e1219',
	display: 'flex',
	flexDirection: 'column',
	fontFamily: 'Arial, sans-serif',
	fontSize: '7px',
	overflow: 'hidden'
});

const chrome = css({
	height: '14px',
	background: '#101318',
	display: 'flex',
	alignItems: 'center',
	padding: '0 5px',
	gap: '3px',
	borderBottom: '1px solid #0a0f16'
});

const dot = css({ width: '6px', height: '6px', borderRadius: 'full' });
const dotRed = css({ background: '#c94040' });
const dotYellow = css({ background: '#d5a51b' });
const dotGreen = css({ background: '#4fa832' });

const title = css({ flex: '1', textAlign: 'center', color: '#556b7d', fontSize: '6px' });

const menubar = css({
	height: '14px',
	background: 'linear-gradient(180deg,#2a3f54,#1b2838)',
	borderBottom: '1px solid #1a2d40'
});

const navtabs = css({
	height: '16px',
	background: 'linear-gradient(180deg,#1d2d3e,#162030)',
	display: 'flex',
	alignItems: 'center',
	borderBottom: '1px solid #0e1219',
	'& span': {
		padding: '0 6px',
		color: '#8ba3b7',
		fontSize: '6px',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		borderBottom: '1px solid transparent',
		marginBottom: '-1px'
	}
});

const navtabActive = css({ color: '#66c0f4', borderBottomColor: '#66c0f4' });

const body = css({ display: 'flex', flex: '1', overflow: 'hidden' });

const sidebar = css({
	width: '32px',
	background: '#15202e',
	borderRight: '1px solid #1a2d40',
	display: 'flex',
	flexDirection: 'column',
	gap: '2px',
	padding: '4px 3px'
});

const link = css({ height: '5px', background: '#1b2838', borderRadius: '1px' });

const main = css({
	flex: '1',
	background: '#171a21',
	display: 'flex',
	flexDirection: 'column'
});

const stats = css({
	display: 'grid',
	gridTemplateColumns: 'repeat(4,1fr)',
	gap: '1px',
	background: '#1a2d40'
});

const stat = css({ height: '24px', background: '#1b2838' });

const panels = css({
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	gap: '4px',
	padding: '4px',
	flex: '1'
});

const panel = css({
	background: '#1b2838',
	border: '1px solid #2a475e',
	borderRadius: '1px'
});
</script>

<div class={root}>
	<div class={chrome}>
		<span class={cx(dot, dotRed)}></span>
		<span class={cx(dot, dotYellow)}></span>
		<span class={cx(dot, dotGreen)}></span>
		<span class={title}>Steam — Administrator Console</span>
	</div>
	<div class={menubar}></div>
	<div class={navtabs}>
		{#each ['Dashboard', 'Users', 'Games', 'Reports'] as t, i (t)}
			<span class={i === 0 ? navtabActive : ''}>{t}</span>
		{/each}
	</div>
	<div class={body}>
		<div class={sidebar}>
			{#each Array(6) as _, i (i)}
				<div class={link}></div>
			{/each}
		</div>
		<div class={main}>
			<div class={stats}>
				{#each Array(4) as _, i (i)}
					<div class={stat}></div>
				{/each}
			</div>
			<div class={panels}>
				<div class={panel}></div>
				<div class={panel}></div>
			</div>
		</div>
	</div>
</div>

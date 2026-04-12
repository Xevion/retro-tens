<script lang="ts">
import { css } from 'styled-system/css';

const root = css({
	width: '100%',
	height: '160px',
	display: 'flex',
	flexDirection: 'column',
	overflow: 'hidden'
});

const desktop = css({
	flex: '1',
	background: 'linear-gradient(135deg,#1a6eb0,#2d7ab8,#0f4e8a)',
	position: 'relative',
	display: 'flex',
	justifyContent: 'flex-end'
});

const icons = css({
	position: 'absolute',
	left: '5px',
	top: '5px',
	display: 'flex',
	flexDirection: 'column',
	gap: '4px'
});

const icon = css({
	width: '18px',
	height: '18px',
	background: 'rgba(255,255,255,0.15)',
	borderRadius: '1px'
});

const panel = css({
	width: '68px',
	background: 'rgba(242,242,242,0.97)',
	borderLeft: '1px solid rgba(0,0,0,0.12)',
	display: 'flex',
	flexDirection: 'column',
	overflow: 'hidden'
});

const panelHeader = css({
	height: '14px',
	borderBottom: '1px solid rgba(0,0,0,0.08)',
	background: '#fff'
});

const notifs = css({
	flex: '1',
	padding: '2px 3px',
	display: 'flex',
	flexDirection: 'column',
	gap: '2px'
});

const notif = css({
	height: '14px',
	background: '#fff',
	border: '1px solid rgba(0,0,0,0.08)'
});

const qa = css({
	display: 'grid',
	gridTemplateColumns: 'repeat(4,1fr)',
	gap: '2px',
	padding: '3px',
	background: 'rgba(235,235,235,0.8)',
	borderTop: '1px solid rgba(0,0,0,0.1)'
});

const tile = css({ height: '12px', background: 'rgba(0,0,0,0.07)' });
const taskbar = css({ height: '16px', background: 'rgba(0,0,0,0.78)' });
</script>

<div class={root}>
	<div class={desktop}>
		<div class={icons}>
			<div class={icon}></div>
			<div class={icon}></div>
		</div>
		<div class={panel}>
			<div class={panelHeader}></div>
			<div class={notifs}>
				{#each Array(3) as _, i (i)}
					<div class={notif}></div>
				{/each}
			</div>
			<div class={qa}>
				{#each Array(8) as _, i (i)}
					<div class={tile}></div>
				{/each}
			</div>
		</div>
	</div>
	<div class={taskbar}></div>
</div>

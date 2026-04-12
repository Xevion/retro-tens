<script lang="ts">
import type { Snippet } from 'svelte';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

let {
	title,
	subtitle,
	children
}: {
	title: string;
	subtitle: string;
	children?: Snippet;
} = $props();

const header = css({
	background: 'linear-gradient(180deg, #1f3348 0%, #182636 100%)',
	borderBottom: '1px solid token(colors.divider)',
	padding: '16px 24px 14px',
	display: 'flex',
	alignItems: 'flex-end',
	justifyContent: 'space-between'
});

const titleStyle = css({
	fontSize: '20px',
	fontWeight: '300',
	color: 'text.bright',
	letterSpacing: '0.02em'
});

const subtitleStyle = css({
	fontSize: 'sm',
	color: 'text.muted',
	marginTop: '2px'
});

const actions = flex({ gap: '8px' });
</script>

<div class={header}>
	<div>
		<div class={titleStyle}>{title}</div>
		<div class={subtitleStyle}>{subtitle}</div>
	</div>
	<div class={actions}>
		{@render children?.()}
	</div>
</div>

<script lang="ts">
import { css, cx } from 'styled-system/css';

type Status = 'online' | 'offline' | 'away' | 'banned';

let { status }: { status: Status } = $props();

const labels: Record<Status, string> = {
	online: 'Online',
	offline: 'Offline',
	away: 'Away',
	banned: 'Banned'
};

const dot = css({
	display: 'inline-block',
	width: '7px',
	height: '7px',
	borderRadius: 'full',
	marginRight: '5px'
});

const dotStyles: Record<Status, string> = {
	online: css({
		background: 'accent.green',
		boxShadow: '0 0 4px token(colors.accent.green)'
	}),
	offline: css({ background: 'text.disabled' }),
	banned: css({ background: 'accent.red' }),
	away: css({ background: 'accent.gold' })
};

const badge = css({
	display: 'inline-block',
	padding: '2px 7px',
	fontSize: '10px',
	fontWeight: '700',
	borderRadius: 'DEFAULT',
	textTransform: 'uppercase',
	letterSpacing: '0.04em',
	whiteSpace: 'nowrap'
});

const badgeVariants: Record<Status, string> = {
	online: css({
		background: 'rgba(79, 168, 50, 0.2)',
		color: '#6dcf4a',
		border: '1px solid rgba(79, 168, 50, 0.3)'
	}),
	banned: css({
		background: 'rgba(201, 64, 64, 0.2)',
		color: '#e07070',
		border: '1px solid rgba(201, 64, 64, 0.3)'
	}),
	away: css({
		background: 'rgba(213, 165, 27, 0.2)',
		color: '#e8c44e',
		border: '1px solid rgba(213, 165, 27, 0.3)'
	}),
	offline: css({
		background: 'rgba(85, 107, 125, 0.2)',
		color: 'text.muted',
		border: '1px solid rgba(85, 107, 125, 0.3)'
	})
};
</script>

<span class={cx(dot, dotStyles[status])}></span>
<span class={cx(badge, badgeVariants[status])}>
	{labels[status]}
</span>

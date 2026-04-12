<script lang="ts">
import { css, cx } from 'styled-system/css';
import { badge } from '$lib/recipes/steam-modern';

type Status = 'online' | 'offline' | 'away' | 'banned';

let { status }: { status: Status } = $props();

const labels: Record<Status, string> = {
	online: 'Online',
	offline: 'Offline',
	away: 'Away',
	banned: 'Banned'
};

const statusBadgeColor: Record<Status, 'green' | 'red' | 'yellow' | 'gray'> = {
	online: 'green',
	banned: 'red',
	away: 'yellow',
	offline: 'gray'
};

const dot = css({
	display: 'inline-block',
	width: '7px',
	height: '7px',
	borderRadius: 'full',
	marginRight: '5px'
});

const dotStyles: Record<Status, string> = {
	online: css({ background: 'accent.green', boxShadow: '0 0 4px token(colors.accent.green)' }),
	offline: css({ background: 'text.disabled' }),
	banned: css({ background: 'accent.red' }),
	away: css({ background: 'accent.gold' })
};
</script>

<span class={cx(dot, dotStyles[status])}></span>
<span class={badge({ color: statusBadgeColor[status] })}>
	{labels[status]}
</span>

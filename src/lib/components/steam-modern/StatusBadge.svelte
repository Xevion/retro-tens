<script lang="ts">
type Status = 'online' | 'offline' | 'away' | 'banned';

let { status }: { status: Status } = $props();

const labels: Record<Status, string> = {
	online: 'Online',
	offline: 'Offline',
	away: 'Away',
	banned: 'Banned'
};
</script>

<span class="status-dot {status}"></span>
<span
	class="badge"
	class:badge-green={status === 'online'}
	class:badge-red={status === 'banned'}
	class:badge-yellow={status === 'away'}
	class:badge-gray={status === 'offline'}
>
	{labels[status]}
</span>

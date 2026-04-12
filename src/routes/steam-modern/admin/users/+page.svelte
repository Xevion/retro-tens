<script lang="ts">
import { Download, Plus } from 'lucide-svelte';
import PageHeader from '$lib/components/steam-modern/PageHeader.svelte';
import SearchFilterBar from '$lib/components/steam-modern/SearchFilterBar.svelte';
import FilterSelect from '$lib/components/steam-modern/FilterSelect.svelte';
import StatusBadge from '$lib/components/steam-modern/StatusBadge.svelte';
import { css, cx } from 'styled-system/css';
import {
	btn,
	panel,
	dataTable,
	userAvatar,
	actionLink,
	cellText,
	entityName,
	entityId
} from '$lib/recipes/steam-modern';

const { data } = $props();

let search = $state('');
let statusFilter = $state('all');

const filtered = $derived(
	data.users.filter((u) => {
		const matchSearch =
			!search || u.name.toLowerCase().includes(search.toLowerCase()) || u.id.includes(search);
		const matchStatus = statusFilter === 'all' || u.status === statusFilter;
		return matchSearch && matchStatus;
	})
);

const panelStyles = panel();
</script>

<PageHeader title="User Management" subtitle="147,382,019 total accounts · 8.4M concurrent">
	<button type="button" class={btn({ visual: 'secondary' })}><Download size={13} /> Export CSV</button>
	<button type="button" class={btn({ visual: 'primary' })}><Plus size={13} /> Invite Admin</button>
</PageHeader>

<SearchFilterBar placeholder="Search by name or ID…" bind:value={search} resultCount={filtered.length} totalCount={data.users.length}>
	{#snippet filters()}
		<FilterSelect
			label="Status"
			items={[
				{ value: 'all', label: 'All' },
				{ value: 'online', label: 'Online' },
				{ value: 'away', label: 'Away' },
				{ value: 'offline', label: 'Offline' },
				{ value: 'banned', label: 'Banned' }
			]}
			bind:value={statusFilter}
		/>
	{/snippet}
</SearchFilterBar>

<div class={cx(panelStyles.root, css({ margin: '16px 20px' }))}>
	<table class={dataTable}>
		<thead>
			<tr>
				<th>User</th>
				<th>Status</th>
				<th>Country</th>
				<th>Games</th>
				<th>Hours</th>
				<th>Joined</th>
				<th>Last Seen</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody>
			{#each filtered as u (u.id)}
				<tr>
					<td>
						<div class={userAvatar()}>{u.name.slice(0, 2).toUpperCase()}</div>
						<span class={entityName}>{u.name}</span>
						<br /><span class={entityId}>{u.id}</span>
					</td>
					<td><StatusBadge status={u.status} /></td>
					<td class={cellText({ tone: 'secondary' })}>{u.country}</td>
					<td class={cellText({ tone: 'secondary' })}>{u.games.toLocaleString()}</td>
					<td class={cellText({ tone: 'secondary' })}>{u.hours.toLocaleString()}</td>
					<td class={cellText({ tone: 'muted' })}>{u.joined}</td>
					<td class={cellText({ tone: 'muted' })}>{u.lastSeen}</td>
					<td>
						<span class={actionLink()}>View</span>
						<span class={actionLink()}>Warn</span>
						{#if u.status === 'banned'}
							<span class={actionLink({ color: 'green' })}>Unban</span>
						{:else}
							<span class={actionLink({ color: 'red' })}>Ban</span>
						{/if}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<script lang="ts">
import { Download, Plus, Search } from 'lucide-svelte';
import PageHeader from '$lib/components/steam-modern/PageHeader.svelte';
import StatusBadge from '$lib/components/steam-modern/StatusBadge.svelte';
import { css, cx } from 'styled-system/css';
import {
	btn,
	panel,
	searchBar as searchBarSva,
	filterSelect,
	filterLabel,
	dataTable,
	userAvatar,
	actionLink,
	cellSecondary,
	cellMuted,
	entityName,
	entityId
} from '$lib/recipes/steam-modern';

import { users } from '$lib/data/steam-modern/users';

let search = $state('');
let statusFilter = $state('all');

const filtered = $derived(
	users.filter((u) => {
		const matchSearch =
			!search || u.name.toLowerCase().includes(search.toLowerCase()) || u.id.includes(search);
		const matchStatus = statusFilter === 'all' || u.status === statusFilter;
		return matchSearch && matchStatus;
	})
);

const panelStyles = panel();
const sb = searchBarSva();
</script>

<PageHeader title="User Management" subtitle="147,382,019 total accounts · 8.4M concurrent">
	<button type="button" class={btn({ visual: 'secondary' })}><Download size={13} /> Export CSV</button>
	<button type="button" class={btn({ visual: 'primary' })}><Plus size={13} /> Invite Admin</button>
</PageHeader>

<div class={sb.root}>
	<div class={sb.wrapper}>
		<span class={sb.icon}><Search size={12} /></span>
		<input class={sb.input} placeholder="Search by name or ID…" bind:value={search} />
	</div>
	<span class={filterLabel}>Status:</span>
	<select class={filterSelect} bind:value={statusFilter}>
		<option value="all">All</option>
		<option value="online">Online</option>
		<option value="away">Away</option>
		<option value="offline">Offline</option>
		<option value="banned">Banned</option>
	</select>
	<span class={filterLabel}>Showing {filtered.length} of {users.length}</span>
</div>

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
					<td class={cellSecondary}>{u.country}</td>
					<td class={cellSecondary}>{u.games.toLocaleString()}</td>
					<td class={cellSecondary}>{u.hours.toLocaleString()}</td>
					<td class={cellMuted}>{u.joined}</td>
					<td class={cellMuted}>{u.lastSeen}</td>
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

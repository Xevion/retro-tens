<script lang="ts">
import { Download, Plus, Search } from 'lucide-svelte';
import PageHeader from '$lib/components/steam-modern/PageHeader.svelte';
import StatusBadge from '$lib/components/steam-modern/StatusBadge.svelte';

let search = $state('');
let statusFilter = $state('all');

const users = [
	{
		id: '#44821930',
		name: 'darkw4ve_99',
		email: 'dark99@mail.ru',
		status: 'banned',
		games: 0,
		hours: 0,
		country: 'RU',
		joined: 'Nov 12, 2012',
		lastSeen: '—'
	},
	{
		id: '#44820481',
		name: 'steamfan2012',
		email: 'steam@hotmail.com',
		status: 'online',
		games: 47,
		hours: 1204,
		country: 'US',
		joined: 'Nov 12, 2012',
		lastSeen: 'Now'
	},
	{
		id: '#44819004',
		name: 'gamerbro_x',
		email: 'g.bro@gmail.com',
		status: 'away',
		games: 12,
		hours: 88,
		country: 'DE',
		joined: 'Nov 11, 2012',
		lastSeen: '3h ago'
	},
	{
		id: '#44817223',
		name: 'pixelwitch',
		email: 'pw@yahoo.co.uk',
		status: 'offline',
		games: 103,
		hours: 4021,
		country: 'GB',
		joined: 'Nov 11, 2012',
		lastSeen: 'Yesterday'
	},
	{
		id: '#44814450',
		name: 'turboboost77',
		email: 'tb@gmail.com',
		status: 'online',
		games: 234,
		hours: 8820,
		country: 'CA',
		joined: 'Nov 10, 2012',
		lastSeen: 'Now'
	},
	{
		id: '#44812190',
		name: 'nachtfalke',
		email: 'nacht@web.de',
		status: 'offline',
		games: 67,
		hours: 2310,
		country: 'DE',
		joined: 'Nov 10, 2012',
		lastSeen: '2 days ago'
	},
	{
		id: '#44809013',
		name: 'frostbyte_na',
		email: 'frost@outlook.com',
		status: 'online',
		games: 18,
		hours: 420,
		country: 'US',
		joined: 'Nov 9, 2012',
		lastSeen: 'Now'
	},
	{
		id: '#44806722',
		name: 'redzerg',
		email: 'red@naver.com',
		status: 'banned',
		games: 2,
		hours: 14,
		country: 'KR',
		joined: 'Nov 9, 2012',
		lastSeen: '—'
	}
];

const filtered = $derived(
	users.filter((u) => {
		const matchSearch =
			!search || u.name.toLowerCase().includes(search.toLowerCase()) || u.id.includes(search);
		const matchStatus = statusFilter === 'all' || u.status === statusFilter;
		return matchSearch && matchStatus;
	})
);
</script>

<PageHeader title="User Management" subtitle="147,382,019 total accounts · 8.4M concurrent">
	<button class="btn btn-secondary"><Download size={13} /> Export CSV</button>
	<button class="btn btn-primary"><Plus size={13} /> Invite Admin</button>
</PageHeader>

<div class="search-bar">
	<div class="search-wrapper">
		<span class="search-icon"><Search size={12} /></span>
		<input class="search-input" placeholder="Search by name or ID…" bind:value={search} />
	</div>
	<span class="filter-label">Status:</span>
	<select class="filter-select" bind:value={statusFilter}>
		<option value="all">All</option>
		<option value="online">Online</option>
		<option value="away">Away</option>
		<option value="offline">Offline</option>
		<option value="banned">Banned</option>
	</select>
	<span class="filter-label">Showing {filtered.length} of {users.length}</span>
</div>

<div class="panel" style="margin:16px 20px">
	<table class="data-table">
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
			{#each filtered as u}
				<tr>
					<td>
						<div class="user-avatar" style="background:linear-gradient(135deg,#2a6591,#1b4a6b)">{u.name.slice(0,2).toUpperCase()}</div>
						<span style="font-size:12.5px;font-weight:600">{u.name}</span>
						<br /><span style="color:var(--text-muted);font-size:10px;padding-left:32px">{u.id}</span>
					</td>
					<td><StatusBadge status={u.status as 'online' | 'offline' | 'away' | 'banned'} /></td>
					<td style="color:var(--text-secondary)">{u.country}</td>
					<td style="color:var(--text-secondary)">{u.games.toLocaleString()}</td>
					<td style="color:var(--text-secondary)">{u.hours.toLocaleString()}</td>
					<td style="color:var(--text-muted);font-size:11px">{u.joined}</td>
					<td style="color:var(--text-muted);font-size:11px">{u.lastSeen}</td>
					<td>
						<span class="action-link">View</span>
						<span class="action-link">Warn</span>
						{#if u.status === 'banned'}
							<span class="action-link" style="color:var(--accent-green)">Unban</span>
						{:else}
							<span class="action-link red">Ban</span>
						{/if}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

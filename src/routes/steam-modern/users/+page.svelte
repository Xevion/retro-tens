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
	actionLink
} from '$lib/recipes/steam-modern';

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
		lastSeen: '\u2014'
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
		lastSeen: '\u2014'
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

const panelStyles = panel();
const sb = searchBarSva();

const userName = css({ fontSize: '12.5px', fontWeight: '600' });
const userId = css({ color: 'text.muted', fontSize: '10px', paddingLeft: '32px' });
const cellSecondary = css({ color: 'text.secondary' });
const cellMuted = css({ color: 'text.muted', fontSize: '11px' });
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
						<div class={userAvatar}>{u.name.slice(0, 2).toUpperCase()}</div>
						<span class={userName}>{u.name}</span>
						<br /><span class={userId}>{u.id}</span>
					</td>
					<td><StatusBadge status={u.status as 'online' | 'offline' | 'away' | 'banned'} /></td>
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

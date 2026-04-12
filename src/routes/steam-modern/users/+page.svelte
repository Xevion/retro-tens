<script lang="ts">
import { Download, Plus, Search } from 'lucide-svelte';
import PageHeader from '$lib/components/steam-modern/PageHeader.svelte';
import StatusBadge from '$lib/components/steam-modern/StatusBadge.svelte';
import { css, cx } from 'styled-system/css';

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

const btnBase = css({
	display: 'inline-flex',
	alignItems: 'center',
	gap: '6px',
	padding: '6px 14px',
	fontSize: 'sm',
	fontWeight: '600',
	borderRadius: 'DEFAULT',
	cursor: 'pointer',
	border: 'none',
	transition: 'all token(durations)',
	textTransform: 'uppercase',
	letterSpacing: '0.05em',
	fontFamily: 'ui'
});

const btnPrimary = css({
	background: 'linear-gradient(180deg, #76b4d6 0%, #4a88aa 50%, #3c7493 100%)',
	color: '#fff',
	border: '1px solid #2a5f7e',
	textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)',
	_hover: {
		background: 'linear-gradient(180deg, #8ac4e4 0%, #5a98ba 50%, #4c84a3 100%)'
	}
});

const btnSecondary = css({
	background: 'linear-gradient(180deg, #5c7a8e 0%, #3d5a6e 100%)',
	color: 'text.primary',
	border: '1px solid token(colors.border)',
	textShadow: '0 1px 1px rgba(0, 0, 0, 0.3)',
	_hover: {
		background: 'linear-gradient(180deg, #6c8a9e 0%, #4d6a7e 100%)'
	}
});

const searchBar = css({
	display: 'flex',
	alignItems: 'center',
	gap: '8px',
	padding: '12px 16px',
	background: 'rgba(0, 0, 0, 0.15)',
	borderBottom: '1px solid token(colors.border)',
	flexWrap: 'wrap'
});

const searchWrapper = css({
	position: 'relative',
	display: 'flex',
	alignItems: 'center'
});

const searchIcon = css({
	position: 'absolute',
	left: '9px',
	color: 'text.muted',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center'
});

const searchInput = css({
	flex: '1',
	minWidth: '200px',
	background: 'surface.input',
	border: '1px solid token(colors.border)',
	color: 'text.primary',
	padding: '5px 10px 5px 30px',
	fontSize: 'sm',
	borderRadius: 'DEFAULT',
	fontFamily: 'ui',
	outline: 'none',
	_focus: {
		borderColor: 'token(colors.accent.dim)'
	}
});

const filterSelect = css({
	background: 'surface.input',
	border: '1px solid token(colors.border)',
	color: 'text.secondary',
	padding: '5px 8px',
	fontSize: 'sm',
	borderRadius: 'DEFAULT',
	fontFamily: 'ui',
	cursor: 'pointer',
	outline: 'none'
});

const filterLabel = css({
	color: 'text.muted',
	fontSize: '11px',
	textTransform: 'uppercase',
	letterSpacing: '0.08em'
});

const panel = css({
	background: 'surface.panel',
	border: '1px solid token(colors.border)',
	borderRadius: 'DEFAULT',
	margin: '16px 20px'
});

const dataTable = css({
	width: '100%',
	borderCollapse: 'collapse',
	fontSize: '12.5px',
	'& th': {
		textAlign: 'left',
		padding: '8px 12px',
		fontSize: '10px',
		fontWeight: '700',
		letterSpacing: '0.1em',
		textTransform: 'uppercase',
		color: 'text.muted',
		borderBottom: '1px solid token(colors.border)',
		background: 'rgba(0, 0, 0, 0.2)',
		whiteSpace: 'nowrap'
	},
	'& td': {
		padding: '7px 12px',
		borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
		color: 'text.primary'
	},
	'& tr:last-child td': {
		borderBottom: 'none'
	},
	'& tbody tr:hover': {
		background: 'surface.rowHover'
	}
});

const userAvatar = css({
	width: '24px',
	height: '24px',
	borderRadius: 'DEFAULT',
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	fontSize: '9px',
	fontWeight: '700',
	color: '#fff',
	verticalAlign: 'middle',
	marginRight: '6px',
	background: 'linear-gradient(135deg, #2a6591, #1b4a6b)'
});

const userName = css({
	fontSize: '12.5px',
	fontWeight: '600'
});

const userId = css({
	color: 'text.muted',
	fontSize: '10px',
	paddingLeft: '32px'
});

const cellSecondary = css({
	color: 'text.secondary'
});

const cellMuted = css({
	color: 'text.muted',
	fontSize: '11px'
});

const actionLink = css({
	color: 'accent',
	fontSize: '11px',
	cursor: 'pointer',
	marginRight: '8px',
	_hover: {
		textDecoration: 'underline'
	}
});

const actionLinkRed = css({
	color: '#e07070'
});

const actionLinkGreen = css({
	color: 'accent.green'
});
</script>

<PageHeader title="User Management" subtitle="147,382,019 total accounts \u00b7 8.4M concurrent">
	<button type="button" class={cx(btnBase, btnSecondary)}><Download size={13} /> Export CSV</button>
	<button type="button" class={cx(btnBase, btnPrimary)}><Plus size={13} /> Invite Admin</button>
</PageHeader>

<div class={searchBar}>
	<div class={searchWrapper}>
		<span class={searchIcon}><Search size={12} /></span>
		<input class={searchInput} placeholder="Search by name or ID\u2026" bind:value={search} />
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

<div class={panel}>
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
						<span class={actionLink}>View</span>
						<span class={actionLink}>Warn</span>
						{#if u.status === 'banned'}
							<span class={cx(actionLink, actionLinkGreen)}>Unban</span>
						{:else}
							<span class={cx(actionLink, actionLinkRed)}>Ban</span>
						{/if}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

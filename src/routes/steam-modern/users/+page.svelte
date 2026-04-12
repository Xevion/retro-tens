<script lang="ts">
	let search = $state('');
	let statusFilter = $state('all');

	const users = [
		{ id: '#44821930', name: 'darkw4ve_99', email: 'dark99@mail.ru', status: 'banned', games: 0, hours: 0, country: 'RU', joined: 'Nov 12, 2012', lastSeen: '—' },
		{ id: '#44820481', name: 'steamfan2012', email: 'steam@hotmail.com', status: 'online', games: 47, hours: 1204, country: 'US', joined: 'Nov 12, 2012', lastSeen: 'Now' },
		{ id: '#44819004', name: 'gamerbro_x', email: 'g.bro@gmail.com', status: 'away', games: 12, hours: 88, country: 'DE', joined: 'Nov 11, 2012', lastSeen: '3h ago' },
		{ id: '#44817223', name: 'pixelwitch', email: 'pw@yahoo.co.uk', status: 'offline', games: 103, hours: 4021, country: 'GB', joined: 'Nov 11, 2012', lastSeen: 'Yesterday' },
		{ id: '#44814450', name: 'turboboost77', email: 'tb@gmail.com', status: 'online', games: 234, hours: 8820, country: 'CA', joined: 'Nov 10, 2012', lastSeen: 'Now' },
		{ id: '#44812190', name: 'nachtfalke', email: 'nacht@web.de', status: 'offline', games: 67, hours: 2310, country: 'DE', joined: 'Nov 10, 2012', lastSeen: '2 days ago' },
		{ id: '#44809013', name: 'frostbyte_na', email: 'frost@outlook.com', status: 'online', games: 18, hours: 420, country: 'US', joined: 'Nov 9, 2012', lastSeen: 'Now' },
		{ id: '#44806722', name: 'redzerg', email: 'red@naver.com', status: 'banned', games: 2, hours: 14, country: 'KR', joined: 'Nov 9, 2012', lastSeen: '—' },
	];

	const filtered = $derived(users.filter(u => {
		const matchSearch = !search || u.name.toLowerCase().includes(search.toLowerCase()) || u.id.includes(search);
		const matchStatus = statusFilter === 'all' || u.status === statusFilter;
		return matchSearch && matchStatus;
	}));
</script>

<div class="page-header">
	<div>
		<div class="page-title">User Management</div>
		<div class="page-subtitle">147,382,019 total accounts · 8.4M concurrent</div>
	</div>
	<div class="page-actions">
		<button class="btn btn-secondary">⬇ Export CSV</button>
		<button class="btn btn-primary">+ Invite Admin</button>
	</div>
</div>

<div class="search-bar">
	<div class="search-wrapper">
		<span class="search-icon">🔍</span>
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

<div class="panel" style="margin:16px 20px;border-radius:var(--radius)">
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
					<td>
						<span class="status-dot {u.status}"></span>
						<span class="badge" class:badge-green={u.status==='online'} class:badge-red={u.status==='banned'} class:badge-yellow={u.status==='away'} class:badge-gray={u.status==='offline'}>
							{u.status}
						</span>
					</td>
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

<style>
	.page-header {
		background: linear-gradient(180deg, #1f3348 0%, #182636 100%);
		border-bottom: 1px solid var(--divider);
		padding: 16px 24px 14px;
		display: flex; align-items: flex-end; justify-content: space-between;
	}
	.page-title { font-size: 20px; font-weight: 300; color: var(--text-bright); letter-spacing: 0.02em; }
	.page-subtitle { font-size: var(--font-size-sm); color: var(--text-muted); margin-top: 2px; }
	.page-actions { display: flex; gap: 8px; }
	.btn { display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; font-size: var(--font-size-sm); font-weight: 600; border-radius: var(--radius); cursor: pointer; border: none; transition: all var(--transition); text-transform: uppercase; letter-spacing: 0.05em; font-family: var(--font-ui); }
	.btn-primary { background: linear-gradient(180deg,#76b4d6,#4a88aa 50%,#3c7493); color:#fff; border:1px solid #2a5f7e; }
	.btn-primary:hover { background: linear-gradient(180deg,#8ac4e4,#5a98ba 50%,#4c84a3); }
	.btn-secondary { background: linear-gradient(180deg,#5c7a8e,#3d5a6e); color:var(--text-primary); border:1px solid var(--border); }
	.btn-secondary:hover { background: linear-gradient(180deg,#6c8a9e,#4d6a7e); }

	.search-bar { display:flex; align-items:center; gap:8px; padding:12px 16px; background:rgba(0,0,0,0.15); border-bottom:1px solid var(--border); flex-wrap:wrap; }
	.search-wrapper { position:relative; display:flex; align-items:center; }
	.search-icon { position:absolute; left:9px; color:var(--text-muted); font-size:12px; pointer-events:none; }
	.search-input { flex:1; min-width:200px; background:var(--surface-input); border:1px solid var(--border); color:var(--text-primary); padding:5px 10px 5px 30px; font-size:var(--font-size-sm); border-radius:var(--radius); font-family:var(--font-ui); outline:none; }
	.search-input:focus { border-color:var(--accent-dim); }
	.filter-select { background:var(--surface-input); border:1px solid var(--border); color:var(--text-secondary); padding:5px 8px; font-size:var(--font-size-sm); border-radius:var(--radius); font-family:var(--font-ui); cursor:pointer; outline:none; }
	.filter-label { color:var(--text-muted); font-size:11px; text-transform:uppercase; letter-spacing:0.08em; }

	.panel { background:var(--surface-panel); border:1px solid var(--border); }
	.data-table { width:100%; border-collapse:collapse; font-size:12.5px; }
	.data-table th { text-align:left; padding:8px 12px; font-size:10px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:var(--text-muted); border-bottom:1px solid var(--border); background:rgba(0,0,0,0.2); white-space:nowrap; }
	.data-table td { padding:7px 12px; border-bottom:1px solid rgba(0,0,0,0.2); color:var(--text-primary); }
	.data-table tr:last-child td { border-bottom:none; }
	.data-table tbody tr:hover { background:var(--surface-row-hover); }
	.user-avatar { width:24px; height:24px; border-radius:var(--radius); display:inline-flex; align-items:center; justify-content:center; font-size:9px; font-weight:700; color:#fff; vertical-align:middle; margin-right:6px; }
	.status-dot { display:inline-block; width:7px; height:7px; border-radius:50%; margin-right:5px; }
	.status-dot.online { background:var(--accent-green); box-shadow:0 0 4px var(--accent-green); }
	.status-dot.offline { background:var(--text-disabled); }
	.status-dot.banned { background:var(--accent-red); }
	.status-dot.away { background:var(--accent-gold); }
	.badge { display:inline-block; padding:2px 7px; font-size:10px; font-weight:700; border-radius:var(--radius); text-transform:uppercase; letter-spacing:0.04em; white-space:nowrap; }
	.badge-green { background:rgba(79,168,50,0.2); color:#6dcf4a; border:1px solid rgba(79,168,50,0.3); }
	.badge-red { background:rgba(201,64,64,0.2); color:#e07070; border:1px solid rgba(201,64,64,0.3); }
	.badge-yellow { background:rgba(213,165,27,0.2); color:#e8c44e; border:1px solid rgba(213,165,27,0.3); }
	.badge-gray { background:rgba(85,107,125,0.2); color:var(--text-muted); border:1px solid rgba(85,107,125,0.3); }
	.action-link { color:var(--accent); font-size:11px; cursor:pointer; margin-right:8px; }
	.action-link:hover { text-decoration:underline; }
	.action-link.red { color:#e07070; }
</style>

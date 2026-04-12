<script lang="ts">
	let search = $state('');
	let categoryFilter = $state('all');

	const games = [
		{ id: 'APP-72850', name: 'The Elder Scrolls V: Skyrim', developer: 'Bethesda Softworks', category: 'RPG', price: '$29.99', owners: '4.2M', reviews: 98, status: 'active', released: 'Nov 11, 2011' },
		{ id: 'APP-49520', name: 'Borderlands 2', developer: 'Gearbox Software', category: 'Shooter', price: '$29.99', owners: '2.1M', reviews: 97, status: 'active', released: 'Sep 18, 2012' },
		{ id: 'APP-204360', name: 'XCOM: Enemy Unknown', developer: 'Firaxis Games', category: 'Strategy', price: '$49.99', owners: '1.4M', reviews: 95, status: 'active', released: 'Oct 9, 2012' },
		{ id: 'APP-70000', name: 'Dota 2', developer: 'Valve', category: 'MOBA', price: 'Free', owners: '12.8M', reviews: 88, status: 'active', released: 'Jul 9, 2013' },
		{ id: 'APP-440', name: 'Team Fortress 2', developer: 'Valve', category: 'Shooter', price: 'Free', owners: '18.4M', reviews: 92, status: 'active', released: 'Oct 10, 2007' },
		{ id: 'APP-221100', name: 'DayZ (Early Access)', developer: 'Bohemia Interactive', category: 'Survival', price: '$29.99', owners: '890K', reviews: 72, status: 'review', released: 'Dec 16, 2013' },
		{ id: 'APP-113020', name: 'Monaco: What\'s Yours Is Mine', developer: 'Pocketwatch Games', category: 'Indie', price: '$14.99', owners: '340K', reviews: 90, status: 'active', released: 'Apr 24, 2013' },
		{ id: 'APP-99999', name: '[REDACTED] Title', developer: 'Anon Studios', category: 'Action', price: '$19.99', owners: '0', reviews: 0, status: 'pending', released: 'TBD' },
	];

	const filtered = $derived(games.filter(g => {
		const matchSearch = !search || g.name.toLowerCase().includes(search.toLowerCase()) || g.id.includes(search);
		const matchCat = categoryFilter === 'all' || g.category === categoryFilter;
		return matchSearch && matchCat;
	}));
</script>

<div class="page-header">
	<div>
		<div class="page-title">Applications &amp; Games</div>
		<div class="page-subtitle">68,412 total apps · 34 awaiting review</div>
	</div>
	<div class="page-actions">
		<button class="btn btn-secondary">⬇ Export</button>
		<button class="btn btn-primary">+ Submit App</button>
	</div>
</div>

<div class="search-bar">
	<div class="search-wrapper">
		<span class="search-icon">🔍</span>
		<input class="search-input" placeholder="Search by name or App ID…" bind:value={search} />
	</div>
	<span class="filter-label">Category:</span>
	<select class="filter-select" bind:value={categoryFilter}>
		<option value="all">All</option>
		<option value="RPG">RPG</option>
		<option value="Shooter">Shooter</option>
		<option value="Strategy">Strategy</option>
		<option value="MOBA">MOBA</option>
		<option value="Indie">Indie</option>
		<option value="Survival">Survival</option>
	</select>
	<span class="filter-label">Showing {filtered.length} results</span>
</div>

<div class="panel" style="margin:16px 20px">
	<table class="data-table">
		<thead>
			<tr>
				<th>App</th>
				<th>Developer</th>
				<th>Category</th>
				<th>Price</th>
				<th>Owners</th>
				<th>Review Score</th>
				<th>Status</th>
				<th>Released</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody>
			{#each filtered as g}
				<tr>
					<td>
						<div class="app-icon">{g.name.slice(0,1)}</div>
						<span style="font-size:12.5px;font-weight:600">{g.name}</span>
						<br /><span style="color:var(--text-muted);font-size:10px;padding-left:32px">{g.id}</span>
					</td>
					<td style="color:var(--text-secondary);font-size:12px">{g.developer}</td>
					<td><span class="badge badge-blue">{g.category}</span></td>
					<td style="color:var(--text-secondary)">{g.price}</td>
					<td style="color:var(--text-secondary)">{g.owners}</td>
					<td>
						{#if g.reviews > 0}
							<div class="score-bar">
								<div class="score-fill" style="width:{g.reviews}%;background:{g.reviews>85?'var(--accent-green)':g.reviews>70?'var(--accent-gold)':'var(--accent-red)'}"></div>
							</div>
							<span style="font-size:10px;color:var(--text-muted)">{g.reviews}%</span>
						{:else}
							<span style="color:var(--text-disabled);font-size:11px">N/A</span>
						{/if}
					</td>
					<td>
						<span class="badge" class:badge-green={g.status==='active'} class:badge-yellow={g.status==='review'} class:badge-gray={g.status==='pending'}>
							{g.status}
						</span>
					</td>
					<td style="color:var(--text-muted);font-size:11px">{g.released}</td>
					<td>
						<span class="action-link">View</span>
						<span class="action-link">Edit</span>
						<span class="action-link red">Remove</span>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.page-header { background:linear-gradient(180deg,#1f3348,#182636); border-bottom:1px solid var(--divider); padding:16px 24px 14px; display:flex; align-items:flex-end; justify-content:space-between; }
	.page-title { font-size:20px; font-weight:300; color:var(--text-bright); letter-spacing:0.02em; }
	.page-subtitle { font-size:var(--font-size-sm); color:var(--text-muted); margin-top:2px; }
	.page-actions { display:flex; gap:8px; }
	.btn { display:inline-flex; align-items:center; gap:6px; padding:6px 14px; font-size:var(--font-size-sm); font-weight:600; border-radius:var(--radius); cursor:pointer; border:none; transition:all var(--transition); text-transform:uppercase; letter-spacing:0.05em; font-family:var(--font-ui); }
	.btn-primary { background:linear-gradient(180deg,#76b4d6,#4a88aa 50%,#3c7493); color:#fff; border:1px solid #2a5f7e; }
	.btn-primary:hover { background:linear-gradient(180deg,#8ac4e4,#5a98ba 50%,#4c84a3); }
	.btn-secondary { background:linear-gradient(180deg,#5c7a8e,#3d5a6e); color:var(--text-primary); border:1px solid var(--border); }
	.btn-secondary:hover { background:linear-gradient(180deg,#6c8a9e,#4d6a7e); }
	.search-bar { display:flex; align-items:center; gap:8px; padding:12px 16px; background:rgba(0,0,0,0.15); border-bottom:1px solid var(--border); }
	.search-wrapper { position:relative; display:flex; align-items:center; }
	.search-icon { position:absolute; left:9px; color:var(--text-muted); font-size:12px; pointer-events:none; }
	.search-input { min-width:200px; background:var(--surface-input); border:1px solid var(--border); color:var(--text-primary); padding:5px 10px 5px 30px; font-size:var(--font-size-sm); border-radius:var(--radius); font-family:var(--font-ui); outline:none; }
	.search-input:focus { border-color:var(--accent-dim); }
	.filter-select { background:var(--surface-input); border:1px solid var(--border); color:var(--text-secondary); padding:5px 8px; font-size:var(--font-size-sm); border-radius:var(--radius); font-family:var(--font-ui); cursor:pointer; outline:none; }
	.filter-label { color:var(--text-muted); font-size:11px; text-transform:uppercase; letter-spacing:0.08em; }
	.panel { background:var(--surface-panel); border:1px solid var(--border); border-radius:var(--radius); }
	.data-table { width:100%; border-collapse:collapse; font-size:12.5px; }
	.data-table th { text-align:left; padding:8px 12px; font-size:10px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:var(--text-muted); border-bottom:1px solid var(--border); background:rgba(0,0,0,0.2); }
	.data-table td { padding:7px 12px; border-bottom:1px solid rgba(0,0,0,0.2); color:var(--text-primary); }
	.data-table tr:last-child td { border-bottom:none; }
	.data-table tbody tr:hover { background:var(--surface-row-hover); }
	.app-icon { width:24px; height:24px; background:linear-gradient(135deg,#2a475e,#1b2838); border:1px solid var(--border); display:inline-flex; align-items:center; justify-content:center; font-size:12px; border-radius:var(--radius); vertical-align:middle; margin-right:6px; }
	.score-bar { display:inline-block; width:60px; height:4px; background:rgba(0,0,0,0.3); border-radius:1px; vertical-align:middle; overflow:hidden; margin-right:4px; }
	.score-fill { height:100%; border-radius:1px; }
	.badge { display:inline-block; padding:2px 7px; font-size:10px; font-weight:700; border-radius:var(--radius); text-transform:uppercase; letter-spacing:0.04em; white-space:nowrap; }
	.badge-green { background:rgba(79,168,50,0.2); color:#6dcf4a; border:1px solid rgba(79,168,50,0.3); }
	.badge-yellow { background:rgba(213,165,27,0.2); color:#e8c44e; border:1px solid rgba(213,165,27,0.3); }
	.badge-blue { background:rgba(102,192,244,0.15); color:var(--accent); border:1px solid rgba(102,192,244,0.3); }
	.badge-gray { background:rgba(85,107,125,0.2); color:var(--text-muted); border:1px solid rgba(85,107,125,0.3); }
	.action-link { color:var(--accent); font-size:11px; cursor:pointer; margin-right:8px; }
	.action-link:hover { text-decoration:underline; }
	.action-link.red { color:#e07070; }
</style>

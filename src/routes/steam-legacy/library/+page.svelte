<script lang="ts">
const subTabs = ['Games', 'Software', 'Videos', 'Music'];
let activeSubTab = $state('Games');
let searchVal = $state('');

const games = [
	{
		name: 'The Elder Scrolls V: Skyrim',
		tag: 'RPG',
		hours: 142,
		lastPlayed: '2 days ago',
		icon: '⚔',
		color: 'linear-gradient(135deg,#1a0a0a,#3a1010)',
		recent: true
	},
	{
		name: 'Team Fortress 2',
		tag: 'Shooter',
		hours: 328,
		lastPlayed: 'Yesterday',
		icon: '🎮',
		color: 'linear-gradient(135deg,#0a1a1a,#103030)',
		recent: true
	},
	{
		name: 'Borderlands 2',
		tag: 'Shooter',
		hours: 56,
		lastPlayed: '4 days ago',
		icon: '🔫',
		color: 'linear-gradient(135deg,#1a1a0a,#3a3010)',
		recent: true
	},
	{
		name: 'FTL: Faster Than Light',
		tag: 'Strategy',
		hours: 24,
		lastPlayed: 'Nov 8, 2012',
		icon: '⚡',
		color: 'linear-gradient(135deg,#1a1010,#2a2020)'
	},
	{
		name: 'Mass Effect 3',
		tag: 'Action/RPG',
		hours: 78,
		lastPlayed: 'Oct 30, 2012',
		icon: '🚀',
		color: 'linear-gradient(135deg,#0a0a2a,#10103a)'
	},
	{
		name: 'Torchlight II',
		tag: 'RPG',
		hours: 19,
		lastPlayed: 'Oct 22, 2012',
		icon: '🏰',
		color: 'linear-gradient(135deg,#0a1a0a,#10301a)'
	},
	{
		name: 'XCOM: Enemy Unknown',
		tag: 'Strategy',
		hours: 44,
		lastPlayed: 'Oct 15, 2012',
		icon: '🌍',
		color: 'linear-gradient(135deg,#1a0a1a,#3a1030)'
	},
	{
		name: 'The Witcher 2',
		tag: 'RPG',
		hours: 61,
		lastPlayed: 'Sep 28, 2012',
		icon: '🗡',
		color: 'linear-gradient(135deg,#101a10,#203020)'
	},
	{
		name: 'Portal 2',
		tag: 'Puzzle',
		hours: 12,
		lastPlayed: 'Sep 12, 2012',
		icon: '🔵',
		color: 'linear-gradient(135deg,#0a0a1a,#151530)'
	},
	{
		name: 'Half-Life 2',
		tag: 'Shooter',
		hours: 8,
		lastPlayed: 'Aug 5, 2012',
		icon: '🔶',
		color: 'linear-gradient(135deg,#1a0a00,#301500)'
	},
	{
		name: 'Left 4 Dead 2',
		tag: 'Shooter',
		hours: 33,
		lastPlayed: 'Jul 19, 2012',
		icon: '🧟',
		color: 'linear-gradient(135deg,#1a0a0a,#2a0808)'
	},
	{
		name: "Assassin's Creed III",
		tag: 'Action',
		hours: 27,
		lastPlayed: 'Jun 30, 2012',
		icon: '🦅',
		color: 'linear-gradient(135deg,#0a0a0a,#1a1a1a)'
	}
];

const recentGames = games.filter((g) => g.recent);
const allGames = games.filter((g) => !g.recent);

const filtered = $derived(
	games.filter((g) => g.name.toLowerCase().includes(searchVal.toLowerCase()))
);
</script>

<!-- Sub-nav -->
<div class="sub-nav">
	{#each subTabs as tab, i (tab)}
		{#if i > 0}<span class="sub-sep">|</span>{/if}
		<button type="button" class="sub-tab" class:active={activeSubTab === tab} onclick={() => (activeSubTab = tab)}>
			{tab}
		</button>
	{/each}
	<div class="sub-spacer"></div>
	<div class="search-wrap">
		<input class="sub-search" placeholder="search games..." bind:value={searchVal} />
	</div>
</div>

<!-- Browse tabs row -->
<div class="browse-bar">
	<div class="browse-tab active">All Games</div>
	<div class="browse-tab">Recently Played</div>
	<div class="browse-tab">Favorites</div>
	<div class="game-count">{games.length} games in library</div>
</div>

<!-- Recently Played section -->
{#if !searchVal}
	<div class="section-header">
		<span class="section-title">▶ Recently Played</span>
	</div>
	<div class="games-grid">
		{#each recentGames as game (game.name)}
			<div class="game-card">
				<div class="game-img" style="background: {game.color}">
					<div class="game-overlay"></div>
					<div class="game-icon">{game.icon}</div>
					<div class="hours-badge">{game.hours}h</div>
				</div>
				<div class="game-info">
					<div class="game-name">{game.name}</div>
					<div class="game-meta">
						<span class="game-tag">{game.tag}</span>
						<span class="game-last">{game.lastPlayed}</span>
					</div>
				</div>
			</div>
		{/each}
	</div>
{/if}

<!-- All games list -->
<div class="section-header">
	<span class="section-title">▶ {searchVal ? 'Search Results' : 'All Games'}</span>
</div>
{#each (searchVal ? filtered : allGames) as game (game.name)}
	<div class="list-item">
		<div class="list-img" style="background: {game.color}">{game.icon}</div>
		<span class="list-name">{game.name}</span>
		<span class="list-tag">{game.tag}</span>
		<span class="list-hours">{game.hours} hrs</span>
		<span class="list-last">{game.lastPlayed}</span>
		<button type="button" class="play-btn">▶ Play</button>
	</div>
{/each}

{#if searchVal && filtered.length === 0}
	<div class="empty-state">No games found matching "{searchVal}"</div>
{/if}

<style>
	.sub-nav {
		background: #1e1e1e;
		border-bottom: 1px solid var(--border);
		padding: 0 14px;
		display: flex;
		align-items: center;
	}
	.sub-tab {
		padding: 6px 12px;
		color: var(--text-secondary);
		font-size: var(--font-size-sm);
		font-weight: bold;
		letter-spacing: 0.3px;
		text-transform: uppercase;
		cursor: pointer;
		border: none;
		background: none;
		font-family: var(--font-ui);
		border-bottom: 1px solid transparent;
		transition: var(--transition-color);
	}
	.sub-tab:hover { color: var(--text-primary); }
	.sub-tab.active { color: var(--text-primary); border-bottom: 2px solid var(--accent); }
	.sub-sep { color: #3d3d3f; font-size: var(--font-size-xs); padding: 0 2px; }
	.sub-spacer { flex: 1; }
	.search-wrap { padding: 5px 0; }
	.sub-search {
		background: #111;
		border: 1px solid #3a4a3a;
		border-radius: var(--radius-sm);
		padding: 3px 8px;
		color: var(--text-secondary);
		font-size: var(--font-size-sm);
		font-family: var(--font-ui);
		width: 130px;
		outline: none;
	}
	.sub-search:focus { border-color: var(--accent-dim); }

	.browse-bar {
		background: var(--surface-base);
		padding: 6px 12px 0;
		display: flex;
		align-items: flex-end;
		gap: 2px;
	}
	.browse-tab {
		padding: 4px 10px;
		font-size: var(--font-size-xs);
		color: var(--text-secondary);
		border: 1px solid #2a3a3e;
		border-bottom: none;
		border-radius: var(--radius) var(--radius) 0 0;
		cursor: pointer;
		background: #162022;
		transition: var(--transition-color);
	}
	.browse-tab.active { color: var(--text-primary); background: var(--surface-card); border-color: #2a4a50; }
	.game-count { margin-left: auto; font-size: var(--font-size-xs); color: var(--text-dim); padding-bottom: 4px; }

	.section-header {
		background: var(--surface-section-head);
		padding: 6px 12px;
		border-bottom: 1px solid var(--border);
		border-top: 1px solid #2a3a3e;
	}
	.section-title { color: var(--accent); font-size: var(--font-size-sm); font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; }

	.games-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1px;
		background: var(--border);
		padding: 1px;
	}
	.game-card { background: var(--surface-card); cursor: pointer; position: relative; overflow: hidden; }
	.game-card:hover .game-overlay { opacity: 1; }
	.game-img { height: 70px; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; }
	.game-overlay { position: absolute; inset: 0; background: var(--accent-glow); opacity: 0; transition: opacity 0.1s; border: 1px solid var(--accent); }
	.game-icon { font-size: 22px; opacity: 0.6; position: relative; z-index: 1; }
	.hours-badge { position: absolute; bottom: 4px; right: 4px; background: rgba(0,0,0,0.7); color: var(--accent-link); font-size: 9px; font-weight: bold; padding: 1px 4px; border-radius: var(--radius-sm); z-index: 1; }
	.game-info { padding: 5px 7px; }
	.game-name { font-size: var(--font-size-sm); color: var(--text-primary); font-weight: bold; line-height: 1.2; margin-bottom: 3px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
	.game-meta { display: flex; align-items: center; justify-content: space-between; }
	.game-tag { font-size: var(--font-size-xs); color: var(--text-muted); }
	.game-last { font-size: var(--font-size-xs); color: var(--text-dim); }

	.list-item {
		background: var(--surface-card);
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 5px 8px;
		cursor: pointer;
		border-bottom: 1px solid #162022;
		transition: background 0.1s;
	}
	.list-item:hover { background: var(--surface-card-hover); }
	.list-img { width: 36px; height: 26px; border-radius: var(--radius-sm); flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 14px; }
	.list-name { flex: 1; font-size: var(--font-size-sm); color: var(--text-primary); font-weight: bold; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
	.list-tag { font-size: var(--font-size-xs); color: var(--text-muted); min-width: 60px; }
	.list-hours { font-size: var(--font-size-sm); color: var(--accent-link); font-weight: bold; min-width: 50px; text-align: right; }
	.list-last { font-size: var(--font-size-xs); color: var(--text-dim); min-width: 100px; text-align: right; }
	.play-btn {
		background: var(--accent-dim);
		border: none;
		border-radius: var(--radius-sm);
		padding: 3px 8px;
		color: var(--text-primary);
		font-size: 10px;
		font-weight: bold;
		font-family: var(--font-ui);
		cursor: pointer;
		white-space: nowrap;
		transition: var(--transition-color);
	}
	.play-btn:hover { background: var(--accent); }
	.empty-state { padding: 30px; text-align: center; color: var(--text-muted); font-size: var(--font-size-sm); }
</style>

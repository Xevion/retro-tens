<script lang="ts">
const subTabs = ['Home', 'Discussions', 'Screenshots', 'Videos', 'Workshop', 'Groups'];
let activeSubTab = $state('Home');

const activity = [
	{
		user: 'krazykat99',
		userBg: '#2a5a10',
		userInit: 'KR',
		action: 'earned an achievement in',
		target: 'Borderlands 2',
		detail: 'Well-Funded — Earn $3,000,000',
		time: '12 minutes ago',
		type: 'achievement',
		icon: '🏆'
	},
	{
		user: 'foxbyte',
		userBg: '#4a2a10',
		userInit: 'FX',
		action: 'posted a screenshot in',
		target: 'Team Fortress 2',
		detail: 'Epic backstab right there',
		time: '43 minutes ago',
		type: 'screenshot',
		icon: '📷'
	},
	{
		user: 'n3xus_zero',
		userBg: '#1a2a5a',
		userInit: 'NX',
		action: 'recommended',
		target: 'FTL: Faster Than Light',
		detail: '"Best roguelike I\'ve played in years. Hard as nails but incredibly fair."',
		time: '1 hour ago',
		type: 'review',
		icon: '👍'
	},
	{
		user: 'krazykat99',
		userBg: '#2a5a10',
		userInit: 'KR',
		action: 'is now playing',
		target: 'Borderlands 2',
		detail: null,
		time: '2 hours ago',
		type: 'playing',
		icon: '🎮'
	},
	{
		user: 'foxbyte',
		userBg: '#4a2a10',
		userInit: 'FX',
		action: 'commented in the discussion',
		target: '"Best settings for TF2?"',
		detail: 'I always run with max settings on DX11, makes a huge difference.',
		time: '3 hours ago',
		type: 'discussion',
		icon: '💬'
	},
	{
		user: 'n3xus_zero',
		userBg: '#1a2a5a',
		userInit: 'NX',
		action: 'earned an achievement in',
		target: 'FTL: Faster Than Light',
		detail: 'The Last Stand — Reach the Last Stand with the Rebel Flagship',
		time: '5 hours ago',
		type: 'achievement',
		icon: '🏆'
	},
	{
		user: 'zipcode',
		userBg: '#3a3a10',
		userInit: 'ZP',
		action: 'added to their wishlist',
		target: 'Dishonored',
		detail: null,
		time: '6 hours ago',
		type: 'wishlist',
		icon: '⭐'
	}
];
</script>

<!-- Sub-nav -->
<div class="sub-nav">
	{#each subTabs as tab, i (tab)}
		{#if i > 0}<span class="sub-sep">|</span>{/if}
		<button type="button" class="sub-tab" class:active={activeSubTab === tab} onclick={() => (activeSubTab = tab)}>
			{tab}
		</button>
	{/each}
</div>

<!-- Community header -->
<div class="community-header">
	<div class="community-title">Friend Activity</div>
	<div class="community-sub">What your friends have been up to</div>
</div>

<!-- Activity feed -->
<div class="activity-feed">
	{#each activity as item, i (i)}
		<div class="activity-item">
			<div class="activity-icon-col">
				<div class="activity-type-icon">{item.icon}</div>
			</div>
			<div class="activity-avatar" style="background: {item.userBg}">{item.userInit}</div>
			<div class="activity-body">
				<div class="activity-line">
					<span class="activity-user">{item.user}</span>
					<span class="activity-action"> {item.action} </span>
					<span class="activity-target">{item.target}</span>
				</div>
				{#if item.detail}
					<div class="activity-detail">{item.detail}</div>
				{/if}
			</div>
			<div class="activity-time">{item.time}</div>
		</div>
	{/each}
</div>

<!-- Trending discussions -->
<div class="section-header">
	<span class="section-title">▶ Trending Discussions</span>
</div>
<div class="discussions">
	{#each [
		{ game: 'Borderlands 2', title: 'Build Guide: Best Siren skills for co-op?', replies: 47, views: 1204 },
		{ game: 'Skyrim', title: 'Mod recommendations for 2012 — what are you running?', replies: 83, views: 3491 },
		{ game: 'Team Fortress 2', title: 'New map suggestions — what should Valve add?', replies: 124, views: 8822 },
		{ game: 'XCOM: Enemy Unknown', title: 'Classic difficulty tips and tricks', replies: 29, views: 762 },
	] as disc (disc.title)}
		<div class="disc-item">
			<span class="disc-game">{disc.game}</span>
			<span class="disc-title">{disc.title}</span>
			<span class="disc-replies">{disc.replies} replies</span>
			<span class="disc-views">{disc.views} views</span>
		</div>
	{/each}
</div>

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

	.community-header {
		background: #162022;
		padding: 10px 14px;
		border-bottom: 1px solid var(--border);
	}
	.community-title { color: var(--text-primary); font-size: 14px; font-weight: bold; }
	.community-sub { color: var(--text-muted); font-size: var(--font-size-xs); margin-top: 2px; }

	.activity-feed { background: var(--surface-base); }
	.activity-item {
		display: flex;
		align-items: flex-start;
		gap: 8px;
		padding: 8px 12px;
		border-bottom: 1px solid #162022;
		cursor: pointer;
		transition: background 0.1s;
	}
	.activity-item:hover { background: #1e2a2c; }
	.activity-icon-col { width: 16px; flex-shrink: 0; padding-top: 1px; }
	.activity-type-icon { font-size: 12px; }
	.activity-avatar {
		width: 24px;
		height: 24px;
		border-radius: var(--radius-sm);
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: var(--font-size-xs);
		font-weight: bold;
		color: #fff;
	}
	.activity-body { flex: 1; min-width: 0; }
	.activity-line { font-size: var(--font-size-sm); line-height: 1.4; }
	.activity-user { color: var(--accent-link); font-weight: bold; cursor: pointer; }
	.activity-user:hover { text-decoration: underline; }
	.activity-action { color: var(--text-secondary); }
	.activity-target { color: var(--text-primary); font-weight: bold; cursor: pointer; }
	.activity-target:hover { text-decoration: underline; }
	.activity-detail { font-size: var(--font-size-xs); color: var(--text-muted); margin-top: 2px; font-style: italic; line-height: 1.3; }
	.activity-time { font-size: var(--font-size-xs); color: var(--text-dim); white-space: nowrap; padding-top: 1px; }

	.section-header {
		background: var(--surface-section-head);
		padding: 6px 12px;
		border-bottom: 1px solid var(--border);
		border-top: 1px solid #2a3a3e;
	}
	.section-title { color: var(--accent); font-size: var(--font-size-sm); font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; }

	.discussions { background: var(--surface-base); }
	.disc-item {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 6px 12px;
		border-bottom: 1px solid #162022;
		cursor: pointer;
		transition: background 0.1s;
	}
	.disc-item:hover { background: #1e2a2c; }
	.disc-game { font-size: var(--font-size-xs); color: var(--accent-link); min-width: 120px; }
	.disc-title { flex: 1; font-size: var(--font-size-sm); color: var(--text-primary); font-weight: bold; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
	.disc-replies { font-size: var(--font-size-xs); color: var(--text-muted); min-width: 70px; text-align: right; }
	.disc-views { font-size: var(--font-size-xs); color: var(--text-dim); min-width: 70px; text-align: right; }
</style>

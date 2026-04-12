<script lang="ts">
import '$lib/themes/steam-legacy/tokens.css';
import { page } from '$app/state';

let { children } = $props();

const navLinks = [
	{ label: 'Store', href: '/steam-legacy' },
	{ label: 'Library', href: '/steam-legacy/library' },
	{ label: 'Community', href: '/steam-legacy/community' }
];

const friends = [
	{
		initials: 'KR',
		name: 'krazykat99',
		game: 'Borderlands 2',
		bg: '#2a5a10',
		dotColor: 'var(--status-ingame)'
	},
	{
		initials: 'NX',
		name: 'n3xus_zero',
		status: 'Online',
		bg: '#1a2a5a',
		dotColor: 'var(--status-online)'
	},
	{
		initials: 'FX',
		name: 'foxbyte',
		game: 'Team Fortress 2',
		bg: '#4a2a10',
		dotColor: 'var(--status-ingame)'
	},
	{
		initials: 'ZP',
		name: 'zipcode',
		status: 'Away',
		bg: '#3a3a10',
		dotColor: 'var(--status-away)'
	},
	{
		initials: 'MV',
		name: 'maverick_x',
		status: 'Last on 2 days ago',
		bg: '#2a2a2a',
		dotColor: 'var(--status-offline)',
		statusColor: '#555'
	}
];

const news = [
	{ date: 'Nov 12, 2012', title: 'Steam Big Picture Mode now available for all users' },
	{ date: 'Nov 10, 2012', title: 'Autumn Sale starts Friday — thousands of games discounted' },
	{ date: 'Nov 8, 2012', title: 'Greenlight selects 10 new titles for distribution' }
];

function isActive(href: string) {
	if (href === '/steam-legacy') return page.url.pathname === '/steam-legacy';
	return page.url.pathname.startsWith(href);
}
</script>

<div class="theme-steam-legacy">
	<div class="steam-client">
		<!-- Window title bar -->
		<div class="title-bar">
			<div class="title-bar-left">
				<div class="steam-logo-dot">S</div>
				<span class="title-text">STEAM</span>
			</div>
			<!-- a11y-exemption: decorative window chrome buttons — 14px matches the 2010 Steam client -->
			<div class="win-btns">
				<button type="button" class="win-btn min" aria-hidden="true" tabindex="-1">—</button>
				<button type="button" class="win-btn max" aria-hidden="true" tabindex="-1">□</button>
				<button type="button" class="win-btn cls" aria-hidden="true" tabindex="-1">✕</button>
			</div>
		</div>

		<!-- Top navigation bar -->
		<div class="top-bar">
			<div class="top-left">
				<span class="steam-brand">STEAM<span class="brand-accent">™</span></span>
			</div>
			<nav class="nav-tabs">
				{#each navLinks as link (link.href)}
					<a href={link.href} class="nav-tab" class:active={isActive(link.href)}>
						{link.label}
					</a>
				{/each}
			</nav>
			<div class="user-area">
				<div class="avatar">XV</div>
				<div class="user-info">
					<div class="username">Xevion</div>
					<div class="user-status">Online</div>
				</div>
				<div class="friends-btn">Friends <span class="friends-count">4</span></div>
			</div>
		</div>

		<!-- Main layout: content + sidebar -->
		<div class="main-layout">
			<main class="content-area">
				{@render children()}
			</main>

			<!-- Persistent sidebar -->
			<aside class="sidebar">
				<div class="sidebar-section">
					<div class="sidebar-head">
						<span class="sidebar-head-title">Friends</span>
						<span class="sidebar-head-count">4 online</span>
					</div>
					{#each friends as friend (friend.name)}
						<div class="friend-item">
							<div class="status-dot" style="background: {friend.dotColor}"></div>
							<div class="friend-avatar" style="background: {friend.bg}">{friend.initials}</div>
							<div class="friend-info">
								<div class="friend-name">{friend.name}</div>
								{#if friend.game}
									<div class="friend-game">{friend.game}</div>
								{:else}
									<div class="friend-status" style:color={friend.statusColor ?? 'var(--text-muted)'}>
										{friend.status}
									</div>
								{/if}
							</div>
						</div>
					{/each}
					<div class="sidebar-btn-row">
						<button type="button" class="view-all-btn">View All Friends</button>
					</div>
				</div>

				<div class="sidebar-section">
					<div class="sidebar-head">
						<span class="sidebar-head-title">Steam News</span>
					</div>
					{#each news as item (item.title)}
						<div class="news-item">
							<div class="news-date">{item.date}</div>
							<div class="news-title">{item.title}</div>
						</div>
					{/each}
				</div>

				<div class="account-widget">
					<div class="account-card">
						<div class="account-label">Your Account</div>
						<div class="account-meta">Wallet Balance</div>
						<div class="account-balance">$23.47</div>
						<button type="button" class="add-funds-btn">Add Funds</button>
					</div>
				</div>
			</aside>
		</div>

		<!-- Footer -->
		<footer class="store-footer">
			<div class="status-bar">
				<div class="status-icon"></div>
				<span class="footer-text">Steam connected · VAC Active</span>
			</div>
			<div class="footer-links">
				<span class="footer-link">About Valve</span>
				<span class="footer-link">Jobs</span>
				<span class="footer-link">Privacy Policy</span>
				<span class="footer-link">Legal</span>
				<span class="footer-link">Steam Subscriber Agreement</span>
			</div>
		</footer>
	</div>
</div>

<style>
	.theme-steam-legacy {
		font-family: var(--font-ui);
		font-size: var(--font-size-base);
		color: var(--text-primary);
		background: transparent;
		min-height: 100vh;
	}

	.steam-client {
		background: var(--surface-root);
		border: 1px solid #444;
		border-radius: var(--radius);
		overflow: hidden;
		user-select: none;
		min-width: 760px;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	/* Title bar */
	.title-bar {
		background: linear-gradient(to bottom, #2d2d2d, var(--surface-root));
		padding: 5px 8px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid var(--border);
	}
	.title-bar-left {
		display: flex;
		align-items: center;
		gap: 6px;
	}
	.steam-logo-dot {
		width: 20px;
		height: 20px;
		background: #1b9fe4;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 9px;
		font-weight: bold;
		color: #fff;
	}
	.title-text {
		color: #888;
		font-size: var(--font-size-sm);
		letter-spacing: 0.5px;
	}
	.win-btns {
		display: flex;
		gap: 3px;
	}
	.win-btn {
		width: 14px;
		height: 14px;
		border-radius: var(--radius-sm);
		border: none;
		cursor: pointer;
		font-size: 9px;
		color: #aaa;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #3a3a3a;
	}
	.win-btn.cls {
		background: #6b2020;
	}

	/* Top bar */
	.top-bar {
		background: linear-gradient(to bottom, #3c3c3c 0%, #252525 60%, #1e1e1e 100%);
		display: flex;
		align-items: stretch;
		border-bottom: 2px solid var(--border);
		position: relative;
	}
	.top-bar::after {
		content: '';
		position: absolute;
		bottom: -1px;
		left: 0;
		right: 0;
		height: 1px;
		background: linear-gradient(to right, transparent, var(--accent-dim), transparent);
		opacity: 0.5;
	}
	.top-left {
		padding: 8px 14px;
		display: flex;
		align-items: center;
		border-right: 1px solid var(--border-subtle);
	}
	.steam-brand {
		font-size: 20px;
		font-weight: bold;
		color: var(--text-primary);
		letter-spacing: 1px;
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
	}
	.brand-accent {
		color: var(--accent);
		font-size: 12px;
		vertical-align: super;
	}
	.nav-tabs {
		display: flex;
		align-items: flex-end;
		flex: 1;
		padding: 0 6px;
	}
	.nav-tab {
		padding: 8px 16px 6px;
		color: var(--text-secondary);
		font-size: var(--font-size-nav);
		font-weight: bold;
		letter-spacing: 0.5px;
		text-transform: uppercase;
		cursor: pointer;
		border-bottom: 2px solid transparent;
		border-top: 1px solid transparent;
		border-left: 1px solid transparent;
		border-right: 1px solid transparent;
		border-radius: var(--radius) var(--radius) 0 0;
		position: relative;
		top: 1px;
		transition: var(--transition);
	}
	.nav-tab:hover {
		color: var(--text-primary);
		background: rgba(255, 255, 255, 0.05);
	}
	.nav-tab.active {
		color: #fff;
		background: linear-gradient(to bottom, var(--accent-deep), #1a3a08);
		border-color: var(--accent-dim) var(--accent-dim) #1e1e1e;
		text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
	}
	.user-area {
		padding: 6px 14px;
		display: flex;
		align-items: center;
		gap: 10px;
		border-left: 1px solid var(--border-subtle);
	}
	.avatar {
		width: 28px;
		height: 28px;
		border-radius: var(--radius-sm);
		background: linear-gradient(135deg, #4a7010, #2d4a0a);
		border: 1px solid var(--accent);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: var(--font-size-sm);
		color: var(--text-primary);
	}
	.user-info {
		display: flex;
		flex-direction: column;
	}
	.username {
		color: var(--text-primary);
		font-size: var(--font-size-sm);
		font-weight: bold;
	}
	.user-status {
		color: var(--accent-link);
		font-size: var(--font-size-xs);
	}
	.friends-btn {
		background: rgba(100, 160, 50, 0.2);
		border: 1px solid var(--border-accent);
		border-radius: var(--radius-sm);
		padding: 3px 8px;
		color: var(--accent);
		font-size: var(--font-size-xs);
		font-weight: bold;
		cursor: pointer;
	}
	.friends-count {
		color: var(--accent-link);
		font-weight: bold;
	}

	/* Main layout */
	.main-layout {
		display: flex;
		flex: 1;
	}
	.content-area {
		flex: 1;
		background: var(--surface-base);
		overflow: hidden;
		min-width: 0;
	}

	/* Sidebar */
	.sidebar {
		width: 200px;
		background: var(--surface-sidebar);
		border-left: 1px solid var(--border);
		display: flex;
		flex-direction: column;
		flex-shrink: 0;
	}
	.sidebar-section {
		border-bottom: 1px solid var(--border);
	}
	.sidebar-head {
		background: #222;
		padding: 6px 10px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid var(--border-subtle);
	}
	.sidebar-head-title {
		color: var(--accent);
		font-size: var(--font-size-xs);
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}
	.sidebar-head-count {
		color: var(--accent-link);
		font-size: var(--font-size-xs);
		font-weight: bold;
	}
	.friend-item {
		padding: 6px 10px;
		display: flex;
		align-items: center;
		gap: 7px;
		cursor: pointer;
		border-bottom: 1px solid var(--border-subtle);
		transition: var(--transition-color);
	}
	.friend-item:hover {
		background: #242424;
	}
	.friend-avatar {
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
	.friend-info {
		flex: 1;
		min-width: 0;
	}
	.friend-name {
		font-size: var(--font-size-sm);
		color: var(--text-primary);
		font-weight: bold;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.friend-game {
		font-size: var(--font-size-xs);
		color: var(--accent-link);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.friend-status {
		font-size: var(--font-size-xs);
		color: var(--text-muted);
	}
	.status-dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		flex-shrink: 0;
	}
	.sidebar-btn-row {
		padding: 6px 10px;
	}
	.view-all-btn {
		background: #2a4a10;
		border: 1px solid var(--border-accent);
		border-radius: var(--radius-sm);
		padding: 5px 8px;
		width: 100%;
		text-align: center;
		cursor: pointer;
		color: var(--accent);
		font-size: var(--font-size-xs);
		font-weight: bold;
		font-family: var(--font-ui);
		transition: var(--transition-color);
	}
	.view-all-btn:hover {
		background: #3a6a18;
	}
	.news-item {
		padding: 8px 10px;
		border-bottom: 1px solid var(--border-subtle);
		cursor: pointer;
		transition: var(--transition-color);
	}
	.news-item:hover {
		background: #242424;
	}
	.news-date {
		color: var(--text-dim);
		font-size: var(--font-size-xs);
		margin-bottom: 2px;
	}
	.news-title {
		font-size: var(--font-size-sm);
		color: var(--text-primary);
		line-height: 1.3;
	}
	.account-widget {
		padding: 8px 10px;
		background: var(--surface-root);
		flex: 1;
	}
	.account-card {
		background: var(--surface-card);
		border: 1px solid #2a4a30;
		border-radius: var(--radius-sm);
		padding: 8px;
	}
	.account-label {
		color: var(--accent);
		font-size: var(--font-size-xs);
		font-weight: bold;
		text-transform: uppercase;
		margin-bottom: 5px;
	}
	.account-meta {
		font-size: var(--font-size-xs);
		color: var(--text-secondary);
		margin-bottom: 4px;
	}
	.account-balance {
		font-size: 16px;
		font-weight: bold;
		color: var(--text-primary);
		margin-bottom: 6px;
	}
	.add-funds-btn {
		background: var(--accent-dim);
		border: none;
		border-radius: var(--radius-sm);
		padding: 4px 8px;
		width: 100%;
		text-align: center;
		cursor: pointer;
		color: var(--text-primary);
		font-size: var(--font-size-xs);
		font-weight: bold;
		font-family: var(--font-ui);
		transition: var(--transition-color);
	}
	.add-funds-btn:hover {
		background: #5a8a18;
	}

	/* Footer */
	.store-footer {
		background: var(--surface-footer);
		border-top: 2px solid var(--border);
		padding: 6px 14px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.status-bar {
		display: flex;
		align-items: center;
		gap: 4px;
	}
	.status-icon {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--accent);
	}
	.footer-text {
		color: var(--text-dim);
		font-size: var(--font-size-xs);
	}
	.footer-links {
		display: flex;
		gap: 12px;
	}
	.footer-link {
		color: #4a7a8a;
		font-size: var(--font-size-xs);
		cursor: pointer;
		transition: var(--transition-color);
	}
	.footer-link:hover {
		color: var(--text-primary);
	}
</style>

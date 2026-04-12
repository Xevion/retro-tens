<script lang="ts">
import '@fontsource-variable/source-sans-3';
import '@fontsource-variable/source-sans-3/wght-italic.css';
import '$lib/themes/steam-modern/tokens.css';
import '$lib/themes/steam-modern/shared.css';
import { page } from '$app/state';
import type { ComponentType } from 'svelte';
import {
	LayoutDashboard,
	AlertTriangle,
	Activity,
	Users,
	Ban,
	Mail,
	Gamepad2,
	PenLine,
	ShoppingBag,
	Flag,
	MessageCircle,
	Image as ImageIcon,
	BarChart2,
	Server,
	Settings,
	ShoppingCart,
	MessageSquare
} from 'lucide-svelte';

let { children } = $props();

type SidebarLink = {
	icon: ComponentType;
	label: string;
	href: string;
	count?: string;
	alert?: boolean;
};
type SidebarSection = { title: string; links: SidebarLink[] };
type NavTab = { label: string; icon: ComponentType; href: string; badge?: boolean };

const navTabs: NavTab[] = [
	{ label: 'Dashboard', icon: LayoutDashboard, href: '/steam-modern' },
	{ label: 'Users', icon: Users, href: '/steam-modern/users' },
	{ label: 'Games', icon: Gamepad2, href: '/steam-modern/games' },
	{ label: 'Store', icon: ShoppingCart, href: '/steam-modern/store' },
	{ label: 'Community', icon: MessageSquare, href: '/steam-modern/community', badge: true },
	{ label: 'Reports', icon: BarChart2, href: '/steam-modern/reports' },
	{ label: 'Settings', icon: Settings, href: '/steam-modern/settings' }
];

const sidebarSections: SidebarSection[] = [
	{
		title: 'Overview',
		links: [
			{ icon: LayoutDashboard, label: 'Dashboard', href: '/steam-modern' },
			{
				icon: AlertTriangle,
				label: 'Alerts',
				href: '/steam-modern/alerts',
				count: '3',
				alert: true
			},
			{ icon: Activity, label: 'Activity Log', href: '/steam-modern/activity' }
		]
	},
	{
		title: 'Users',
		links: [
			{ icon: Users, label: 'All Users', href: '/steam-modern/users', count: '147M' },
			{
				icon: Ban,
				label: 'Banned',
				href: '/steam-modern/users/banned',
				count: '2,841',
				alert: true
			},
			{ icon: Mail, label: 'Pending Review', href: '/steam-modern/users/pending', count: '128' }
		]
	},
	{
		title: 'Content',
		links: [
			{ icon: Gamepad2, label: 'Apps & Games', href: '/steam-modern/games', count: '68k' },
			{ icon: PenLine, label: 'Awaiting Review', href: '/steam-modern/games/review', count: '34' },
			{ icon: ShoppingBag, label: 'Store Mgmt', href: '/steam-modern/store' }
		]
	},
	{
		title: 'Community',
		links: [
			{
				icon: Flag,
				label: 'Report Queue',
				href: '/steam-modern/community',
				count: '9',
				alert: true
			},
			{ icon: MessageCircle, label: 'Reviews', href: '/steam-modern/community/reviews' },
			{ icon: ImageIcon, label: 'Artwork', href: '/steam-modern/community/artwork' }
		]
	},
	{
		title: 'Infrastructure',
		links: [
			{ icon: BarChart2, label: 'Analytics', href: '/steam-modern/reports' },
			{ icon: Server, label: 'CDN Status', href: '/steam-modern/reports/cdn' },
			{ icon: Settings, label: 'Config', href: '/steam-modern/settings' }
		]
	}
];

function isActive(href: string) {
	if (href === '/steam-modern') return page.url.pathname === '/steam-modern';
	return page.url.pathname.startsWith(href);
}
</script>

<div class="theme-steam-modern">
	<div class="app-shell">
		<!-- macOS-style chrome bar -->
		<div class="chrome-bar">
			<div class="ctrl-area">
				<span class="chrome-btn chrome-close"></span>
				<span class="chrome-btn chrome-min"></span>
				<span class="chrome-btn chrome-max"></span>
			</div>
			<div class="chrome-title">Steam — Administrator Console [Build 20170823-b]</div>
		</div>

		<!-- Menu bar -->
		<div class="menubar">
			<div class="steam-logo">
				<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
					<circle cx="20" cy="20" r="18" fill="#1b2838" stroke="#66c0f4" stroke-width="1.5" />
					<path
						d="M20 8C13.4 8 8 13.4 8 20c0 4.8 2.8 9.0 6.9 11.1l2.6-6.3c-.5-.7-.8-1.5-.8-2.4 0-2.4 1.9-4.3 4.3-4.3s4.3 1.9 4.3 4.3c0 2.4-1.9 4.3-4.3 4.3h-.3l-6.2 2.6c1.9 1.0 4.1 1.6 6.5 1.6 6.6 0 12-5.4 12-12S26.6 8 20 8z"
						fill="#66c0f4"
					/>
					<circle cx="24.5" cy="15.5" r="3.5" fill="#4fa3d4" />
				</svg>
				<span>STEAM</span>
			</div>
			<div class="menu-item">Steam</div>
			<div class="menu-item">View</div>
			<div class="menu-item">Friends</div>
			<div class="menu-item">Games</div>
			<div class="menu-item">Admin Tools <span class="menu-badge">3</span></div>
			<div class="menu-item">Help</div>
			<div class="menubar-right">
				<span class="status-dot-green"></span>
				<div class="admin-info">
					<div class="admin-avatar">VA</div>
					<div>
						<div class="admin-name">ValveAdmin_07</div>
						<div class="admin-role">▶ SUPER ADMIN</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Nav tabs -->
		<nav class="nav-tabs">
			{#each navTabs as tab (tab.href)}
				{@const Icon = tab.icon}
				<a href={tab.href} class="nav-tab" class:active={isActive(tab.href)}>
					<span class="tab-icon"><Icon size={14} /></span>
					{tab.label}
					{#if tab.badge}<span class="tab-badge"></span>{/if}
				</a>
			{/each}
		</nav>

		<!-- Content area -->
		<div class="content-area">
			<!-- Sidebar -->
			<aside class="sidebar">
				{#each sidebarSections as section (section.title)}
					<div class="sidebar-section">
						<div class="sidebar-section-header">{section.title}</div>
						{#each section.links as link (link.href)}
							{@const Icon = link.icon}
							<a href={link.href} class="sidebar-link" class:active={isActive(link.href)}>
								<span class="icon"><Icon size={12} /></span>
								{link.label}
								{#if link.count}
									<span class="count" class:alert={link.alert}>{link.count}</span>
								{/if}
							</a>
						{/each}
					</div>
				{/each}
			</aside>

			<!-- Page content -->
			<main class="main-pane">
				{@render children()}
			</main>
		</div>
	</div>
</div>

<style>
	.theme-steam-modern {
		font-family: var(--font-ui);
		font-size: var(--font-size-base);
		color: var(--text-primary);
		background: var(--surface-root);
		min-height: 100vh;
	}

	.app-shell {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background: var(--surface-root);
		overflow: hidden;
	}

	/* Chrome bar */
	.chrome-bar {
		height: 26px;
		background: var(--surface-chrome);
		display: flex;
		align-items: center;
		padding: 0 8px;
		gap: 6px;
		border-bottom: 1px solid #0a0f16;
		flex-shrink: 0;
	}
	.ctrl-area { display: flex; gap: 4px; }
	.chrome-btn {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		display: inline-block;
	}
	.chrome-close { background: var(--accent-red); }
	.chrome-min { background: var(--accent-gold); }
	.chrome-max { background: var(--accent-green); }
	.chrome-title {
		flex: 1;
		text-align: center;
		color: var(--text-muted);
		font-size: 11px;
		letter-spacing: 0.03em;
	}

	/* Menu bar */
	.menubar {
		height: 32px;
		background: linear-gradient(180deg, #2a3f54 0%, #1b2838 100%);
		display: flex;
		align-items: stretch;
		border-bottom: 1px solid var(--divider);
		flex-shrink: 0;
		user-select: none;
	}
	.steam-logo {
		display: flex;
		align-items: center;
		padding: 0 14px;
		border-right: 1px solid rgba(0, 0, 0, 0.3);
		gap: 7px;
	}
	.steam-logo span {
		font-size: 14px;
		font-weight: 700;
		color: var(--text-bright);
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}
	.menu-item {
		display: flex;
		align-items: center;
		padding: 0 14px;
		color: var(--text-secondary);
		font-size: var(--font-size-sm);
		cursor: pointer;
		position: relative;
		white-space: nowrap;
		transition: background var(--transition-fast), color var(--transition-fast);
	}
	.menu-item:hover {
		background: var(--accent-glow);
		color: var(--text-primary);
	}
	.menu-badge {
		margin-left: 5px;
		background: var(--accent-red);
		color: #fff;
		font-size: 10px;
		padding: 1px 5px;
		border-radius: var(--radius-sm);
		font-weight: 700;
	}
	.menubar-right {
		margin-left: auto;
		display: flex;
		align-items: center;
		padding-right: 12px;
		gap: 14px;
	}
	.status-dot-green {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: var(--accent-green);
		box-shadow: 0 0 4px var(--accent-green);
	}
	.admin-info {
		display: flex;
		align-items: center;
		gap: 8px;
		cursor: pointer;
	}
	.admin-avatar {
		width: 20px;
		height: 20px;
		border-radius: var(--radius-sm);
		background: linear-gradient(135deg, #2a6591, #1b4a6b);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 9px;
		font-weight: 700;
		color: #fff;
		border: 1px solid var(--border-light);
	}
	.admin-name {
		color: var(--text-primary);
		font-size: var(--font-size-sm);
		font-weight: 600;
	}
	.admin-role {
		color: var(--accent);
		font-size: 10px;
	}

	/* Nav tabs */
	.nav-tabs {
		background: linear-gradient(180deg, #1d2d3e 0%, #162030 100%);
		display: flex;
		align-items: stretch;
		border-bottom: 2px solid var(--surface-root);
		flex-shrink: 0;
		height: 38px;
	}
	.nav-tab {
		display: flex;
		align-items: center;
		padding: 0 18px;
		color: var(--text-secondary);
		font-size: var(--font-size-sm);
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		cursor: pointer;
		border-bottom: 2px solid transparent;
		margin-bottom: -2px;
		transition: all var(--transition);
		white-space: nowrap;
		position: relative;
	}
	.nav-tab:hover {
		color: var(--text-primary);
		background: rgba(255, 255, 255, 0.04);
	}
	.nav-tab.active {
		color: var(--accent);
		border-bottom-color: var(--accent);
		background: var(--accent-glow);
	}
	.tab-icon {
		display: inline-flex;
		align-items: center;
		margin-right: 7px;
	}
	.tab-badge {
		position: absolute;
		top: 6px;
		right: 10px;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--accent-red);
	}

	/* Layout body */
	.content-area {
		display: flex;
		flex: 1;
		overflow: hidden;
	}

	/* Sidebar */
	.sidebar {
		width: var(--sidebar-w);
		background: var(--surface-sidebar);
		border-right: 1px solid var(--divider);
		overflow-y: auto;
		flex-shrink: 0;
		padding-bottom: 20px;
	}
	.sidebar-section { margin-top: 2px; }
	.sidebar-section-header {
		padding: 10px 14px 5px;
		font-size: 10px;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--text-disabled);
		border-top: 1px solid var(--divider);
	}
	.sidebar-section:first-child .sidebar-section-header { border-top: none; }
	.sidebar-link {
		display: flex;
		align-items: center;
		padding: 6px 14px 6px 18px;
		color: var(--text-secondary);
		cursor: pointer;
		transition: all var(--transition-fast);
		font-size: 12.5px;
		gap: 8px;
		border-left: 2px solid transparent;
	}
	.sidebar-link:hover {
		color: var(--text-primary);
		background: var(--accent-glow);
	}
	.sidebar-link.active {
		color: var(--accent);
		background: rgba(102, 192, 244, 0.1);
		border-left-color: var(--accent);
	}
	.icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 14px;
		flex-shrink: 0;
	}
	.count {
		margin-left: auto;
		background: var(--surface-elevated);
		color: var(--text-muted);
		font-size: 10px;
		padding: 1px 6px;
		border-radius: var(--radius-sm);
	}
	.count.alert { background: var(--accent-red); color: #fff; }

	/* Main pane */
	.main-pane {
		flex: 1;
		overflow: hidden auto;
		background: var(--surface-base);
	}
</style>

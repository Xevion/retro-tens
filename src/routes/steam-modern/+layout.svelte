<script lang="ts">
import '@fontsource-variable/source-sans-3';
import '@fontsource-variable/source-sans-3/wght-italic.css';
import { resolve } from '$app/paths';
import { page } from '$app/state';
import type { Pathname } from '$app/types';
import type { ComponentType } from 'svelte';
import { css, cx } from 'styled-system/css';
import { flex, hstack, vstack } from 'styled-system/patterns';
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
	href?: Pathname;
	count?: string;
	alert?: boolean;
};
type SidebarSection = { title: string; links: SidebarLink[] };
type NavTab = { label: string; icon: ComponentType; href?: Pathname; badge?: boolean };

const navTabs: NavTab[] = [
	{ label: 'Dashboard', icon: LayoutDashboard, href: '/steam-modern' },
	{ label: 'Users', icon: Users, href: '/steam-modern/users' },
	{ label: 'Games', icon: Gamepad2, href: '/steam-modern/games' },
	{ label: 'Store', icon: ShoppingCart },
	{ label: 'Community', icon: MessageSquare, badge: true },
	{ label: 'Reports', icon: BarChart2, href: '/steam-modern/reports' },
	{ label: 'Settings', icon: Settings }
];

const sidebarSections: SidebarSection[] = [
	{
		title: 'Overview',
		links: [
			{ icon: LayoutDashboard, label: 'Dashboard', href: '/steam-modern' },
			{
				icon: AlertTriangle,
				label: 'Alerts',
				count: '3',
				alert: true
			},
			{ icon: Activity, label: 'Activity Log' }
		]
	},
	{
		title: 'Users',
		links: [
			{ icon: Users, label: 'All Users', href: '/steam-modern/users', count: '147M' },
			{
				icon: Ban,
				label: 'Banned',
				count: '2,841',
				alert: true
			},
			{ icon: Mail, label: 'Pending Review', count: '128' }
		]
	},
	{
		title: 'Content',
		links: [
			{ icon: Gamepad2, label: 'Apps & Games', href: '/steam-modern/games', count: '68k' },
			{ icon: PenLine, label: 'Awaiting Review', count: '34' },
			{ icon: ShoppingBag, label: 'Store Mgmt' }
		]
	},
	{
		title: 'Community',
		links: [
			{
				icon: Flag,
				label: 'Report Queue',
				count: '9',
				alert: true
			},
			{ icon: MessageCircle, label: 'Reviews' },
			{ icon: ImageIcon, label: 'Artwork' }
		]
	},
	{
		title: 'Infrastructure',
		links: [
			{ icon: BarChart2, label: 'Analytics', href: '/steam-modern/reports' },
			{ icon: Server, label: 'CDN Status' },
			{ icon: Settings, label: 'Config' }
		]
	}
];

function isActive(href: string | undefined) {
	if (!href) return false;
	if (href === '/steam-modern') return page.url.pathname === '/steam-modern';
	return page.url.pathname.startsWith(href);
}

const shell = css({
	fontFamily: 'ui',
	fontSize: 'base',
	color: 'text.primary',
	background: 'surface.root',
	minHeight: '100vh'
});

const appShell = vstack({
	gap: '0',
	minHeight: '100vh',
	background: 'surface.root',
	overflow: 'hidden',
	alignItems: 'stretch'
});

const chromeBar = css({
	height: '26px',
	background: 'surface.chrome',
	display: 'flex',
	alignItems: 'center',
	padding: '0 8px',
	gap: '6px',
	borderBottom: '1px solid #0a0f16',
	flexShrink: '0'
});

const ctrlArea = hstack({ gap: '4px' });

const chromeBtn = css({
	width: '12px',
	height: '12px',
	borderRadius: 'full',
	display: 'inline-block'
});

const chromeBtnClose = css({ background: 'accent.red' });
const chromeBtnMin = css({ background: 'accent.gold' });
const chromeBtnMax = css({ background: 'accent.green' });

const chromeTitle = css({
	flex: '1',
	textAlign: 'center',
	color: 'text.muted',
	fontSize: '11px',
	letterSpacing: '0.03em'
});

const menubar = css({
	height: '32px',
	background: 'linear-gradient(180deg, #2a3f54 0%, #1b2838 100%)',
	display: 'flex',
	alignItems: 'stretch',
	borderBottom: '1px solid token(colors.divider)',
	flexShrink: '0',
	userSelect: 'none'
});

const steamLogo = css({
	display: 'flex',
	alignItems: 'center',
	padding: '0 14px',
	borderRight: '1px solid rgba(0, 0, 0, 0.3)',
	gap: '7px'
});

const steamLogoText = css({
	fontSize: '14px',
	fontWeight: '700',
	color: 'text.bright',
	letterSpacing: '0.06em',
	textTransform: 'uppercase'
});

const menuItem = css({
	display: 'flex',
	alignItems: 'center',
	padding: '0 14px',
	color: 'text.secondary',
	fontSize: 'sm',
	cursor: 'pointer',
	position: 'relative',
	whiteSpace: 'nowrap',
	transition: 'background token(durations.fast) ease, color token(durations.fast) ease',
	_hover: {
		background: 'accent.glow',
		color: 'text.primary'
	}
});

const menuBadge = css({
	marginLeft: '5px',
	background: 'accent.red',
	color: '#fff',
	fontSize: '10px',
	padding: '1px 5px',
	borderRadius: 'sm',
	fontWeight: '700'
});

const menubarRight = css({
	marginLeft: 'auto',
	display: 'flex',
	alignItems: 'center',
	paddingRight: '12px',
	gap: '14px'
});

const statusDotGreen = css({
	width: '7px',
	height: '7px',
	borderRadius: 'full',
	background: 'accent.green',
	boxShadow: '0 0 4px token(colors.accent.green)'
});

const adminInfo = css({
	display: 'flex',
	alignItems: 'center',
	gap: '8px',
	cursor: 'pointer'
});

const adminAvatar = css({
	width: '20px',
	height: '20px',
	borderRadius: 'sm',
	background:
		'linear-gradient(135deg, token(colors.surface.avatarStart), token(colors.surface.avatarEnd))',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	fontSize: '9px',
	fontWeight: '700',
	color: '#fff',
	border: '1px solid token(colors.border.light)'
});

const adminName = css({
	color: 'text.primary',
	fontSize: 'sm',
	fontWeight: '600'
});

const adminRole = css({
	color: 'accent',
	fontSize: '10px'
});

const navTabsBar = css({
	background: 'linear-gradient(180deg, #1d2d3e 0%, #162030 100%)',
	display: 'flex',
	alignItems: 'stretch',
	borderBottom: '2px solid token(colors.surface.root)',
	flexShrink: '0',
	height: '38px'
});

const navTab = css({
	display: 'flex',
	alignItems: 'center',
	padding: '0 18px',
	color: 'text.secondary',
	fontSize: 'sm',
	fontWeight: '600',
	textTransform: 'uppercase',
	letterSpacing: '0.08em',
	cursor: 'pointer',
	borderBottom: '2px solid transparent',
	marginBottom: '-2px',
	transition: 'all token(durations)',
	whiteSpace: 'nowrap',
	position: 'relative',
	_hover: {
		color: 'text.primary',
		background: 'rgba(255, 255, 255, 0.04)'
	}
});

const navTabActive = css({
	color: 'accent',
	borderBottomColor: 'token(colors.accent)',
	background: 'accent.glow'
});

const tabIcon = css({
	display: 'inline-flex',
	alignItems: 'center',
	marginRight: '7px'
});

const tabBadge = css({
	position: 'absolute',
	top: '6px',
	right: '10px',
	width: '8px',
	height: '8px',
	borderRadius: 'full',
	background: 'accent.red'
});

const contentArea = flex({
	flex: '1',
	overflow: 'hidden'
});

const sidebar = css({
	width: 'sidebarW',
	background: 'surface.sidebar',
	borderRight: '1px solid token(colors.divider)',
	overflowY: 'auto',
	flexShrink: '0',
	paddingBottom: '20px'
});

const sidebarSection = css({ marginTop: '2px' });

const sidebarSectionHeader = css({
	padding: '10px 14px 5px',
	fontSize: '10px',
	fontWeight: '700',
	letterSpacing: '0.12em',
	textTransform: 'uppercase',
	color: 'text.disabled',
	borderTop: '1px solid token(colors.divider)',
	'&:first-child': {
		borderTop: 'none'
	}
});

const sidebarLink = css({
	display: 'flex',
	alignItems: 'center',
	padding: '6px 14px 6px 18px',
	color: 'text.secondary',
	cursor: 'pointer',
	transition: 'all token(durations.fast) ease',
	fontSize: '12.5px',
	gap: '8px',
	borderLeft: '2px solid transparent',
	_hover: {
		color: 'text.primary',
		background: 'accent.glow'
	}
});

const sidebarLinkActive = css({
	color: 'accent',
	background: 'rgba(102, 192, 244, 0.1)',
	borderLeftColor: 'token(colors.accent)'
});

const iconWrap = css({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: '14px',
	flexShrink: '0'
});

const countBadge = css({
	marginLeft: 'auto',
	background: 'surface.elevated',
	color: 'text.muted',
	fontSize: '10px',
	padding: '1px 6px',
	borderRadius: 'sm'
});

const countAlert = css({
	background: 'accent.red',
	color: '#fff'
});

const mainPane = css({
	flex: '1',
	overflow: 'hidden auto',
	background: 'surface.base'
});
</script>

<div data-panda-theme="steamModern" class={shell}>
	<div class={appShell}>
		<!-- macOS-style chrome bar -->
		<div class={chromeBar}>
			<div class={ctrlArea}>
				<span class={cx(chromeBtn, chromeBtnClose)}></span>
				<span class={cx(chromeBtn, chromeBtnMin)}></span>
				<span class={cx(chromeBtn, chromeBtnMax)}></span>
			</div>
			<div class={chromeTitle}>Steam — Administrator Console [Build 20170823-b]</div>
		</div>

		<!-- Menu bar -->
		<div class={menubar}>
			<div class={steamLogo}>
				<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
					<circle cx="20" cy="20" r="18" fill="#1b2838" stroke="#66c0f4" stroke-width="1.5" />
					<path
						d="M20 8C13.4 8 8 13.4 8 20c0 4.8 2.8 9.0 6.9 11.1l2.6-6.3c-.5-.7-.8-1.5-.8-2.4 0-2.4 1.9-4.3 4.3-4.3s4.3 1.9 4.3 4.3c0 2.4-1.9 4.3-4.3 4.3h-.3l-6.2 2.6c1.9 1.0 4.1 1.6 6.5 1.6 6.6 0 12-5.4 12-12S26.6 8 20 8z"
						fill="#66c0f4"
					/>
					<circle cx="24.5" cy="15.5" r="3.5" fill="#4fa3d4" />
				</svg>
				<span class={steamLogoText}>STEAM</span>
			</div>
			<div class={menuItem}>Steam</div>
			<div class={menuItem}>View</div>
			<div class={menuItem}>Friends</div>
			<div class={menuItem}>Games</div>
			<div class={menuItem}>Admin Tools <span class={menuBadge}>3</span></div>
			<div class={menuItem}>Help</div>
			<div class={menubarRight}>
				<span class={statusDotGreen}></span>
				<div class={adminInfo}>
					<div class={adminAvatar}>VA</div>
					<div>
						<div class={adminName}>ValveAdmin_07</div>
						<div class={adminRole}>▶ SUPER ADMIN</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Nav tabs -->
		<nav class={navTabsBar}>
			{#each navTabs as tab (tab.label)}
				{@const Icon = tab.icon}
				{@const tag = tab.href ? 'a' : 'button'}
				<svelte:element this={tag} {...tab.href ? { href: resolve(tab.href) } : {}} type={tab.href ? null : 'button'} class={cx(navTab, isActive(tab.href) ? navTabActive : '')}>
					<span class={tabIcon}><Icon size={14} /></span>
					{tab.label}
					{#if tab.badge}<span class={tabBadge}></span>{/if}
				</svelte:element>
			{/each}
		</nav>

		<!-- Content area -->
		<div class={contentArea}>
			<!-- Sidebar -->
			<aside class={sidebar}>
				{#each sidebarSections as section (section.title)}
					<div class={sidebarSection}>
						<div class={sidebarSectionHeader}>{section.title}</div>
						{#each section.links as link (link.label)}
							{@const Icon = link.icon}
							{@const tag = link.href ? 'a' : 'button'}
							<svelte:element this={tag} {...link.href ? { href: resolve(link.href) } : {}} type={link.href ? null : 'button'} class={cx(sidebarLink, isActive(link.href) ? sidebarLinkActive : '')}>
								<span class={iconWrap}><Icon size={12} /></span>
								{link.label}
								{#if link.count}
									<span class={cx(countBadge, link.alert ? countAlert : '')}>{link.count}</span>
								{/if}
							</svelte:element>
						{/each}
					</div>
				{/each}
			</aside>

			<!-- Page content -->
			<main class={mainPane}>
				{@render children()}
			</main>
		</div>
	</div>
</div>

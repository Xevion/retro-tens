<script lang="ts">
import { resolve } from '$app/paths';
import { page } from '$app/state';
import type { Pathname } from '$app/types';
import type { IconComponent } from '$lib/icons/types';
import { css, cx } from 'styled-system/css';
import { flex } from 'styled-system/patterns';
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
	Settings
} from 'lucide-svelte';

let { children } = $props();

type SidebarLink = {
	icon: IconComponent;
	label: string;
	href?: Pathname;
	count?: string;
	alert?: boolean;
};
type SidebarSection = { title: string; links: SidebarLink[] };

const sidebarSections: SidebarSection[] = [
	{
		title: 'Overview',
		links: [
			{ icon: LayoutDashboard, label: 'Dashboard', href: '/steam-modern/admin' },
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
			{ icon: Users, label: 'All Users', href: '/steam-modern/admin/users', count: '147M' },
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
			{ icon: Gamepad2, label: 'Apps & Games', href: '/steam-modern/admin/games', count: '68k' },
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
			{ icon: BarChart2, label: 'Analytics', href: '/steam-modern/admin/reports' },
			{ icon: Server, label: 'CDN Status' },
			{ icon: Settings, label: 'Config' }
		]
	}
];

function isActive(href: string | undefined) {
	if (!href) return false;
	if (href === '/steam-modern/admin') return page.url.pathname === '/steam-modern/admin';
	return page.url.pathname.startsWith(href);
}

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

/* sourced: styled after store search sidebar gradient headers */
const sidebarSectionHeader = css({
	padding: '10px 14px 5px',
	fontSize: '10px',
	fontWeight: '700',
	letterSpacing: '0.12em',
	textTransform: 'uppercase',
	color: 'text.disabled',
	borderTop: '1px solid token(colors.divider)',
	background: 'linear-gradient(90deg, rgba(42, 71, 94, 0.4) 0%, transparent 100%)',
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
	textDecoration: 'none',
	_hover: {
		color: 'text.primary',
		background: 'accent.glow'
	}
});

const sidebarLinkActive = css({
	color: 'accent',
	background: 'accent.glowSubtle',
	borderLeftColor: 'token(colors.accent)'
});

const sidebarLinkDisabled = css({
	opacity: '0.5',
	cursor: 'default',
	_hover: {
		color: 'text.secondary',
		background: 'transparent'
	}
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

<div class={contentArea}>
	<aside class={sidebar}>
		{#each sidebarSections as section (section.title)}
			<div class={sidebarSection}>
				<div class={sidebarSectionHeader}>{section.title}</div>
				{#each section.links as link (link.label)}
					{@const Icon = link.icon}
					{@const tag = link.href ? 'a' : 'button'}
					<svelte:element this={tag} {...link.href ? { href: resolve(link.href) } : { 'aria-disabled': 'true' }} type={link.href ? null : 'button'} class={cx(sidebarLink, isActive(link.href) ? sidebarLinkActive : '', !link.href ? sidebarLinkDisabled : '')}>
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

	<main class={mainPane}>
		{@render children()}
	</main>
</div>

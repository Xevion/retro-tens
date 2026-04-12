<script lang="ts">
import { page } from '$app/state';
import { css, cx } from 'styled-system/css';
import { flex, hstack, vstack } from 'styled-system/patterns';
import { token } from 'styled-system/tokens';

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
		dotColor: token('colors.status.ingame')
	},
	{
		initials: 'NX',
		name: 'n3xus_zero',
		status: 'Online',
		bg: '#1a2a5a',
		dotColor: token('colors.status.online')
	},
	{
		initials: 'FX',
		name: 'foxbyte',
		game: 'Team Fortress 2',
		bg: '#4a2a10',
		dotColor: token('colors.status.ingame')
	},
	{
		initials: 'ZP',
		name: 'zipcode',
		status: 'Away',
		bg: '#3a3a10',
		dotColor: token('colors.status.away')
	},
	{
		initials: 'MV',
		name: 'maverick_x',
		status: 'Last on 2 days ago',
		bg: '#2a2a2a',
		dotColor: token('colors.status.offline'),
		statusColor: token('colors.status.offline')
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

const shell = css({
	fontFamily: 'ui',
	fontSize: 'base',
	color: 'text.primary',
	background: 'transparent',
	minHeight: '100vh'
});

const steamClient = vstack({
	gap: '0',
	background: 'surface.root',
	border: '1px solid #444',
	borderRadius: 'DEFAULT',
	overflow: 'hidden',
	userSelect: 'none',
	minWidth: '760px',
	minHeight: '100vh',
	alignItems: 'stretch'
});

const titleBar = css({
	background: 'linear-gradient(to bottom, #2d2d2d, token(colors.surface.root))',
	padding: '5px 8px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	borderBottom: '1px solid token(colors.border)'
});

const titleBarLeft = hstack({ gap: '6px' });

const steamLogoDot = css({
	width: '20px',
	height: '20px',
	background: '#1b9fe4',
	borderRadius: 'full',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	fontSize: '9px',
	fontWeight: 'bold',
	color: '#fff'
});

const titleText = css({
	color: '#888',
	fontSize: 'sm',
	letterSpacing: '0.5px'
});

const winBtns = hstack({ gap: '3px' });

const winBtn = css({
	width: '14px',
	height: '14px',
	borderRadius: 'sm',
	border: 'none',
	cursor: 'pointer',
	fontSize: '9px',
	color: '#aaa',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	background: '#3a3a3a'
});

const winBtnCls = css({ background: '#6b2020' });

const topBar = css({
	background: 'linear-gradient(to bottom, #3c3c3c 0%, #252525 60%, #1e1e1e 100%)',
	display: 'flex',
	alignItems: 'stretch',
	borderBottom: '2px solid token(colors.border)',
	position: 'relative',
	_after: {
		content: '""',
		position: 'absolute',
		bottom: '-1px',
		left: '0',
		right: '0',
		height: '1px',
		background: 'linear-gradient(to right, transparent, token(colors.accent.dim), transparent)',
		opacity: '0.5'
	}
});

const topLeft = css({
	padding: '8px 14px',
	display: 'flex',
	alignItems: 'center',
	borderRight: '1px solid token(colors.border.subtle)'
});

const steamBrand = css({
	fontSize: '20px',
	fontWeight: 'bold',
	color: 'text.primary',
	letterSpacing: '1px',
	textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)'
});

const brandAccent = css({
	color: 'accent',
	fontSize: '12px',
	verticalAlign: 'super'
});

const navTabsContainer = css({
	display: 'flex',
	alignItems: 'flex-end',
	flex: '1',
	padding: '0 6px'
});

const navTabStyle = css({
	padding: '8px 16px 6px',
	color: 'text.secondary',
	fontSize: 'nav',
	fontWeight: 'bold',
	letterSpacing: '0.5px',
	textTransform: 'uppercase',
	cursor: 'pointer',
	borderBottom: '2px solid transparent',
	borderTop: '1px solid transparent',
	borderLeft: '1px solid transparent',
	borderRight: '1px solid transparent',
	borderRadius: 'token(radii) token(radii) 0 0',
	position: 'relative',
	top: '1px',
	transition: 'all 0.1s',
	_hover: {
		color: 'text.primary',
		background: 'rgba(255, 255, 255, 0.05)'
	}
});

const navTabActiveStyle = css({
	color: '#fff',
	background: 'linear-gradient(to bottom, token(colors.accent.deep), #1a3a08)',
	borderColor: 'token(colors.accent.dim) token(colors.accent.dim) #1e1e1e',
	textShadow: '0 1px 3px rgba(0, 0, 0, 0.8)'
});

const userArea = css({
	padding: '6px 14px',
	display: 'flex',
	alignItems: 'center',
	gap: '10px',
	borderLeft: '1px solid token(colors.border.subtle)'
});

const avatar = css({
	width: '28px',
	height: '28px',
	borderRadius: 'sm',
	background: 'linear-gradient(135deg, #4a7010, #2d4a0a)',
	border: '1px solid token(colors.accent)',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	fontSize: 'sm',
	color: 'text.primary'
});

const userInfo = vstack({ gap: '0', alignItems: 'flex-start' });

const username = css({
	color: 'text.primary',
	fontSize: 'sm',
	fontWeight: 'bold'
});

const userStatus = css({
	color: 'accent.link',
	fontSize: 'xs'
});

const friendsBtn = css({
	background: 'rgba(100, 160, 50, 0.2)',
	border: '1px solid token(colors.border.accent)',
	borderRadius: 'sm',
	padding: '3px 8px',
	color: 'accent',
	fontSize: 'xs',
	fontWeight: 'bold',
	cursor: 'pointer'
});

const friendsCount = css({
	color: 'accent.link',
	fontWeight: 'bold'
});

const mainLayout = flex({ flex: '1' });

const contentAreaStyle = css({
	flex: '1',
	background: 'surface.base',
	overflow: 'hidden',
	minWidth: '0'
});

const sidebarStyle = css({
	width: '200px',
	background: 'surface.sidebar',
	borderLeft: '1px solid token(colors.border)',
	display: 'flex',
	flexDirection: 'column',
	flexShrink: '0'
});

const sidebarSectionStyle = css({
	borderBottom: '1px solid token(colors.border)'
});

const sidebarHead = css({
	background: '#222',
	padding: '6px 10px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	borderBottom: '1px solid token(colors.border.subtle)'
});

const sidebarHeadTitle = css({
	color: 'accent',
	fontSize: 'xs',
	fontWeight: 'bold',
	textTransform: 'uppercase',
	letterSpacing: '0.5px'
});

const sidebarHeadCount = css({
	color: 'accent.link',
	fontSize: 'xs',
	fontWeight: 'bold'
});

const friendItem = css({
	padding: '6px 10px',
	display: 'flex',
	alignItems: 'center',
	gap: '7px',
	cursor: 'pointer',
	borderBottom: '1px solid token(colors.border.subtle)',
	transition: 'color 0.1s, background 0.1s',
	_hover: {
		background: '#242424'
	}
});

const friendAvatar = css({
	width: '24px',
	height: '24px',
	borderRadius: 'sm',
	flexShrink: '0',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	fontSize: 'xs',
	fontWeight: 'bold',
	color: '#fff'
});

const friendInfoStyle = css({
	flex: '1',
	minWidth: '0'
});

const friendName = css({
	fontSize: 'sm',
	color: 'text.primary',
	fontWeight: 'bold',
	whiteSpace: 'nowrap',
	overflow: 'hidden',
	textOverflow: 'ellipsis'
});

const friendGame = css({
	fontSize: 'xs',
	color: 'accent.link',
	whiteSpace: 'nowrap',
	overflow: 'hidden',
	textOverflow: 'ellipsis'
});

const friendStatusStyle = css({
	fontSize: 'xs',
	color: 'text.muted'
});

const statusDot = css({
	width: '7px',
	height: '7px',
	borderRadius: 'full',
	flexShrink: '0'
});

const sidebarBtnRow = css({ padding: '6px 10px' });

const viewAllBtn = css({
	background: '#2a4a10',
	border: '1px solid token(colors.border.accent)',
	borderRadius: 'sm',
	padding: '5px 8px',
	width: '100%',
	textAlign: 'center',
	cursor: 'pointer',
	color: 'accent',
	fontSize: 'xs',
	fontWeight: 'bold',
	fontFamily: 'ui',
	transition: 'color 0.1s, background 0.1s',
	_hover: {
		background: '#3a6a18'
	}
});

const newsItem = css({
	padding: '8px 10px',
	borderBottom: '1px solid token(colors.border.subtle)',
	cursor: 'pointer',
	transition: 'color 0.1s, background 0.1s',
	_hover: {
		background: '#242424'
	}
});

const newsDate = css({
	color: 'text.dim',
	fontSize: 'xs',
	marginBottom: '2px'
});

const newsTitle = css({
	fontSize: 'sm',
	color: 'text.primary',
	lineHeight: '1.3'
});

const accountWidget = css({
	padding: '8px 10px',
	background: 'surface.root',
	flex: '1'
});

const accountCard = css({
	background: 'surface.card',
	border: '1px solid #2a4a30',
	borderRadius: 'sm',
	padding: '8px'
});

const accountLabel = css({
	color: 'accent',
	fontSize: 'xs',
	fontWeight: 'bold',
	textTransform: 'uppercase',
	marginBottom: '5px'
});

const accountMeta = css({
	fontSize: 'xs',
	color: 'text.secondary',
	marginBottom: '4px'
});

const accountBalance = css({
	fontSize: '16px',
	fontWeight: 'bold',
	color: 'text.primary',
	marginBottom: '6px'
});

const addFundsBtn = css({
	background: 'accent.dim',
	border: 'none',
	borderRadius: 'sm',
	padding: '4px 8px',
	width: '100%',
	textAlign: 'center',
	cursor: 'pointer',
	color: 'text.primary',
	fontSize: 'xs',
	fontWeight: 'bold',
	fontFamily: 'ui',
	transition: 'color 0.1s, background 0.1s',
	_hover: {
		background: '#5a8a18'
	}
});

const storeFooter = css({
	background: 'surface.footer',
	borderTop: '2px solid token(colors.border)',
	padding: '6px 14px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between'
});

const statusBarStyle = hstack({ gap: '4px' });

const statusIcon = css({
	width: '6px',
	height: '6px',
	borderRadius: 'full',
	background: 'accent'
});

const footerText = css({
	color: 'text.dim',
	fontSize: 'xs'
});

const footerLinks = hstack({ gap: '12px' });

const footerLink = css({
	color: '#4a7a8a',
	fontSize: 'xs',
	cursor: 'pointer',
	transition: 'color 0.1s, background 0.1s',
	_hover: {
		color: 'text.primary'
	}
});
</script>

<div data-panda-theme="steamLegacy" class={shell}>
	<div class={steamClient}>
		<!-- Window title bar -->
		<div class={titleBar}>
			<div class={titleBarLeft}>
				<div class={steamLogoDot}>S</div>
				<span class={titleText}>STEAM</span>
			</div>
			<!-- a11y-exemption: decorative window chrome buttons — 14px matches the 2010 Steam client -->
			<div class={winBtns}>
				<button type="button" class={winBtn} aria-hidden="true" tabindex="-1">—</button>
				<button type="button" class={winBtn} aria-hidden="true" tabindex="-1">□</button>
				<button type="button" class={cx(winBtn, winBtnCls)} aria-hidden="true" tabindex="-1">✕</button>
			</div>
		</div>

		<!-- Top navigation bar -->
		<div class={topBar}>
			<div class={topLeft}>
				<span class={steamBrand}>STEAM<span class={brandAccent}>™</span></span>
			</div>
			<nav class={navTabsContainer}>
				{#each navLinks as link (link.href)}
					<a href={link.href} class={cx(navTabStyle, isActive(link.href) ? navTabActiveStyle : '')}>
						{link.label}
					</a>
				{/each}
			</nav>
			<div class={userArea}>
				<div class={avatar}>XV</div>
				<div class={userInfo}>
					<div class={username}>Xevion</div>
					<div class={userStatus}>Online</div>
				</div>
				<div class={friendsBtn}>Friends <span class={friendsCount}>4</span></div>
			</div>
		</div>

		<!-- Main layout: content + sidebar -->
		<div class={mainLayout}>
			<main class={contentAreaStyle}>
				{@render children()}
			</main>

			<!-- Persistent sidebar -->
			<aside class={sidebarStyle}>
				<div class={sidebarSectionStyle}>
					<div class={sidebarHead}>
						<span class={sidebarHeadTitle}>Friends</span>
						<span class={sidebarHeadCount}>4 online</span>
					</div>
					{#each friends as friend (friend.name)}
						<div class={friendItem}>
							<div class={statusDot} style="background: {friend.dotColor}"></div>
							<div class={friendAvatar} style="background: {friend.bg}">{friend.initials}</div>
							<div class={friendInfoStyle}>
								<div class={friendName}>{friend.name}</div>
								{#if friend.game}
									<div class={friendGame}>{friend.game}</div>
								{:else}
									<div class={friendStatusStyle} style:color={friend.statusColor ?? token('colors.text.muted')}>
										{friend.status}
									</div>
								{/if}
							</div>
						</div>
					{/each}
					<div class={sidebarBtnRow}>
						<button type="button" class={viewAllBtn}>View All Friends</button>
					</div>
				</div>

				<div class={sidebarSectionStyle}>
					<div class={sidebarHead}>
						<span class={sidebarHeadTitle}>Steam News</span>
					</div>
					{#each news as item (item.title)}
						<div class={newsItem}>
							<div class={newsDate}>{item.date}</div>
							<div class={newsTitle}>{item.title}</div>
						</div>
					{/each}
				</div>

				<div class={accountWidget}>
					<div class={accountCard}>
						<div class={accountLabel}>Your Account</div>
						<div class={accountMeta}>Wallet Balance</div>
						<div class={accountBalance}>$23.47</div>
						<button type="button" class={addFundsBtn}>Add Funds</button>
					</div>
				</div>
			</aside>
		</div>

		<!-- Footer -->
		<footer class={storeFooter}>
			<div class={statusBarStyle}>
				<div class={statusIcon}></div>
				<span class={footerText}>Steam connected · VAC Active</span>
			</div>
			<div class={footerLinks}>
				<span class={footerLink}>About Valve</span>
				<span class={footerLink}>Jobs</span>
				<span class={footerLink}>Privacy Policy</span>
				<span class={footerLink}>Legal</span>
				<span class={footerLink}>Steam Subscriber Agreement</span>
			</div>
		</footer>
	</div>
</div>

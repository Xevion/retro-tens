<script lang="ts">
import { resolve } from '$app/paths';
import { page } from '$app/state';
import { css, cx } from 'styled-system/css';
import { vstack } from 'styled-system/patterns';

let { children } = $props();

const isStoreActive = $derived(
	page.url.pathname === '/steam-modern' || page.url.pathname.startsWith('/steam-modern/store')
);

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

const ctrlArea = css({ display: 'flex', gap: '4px' });

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

/* sourced: #store_nav_area .store_nav_bg */
const storeNav = css({
	background:
		'linear-gradient(90deg, rgba(62, 103, 150, 0.919) 11.38%, rgba(58, 120, 177, 0.8) 25.23%, rgb(15, 33, 110) 100%)',
	display: 'flex',
	alignItems: 'center',
	height: '40px',
	padding: '0 24px',
	flexShrink: '0',
	borderBottom: '1px solid rgba(0, 0, 0, 0.3)'
});

const steamLogo = css({
	display: 'flex',
	alignItems: 'center',
	gap: '7px',
	marginRight: '24px',
	flexShrink: '0'
});

const steamLogoText = css({
	fontSize: '15px',
	fontWeight: '700',
	color: 'text.bright',
	letterSpacing: '0.06em',
	textTransform: 'uppercase'
});

const navLinksArea = css({
	display: 'flex',
	alignItems: 'center',
	gap: '0',
	flex: '1'
});

/* sourced: .store_nav .tab > span */
const navLink = css({
	display: 'flex',
	alignItems: 'center',
	padding: '0 12px',
	height: '40px',
	color: '#e5e5e5',
	fontSize: '13px',
	fontWeight: '400',
	textDecoration: 'none',
	cursor: 'pointer',
	transition: 'color 0.15s ease',
	whiteSpace: 'nowrap',
	textTransform: 'uppercase',
	letterSpacing: '0.04em',
	_hover: {
		color: '#ffffff'
	}
});

const navLinkActive = css({
	color: '#ffffff',
	fontWeight: '600',
	background: 'rgba(255, 255, 255, 0.08)'
});

const userArea = css({
	marginLeft: 'auto',
	display: 'flex',
	alignItems: 'center',
	gap: '10px',
	flexShrink: '0'
});

const statusDot = css({
	width: '7px',
	height: '7px',
	borderRadius: 'full',
	background: 'accent.green',
	boxShadow: '0 0 4px token(colors.accent.green)'
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
	fontSize: '12px'
});

const contentArea = css({
	flex: '1',
	overflow: 'hidden'
});
</script>

<svelte:head>
	<link rel="stylesheet" href="/fonts/motiva-sans/motiva-sans.css" />
</svelte:head>

<div data-panda-theme="steamModern" class={shell}>
	<div class={appShell}>
		<!-- macOS-style chrome bar -->
		<div class={chromeBar}>
			<div class={ctrlArea}>
				<span class={cx(chromeBtn, chromeBtnClose)}></span>
				<span class={cx(chromeBtn, chromeBtnMin)}></span>
				<span class={cx(chromeBtn, chromeBtnMax)}></span>
			</div>
			<div class={chromeTitle}>Steam — Client [Build 20180823-b]</div>
		</div>

		<!-- sourced: Steam store top navigation -->
		<nav class={storeNav}>
			<div class={steamLogo}>
				<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20" aria-hidden="true">
					<circle cx="20" cy="20" r="18" fill="#1b2838" stroke="#66c0f4" stroke-width="1.5" />
					<path
						d="M20 8C13.4 8 8 13.4 8 20c0 4.8 2.8 9.0 6.9 11.1l2.6-6.3c-.5-.7-.8-1.5-.8-2.4 0-2.4 1.9-4.3 4.3-4.3s4.3 1.9 4.3 4.3c0 2.4-1.9 4.3-4.3 4.3h-.3l-6.2 2.6c1.9 1.0 4.1 1.6 6.5 1.6 6.6 0 12-5.4 12-12S26.6 8 20 8z"
						fill="#66c0f4"
					/>
					<circle cx="24.5" cy="15.5" r="3.5" fill="#4fa3d4" />
				</svg>
				<span class={steamLogoText}>STEAM</span>
			</div>

			<div class={navLinksArea}>
				<a href={resolve('/steam-modern')} class={cx(navLink, isStoreActive ? navLinkActive : '')}>Store</a>
				<a href={resolve('/steam-modern/community')} class={cx(navLink, page.url.pathname.startsWith('/steam-modern/community') ? navLinkActive : '')}>Community</a>
				<a href={resolve('/steam-modern/admin')} class={cx(navLink, page.url.pathname.startsWith('/steam-modern/admin') ? navLinkActive : '')}>Admin</a>
			</div>

			<div class={userArea}>
				<span class={statusDot}></span>
				<div class={adminAvatar}>VA</div>
				<span class={adminName}>ValveAdmin_07</span>
			</div>
		</nav>

		<!-- Content area — inner layouts handle their own chrome -->
		<div class={contentArea}>
			{@render children()}
		</div>
	</div>
</div>

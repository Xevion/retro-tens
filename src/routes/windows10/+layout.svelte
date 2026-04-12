<script lang="ts">
import { page } from '$app/state';
import { Search, Wifi, Battery } from 'lucide-svelte';
import { css, cx } from 'styled-system/css';
import { hstack, vstack } from 'styled-system/patterns';

let { children } = $props();

let time = $state('');
let date = $state('');

function updateClock() {
	const now = new Date();
	let h = now.getHours(),
		m = now.getMinutes(),
		ampm = h >= 12 ? 'PM' : 'AM';
	h = h % 12 || 12;
	time = `${h}:${String(m).padStart(2, '0')} ${ampm}`;
	date = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;
}

$effect(() => {
	updateClock();
	const interval = setInterval(updateClock, 10000);
	return () => clearInterval(interval);
});

const shell = css({
	fontFamily: 'ui',
	fontSize: 'base',
	color: 'text.primary',
	minHeight: '100vh'
});

const desktopShell = vstack({
	gap: '0',
	minHeight: '100vh',
	position: 'relative',
	alignItems: 'stretch'
});

const desktopArea = css({
	flex: '1',
	position: 'relative',
	overflow: 'hidden'
});

const desktopBg = css({
	position: 'absolute',
	inset: '0',
	background: 'linear-gradient(135deg, #1a6eb0 0%, #2d7ab8 40%, #0f4e8a 100%)',
	zIndex: '0'
});

const desktopContent = css({
	position: 'relative',
	zIndex: '1',
	height: '100%',
	display: 'flex',
	alignItems: 'flex-start',
	justifyContent: 'flex-end'
});

const taskbar = css({
	background: 'surface.taskbar',
	height: 'taskbarHeight',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: '0 10px 0 4px',
	flexShrink: '0',
	backdropFilter: 'blur(20px)',
	zIndex: '10'
});

const taskbarLeft = hstack({ gap: '0' });

const startBtn = css({
	width: '48px',
	height: 'taskbarHeight',
	background: 'none',
	border: 'none',
	cursor: 'pointer',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: 'rgba(255, 255, 255, 0.9)',
	transition: 'background token(durations.fast) ease',
	_hover: { background: 'rgba(255, 255, 255, 0.12)' }
});

const taskbarSearch = css({
	height: 'taskbarHeight',
	padding: '0 10px',
	display: 'flex',
	alignItems: 'center',
	gap: '6px',
	color: 'rgba(255, 255, 255, 0.5)',
	fontSize: 'md',
	border: '1px solid rgba(255, 255, 255, 0.12)',
	cursor: 'text',
	minWidth: '180px'
});

const taskbarIcon = css({
	width: '44px',
	height: 'taskbarHeight',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	cursor: 'pointer',
	color: 'rgba(255, 255, 255, 0.75)',
	transition: 'background token(durations.fast) ease',
	_hover: { background: 'rgba(255, 255, 255, 0.1)' }
});

const taskbarIconActive = css({
	color: '#fff',
	boxShadow: '0 -2px 0 token(colors.accent) inset'
});

const taskbarRight = css({
	display: 'flex',
	alignItems: 'center',
	height: 'taskbarHeight'
});

const sysTray = css({
	display: 'flex',
	alignItems: 'center',
	padding: '0 8px',
	gap: '8px',
	height: '100%',
	color: 'rgba(255, 255, 255, 0.85)',
	cursor: 'default'
});

const trayIcons = hstack({ gap: '6px' });

const clock = css({
	textAlign: 'right',
	lineHeight: '1.3',
	padding: '0 6px'
});

const clockTime = css({
	fontSize: 'md',
	color: 'rgba(255, 255, 255, 0.9)'
});

const clockDate = css({
	fontSize: 'sm',
	color: 'rgba(255, 255, 255, 0.7)'
});

const notifBtn = css({
	width: '44px',
	height: 'taskbarHeight',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	cursor: 'pointer',
	background: 'none',
	color: '#fff',
	position: 'relative',
	transition: 'background token(durations.fast) ease',
	_hover: { background: 'rgba(255, 255, 255, 0.1)' }
});

const notifBtnLit = css({
	background: 'rgba(0, 120, 215, 0.3)'
});

const notifBadge = css({
	position: 'absolute',
	top: '6px',
	right: '6px',
	width: '14px',
	height: '14px',
	background: 'accent',
	borderRadius: 'full',
	fontSize: '9px',
	color: '#fff',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	fontWeight: '600'
});
</script>

<div data-panda-theme="windows10" class={shell}>
	<div class={desktopShell}>
		<!-- Desktop background + page content -->
		<div class={desktopArea}>
			<div class={desktopBg}></div>
			<main class={desktopContent}>
				{@render children()}
			</main>
		</div>

		<!-- Taskbar -->
		<div class={taskbar}>
			<div class={taskbarLeft}>
				<!-- Start button -->
				<a href="/windows10" class={startBtn} title="Start">
					<svg width="17" height="17" viewBox="0 0 17 17" fill="none">
						<rect x="0" y="0" width="8" height="8" fill="#F25022" />
						<rect x="9" y="0" width="8" height="8" fill="#7FBA00" />
						<rect x="0" y="9" width="8" height="8" fill="#00A4EF" />
						<rect x="9" y="9" width="8" height="8" fill="#FFB900" />
					</svg>
				</a>

				<!-- Search box -->
				<div class={taskbarSearch} title="Search Windows">
					<Search size={13} color="rgba(255,255,255,0.45)" strokeWidth={1.3} />
					<span>Search Windows</span>
				</div>

				<!-- Pinned apps -->
				<a
					href="/windows10/action-center"
					class={cx(taskbarIcon, page.url.pathname.startsWith('/windows10/action-center') ? taskbarIconActive : '')}
					title="Action Center"
				>
					<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
						<rect x="2" y="2" width="14" height="10" rx="1" stroke="currentColor" stroke-width="1.2" fill="none" />
						<path d="M2 5h14" stroke="currentColor" stroke-width="0.9" opacity="0.6" />
						<path d="M6 15h6" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" />
						<path d="M9 12v3" stroke="currentColor" stroke-width="1.1" />
					</svg>
				</a>
				<a
					href="/windows10/resume-builder"
					class={cx(taskbarIcon, page.url.pathname.startsWith('/windows10/resume-builder') ? taskbarIconActive : '')}
					title="Resume Builder"
				>
					<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
						<path d="M2 5h7l1 2h6v8H2V5z" fill="#FFB900" />
						<path d="M2 5h7l1 2h6v1H2z" fill="rgba(0,0,0,0.15)" />
					</svg>
				</a>
			</div>

			<div class={taskbarRight}>
				<!-- System tray -->
				<div class={sysTray}>
					<div class={trayIcons}>
						<Wifi size={14} color="rgba(255,255,255,0.7)" strokeWidth={1.3} />
						<Battery size={14} color="rgba(255,255,255,0.7)" strokeWidth={1.3} />
					</div>
					<!-- Clock -->
					<div class={clock}>
						<div class={clockTime}>{time}</div>
						<div class={clockDate}>{date}</div>
					</div>
				</div>

				<!-- Notification button -->
				<a
					href="/windows10/action-center"
					class={cx(notifBtn, page.url.pathname.startsWith('/windows10/action-center') ? notifBtnLit : '')}
					title="Action Center"
				>
					<svg width="15" height="15" viewBox="0 0 15 15" fill="none">
						<rect x="2" y="2" width="11" height="8" rx="1" stroke="#fff" stroke-width="1.2" fill="none" />
						<path d="M5 13h5" stroke="#fff" stroke-width="1.1" stroke-linecap="round" />
						<path d="M7.5 10v3" stroke="#fff" stroke-width="1.1" />
					</svg>
					<div class={notifBadge}>4</div>
				</a>
			</div>
		</div>
	</div>
</div>

<script lang="ts">
import '$lib/themes/windows10/tokens.css';
import { page } from '$app/state';
import { Search, Wifi, Battery } from 'lucide-svelte';

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
</script>

<div class="theme-windows10">
	<div class="desktop-shell">
		<!-- Desktop background + page content -->
		<div class="desktop-area">
			<div class="desktop-bg"></div>
			<div class="desktop-content">
				{@render children()}
			</div>
		</div>

		<!-- Taskbar -->
		<div class="taskbar">
			<div class="taskbar-left">
				<!-- Start button -->
				<a href="/windows10" class="start-btn" title="Start">
					<svg width="17" height="17" viewBox="0 0 17 17" fill="none">
						<rect x="0" y="0" width="8" height="8" fill="#F25022" />
						<rect x="9" y="0" width="8" height="8" fill="#7FBA00" />
						<rect x="0" y="9" width="8" height="8" fill="#00A4EF" />
						<rect x="9" y="9" width="8" height="8" fill="#FFB900" />
					</svg>
				</a>

				<!-- Search box -->
				<div class="taskbar-search" title="Search Windows">
					<Search size={13} color="rgba(255,255,255,0.45)" strokeWidth={1.3} />
					<span>Search Windows</span>
				</div>

				<!-- Pinned apps -->
				<a
					href="/windows10/action-center"
					class="taskbar-icon"
					class:active={page.url.pathname.startsWith('/windows10/action-center')}
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
					class="taskbar-icon"
					class:active={page.url.pathname.startsWith('/windows10/resume-builder')}
					title="Resume Builder"
				>
					<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
						<path d="M2 5h7l1 2h6v8H2V5z" fill="#FFB900" />
						<path d="M2 5h7l1 2h6v1H2z" fill="rgba(0,0,0,0.15)" />
					</svg>
				</a>
			</div>

			<div class="taskbar-right">
				<!-- System tray -->
				<div class="sys-tray">
					<div class="tray-icons">
						<Wifi size={14} color="rgba(255,255,255,0.7)" strokeWidth={1.3} />
						<Battery size={14} color="rgba(255,255,255,0.7)" strokeWidth={1.3} />
					</div>
					<!-- Clock -->
					<div class="clock">
						<div class="clock-time">{time}</div>
						<div class="clock-date">{date}</div>
					</div>
				</div>

				<!-- Notification button -->
				<a href="/windows10/action-center" class="notif-btn" title="Action Center" class:lit={page.url.pathname.startsWith('/windows10/action-center')}>
					<svg width="15" height="15" viewBox="0 0 15 15" fill="none">
						<rect x="2" y="2" width="11" height="8" rx="1" stroke="#fff" stroke-width="1.2" fill="none" />
						<path d="M5 13h5" stroke="#fff" stroke-width="1.1" stroke-linecap="round" />
						<path d="M7.5 10v3" stroke="#fff" stroke-width="1.1" />
					</svg>
					<div class="notif-badge">4</div>
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	.theme-windows10 {
		font-family: var(--font-ui);
		font-size: var(--font-size-base);
		color: var(--text-primary);
		min-height: 100vh;
	}

	.desktop-shell {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		position: relative;
	}

	.desktop-area {
		flex: 1;
		position: relative;
		overflow: hidden;
	}

	.desktop-bg {
		position: absolute;
		inset: 0;
		background: var(--desktop-bg-grad);
		z-index: 0;
	}

	.desktop-content {
		position: relative;
		z-index: 1;
		height: 100%;
		display: flex;
		align-items: flex-start;
		justify-content: flex-end;
	}

	/* Taskbar */
	.taskbar {
		background: var(--surface-taskbar);
		height: var(--taskbar-height);
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 10px 0 4px;
		flex-shrink: 0;
		backdrop-filter: blur(20px);
		z-index: 10;
	}

	.taskbar-left { display: flex; align-items: center; gap: 0; }

	.start-btn {
		width: 48px;
		height: var(--taskbar-height);
		background: none;
		border: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		color: rgba(255, 255, 255, 0.9);
		transition: background var(--transition-fast);
	}
	.start-btn:hover { background: rgba(255, 255, 255, 0.12); }

	.taskbar-search {
		height: var(--taskbar-height);
		padding: 0 10px;
		display: flex;
		align-items: center;
		gap: 6px;
		color: rgba(255, 255, 255, 0.5);
		font-size: var(--font-size-md);
		border: 1px solid rgba(255, 255, 255, 0.12);
		cursor: text;
		min-width: 180px;
	}

	.taskbar-icon {
		width: 44px;
		height: var(--taskbar-height);
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		color: rgba(255, 255, 255, 0.75);
		transition: background var(--transition-fast);
	}
	.taskbar-icon:hover { background: rgba(255, 255, 255, 0.1); }
	.taskbar-icon.active {
		color: #fff;
		box-shadow: inset 0 -2px 0 var(--accent);
	}

	.taskbar-right { display: flex; align-items: center; height: var(--taskbar-height); }

	.sys-tray {
		display: flex;
		align-items: center;
		padding: 0 8px;
		gap: 8px;
		height: 100%;
		color: rgba(255, 255, 255, 0.85);
		cursor: default;
	}
	.tray-icons { display: flex; align-items: center; gap: 6px; }

	.clock { text-align: right; line-height: 1.3; padding: 0 6px; }
	.clock-time { font-size: var(--font-size-md); color: rgba(255, 255, 255, 0.9); }
	.clock-date { font-size: var(--font-size-sm); color: rgba(255, 255, 255, 0.7); }

	.notif-btn {
		width: 44px;
		height: var(--taskbar-height);
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		background: none;
		color: #fff;
		position: relative;
		transition: background var(--transition-fast);
	}
	.notif-btn:hover { background: rgba(255, 255, 255, 0.1); }
	.notif-btn.lit { background: rgba(0, 120, 215, 0.3); }
	.notif-badge {
		position: absolute;
		top: 6px;
		right: 6px;
		width: 14px;
		height: 14px;
		background: var(--accent);
		border-radius: 50%;
		font-size: 9px;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 600;
	}
</style>

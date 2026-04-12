<script lang="ts">
	const apps = [
		{
			name: 'Action Center',
			href: '/windows10/action-center',
			icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="4" y="5" width="32" height="22" rx="2" stroke="#d8e3f0" stroke-width="1.5" fill="none"/><path d="M4 10h32" stroke="#4a90d9" stroke-width="1.5"/><circle cx="8" cy="7.5" r="1.5" fill="#fff" opacity="0.7"/><circle cx="13" cy="7.5" r="1.5" fill="#fff" opacity="0.7"/><path d="M13 35h14" stroke="#b0c2d8" stroke-width="1.5" stroke-linecap="round"/><path d="M20 27v8" stroke="#b0c2d8" stroke-width="1.5"/><rect x="8" y="15" width="24" height="1.5" rx="0.5" fill="#8fa8c0" opacity="0.8"/><rect x="8" y="19" width="18" height="1.5" rx="0.5" fill="#8fa8c0" opacity="0.8"/><rect x="8" y="23" width="20" height="1.5" rx="0.5" fill="#8fa8c0" opacity="0.6"/></svg>`,
		},
		{
			name: 'Resume Builder',
			href: '/windows10/resume-builder',
			icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M6 5h28v30H6z" fill="#d8e3f0" stroke="#b0c2d8" stroke-width="1"/><path d="M6 5h28v6H6z" fill="#0078D7"/><rect x="10" y="14" width="20" height="1.5" rx="0.5" fill="#8fa8c0"/><rect x="10" y="18" width="15" height="1.5" rx="0.5" fill="#8fa8c0"/><rect x="10" y="22" width="18" height="1.5" rx="0.5" fill="#8fa8c0"/><rect x="10" y="26" width="12" height="1.5" rx="0.5" fill="#8fa8c0"/></svg>`,
		},
	];
</script>

<!-- Desktop icons -->
<div class="desktop-icons">
	<!-- This PC icon -->
	<div class="desktop-icon">
		<svg width="40" height="40" viewBox="0 0 40 40">
			<rect x="4" y="4" width="15" height="15" fill="#F25022" />
			<rect x="21" y="4" width="15" height="15" fill="#7FBA00" />
			<rect x="4" y="21" width="15" height="15" fill="#00A4EF" />
			<rect x="21" y="21" width="15" height="15" fill="#FFB900" />
		</svg>
		<span>This PC</span>
	</div>

	<div class="desktop-icon">
		<svg width="40" height="40" viewBox="0 0 40 40">
			<path d="M6 8h28v22H6z" fill="#d8e3f0" stroke="#b0c2d8" stroke-width="1" />
			<path d="M6 8h28v4H6z" fill="#4a90d9" />
			<circle cx="9" cy="10" r="1.5" fill="#fff" opacity="0.7" />
			<circle cx="13" cy="10" r="1.5" fill="#fff" opacity="0.7" />
			<rect x="9" y="15" width="22" height="1.5" rx="0.5" fill="#8fa8c0" opacity="0.8" />
			<rect x="9" y="19" width="16" height="1.5" rx="0.5" fill="#8fa8c0" opacity="0.8" />
			<rect x="9" y="23" width="19" height="1.5" rx="0.5" fill="#8fa8c0" opacity="0.8" />
		</svg>
		<span>Recycle Bin</span>
	</div>
</div>

<!-- App launcher cards -->
<div class="app-launcher">
	<div class="launcher-title">Open an App</div>
	<div class="launcher-grid">
		{#each apps as app}
			<a href={app.href} class="app-tile">
				<div class="app-tile-icon">{@html app.icon}</div>
				<div class="app-tile-name">{app.name}</div>
			</a>
		{/each}
	</div>
</div>

<style>
	.desktop-icons {
		position: absolute;
		top: 0;
		left: 0;
		padding: 24px 18px;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.desktop-icon {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 72px;
		gap: 5px;
		cursor: pointer;
		padding: 6px 4px;
		border-radius: var(--radius);
		transition: background var(--transition);
	}
	.desktop-icon:hover { background: rgba(255, 255, 255, 0.18); }
	.desktop-icon span {
		font-size: 11.5px;
		color: #fff;
		text-align: center;
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
		line-height: 1.3;
	}

	.app-launcher {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: rgba(255, 255, 255, 0.12);
		backdrop-filter: blur(12px);
		border: 1px solid rgba(255, 255, 255, 0.2);
		padding: 24px 28px;
		border-radius: var(--radius);
		text-align: center;
	}
	.launcher-title {
		font-size: 13px;
		color: rgba(255, 255, 255, 0.7);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-bottom: 16px;
		font-weight: 600;
	}
	.launcher-grid {
		display: flex;
		gap: 16px;
	}
	.app-tile {
		width: 120px;
		background: rgba(255, 255, 255, 0.15);
		border: 1px solid rgba(255, 255, 255, 0.2);
		padding: 16px 12px;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		transition: background var(--transition);
		border-radius: var(--radius);
	}
	.app-tile:hover { background: rgba(255, 255, 255, 0.25); }
	.app-tile-name { font-size: 12px; color: #fff; text-align: center; font-weight: 500; line-height: 1.3; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5); }
</style>

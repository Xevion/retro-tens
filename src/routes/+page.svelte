<script lang="ts">
const themes = [
	{
		id: 'steam-legacy',
		name: 'Steam',
		era: '2010 – 2013',
		description:
			'The dark olive-green era. Compact pixel density, green accent, gradients everywhere, and zero animations.',
		font: 'Arial',
		accent: '#75b022',
		bg: '#1b2426',
		text: '#c6d4df',
		routes: [
			{ label: 'Store', href: '/steam-legacy' },
			{ label: 'Library', href: '/steam-legacy/library' },
			{ label: 'Community', href: '/steam-legacy/community' }
		]
	},
	{
		id: 'steam-modern',
		name: 'Steam Admin',
		era: '2018 – 2023',
		description:
			'Deep navy blue with Source Sans 3. CSS custom properties, glow effects, and a dense data-heavy admin console.',
		font: 'Source Sans 3',
		accent: '#66c0f4',
		bg: '#1b2838',
		text: '#c7d5e0',
		routes: [
			{ label: 'Dashboard', href: '/steam-modern' },
			{ label: 'Users', href: '/steam-modern/users' },
			{ label: 'Games', href: '/steam-modern/games' },
			{ label: 'Reports', href: '/steam-modern/reports' }
		]
	},
	{
		id: 'windows10',
		name: 'Windows 10',
		era: '2015 – 2021',
		description:
			'Fluent Design lite. Light panels, #0078D7 blue, sharp corners everywhere, and Segoe UI.',
		font: 'Segoe UI',
		accent: '#0078d7',
		bg: '#f2f2f2',
		text: '#1a1a1a',
		routes: [
			{ label: 'Desktop', href: '/windows10' },
			{ label: 'Action Center', href: '/windows10/action-center' },
			{ label: 'Resume Builder', href: '/windows10/resume-builder' }
		]
	}
];
</script>

<svelte:head>
	<title>retro-tens — retro design playground</title>
</svelte:head>

<div class="page">
	<header class="site-header">
		<div class="header-inner">
			<div class="logo">retro-tens</div>
			<div class="tagline">A retro UI design playground · Three eras, three systems</div>
		</div>
	</header>

	<main class="themes-grid">
		{#each themes as theme (theme.id)}
			<div class="theme-card" style="--card-accent:{theme.accent}">
				<div class="card-preview">
					{#if theme.id === 'steam-legacy'}
						<div class="preview-steam-legacy">
							<div class="psl-titlebar">
								<div class="psl-dot"></div>
								<span>STEAM</span>
								<div class="psl-winbtns"><span></span><span></span><span class="red"></span></div>
							</div>
							<div class="psl-topbar">
								<span class="psl-brand">STEAM</span>
								<div class="psl-tabs">
									<span class="active">Store</span>
									<span>Library</span>
									<span>Community</span>
								</div>
							</div>
							<div class="psl-body">
								<div class="psl-content">
									<div class="psl-featured"></div>
									<div class="psl-grid">
										{#each Array(8) as _, i (i)}
											<div class="psl-tile"></div>
										{/each}
									</div>
								</div>
								<div class="psl-sidebar">
									{#each Array(4) as _, i (i)}
										<div class="psl-friend"></div>
									{/each}
								</div>
							</div>
						</div>
					{:else if theme.id === 'steam-modern'}
						<div class="preview-steam-modern">
							<div class="psm-chrome">
								<span class="psm-dot red"></span>
								<span class="psm-dot yellow"></span>
								<span class="psm-dot green"></span>
								<span class="psm-title">Steam — Administrator Console</span>
							</div>
							<div class="psm-menubar"></div>
							<div class="psm-navtabs">
								{#each ['Dashboard','Users','Games','Reports'] as t, i (t)}
									<span class:active={i===0}>{t}</span>
								{/each}
							</div>
							<div class="psm-body">
								<div class="psm-sidebar">
									{#each Array(6) as _, i (i)}
										<div class="psm-link"></div>
									{/each}
								</div>
								<div class="psm-main">
									<div class="psm-stats">
										{#each Array(4) as _, i (i)}
											<div class="psm-stat"></div>
										{/each}
									</div>
									<div class="psm-panels">
										<div class="psm-panel"></div>
										<div class="psm-panel"></div>
									</div>
								</div>
							</div>
						</div>
					{:else}
						<div class="preview-windows10">
							<div class="pw10-desktop">
								<div class="pw10-icons">
									<div class="pw10-icon"></div>
									<div class="pw10-icon"></div>
								</div>
								<div class="pw10-panel">
									<div class="pw10-panel-header"></div>
									<div class="pw10-notifs">
										{#each Array(3) as _, i (i)}
											<div class="pw10-notif"></div>
										{/each}
									</div>
									<div class="pw10-qa">
										{#each Array(8) as _, i (i)}
											<div class="pw10-tile"></div>
										{/each}
									</div>
								</div>
							</div>
							<div class="pw10-taskbar"></div>
						</div>
					{/if}
				</div>

				<div class="card-body">
					<div class="card-title-row">
						<span class="card-name">{theme.name}</span>
						<span class="card-era">{theme.era}</span>
					</div>
					<p class="card-desc">{theme.description}</p>
					<div class="card-meta">
						<span class="meta-pill">Font: {theme.font}</span>
					</div>
					<div class="card-links">
						{#each theme.routes as route (route.href)}
							<a href={route.href} class="route-link">{route.label} →</a>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</main>

	<footer class="site-footer">
		retro-tens · SvelteKit + Bits UI · CSS Custom Properties
	</footer>
</div>

<style>
	:global(body) {
		background: #111;
	}

	.page {
		min-height: 100vh;
		background: #111;
		color: #e0e0e0;
		font-family: 'Courier New', Courier, monospace;
	}

	.site-header {
		border-bottom: 1px solid #2a2a2a;
		padding: 32px 0 28px;
	}
	.header-inner {
		max-width: 1100px;
		margin: 0 auto;
		padding: 0 32px;
	}
	.logo {
		font-size: 28px;
		font-weight: bold;
		letter-spacing: -0.02em;
		color: #fff;
		margin-bottom: 6px;
	}
	.tagline {
		font-size: 13px;
		color: #666;
		letter-spacing: 0.02em;
	}

	.themes-grid {
		max-width: 1100px;
		margin: 48px auto;
		padding: 0 32px;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 24px;
	}

	.theme-card {
		border: 1px solid #2a2a2a;
		background: #161616;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		transition: border-color 0.15s;
	}
	.theme-card:hover {
		border-color: var(--card-accent);
	}

	.card-preview {
		height: 160px;
		overflow: hidden;
		flex-shrink: 0;
	}

	.card-body {
		padding: 18px 20px 20px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.card-title-row {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
	}
	.card-name {
		font-size: 16px;
		font-weight: bold;
		color: #fff;
		letter-spacing: -0.01em;
	}
	.card-era {
		font-size: 11px;
		color: #555;
		letter-spacing: 0.05em;
	}
	.card-desc {
		font-size: 12px;
		color: #888;
		line-height: 1.6;
		font-family: system-ui, sans-serif;
	}
	.card-meta { display: flex; gap: 6px; }
	.meta-pill {
		font-size: 10px;
		background: #1e1e1e;
		border: 1px solid #333;
		padding: 2px 8px;
		color: #666;
		letter-spacing: 0.04em;
	}
	.card-links {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		margin-top: 4px;
	}
	.route-link {
		font-size: 11px;
		border: 1px solid var(--card-accent);
		color: var(--card-accent);
		padding: 3px 10px;
		cursor: pointer;
		transition: background 0.12s, color 0.12s;
		font-family: system-ui, sans-serif;
		letter-spacing: 0.02em;
	}
	.route-link:hover {
		background: var(--card-accent);
		color: #000;
	}

	.site-footer {
		border-top: 1px solid #2a2a2a;
		padding: 20px 32px;
		text-align: center;
		font-size: 11px;
		color: #444;
		letter-spacing: 0.05em;
	}

	/* Steam Legacy mini-preview */
	.preview-steam-legacy {
		width: 100%; height: 160px;
		background: #1a1a1a;
		display: flex; flex-direction: column;
		font-family: Arial, sans-serif; font-size: 7px;
		overflow: hidden;
	}
	.psl-titlebar { background: linear-gradient(to bottom,#2d2d2d,#1a1a1a); padding: 2px 4px; display:flex; align-items:center; gap:3px; border-bottom:1px solid #0d0d0d; }
	.psl-dot { width:8px; height:8px; background:#1b9fe4; border-radius:50%; }
	.psl-titlebar span { color:#888; flex:1; }
	.psl-winbtns { display:flex; gap:2px; }
	.psl-winbtns span { width:6px; height:6px; border-radius:1px; background:#3a3a3a; }
	.psl-winbtns span.red { background:#6b2020; }
	.psl-topbar { background:linear-gradient(to bottom,#3c3c3c,#1e1e1e); padding:3px 6px; display:flex; align-items:center; gap:6px; border-bottom:2px solid #0d0d0d; }
	.psl-brand { color:#c6d4df; font-weight:bold; font-size:8px; }
	.psl-tabs { display:flex; gap:3px; }
	.psl-tabs span { color:#8f98a0; padding:2px 5px; font-size:6px; font-weight:bold; text-transform:uppercase; }
	.psl-tabs span.active { color:#fff; background:linear-gradient(to bottom,#3d5a1f,#1a3a08); }
	.psl-body { display:flex; flex:1; overflow:hidden; }
	.psl-content { flex:1; background:#1b2426; }
	.psl-featured { height:40px; background:linear-gradient(135deg,#0d1b0a,#1a3a0f); }
	.psl-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:1px; background:#0d0d0d; padding:1px; }
	.psl-tile { height:20px; background:#1e2d2f; }
	.psl-sidebar { width:36px; background:#1e1e1e; border-left:1px solid #0d0d0d; display:flex; flex-direction:column; gap:1px; padding:3px 2px; }
	.psl-friend { height:8px; background:#222; border-radius:1px; }

	/* Steam Modern mini-preview */
	.preview-steam-modern {
		width:100%; height:160px;
		background:#0e1219;
		display:flex; flex-direction:column;
		font-family:Arial,sans-serif; font-size:7px;
		overflow:hidden;
	}
	.psm-chrome { height:14px; background:#101318; display:flex; align-items:center; padding:0 5px; gap:3px; border-bottom:1px solid #0a0f16; }
	.psm-dot { width:6px; height:6px; border-radius:50%; }
	.psm-dot.red { background:#c94040; }
	.psm-dot.yellow { background:#d5a51b; }
	.psm-dot.green { background:#4fa832; }
	.psm-title { flex:1; text-align:center; color:#556b7d; font-size:6px; }
	.psm-menubar { height:14px; background:linear-gradient(180deg,#2a3f54,#1b2838); border-bottom:1px solid #1a2d40; }
	.psm-navtabs { height:16px; background:linear-gradient(180deg,#1d2d3e,#162030); display:flex; align-items:center; border-bottom:1px solid #0e1219; }
	.psm-navtabs span { padding:0 6px; color:#8ba3b7; font-size:6px; font-weight:bold; text-transform:uppercase; height:100%; display:flex; align-items:center; border-bottom:1px solid transparent; margin-bottom:-1px; }
	.psm-navtabs span.active { color:#66c0f4; border-bottom-color:#66c0f4; }
	.psm-body { display:flex; flex:1; overflow:hidden; }
	.psm-sidebar { width:32px; background:#15202e; border-right:1px solid #1a2d40; display:flex; flex-direction:column; gap:2px; padding:4px 3px; }
	.psm-link { height:5px; background:#1b2838; border-radius:1px; }
	.psm-main { flex:1; background:#171a21; display:flex; flex-direction:column; }
	.psm-stats { display:grid; grid-template-columns:repeat(4,1fr); gap:1px; background:#1a2d40; }
	.psm-stat { height:24px; background:#1b2838; }
	.psm-panels { display:grid; grid-template-columns:1fr 1fr; gap:4px; padding:4px; flex:1; }
	.psm-panel { background:#1b2838; border:1px solid #2a475e; border-radius:1px; }

	/* Windows 10 mini-preview */
	.preview-windows10 {
		width:100%; height:160px;
		display:flex; flex-direction:column;
		overflow:hidden;
	}
	.pw10-desktop { flex:1; background:linear-gradient(135deg,#1a6eb0,#2d7ab8,#0f4e8a); position:relative; display:flex; justify-content:flex-end; }
	.pw10-icons { position:absolute; left:5px; top:5px; display:flex; flex-direction:column; gap:4px; }
	.pw10-icon { width:18px; height:18px; background:rgba(255,255,255,0.15); border-radius:1px; }
	.pw10-panel { width:68px; background:rgba(242,242,242,0.97); border-left:1px solid rgba(0,0,0,0.12); display:flex; flex-direction:column; overflow:hidden; }
	.pw10-panel-header { height:14px; border-bottom:1px solid rgba(0,0,0,0.08); background:#fff; }
	.pw10-notifs { flex:1; padding:2px 3px; display:flex; flex-direction:column; gap:2px; }
	.pw10-notif { height:14px; background:#fff; border:1px solid rgba(0,0,0,0.08); }
	.pw10-qa { display:grid; grid-template-columns:repeat(4,1fr); gap:2px; padding:3px; background:rgba(235,235,235,0.8); border-top:1px solid rgba(0,0,0,0.1); }
	.pw10-tile { height:12px; background:rgba(0,0,0,0.07); }
	.pw10-taskbar { height:16px; background:rgba(0,0,0,0.78); }
</style>

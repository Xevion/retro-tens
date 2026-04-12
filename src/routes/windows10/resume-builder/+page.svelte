<script lang="ts">
	const sectionNames = ['Personal Information', 'Work Experience', 'Education', 'Skills & Technologies', 'Projects & Portfolio'];
	let currentSection = $state(0);
	let previewOpen = $state(false);
	let activeRibbonTab = $state('form');

	// Form data
	let fname = $state('');
	let lname = $state('');
	let jobTitle = $state('');
	let location = $state('');
	let email = $state('');
	let phone = $state('');
	let summary = $state('');

	const progress = $derived(Math.round(((currentSection + 1) / sectionNames.length) * 100));

	const skills = $state([
		{ name: 'Programming', val: 4 },
		{ name: 'Problem Solving', val: 5 },
		{ name: 'Communication', val: 3 },
		{ name: 'System Design', val: 4 },
		{ name: 'Collaboration', val: 4 },
	]);

	function setRating(si: number, val: number) {
		skills[si].val = val;
	}

	function navigate(dir: number) {
		const next = currentSection + dir;
		if (next >= 0 && next < sectionNames.length) currentSection = next;
	}

	function goToSection(idx: number) {
		currentSection = idx;
	}
</script>

<!-- App window -->
<div class="app-window">
	<!-- Title bar -->
	<div class="title-bar">
		<div class="title-bar-left">
			<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
				<rect x="1" y="2" width="14" height="10" rx="0.8" stroke="#fff" stroke-width="1.1" fill="none" />
				<path d="M1 5h14" stroke="#fff" stroke-width="0.9" opacity="0.6" />
				<path d="M5 14h6" stroke="#fff" stroke-width="1.1" stroke-linecap="round" />
				<path d="M8 12v2" stroke="#fff" stroke-width="1.1" />
			</svg>
			<span class="title-text">Resume Builder — Microsoft Office Style</span>
		</div>
		<div class="title-controls">
			<button class="tb-btn" aria-label="Minimize">
				<svg width="10" height="1" viewBox="0 0 10 1"><line x1="0" y1="0.5" x2="10" y2="0.5" stroke="#fff" stroke-width="1.2" /></svg>
			</button>
			<button class="tb-btn" aria-label="Maximize">
				<svg width="10" height="10" viewBox="0 0 10 10"><rect x="0.6" y="0.6" width="8.8" height="8.8" stroke="#fff" stroke-width="1.1" fill="none" /></svg>
			</button>
			<button class="tb-btn close-btn" aria-label="Close">
				<svg width="10" height="10" viewBox="0 0 10 10"><line x1="0" y1="0" x2="10" y2="10" stroke="#fff" stroke-width="1.3" /><line x1="10" y1="0" x2="0" y2="10" stroke="#fff" stroke-width="1.3" /></svg>
			</button>
		</div>
	</div>

	<!-- Ribbon -->
	<div class="ribbon">
		<button class="ribbon-tab" class:active={activeRibbonTab === 'form'} onclick={() => { activeRibbonTab = 'form'; previewOpen = false; }}>
			FORM VIEW
		</button>
		<button class="ribbon-tab" class:active={activeRibbonTab === 'preview'} onclick={() => { activeRibbonTab = 'preview'; previewOpen = true; }}>
			LIVE PREVIEW
		</button>
	</div>

	<!-- Progress bar -->
	<div class="progress-bar">
		<div class="progress-fill" style="width:{progress}%"></div>
	</div>

	<!-- Content -->
	<div class="content">
		<!-- Sidebar -->
		<div class="sidebar">
			<div class="sidebar-section">
				<div class="sidebar-header">Sections</div>
				{#each sectionNames as name, i}
					<button
						class="sidebar-item"
						class:active={currentSection === i}
						class:done={i < currentSection}
						onclick={() => goToSection(i)}
					>
						<span class="s-dot" class:filled={i <= currentSection}></span>
						{name}
					</button>
				{/each}
			</div>
			<div class="sidebar-section" style="border-top:1px solid var(--border-light);padding-top:10px">
				<div class="sidebar-header">Templates</div>
				{#each [['Technical', true], ['Minimal', false], ['Executive', false]] as [name, sel]}
					<button class="sidebar-item" style="font-size:11.5px">
						<span style="width:7px;height:7px;{sel?'background:var(--accent);border-radius:1px':'background:#e8e8e8;border:1px solid #ccc;border-radius:1px'};flex-shrink:0;display:inline-block;margin-right:2px"></span>
						{name}
					</button>
				{/each}
			</div>
		</div>

		<!-- Main form area -->
		<div class="main">
			<!-- Section 0: Personal Info -->
			{#if currentSection === 0}
				<div class="section-header">
					<div class="section-title">Personal Information</div>
					<div class="section-subtitle">Your basic contact details and professional summary</div>
				</div>
				<div class="form-area">
					<div class="field-row cols2">
						<div><label for="fname">First Name <span class="req">*</span></label><input id="fname" type="text" placeholder="e.g. Alex" bind:value={fname} /></div>
						<div><label for="lname">Last Name <span class="req">*</span></label><input id="lname" type="text" placeholder="e.g. Rivera" bind:value={lname} /></div>
					</div>
					<div class="field-row cols2">
						<div><label for="job-title">Professional Title <span class="req">*</span></label><input id="job-title" type="text" placeholder="e.g. Senior Software Engineer" bind:value={jobTitle} /></div>
						<div><label for="location">Location</label><input id="location" type="text" placeholder="e.g. San Antonio, TX" bind:value={location} /></div>
					</div>
					<div class="field-row cols2">
						<div><label for="email">Email Address <span class="req">*</span></label><input id="email" type="email" placeholder="alex@example.com" bind:value={email} /></div>
						<div><label for="phone">Phone Number</label><input id="phone" type="tel" placeholder="(555) 000-0000" bind:value={phone} /></div>
					</div>
					<div class="field-group">
						<label for="summary">Professional Summary</label>
						<textarea id="summary" placeholder="Write 2-3 sentences describing your experience, expertise, and career goals..." bind:value={summary}></textarea>
					</div>
				</div>
			{/if}

			<!-- Section 1: Work Experience -->
			{#if currentSection === 1}
				<div class="section-header">
					<div class="section-title">Work Experience</div>
					<div class="section-subtitle">Add your professional history, most recent first</div>
				</div>
				<div class="form-area">
					<div class="experience-card">
						<div class="exp-card-header">
							<span class="exp-num">Experience #1</span>
							<button class="btn-remove">Remove</button>
						</div>
						<div class="field-row cols2">
							<div><label for="exp-jobtitle">Job Title <span class="req">*</span></label><input id="exp-jobtitle" type="text" placeholder="e.g. Software Engineer" /></div>
							<div><label for="exp-company">Company <span class="req">*</span></label><input id="exp-company" type="text" placeholder="e.g. USAA" /></div>
						</div>
						<div class="field-row cols3">
							<div><label for="exp-start">Start Date</label><input id="exp-start" type="text" placeholder="Jan 2022" /></div>
							<div><label for="exp-end">End Date</label><input id="exp-end" type="text" placeholder="Present" /></div>
							<div><label for="exp-location">Location</label><input id="exp-location" type="text" placeholder="San Antonio, TX" /></div>
						</div>
						<div><label for="exp-desc">Key Responsibilities &amp; Achievements</label>
						<textarea id="exp-desc" placeholder="• Describe your impact with measurable outcomes&#10;• Technologies used and problems solved"></textarea></div>
					</div>
					<button class="add-entry-btn">
						<svg width="13" height="13" viewBox="0 0 13 13" fill="none"><line x1="6.5" y1="0" x2="6.5" y2="13" stroke="#555" stroke-width="1.4"/><line x1="0" y1="6.5" x2="13" y2="6.5" stroke="#555" stroke-width="1.4"/></svg>
						Add Work Experience
					</button>
				</div>
			{/if}

			<!-- Section 2: Education -->
			{#if currentSection === 2}
				<div class="section-header">
					<div class="section-title">Education</div>
					<div class="section-subtitle">Degrees, certifications, and relevant coursework</div>
				</div>
				<div class="form-area">
					<div class="experience-card">
						<div class="exp-card-header">
							<span class="exp-num">Education #1</span>
							<button class="btn-remove">Remove</button>
						</div>
						<div class="field-row cols2">
							<div><label for="edu-degree">Degree / Certificate <span class="req">*</span></label><input id="edu-degree" type="text" placeholder="B.S. Computer Science" /></div>
							<div><label for="edu-institution">Institution <span class="req">*</span></label><input id="edu-institution" type="text" placeholder="University of Texas at San Antonio" /></div>
						</div>
						<div class="field-row cols3">
							<div><label for="edu-year">Graduation Year</label><input id="edu-year" type="text" placeholder="2026" /></div>
							<div><label for="edu-gpa">GPA</label><input id="edu-gpa" type="text" placeholder="3.8 / 4.0" /></div>
							<div><label for="edu-field">Field of Study</label><input id="edu-field" type="text" placeholder="Computer Science" /></div>
						</div>
					</div>
					<button class="add-entry-btn">
						<svg width="13" height="13" viewBox="0 0 13 13" fill="none"><line x1="6.5" y1="0" x2="6.5" y2="13" stroke="#555" stroke-width="1.4"/><line x1="0" y1="6.5" x2="13" y2="6.5" stroke="#555" stroke-width="1.4"/></svg>
						Add Education
					</button>
				</div>
			{/if}

			<!-- Section 3: Skills -->
			{#if currentSection === 3}
				<div class="section-header">
					<div class="section-title">Skills &amp; Technologies</div>
					<div class="section-subtitle">Technical skills, tools, and languages</div>
				</div>
				<div class="form-area">
					<div class="field-group">
						<label for="chip-input">Technical Skills <span style="font-weight:400;color:#888">(type and press Enter)</span></label>
						<div class="chip-container">
							{#each ['Rust', 'TypeScript', 'Python'] as chip}
								<div class="chip">{chip} <button class="chip-x" aria-label="Remove {chip}">×</button></div>
							{/each}
							<input id="chip-input" class="chip-input" placeholder="e.g. React, Go…" />
						</div>
					</div>
					<hr class="section-divider" />
					<p class="proficiency-heading">Proficiency Levels</p>
					{#each skills as skill, si}
						<div class="rating-row">
							<span class="rating-label">{skill.name}</span>
							<div class="rating-dots">
								{#each [1,2,3,4,5] as n}
									<button class="rating-dot" class:filled={n <= skill.val} onclick={() => setRating(si, n)} aria-label="{skill.name}, {n} of 5"></button>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			{/if}

			<!-- Section 4: Projects -->
			{#if currentSection === 4}
				<div class="section-header">
					<div class="section-title">Projects &amp; Portfolio</div>
					<div class="section-subtitle">Highlight your most impressive personal or professional projects</div>
				</div>
				<div class="form-area">
					<div class="experience-card">
						<div class="exp-card-header">
							<span class="exp-num">Project #1</span>
							<button class="btn-remove">Remove</button>
						</div>
						<div class="field-row cols2">
							<div><label for="proj-name">Project Name <span class="req">*</span></label><input id="proj-name" type="text" placeholder="e.g. Maestro" /></div>
							<div><label for="proj-stack">Tech Stack</label><input id="proj-stack" type="text" placeholder="e.g. Rust, Kotlin, WebSocket" /></div>
						</div>
						<div class="field-row cols2">
							<div><label for="proj-repo">Repository / Link</label><input id="proj-repo" type="url" placeholder="github.com/…" /></div>
							<div><label for="proj-demo">Live Demo</label><input id="proj-demo" type="url" placeholder="https://…" /></div>
						</div>
						<div><label for="proj-desc">Description &amp; Impact</label><textarea id="proj-desc" placeholder="What does the project do? What was technically challenging?"></textarea></div>
					</div>
					<button class="add-entry-btn">
						<svg width="13" height="13" viewBox="0 0 13 13" fill="none"><line x1="6.5" y1="0" x2="6.5" y2="13" stroke="#555" stroke-width="1.4"/><line x1="0" y1="6.5" x2="13" y2="6.5" stroke="#555" stroke-width="1.4"/></svg>
						Add Project
					</button>
				</div>
			{/if}
		</div>

		<!-- Live preview pane -->
		{#if previewOpen}
			<div class="preview-pane">
				<div class="preview-header">Live Preview</div>
				<div class="preview-body">
					{#if fname || lname}
						<div class="preview-name">{fname} {lname}</div>
						<div class="preview-contact">
							{jobTitle || 'Your Title'}{location ? ' · ' + location : ''}<br />
							{email}{phone ? ' · ' + phone : ''}
						</div>
					{/if}
					{#if summary}
						<div class="preview-section-title">Summary</div>
						<div class="preview-item" style="font-size:10.5px">{summary}</div>
					{/if}
					{#if !fname && !lname}
						<div style="color:#aaa;font-size:11px;text-align:center;padding-top:30px">
							Start filling in the form to see your resume preview here.
						</div>
					{/if}
				</div>
			</div>
		{/if}
	</div>

	<!-- Status bar -->
	<div class="status-bar">
		<div class="status-text">Section {currentSection + 1} of {sectionNames.length} — {sectionNames[currentSection]}</div>
		<div class="status-actions">
			{#if currentSection > 0}
				<button class="btn" onclick={() => navigate(-1)}>← Back</button>
			{/if}
			<button class="btn">Save Draft</button>
			<button class="btn primary" onclick={() => navigate(1)}>
				{currentSection === sectionNames.length - 1 ? 'Generate Resume →' : 'Next →'}
			</button>
		</div>
	</div>
</div>

<style>
	.app-window {
		background: var(--surface-base);
		border: 1px solid #aaa;
		display: flex;
		flex-direction: column;
		min-height: 560px;
		width: 680px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.18);
		margin: 16px auto 0;
	}

	/* Title bar */
	.title-bar {
		height: 32px;
		background: var(--accent);
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 0 0 12px;
		user-select: none;
		flex-shrink: 0;
	}
	.title-bar-left { display: flex; align-items: center; gap: 8px; }
	.title-text { font-size: var(--font-size-sm); color: #fff; font-weight: 400; }
	.title-controls { display: flex; height: 32px; }
	.tb-btn {
		width: 46px;
		height: 32px;
		border: none;
		background: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: background var(--transition-fast);
	}
	.tb-btn:hover { background: rgba(255, 255, 255, 0.18); }
	.close-btn:hover { background: var(--accent-red) !important; }

	/* Ribbon */
	.ribbon {
		background: var(--surface-ribbon);
		border-bottom: 1px solid #d4d4d4;
		display: flex;
		align-items: flex-end;
		padding: 0 0 0 4px;
		flex-shrink: 0;
		height: 38px;
	}
	.ribbon-tab {
		height: 38px;
		padding: 0 18px;
		font-size: var(--font-size-sm);
		color: #444;
		border: none;
		background: none;
		cursor: pointer;
		border-bottom: 3px solid transparent;
		font-family: var(--font-ui);
		display: flex;
		align-items: center;
		transition: color var(--transition-fast), border-color var(--transition-fast);
		letter-spacing: 0.01em;
	}
	.ribbon-tab:hover { color: var(--accent); background: rgba(0, 120, 215, 0.06); }
	.ribbon-tab.active { color: var(--accent); border-bottom-color: var(--accent); font-weight: 600; background: #fff; }

	/* Progress */
	.progress-bar { height: 3px; background: #e0e0e0; }
	.progress-fill { height: 3px; background: var(--accent); transition: width 0.3s; }

	/* Content */
	.content { display: flex; flex: 1; overflow: hidden; }

	/* Sidebar */
	.sidebar {
		width: 190px;
		background: var(--surface-sidebar);
		border-right: 1px solid var(--border-light);
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
	}
	.sidebar-section { padding: 10px 0; }
	.sidebar-header { font-size: 10px; font-weight: 700; letter-spacing: 0.08em; color: #888; padding: 4px 14px 6px; text-transform: uppercase; }
	.sidebar-item {
		display: flex;
		align-items: center;
		gap: 9px;
		padding: 8px 14px;
		cursor: pointer;
		font-size: 12.5px;
		color: #333;
		transition: background var(--transition-fast);
		border-left: 3px solid transparent;
		background: none;
		border-top: none;
		border-right: none;
		border-bottom: none;
		width: 100%;
		text-align: left;
		font-family: var(--font-ui);
	}
	.sidebar-item:hover { background: var(--accent-glow); color: var(--accent); }
	.sidebar-item.active { background: var(--accent-glow); color: var(--accent); border-left-color: var(--accent); font-weight: 600; }
	.s-dot { width: 7px; height: 7px; border-radius: 50%; border: 1.5px solid #ccc; flex-shrink: 0; }
	.s-dot.filled { background: var(--accent); border-color: var(--accent); }

	.main { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
	.section-header { padding: 14px 20px 10px; border-bottom: 1px solid #e8e8e8; background: #fff; flex-shrink: 0; }
	.section-title { font-size: 16px; font-weight: 600; color: #1a1a1a; }
	.section-subtitle { font-size: 11.5px; color: #777; margin-top: 2px; }

	.form-area { flex: 1; overflow-y: auto; padding: 16px 20px 20px; }
	.field-group { margin-bottom: 14px; }
	.field-row { display: grid; gap: 12px; margin-bottom: 14px; }
	.field-row.cols2 { grid-template-columns: 1fr 1fr; }
	.field-row.cols3 { grid-template-columns: 1fr 1fr 1fr; }

	label { display: block; font-size: 11.5px; color: #555; font-weight: 600; margin-bottom: 4px; }
	.req { color: var(--accent-red); margin-left: 2px; }

	input[type='text'], input[type='email'], input[type='tel'], input[type='url'], textarea {
		width: 100%;
		height: 30px;
		padding: 0 8px;
		font-family: var(--font-ui);
		font-size: 12.5px;
		border: 1px solid var(--border-input);
		background: #fff;
		color: #1a1a1a;
		outline: none;
		transition: border-color var(--transition-fast);
		border-radius: var(--radius);
		appearance: none;
	}
	textarea { height: 72px; resize: vertical; padding: 6px 8px; line-height: 1.5; }
	input:focus, textarea:focus { border-color: var(--accent); box-shadow: 0 0 0 1px var(--accent); }
	input:hover:not(:focus), textarea:hover:not(:focus) { border-color: var(--border-input-hover); }

	.experience-card { border: 1px solid #e0e0e0; background: #fafafa; padding: 12px 14px; margin-bottom: 10px; }
	.exp-card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
	.exp-num { font-size: 11px; font-weight: 700; color: #888; letter-spacing: 0.06em; text-transform: uppercase; }
	.btn-remove { background: none; border: 1px solid #d4d4d4; padding: 2px 10px; font-family: var(--font-ui); font-size: 11px; color: #666; cursor: pointer; transition: all var(--transition-fast); }
	.btn-remove:hover { border-color: var(--accent-red); color: var(--accent-red); background: #fff0f0; }

	.add-entry-btn {
		display: flex;
		align-items: center;
		gap: 7px;
		background: none;
		border: 1px dashed #ababab;
		padding: 8px 14px;
		font-family: var(--font-ui);
		font-size: var(--font-size-sm);
		color: #555;
		cursor: pointer;
		width: 100%;
		transition: all var(--transition-fast);
		margin-top: 2px;
	}
	.add-entry-btn:hover { border-color: var(--accent); color: var(--accent); background: rgba(0, 120, 215, 0.04); }

	.chip-container { display: flex; flex-wrap: wrap; gap: 5px; padding: 6px; border: 1px solid var(--border-input); min-height: 34px; background: #fff; }
	.chip-container:focus-within { border-color: var(--accent); box-shadow: 0 0 0 1px var(--accent); }
	.chip { display: flex; align-items: center; gap: 4px; background: #e3f0fb; color: var(--accent); font-size: 11.5px; padding: 2px 6px 2px 8px; border: 1px solid #b8d8f5; }
	.chip-x { background: none; border: none; cursor: pointer; color: var(--accent); font-size: 13px; line-height: 1; padding: 0 1px; font-family: var(--font-ui); }
	.chip-x:hover { color: var(--accent-red); }
	.chip-input { border: none; outline: none; font-family: var(--font-ui); font-size: var(--font-size-sm); min-width: 80px; flex: 1; padding: 1px 2px; }

	.section-divider { border: none; border-top: 1px solid #eaeaea; margin: 12px 0; }
	.proficiency-heading { margin-bottom: 10px; font-size: 11.5px; color: #555; font-weight: 600; }
	.rating-row { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
	.rating-label { font-size: var(--font-size-sm); color: #333; min-width: 110px; }
	.rating-dots { display: flex; gap: 3px; }
	.rating-dot { width: 14px; height: 14px; border: 1.5px solid #ababab; background: #fff; cursor: pointer; border-radius: var(--radius); transition: all var(--transition-fast); }
	.rating-dot.filled { background: var(--accent); border-color: var(--accent); }

	/* Preview pane */
	.preview-pane { width: 240px; border-left: 1px solid var(--border-light); display: flex; flex-direction: column; flex-shrink: 0; }
	.preview-header { padding: 10px 12px; border-bottom: 1px solid #e8e8e8; font-size: 11.5px; font-weight: 700; color: #555; text-transform: uppercase; letter-spacing: 0.07em; background: var(--surface-sidebar); }
	.preview-body { flex: 1; overflow-y: auto; padding: 14px 12px; font-size: 11px; color: #333; line-height: 1.6; }
	.preview-name { font-size: 15px; font-weight: 700; color: var(--accent); margin-bottom: 2px; }
	.preview-contact { font-size: 10.5px; color: #666; margin-bottom: 10px; border-bottom: 2px solid var(--accent); padding-bottom: 8px; }
	.preview-section-title { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent); margin: 8px 0 4px; }

	/* Status bar */
	.status-bar { height: 28px; background: var(--surface-ribbon); border-top: 1px solid #d4d4d4; display: flex; align-items: center; justify-content: space-between; padding: 0 14px; flex-shrink: 0; }
	.status-text { font-size: 11px; color: #666; }
	.status-actions { display: flex; gap: 6px; }
	.btn { height: 26px; padding: 0 14px; border: 1px solid #ababab; background: var(--surface-ribbon); font-family: var(--font-ui); font-size: var(--font-size-sm); color: #333; cursor: pointer; transition: all var(--transition-fast); }
	.btn:hover { background: #e8e8e8; border-color: var(--border-input-hover); }
	.btn.primary { background: var(--accent); color: #fff; border-color: var(--accent); }
	.btn.primary:hover { background: var(--accent-hover); border-color: var(--accent-hover); }
</style>

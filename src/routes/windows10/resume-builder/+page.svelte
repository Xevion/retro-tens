<script lang="ts">
import { Minus, Square, X, Plus } from 'lucide-svelte';
import { RatingGroup } from '@ark-ui/svelte/rating-group';
import { Tabs } from '@ark-ui/svelte/tabs';
import { TagsInput } from '@ark-ui/svelte/tags-input';
import { css, cx } from 'styled-system/css';
import {
	btn,
	input as inputRecipe,
	textarea as textareaRecipe,
	label as labelRecipe,
	titleBar as titleBarSva,
	experienceCard as experienceCardSva,
	addEntryBtn
} from '$lib/recipes/windows10';

// Page-specific styles inlined to work around fallow's .svelte import-graph bug
// (fallow-rs/fallow#TBD: dead-code analysis fails to credit .svelte → .ts imports
// even though --trace correctly resolves them). Shared recipes stay in $lib/recipes/.
const tb = titleBarSva();
const expCard = experienceCardSva();

const appWindow = css({
	background: 'surface.base',
	border: '1px solid token(colors.border.window)',
	display: 'flex',
	flexDirection: 'column',
	minHeight: '560px',
	width: '680px',
	boxShadow: '0 4px 20px token(colors.shadow.window)',
	margin: '16px auto 0'
});

const ribbonList = css({
	background: 'surface.ribbon',
	borderBottom: '1px solid #d4d4d4',
	display: 'flex',
	alignItems: 'flex-end',
	padding: '0 0 0 4px',
	flexShrink: '0',
	height: '38px'
});

const ribbonTrigger = css({
	height: '38px',
	padding: '0 18px',
	fontSize: 'sm',
	color: 'text.secondary',
	border: 'none',
	background: 'none',
	cursor: 'pointer',
	borderBottom: '3px solid transparent',
	fontFamily: 'ui',
	display: 'flex',
	alignItems: 'center',
	transition: 'color token(durations.fast) ease, border-color token(durations.fast) ease',
	letterSpacing: '0.01em',
	_hover: { color: 'accent', background: 'accent.subtle' }
});

const ribbonTriggerActive = css({
	color: 'accent',
	borderBottomColor: 'accent',
	fontWeight: '600',
	background: 'surface.base'
});

const progressBar = css({ height: '3px', background: 'border.light' });
const progressFill = css({ height: '3px', background: 'accent', transition: 'width 0.3s' });

const content = css({ display: 'flex', flex: '1', overflow: 'hidden' });

const sidebar = css({
	width: '190px',
	background: 'surface.sidebar',
	borderRight: '1px solid token(colors.border.light)',
	flexShrink: '0',
	display: 'flex',
	flexDirection: 'column',
	overflowY: 'auto'
});

const sidebarSection = css({ padding: '10px 0' });

const sidebarHeader = css({
	fontSize: 'xs',
	fontWeight: '700',
	letterSpacing: '0.08em',
	color: 'text.disabled',
	padding: '4px 14px 6px',
	textTransform: 'uppercase'
});

const sidebarItem = css({
	display: 'flex',
	alignItems: 'center',
	gap: '9px',
	padding: '8px 14px',
	cursor: 'pointer',
	fontSize: 'base',
	color: 'text.secondary',
	transition: 'background token(durations.fast) ease',
	borderLeft: '3px solid transparent',
	background: 'none',
	borderTop: 'none',
	borderRight: 'none',
	borderBottom: 'none',
	width: '100%',
	textAlign: 'left',
	fontFamily: 'ui',
	_hover: { background: 'accent.glow', color: 'accent' }
});

const sidebarItemActive = css({
	background: 'accent.glow',
	color: 'accent',
	borderLeftColor: 'accent',
	fontWeight: '600'
});

const sDot = css({
	width: '7px',
	height: '7px',
	borderRadius: 'full',
	border: '1.5px solid #ccc',
	flexShrink: '0'
});

const sDotFilled = css({ background: 'accent', borderColor: 'accent' });

const templateDot = css({
	width: '7px',
	height: '7px',
	flexShrink: '0',
	display: 'inline-block',
	marginRight: '2px',
	borderRadius: '1px'
});

const templateDotActive = css({ background: 'accent' });
const templateDotInactive = css({ background: 'border.light', border: '1px solid #ccc' });

const main = css({ flex: '1', display: 'flex', flexDirection: 'column', overflow: 'hidden' });

const sectionHeader = css({
	padding: '14px 20px 10px',
	borderBottom: '1px solid token(colors.border.section)',
	background: 'surface.notifCard',
	flexShrink: '0'
});

const sectionTitle = css({ fontSize: '16px', fontWeight: '600', color: 'text.primary' });
const sectionSubtitle = css({ fontSize: 'sm', color: 'text.muted', marginTop: '2px' });

const formArea = css({ flex: '1', overflowY: 'auto', padding: '16px 20px 20px' });
const fieldGroup = css({ marginBottom: '14px' });

const fieldRow = css({ display: 'grid', gap: '12px', marginBottom: '14px' });
const fieldRow2 = cx(fieldRow, css({ gridTemplateColumns: '1fr 1fr' }));
const fieldRow3 = cx(fieldRow, css({ gridTemplateColumns: '1fr 1fr 1fr' }));

const reqMark = css({ color: 'accent.red', marginLeft: '2px' });

const chipContainer = css({
	display: 'flex',
	flexWrap: 'wrap',
	gap: '5px',
	padding: '6px',
	border: '1px solid token(colors.border.input)',
	minHeight: '34px',
	background: 'surface.notifCard',
	_focusWithin: {
		borderColor: 'accent',
		boxShadow: '0 0 0 1px token(colors.accent)'
	}
});

const chip = css({
	display: 'flex',
	alignItems: 'center',
	gap: '4px',
	background: 'surface.chip',
	color: 'accent',
	fontSize: 'sm',
	padding: '2px 6px 2px 8px',
	border: '1px solid token(colors.border.chip)'
});

const chipX = css({
	background: 'none',
	border: 'none',
	cursor: 'pointer',
	color: 'accent',
	fontSize: '13px',
	lineHeight: '1',
	padding: '0 1px',
	fontFamily: 'ui',
	_hover: { color: 'accent.red' }
});

const chipInput = css({
	border: 'none',
	outline: 'none',
	fontFamily: 'ui',
	fontSize: 'sm',
	minWidth: '80px',
	flex: '1',
	padding: '1px 2px'
});

const sectionDivider = css({ border: 'none', borderTop: '1px solid #eaeaea', margin: '12px 0' });

const proficiencyHeading = css({
	marginBottom: '10px',
	fontSize: 'sm',
	color: 'text.muted',
	fontWeight: '600'
});

const ratingRow = css({ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' });
const ratingLabel = css({ fontSize: 'sm', color: 'text.secondary', minWidth: '110px' });
const ratingDots = css({ display: 'flex', gap: '3px' });

const ratingDot = css({
	width: '14px',
	height: '14px',
	border: '1.5px solid token(colors.border.input)',
	background: 'surface.notifCard',
	cursor: 'pointer',
	borderRadius: 'DEFAULT',
	transition: 'all token(durations.fast) ease'
});

const ratingDotFilled = css({ background: 'accent', borderColor: 'accent' });

const previewPane = css({
	width: '240px',
	borderLeft: '1px solid token(colors.border.light)',
	display: 'flex',
	flexDirection: 'column',
	flexShrink: '0'
});

const previewHeader = css({
	padding: '10px 12px',
	borderBottom: '1px solid token(colors.border.section)',
	fontSize: 'sm',
	fontWeight: '700',
	color: 'text.muted',
	textTransform: 'uppercase',
	letterSpacing: '0.07em',
	background: 'surface.sidebar'
});

const previewBody = css({
	flex: '1',
	overflowY: 'auto',
	padding: '14px 12px',
	fontSize: 'sm',
	color: 'text.secondary',
	lineHeight: '1.6'
});

const previewName = css({
	fontSize: '15px',
	fontWeight: '700',
	color: 'accent',
	marginBottom: '2px'
});

const previewContact = css({
	fontSize: 'xs',
	color: 'text.muted',
	marginBottom: '10px',
	borderBottom: '2px solid token(colors.accent)',
	paddingBottom: '8px'
});

const previewSectionTitle = css({
	fontSize: 'xs',
	fontWeight: '700',
	textTransform: 'uppercase',
	letterSpacing: '0.1em',
	color: 'accent',
	margin: '8px 0 4px'
});

const previewPlaceholder = css({
	color: 'text.disabled',
	fontSize: 'sm',
	textAlign: 'center',
	paddingTop: '30px'
});

const statusBar = css({
	height: '28px',
	background: 'surface.ribbon',
	borderTop: '1px solid #d4d4d4',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: '0 14px',
	flexShrink: '0'
});

const statusText = css({ fontSize: 'sm', color: 'text.muted' });
const statusActions = css({ display: 'flex', gap: '6px' });

const sectionNames = [
	'Personal Information',
	'Work Experience',
	'Education',
	'Skills & Technologies',
	'Projects & Portfolio'
];
let currentSection = $state(0);
let ribbonTab = $state<string>('form');
const previewOpen = $derived(ribbonTab === 'preview');

let fname = $state('');
let lname = $state('');
let jobTitle = $state('');
let location = $state('');
let email = $state('');
let phone = $state('');
let summary = $state('');

const progress = $derived(Math.round(((currentSection + 1) / sectionNames.length) * 100));

let tags = $state<string[]>(['Rust', 'TypeScript', 'Python']);

const skills = $state([
	{ name: 'Programming', val: 4 },
	{ name: 'Problem Solving', val: 5 },
	{ name: 'Communication', val: 3 },
	{ name: 'System Design', val: 4 },
	{ name: 'Collaboration', val: 4 }
]);

function navigate(dir: number) {
	const next = currentSection + dir;
	if (next >= 0 && next < sectionNames.length) currentSection = next;
}

function goToSection(idx: number) {
	currentSection = idx;
}
</script>

<!-- App window -->
<Tabs.Root class={appWindow} bind:value={ribbonTab}>
	<!-- Title bar -->
	<div class={tb.root}>
		<div class={tb.left}>
			<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
				<rect x="1" y="2" width="14" height="10" rx="0.8" stroke="#fff" stroke-width="1.1" fill="none" />
				<path d="M1 5h14" stroke="#fff" stroke-width="0.9" opacity="0.6" />
				<path d="M5 14h6" stroke="#fff" stroke-width="1.1" stroke-linecap="round" />
				<path d="M8 12v2" stroke="#fff" stroke-width="1.1" />
			</svg>
			<span class={tb.text}>Resume Builder — Microsoft Office Style</span>
		</div>
		<div class={tb.controls}>
			<button type="button" class={tb.btn} aria-label="Minimize">
				<Minus size={10} color="#fff" strokeWidth={1.5} />
			</button>
			<button type="button" class={tb.btn} aria-label="Maximize">
				<Square size={10} color="#fff" strokeWidth={1.5} />
			</button>
			<button type="button" class={tb.closeBtn} aria-label="Close">
				<X size={10} color="#fff" strokeWidth={1.5} />
			</button>
		</div>
	</div>

	<!-- Ribbon -->
	<Tabs.List class={ribbonList}>
		<Tabs.Trigger class={cx(ribbonTrigger, ribbonTab === 'form' ? ribbonTriggerActive : '')} value="form">FORM VIEW</Tabs.Trigger>
		<Tabs.Trigger class={cx(ribbonTrigger, ribbonTab === 'preview' ? ribbonTriggerActive : '')} value="preview">LIVE PREVIEW</Tabs.Trigger>
	</Tabs.List>

	<!-- Progress bar -->
	<div class={progressBar}>
		<div class={progressFill} style="width:{progress}%"></div>
	</div>

	<!-- Content -->
	<Tabs.Content value="form" class={content}>
		<!-- Sidebar -->
		<div class={sidebar}>
			<div class={sidebarSection}>
				<div class={sidebarHeader}>Sections</div>
				{#each sectionNames as name, i (name)}
					<button
						type="button"
						class={cx(sidebarItem, currentSection === i ? sidebarItemActive : '')}
						onclick={() => goToSection(i)}
					>
						<span class={cx(sDot, i <= currentSection ? sDotFilled : '')}></span>
						{name}
					</button>
				{/each}
			</div>
			<div class={cx(sidebarSection, css({ borderTop: '1px solid token(colors.border.light)', paddingTop: '10px' }))}>
				<div class={sidebarHeader}>Templates</div>
				{#each [['Technical', true], ['Minimal', false], ['Executive', false]] as [name, sel] (name)}
					<button type="button" class={cx(sidebarItem, css({ fontSize: 'sm' }))}>
						<span class={cx(templateDot, sel ? templateDotActive : templateDotInactive)}></span>
						{name}
					</button>
				{/each}
			</div>
		</div>

		<!-- Main form area -->
		<div class={main}>
			<!-- Section 0: Personal Info -->
			{#if currentSection === 0}
				<div class={sectionHeader}>
					<div class={sectionTitle}>Personal Information</div>
					<div class={sectionSubtitle}>Your basic contact details and professional summary</div>
				</div>
				<div class={formArea}>
					<div class={fieldRow2}>
						<div><label for="fname" class={labelRecipe}>First Name <span class={reqMark}>*</span></label><input id="fname" type="text" class={inputRecipe} placeholder="e.g. Alex" bind:value={fname} /></div>
						<div><label for="lname" class={labelRecipe}>Last Name <span class={reqMark}>*</span></label><input id="lname" type="text" class={inputRecipe} placeholder="e.g. Rivera" bind:value={lname} /></div>
					</div>
					<div class={fieldRow2}>
						<div><label for="job-title" class={labelRecipe}>Professional Title <span class={reqMark}>*</span></label><input id="job-title" type="text" class={inputRecipe} placeholder="e.g. Senior Software Engineer" bind:value={jobTitle} /></div>
						<div><label for="location" class={labelRecipe}>Location</label><input id="location" type="text" class={inputRecipe} placeholder="e.g. San Antonio, TX" bind:value={location} /></div>
					</div>
					<div class={fieldRow2}>
						<div><label for="email" class={labelRecipe}>Email Address <span class={reqMark}>*</span></label><input id="email" type="email" class={inputRecipe} placeholder="alex@example.com" bind:value={email} /></div>
						<div><label for="phone" class={labelRecipe}>Phone Number</label><input id="phone" type="tel" class={inputRecipe} placeholder="(555) 000-0000" bind:value={phone} /></div>
					</div>
					<div class={fieldGroup}>
						<label for="summary" class={labelRecipe}>Professional Summary</label>
						<textarea id="summary" class={textareaRecipe} placeholder="Write 2-3 sentences describing your experience, expertise, and career goals..." bind:value={summary}></textarea>
					</div>
				</div>
			{/if}

			<!-- Section 1: Work Experience -->
			{#if currentSection === 1}
				<div class={sectionHeader}>
					<div class={sectionTitle}>Work Experience</div>
					<div class={sectionSubtitle}>Add your professional history, most recent first</div>
				</div>
				<div class={formArea}>
					<div class={expCard.root}>
						<div class={expCard.header}>
							<span class={expCard.num}>Experience #1</span>
							<button type="button" class={expCard.removeBtn}>Remove</button>
						</div>
						<div class={fieldRow2}>
							<div><label for="exp-jobtitle" class={labelRecipe}>Job Title <span class={reqMark}>*</span></label><input id="exp-jobtitle" type="text" class={inputRecipe} placeholder="e.g. Software Engineer" /></div>
							<div><label for="exp-company" class={labelRecipe}>Company <span class={reqMark}>*</span></label><input id="exp-company" type="text" class={inputRecipe} placeholder="e.g. USAA" /></div>
						</div>
						<div class={fieldRow3}>
							<div><label for="exp-start" class={labelRecipe}>Start Date</label><input id="exp-start" type="text" class={inputRecipe} placeholder="Jan 2022" /></div>
							<div><label for="exp-end" class={labelRecipe}>End Date</label><input id="exp-end" type="text" class={inputRecipe} placeholder="Present" /></div>
							<div><label for="exp-location" class={labelRecipe}>Location</label><input id="exp-location" type="text" class={inputRecipe} placeholder="San Antonio, TX" /></div>
						</div>
						<div><label for="exp-desc" class={labelRecipe}>Key Responsibilities &amp; Achievements</label>
						<textarea id="exp-desc" class={textareaRecipe} placeholder="• Describe your impact with measurable outcomes&#10;• Technologies used and problems solved"></textarea></div>
					</div>
					<button type="button" class={addEntryBtn}>
						<Plus size={13} strokeWidth={1.5} />
						Add Work Experience
					</button>
				</div>
			{/if}

			<!-- Section 2: Education -->
			{#if currentSection === 2}
				<div class={sectionHeader}>
					<div class={sectionTitle}>Education</div>
					<div class={sectionSubtitle}>Degrees, certifications, and relevant coursework</div>
				</div>
				<div class={formArea}>
					<div class={expCard.root}>
						<div class={expCard.header}>
							<span class={expCard.num}>Education #1</span>
							<button type="button" class={expCard.removeBtn}>Remove</button>
						</div>
						<div class={fieldRow2}>
							<div><label for="edu-degree" class={labelRecipe}>Degree / Certificate <span class={reqMark}>*</span></label><input id="edu-degree" type="text" class={inputRecipe} placeholder="B.S. Computer Science" /></div>
							<div><label for="edu-institution" class={labelRecipe}>Institution <span class={reqMark}>*</span></label><input id="edu-institution" type="text" class={inputRecipe} placeholder="University of Texas at San Antonio" /></div>
						</div>
						<div class={fieldRow3}>
							<div><label for="edu-year" class={labelRecipe}>Graduation Year</label><input id="edu-year" type="text" class={inputRecipe} placeholder="2026" /></div>
							<div><label for="edu-gpa" class={labelRecipe}>GPA</label><input id="edu-gpa" type="text" class={inputRecipe} placeholder="3.8 / 4.0" /></div>
							<div><label for="edu-field" class={labelRecipe}>Field of Study</label><input id="edu-field" type="text" class={inputRecipe} placeholder="Computer Science" /></div>
						</div>
					</div>
					<button type="button" class={addEntryBtn}>
						<Plus size={13} strokeWidth={1.5} />
						Add Education
					</button>
				</div>
			{/if}

			<!-- Section 3: Skills -->
			{#if currentSection === 3}
				<div class={sectionHeader}>
					<div class={sectionTitle}>Skills &amp; Technologies</div>
					<div class={sectionSubtitle}>Technical skills, tools, and languages</div>
				</div>
				<div class={formArea}>
					<div class={fieldGroup}>
						<TagsInput.Root bind:value={tags} class={css({ width: '100%' })}>
							<TagsInput.Context>
								{#snippet render(tagsInput)}
									<TagsInput.Label class={labelRecipe}>Technical Skills <span class={css({ fontWeight: '400', color: 'text.disabled' })}>(type and press Enter)</span></TagsInput.Label>
									<TagsInput.Control class={chipContainer}>
										{#each tagsInput().value as value, index (index)}
											<TagsInput.Item {index} {value} class={chip}>
												<TagsInput.ItemPreview class={css({ display: 'inline-flex', alignItems: 'center', gap: '4px' })}>
													<TagsInput.ItemText>{value}</TagsInput.ItemText>
													<TagsInput.ItemDeleteTrigger class={chipX}>×</TagsInput.ItemDeleteTrigger>
												</TagsInput.ItemPreview>
												<TagsInput.ItemInput class={chipInput} />
											</TagsInput.Item>
										{/each}
										<TagsInput.Input placeholder="e.g. React, Go…" class={chipInput} />
									</TagsInput.Control>
								{/snippet}
							</TagsInput.Context>
							<TagsInput.HiddenInput />
						</TagsInput.Root>
					</div>
					<hr class={sectionDivider} />
					<p class={proficiencyHeading}>Proficiency Levels</p>
					{#each skills as skill, _si (skill.name)}
						<RatingGroup.Root count={5} bind:value={skill.val} class={ratingRow}>
							<RatingGroup.Label class={ratingLabel}>{skill.name}</RatingGroup.Label>
							<RatingGroup.Control class={ratingDots}>
								<RatingGroup.Context>
									{#snippet render(ratingGroup)}
										{#each ratingGroup().items as item (item)}
											<RatingGroup.Item index={item} class={cx(ratingDot, item <= skill.val ? ratingDotFilled : '')}>
												<RatingGroup.ItemContext>
													{#snippet render(_itemState)}
														<span></span>
													{/snippet}
												</RatingGroup.ItemContext>
											</RatingGroup.Item>
										{/each}
									{/snippet}
								</RatingGroup.Context>
								<RatingGroup.HiddenInput />
							</RatingGroup.Control>
						</RatingGroup.Root>
					{/each}
				</div>
			{/if}

			<!-- Section 4: Projects -->
			{#if currentSection === 4}
				<div class={sectionHeader}>
					<div class={sectionTitle}>Projects &amp; Portfolio</div>
					<div class={sectionSubtitle}>Highlight your most impressive personal or professional projects</div>
				</div>
				<div class={formArea}>
					<div class={expCard.root}>
						<div class={expCard.header}>
							<span class={expCard.num}>Project #1</span>
							<button type="button" class={expCard.removeBtn}>Remove</button>
						</div>
						<div class={fieldRow2}>
							<div><label for="proj-name" class={labelRecipe}>Project Name <span class={reqMark}>*</span></label><input id="proj-name" type="text" class={inputRecipe} placeholder="e.g. Maestro" /></div>
							<div><label for="proj-stack" class={labelRecipe}>Tech Stack</label><input id="proj-stack" type="text" class={inputRecipe} placeholder="e.g. Rust, Kotlin, WebSocket" /></div>
						</div>
						<div class={fieldRow2}>
							<div><label for="proj-repo" class={labelRecipe}>Repository / Link</label><input id="proj-repo" type="url" class={inputRecipe} placeholder="github.com/…" /></div>
							<div><label for="proj-demo" class={labelRecipe}>Live Demo</label><input id="proj-demo" type="url" class={inputRecipe} placeholder="https://…" /></div>
						</div>
						<div><label for="proj-desc" class={labelRecipe}>Description &amp; Impact</label><textarea id="proj-desc" class={textareaRecipe} placeholder="What does the project do? What was technically challenging?"></textarea></div>
					</div>
					<button type="button" class={addEntryBtn}>
						<Plus size={13} strokeWidth={1.5} />
						Add Project
					</button>
				</div>
			{/if}
		</div>

		<!-- Live preview pane -->
		{#if previewOpen}
			<div class={previewPane}>
				<div class={previewHeader}>Live Preview</div>
				<div class={previewBody}>
					{#if fname || lname}
						<div class={previewName}>{fname} {lname}</div>
						<div class={previewContact}>
							{jobTitle || 'Your Title'}{location ? ' · ' + location : ''}<br />
							{email}{phone ? ' · ' + phone : ''}
						</div>
					{/if}
					{#if summary}
						<div class={previewSectionTitle}>Summary</div>
						<div class={css({ fontSize: 'xs' })}>{summary}</div>
					{/if}
					{#if !fname && !lname}
						<div class={previewPlaceholder}>
							Start filling in the form to see your resume preview here.
						</div>
					{/if}
				</div>
			</div>
		{/if}
	</Tabs.Content>

	<Tabs.Content value="preview" class={content}>
		<div class={previewPane} class:full-width={true} style="width: 100%; border-left: none;">
			<div class={previewHeader}>Live Preview</div>
			<div class={previewBody}>
				{#if fname || lname}
					<div class={previewName}>{fname} {lname}</div>
					<div class={previewContact}>
						{jobTitle || 'Your Title'}{location ? ' · ' + location : ''}<br />
						{email}{phone ? ' · ' + phone : ''}
					</div>
				{/if}
				{#if summary}
					<div class={previewSectionTitle}>Summary</div>
					<div class={css({ fontSize: 'xs' })}>{summary}</div>
				{/if}
				{#if !fname && !lname}
					<div class={previewPlaceholder}>
						Start filling in the form to see your resume preview here.
					</div>
				{/if}
			</div>
		</div>
	</Tabs.Content>

	<!-- Status bar -->
	<div class={statusBar}>
		<div class={statusText}>Section {currentSection + 1} of {sectionNames.length} — {sectionNames[currentSection]}</div>
		<div class={statusActions}>
			{#if currentSection > 0}
				<button type="button" class={btn()} onclick={() => navigate(-1)}>← Back</button>
			{/if}
			<button type="button" class={btn()}>Save Draft</button>
			<button type="button" class={btn({ visual: 'primary' })} onclick={() => navigate(1)}>
				{currentSection === sectionNames.length - 1 ? 'Generate Resume →' : 'Next →'}
			</button>
		</div>
	</div>
</Tabs.Root>

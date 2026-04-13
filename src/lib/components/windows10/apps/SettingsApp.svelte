<script lang="ts">
import { Switch } from '@ark-ui/svelte/switch';
import { css, cx } from 'styled-system/css';
import { categories } from '$lib/data/windows10/settings';

let activeCategory = $state<string>('system');

const current = $derived(categories.find((c) => c.id === activeCategory)!);

let settingValues = $state<Record<string, Record<string, boolean | string | number>>>(
	Object.fromEntries(
		categories.map((cat) => [
			cat.id,
			Object.fromEntries(cat.settings.map((s) => [s.label, s.value]))
		])
	)
);

function toggleSetting(catId: string, label: string) {
	const current = settingValues[catId][label];
	if (typeof current === 'boolean') {
		settingValues[catId][label] = !current;
	}
}

function setSelect(catId: string, label: string, value: string) {
	settingValues[catId][label] = value;
}

const appRoot = css({
	display: 'flex',
	flex: '1',
	overflow: 'hidden',
	fontFamily: 'ui'
});

const sidebarStyle = css({
	width: '220px',
	background: 'surface.settingsCategory',
	borderRight: '1px solid token(colors.border.light)',
	flexShrink: '0',
	overflowY: 'auto',
	padding: '8px 0'
});

const sidebarItem = css({
	display: 'flex',
	alignItems: 'center',
	gap: '10px',
	padding: '10px 16px',
	cursor: 'pointer',
	fontSize: 'base',
	color: 'text.secondary',
	background: 'none',
	border: 'none',
	width: '100%',
	textAlign: 'left',
	fontFamily: 'ui',
	transition: 'background token(durations.fast) ease',
	_hover: { background: 'surface.settingsCategoryHover' }
});

const sidebarItemActive = css({
	background: 'surface.settingsCategoryActive',
	color: 'accent',
	fontWeight: '600',
	borderLeft: '3px solid token(colors.accent)'
});

const mainContent = css({
	flex: '1',
	overflowY: 'auto',
	padding: '20px 24px'
});

const categoryTitle = css({
	fontSize: '20px',
	fontWeight: '300',
	color: 'text.primary',
	marginBottom: '20px'
});

const settingRow = css({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '14px 0',
	borderBottom: '1px solid token(colors.border.light)',
	gap: '16px'
});

const settingInfo = css({
	flex: '1'
});

const settingLabel = css({
	fontSize: 'base',
	color: 'text.primary',
	fontWeight: '400'
});

const settingDesc = css({
	fontSize: 'sm',
	color: 'text.muted',
	marginTop: '2px'
});

const settingValue = css({
	fontSize: 'sm',
	color: 'text.secondary',
	marginTop: '2px',
	fontStyle: 'italic'
});

const switchRoot = css({
	display: 'flex',
	alignItems: 'center',
	cursor: 'pointer'
});

const switchControl = css({
	width: '40px',
	height: '20px',
	background: 'transparent',
	border: '2px solid #767676',
	borderRadius: '10px',
	position: 'relative',
	transition: 'all 0.15s ease',
	'&[data-state="checked"]': {
		background: 'accent',
		borderColor: 'accent'
	},
	'&:hover [data-part="thumb"]': {
		width: '14px',
		height: '14px'
	},
	'&:active [data-part="thumb"]': {
		width: '17px',
		height: '14px',
		borderRadius: '7px'
	}
});

const switchThumb = css({
	width: '12px',
	height: '12px',
	background: '#333333',
	borderRadius: '50%',
	position: 'absolute',
	top: '50%',
	left: '2px',
	transform: 'translateY(-50%)',
	transition: 'all 0.15s ease',
	'&[data-state="checked"]': {
		background: 'white',
		transform: 'translateX(20px) translateY(-50%)'
	}
});

const selectStyle = css({
	height: '30px',
	padding: '0 8px',
	fontFamily: 'ui',
	fontSize: 'sm',
	border: '1px solid token(colors.border.input)',
	background: 'surface.base',
	color: 'text.primary',
	cursor: 'pointer',
	minWidth: '160px',
	_focus: { borderColor: 'accent', outline: 'none' }
});

const sliderContainer = css({
	display: 'flex',
	alignItems: 'center',
	gap: '8px',
	minWidth: '160px'
});

const sliderInput = css({
	width: '120px',
	accentColor: '#0078d7'
});

const sliderValue = css({
	fontSize: 'sm',
	color: 'text.muted',
	minWidth: '30px',
	textAlign: 'right'
});

const searchBar = css({
	width: '100%',
	height: '32px',
	padding: '0 12px',
	background: 'surface.base',
	border: '1px solid token(colors.border.input)',
	fontFamily: 'ui',
	fontSize: 'sm',
	color: 'text.primary',
	marginBottom: '12px',
	outline: 'none',
	_focus: { borderColor: 'accent' },
	_placeholder: { color: 'text.disabled' }
});
</script>

<div class={appRoot}>
	<div class={sidebarStyle}>
		<input type="text" class={searchBar} placeholder="Find a setting" aria-label="Search settings" />
		{#each categories as cat (cat.id)}
			<button
				type="button"
				class={cx(sidebarItem, activeCategory === cat.id ? sidebarItemActive : '')}
				onclick={() => (activeCategory = cat.id)}
			>
				<cat.icon size={20} />
				{cat.name}
			</button>
		{/each}
	</div>

	<div class={mainContent}>
		<h2 class={categoryTitle}>{current.name}</h2>

		{#each current.settings as setting (setting.label)}
			<div class={settingRow}>
				<div class={settingInfo}>
					<div class={settingLabel}>{setting.label}</div>
					{#if setting.description}
						<div class={settingDesc}>{setting.description}</div>
					{/if}
					{#if setting.type === 'info'}
						<div class={settingValue}>{settingValues[current.id][setting.label]}</div>
					{/if}
				</div>

				{#if setting.type === 'toggle'}
					{@const checked = settingValues[current.id][setting.label] === true}
					<Switch.Root
						checked={checked}
						onCheckedChange={() => toggleSetting(current.id, setting.label)}
						class={switchRoot}
					>
						<Switch.Control class={switchControl}>
							<Switch.Thumb class={switchThumb} />
						</Switch.Control>
						<Switch.HiddenInput />
					</Switch.Root>
				{:else if setting.type === 'select' && setting.options}
					<select
						class={selectStyle}
						value={String(settingValues[current.id][setting.label])}
						onchange={(e) => setSelect(current.id, setting.label, e.currentTarget.value)}
						aria-label={setting.label}
					>
						{#each setting.options as opt (opt)}
							<option value={opt}>{opt}</option>
						{/each}
					</select>
				{:else if setting.type === 'slider'}
					<div class={sliderContainer}>
						<input
							type="range"
							class={sliderInput}
							min={setting.min ?? 0}
							max={setting.max ?? 100}
							value={Number(settingValues[current.id][setting.label])}
							oninput={(e) => { settingValues[current.id][setting.label] = Number(e.currentTarget.value); }}
							aria-label={setting.label}
						/>
						<span class={sliderValue}>{settingValues[current.id][setting.label]}</span>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>

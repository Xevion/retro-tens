<script lang="ts">
import { Select, createListCollection } from '@ark-ui/svelte/select';
import { ChevronDown } from 'lucide-svelte';
import { css } from 'styled-system/css';
import { filterLabel } from '$lib/recipes/steam-modern';

interface Item {
	value: string;
	label: string;
}

let {
	label,
	items,
	value = $bindable(''),
	placeholder = 'Select…'
}: {
	label: string;
	items: readonly Item[] | Item[];
	value: string;
	placeholder?: string;
} = $props();

const collection = $derived(createListCollection({ items: items as Item[] }));

function handleValueChange(details: { value: string[] }) {
	value = details.value[0] ?? '';
}

const rootClass = css({ display: 'contents' });

const triggerClass = css({
	display: 'inline-flex',
	alignItems: 'center',
	gap: '4px',
	background: 'surface.input',
	border: '1px solid token(colors.border)',
	color: 'text.secondary',
	padding: '5px 8px',
	fontSize: 'sm',
	borderRadius: 'DEFAULT',
	fontFamily: 'ui',
	cursor: 'pointer',
	outline: 'none',
	whiteSpace: 'nowrap',
	_focus: { borderColor: 'token(colors.accent.dim)' }
});

const contentClass = css({
	background: 'surface.panel',
	border: '1px solid token(colors.border)',
	borderRadius: 'DEFAULT',
	padding: '2px 0',
	minWidth: 'var(--reference-width)',
	maxHeight: '200px',
	overflowY: 'auto',
	boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
	zIndex: '50',
	outline: 'none'
});

const itemClass = css({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: '5px 10px',
	fontSize: 'sm',
	fontFamily: 'ui',
	color: 'text.secondary',
	cursor: 'pointer',
	_highlighted: {
		background: 'accent.glow',
		color: 'text.primary'
	},
	_checked: {
		color: 'accent',
		fontWeight: '600'
	}
});

const indicatorClass = css({
	fontSize: '10px',
	color: 'accent'
});
</script>

<Select.Root class={rootClass} {collection} value={[value]} onValueChange={handleValueChange} positioning={{ sameWidth: true }}>
	<Select.Label class={filterLabel}>{label}:</Select.Label>
	<Select.Control>
		<Select.Trigger class={triggerClass}>
			<Select.ValueText {placeholder} />
			<ChevronDown size={12} />
		</Select.Trigger>
	</Select.Control>
	<Select.Positioner>
		<Select.Content class={contentClass}>
			{#each collection.items as item (item.value)}
				<Select.Item {item} class={itemClass}>
					<Select.ItemText>{item.label}</Select.ItemText>
					<Select.ItemIndicator class={indicatorClass}>✓</Select.ItemIndicator>
				</Select.Item>
			{/each}
		</Select.Content>
	</Select.Positioner>
	<Select.HiddenSelect />
</Select.Root>

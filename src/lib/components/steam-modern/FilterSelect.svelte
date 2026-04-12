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
	/* sourced: .searchbox background-color */
	background: 'surface.input',
	/* sourced: .searchbox border */
	border: '1px solid rgba(0, 0, 0, 0.3)',
	/* sourced: .searchbox input color */
	color: '#eeeeee',
	padding: '5px 8px',
	fontSize: 'sm',
	borderRadius: 'sm',
	fontFamily: 'ui',
	cursor: 'pointer',
	outline: 'none',
	whiteSpace: 'nowrap',
	_focus: { borderColor: 'token(colors.accent.dim)' }
});

const contentClass = css({
	/* sourced: .popup_body.search_v2 background */
	background: '#3D4450',
	border: '1px solid rgba(0, 0, 0, 0.3)',
	borderRadius: 'sm',
	padding: '2px 0',
	minWidth: 'var(--reference-width)',
	maxHeight: '200px',
	overflowY: 'auto',
	/* sourced: --gpShadow-Medium */
	boxShadow: '0px 3px 6px #0000003D',
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
	color: '#c6d4df',
	cursor: 'pointer',
	_highlighted: {
		/* sourced: .search_suggest .match:hover */
		background: '#212d3d',
		color: '#ffffff'
	},
	_checked: {
		/* sourced: --gpColor-ChalkyBlue */
		color: '#66c0f4',
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

<script lang="ts">
import { Drawer } from '@ark-ui/svelte/drawer';
import { drawerStyles } from '$lib/recipes/windows10';
import ActionCenterApp from './apps/ActionCenterApp.svelte';

type Props = {
	open: boolean;
};

let { open = $bindable() }: Props = $props();
</script>

<Drawer.Root bind:open swipeDirection="end" modal={false}>
	<Drawer.Backdrop class={drawerStyles.backdrop} />
	<Drawer.Positioner class={drawerStyles.positioner}>
		<Drawer.Content class={drawerStyles.content}>
			<ActionCenterApp />
		</Drawer.Content>
	</Drawer.Positioner>
</Drawer.Root>

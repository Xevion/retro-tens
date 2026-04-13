<script lang="ts">
import { FloatingPanel } from '@ark-ui/svelte/floating-panel';
import { ChromeClose, ChromeMaximize, ChromeMinimize } from '$lib/icons/windows10';
import { desktopWindow } from '$lib/recipes/windows10';
import type { Snippet } from 'svelte';

type Props = {
	title: string;
	icon?: Snippet;
	open: boolean;
	focused?: boolean;
	zIndex: number;
	defaultPosition: { x: number; y: number };
	defaultSize: { width: number; height: number };
	minSize?: { width: number; height: number };
	onfocus: () => void;
	onclose: () => void;
	children: Snippet;
};

let {
	title,
	icon,
	open = $bindable(),
	focused = true,
	zIndex,
	defaultPosition,
	defaultSize,
	minSize = { width: 300, height: 200 },
	onfocus,
	onclose,
	children
}: Props = $props();

const dw = $derived(desktopWindow({ focused }));

function handleOpenChange(details: { open: boolean }) {
	if (!details.open) {
		onclose();
	}
}
</script>

<FloatingPanel.Root
	bind:open
	strategy="absolute"
	persistRect
	{defaultPosition}
	{defaultSize}
	{minSize}
	closeOnEscape={false}
	restoreFocus={false}
	onOpenChange={handleOpenChange}
>
	<FloatingPanel.Positioner class={dw.positioner} style="z-index: {zIndex}">
		<FloatingPanel.Content class={dw.content} onpointerdown={onfocus}>
			<FloatingPanel.DragTrigger>
				<FloatingPanel.Header class={dw.header}>
					<FloatingPanel.Title class={dw.title}>
						{#if icon}{@render icon()}{/if}
						{title}
					</FloatingPanel.Title>
					<FloatingPanel.Control class={dw.control}>
						<FloatingPanel.StageTrigger stage="minimized" class={dw.controlBtn} aria-label="Minimize">
							<ChromeMinimize size={10} />
						</FloatingPanel.StageTrigger>
						<FloatingPanel.StageTrigger stage="maximized" class={dw.controlBtn} aria-label="Maximize">
							<ChromeMaximize size={10} />
						</FloatingPanel.StageTrigger>
						<FloatingPanel.CloseTrigger class={dw.closeBtn} aria-label="Close">
							<ChromeClose size={10} />
						</FloatingPanel.CloseTrigger>
					</FloatingPanel.Control>
				</FloatingPanel.Header>
			</FloatingPanel.DragTrigger>

			<FloatingPanel.Body class={dw.body}>
				{@render children()}
			</FloatingPanel.Body>

			<FloatingPanel.ResizeTrigger axis="n" class={dw.resizeTrigger} />
			<FloatingPanel.ResizeTrigger axis="e" class={dw.resizeTrigger} />
			<FloatingPanel.ResizeTrigger axis="w" class={dw.resizeTrigger} />
			<FloatingPanel.ResizeTrigger axis="s" class={dw.resizeTrigger} />
			<FloatingPanel.ResizeTrigger axis="ne" class={dw.resizeTrigger} />
			<FloatingPanel.ResizeTrigger axis="se" class={dw.resizeTrigger} />
			<FloatingPanel.ResizeTrigger axis="sw" class={dw.resizeTrigger} />
			<FloatingPanel.ResizeTrigger axis="nw" class={dw.resizeTrigger} />
		</FloatingPanel.Content>
	</FloatingPanel.Positioner>
</FloatingPanel.Root>

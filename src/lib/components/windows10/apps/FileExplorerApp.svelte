<script lang="ts">
import { SvelteSet } from 'svelte/reactivity';
import { ChevronLeft, ChevronRight, ChevronUp, LayoutGrid, List, ChevronDown } from 'lucide-svelte';
import { css, cx } from 'styled-system/css';
import { folderTree, filesByPath, type FileEntry } from '$lib/data/windows10/file-explorer';

let currentPath = $state('C:\\Users\\User\\Documents');
let pathHistory = $state<string[]>(['C:\\Users\\User\\Documents']);
let historyIndex = $state(0);
let viewMode = $state<'grid' | 'list'>('list');
let expandedNodes = $state(new SvelteSet(['Quick Access', 'This PC']));

const currentFiles = $derived(filesByPath[currentPath] ?? []);
const pathSegments = $derived(currentPath.split('\\').filter(Boolean));

function navigateTo(path: string) {
	if (path === currentPath) return;
	const newHistory = pathHistory.slice(0, historyIndex + 1);
	newHistory.push(path);
	pathHistory = newHistory;
	historyIndex = newHistory.length - 1;
	currentPath = path;
}

function goBack() {
	if (historyIndex > 0) {
		historyIndex--;
		currentPath = pathHistory[historyIndex];
	}
}

function goForward() {
	if (historyIndex < pathHistory.length - 1) {
		historyIndex++;
		currentPath = pathHistory[historyIndex];
	}
}

function goUp() {
	const parts = currentPath.split('\\');
	if (parts.length > 1) {
		navigateTo(parts.slice(0, -1).join('\\') || parts[0]);
	}
}

function toggleNode(path: string) {
	if (expandedNodes.has(path)) expandedNodes.delete(path);
	else expandedNodes.add(path);
}

const appRoot = css({
	display: 'flex',
	flexDirection: 'column',
	flex: '1',
	overflow: 'hidden',
	fontFamily: 'ui'
});

const toolbar = css({
	display: 'flex',
	alignItems: 'center',
	gap: '2px',
	padding: '4px 8px',
	background: 'surface.explorerToolbar',
	borderBottom: '1px solid token(colors.border.light)',
	flexShrink: '0'
});

const navBtn = css({
	width: '28px',
	height: '28px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	background: 'none',
	border: 'none',
	cursor: 'pointer',
	color: 'text.secondary',
	transition: 'background token(durations.fast) ease',
	_hover: { background: 'surface.hover' },
	_disabled: { opacity: '0.35', cursor: 'default', _hover: { background: 'none' } }
});

const addressBar = css({
	flex: '1',
	height: '26px',
	display: 'flex',
	alignItems: 'center',
	padding: '0 8px',
	background: 'surface.explorerAddressBar',
	border: '1px solid token(colors.border.input)',
	fontSize: 'sm',
	color: 'text.secondary',
	marginLeft: '4px',
	gap: '2px',
	overflow: 'hidden'
});

const addressSegment = css({
	display: 'flex',
	alignItems: 'center',
	gap: '1px',
	whiteSpace: 'nowrap',
	cursor: 'pointer',
	padding: '1px 3px',
	_hover: { background: 'accent.glow', color: 'accent' }
});

const viewToggle = css({
	display: 'flex',
	gap: '1px',
	marginLeft: '8px'
});

const viewBtn = css({
	width: '26px',
	height: '26px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	background: 'none',
	border: '1px solid token(colors.border.input)',
	cursor: 'pointer',
	color: 'text.muted',
	_hover: { background: 'surface.hover' }
});

const viewBtnActive = css({
	background: 'accent.glow',
	color: 'accent',
	borderColor: 'accent'
});

const contentArea = css({
	display: 'flex',
	flex: '1',
	overflow: 'hidden'
});

const sidebarPane = css({
	width: '200px',
	borderRight: '1px solid token(colors.border.light)',
	overflowY: 'auto',
	padding: '4px 0',
	flexShrink: '0',
	background: 'surface.base'
});

const treeItem = css({
	display: 'flex',
	alignItems: 'center',
	gap: '4px',
	padding: '3px 8px 3px',
	fontSize: 'sm',
	color: 'text.secondary',
	cursor: 'pointer',
	whiteSpace: 'nowrap',
	_hover: { background: 'accent.glow' }
});

const treeItemActive = css({
	background: 'accent.glow',
	color: 'accent',
	fontWeight: '600'
});

const treeExpandBtn = css({
	width: '16px',
	height: '16px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	background: 'none',
	border: 'none',
	cursor: 'pointer',
	color: 'text.muted',
	flexShrink: '0',
	padding: '0'
});

const treeChildren = css({
	paddingLeft: '16px'
});

const mainPane = css({
	flex: '1',
	overflowY: 'auto',
	background: 'surface.base'
});

const listHeader = css({
	display: 'grid',
	gridTemplateColumns: '2fr 1fr 0.8fr 0.7fr',
	padding: '4px 12px',
	borderBottom: '1px solid token(colors.border.light)',
	background: 'surface.elevated',
	position: 'sticky',
	top: '0',
	zIndex: '1'
});

const listHeaderCell = css({
	fontSize: 'sm',
	color: 'text.muted',
	fontWeight: '600',
	padding: '2px 4px'
});

const fileRow = css({
	display: 'grid',
	gridTemplateColumns: '2fr 1fr 0.8fr 0.7fr',
	padding: '3px 12px',
	alignItems: 'center',
	cursor: 'pointer',
	transition: 'background token(durations.fast) ease',
	_hover: { background: 'accent.glow' }
});

const fileCell = css({
	fontSize: 'sm',
	color: 'text.secondary',
	padding: '2px 4px',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap'
});

const fileName = css({
	display: 'flex',
	alignItems: 'center',
	gap: '6px',
	fontSize: 'sm',
	color: 'text.primary',
	padding: '2px 4px'
});

const fileIcon = css({
	width: '16px',
	height: '16px',
	flexShrink: '0'
});

const gridView = css({
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))',
	gap: '4px',
	padding: '12px'
});

const gridItem = css({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: '4px',
	padding: '8px 4px',
	cursor: 'pointer',
	transition: 'background token(durations.fast) ease',
	_hover: { background: 'accent.glow' }
});

const gridItemLabel = css({
	fontSize: 'xs',
	color: 'text.primary',
	textAlign: 'center',
	lineHeight: '1.3',
	maxWidth: '80px',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap'
});

const emptyFolder = css({
	padding: '40px 20px',
	textAlign: 'center',
	color: 'text.disabled',
	fontSize: 'sm'
});

const statusBar = css({
	height: '24px',
	background: 'surface.elevated',
	borderTop: '1px solid token(colors.border.light)',
	display: 'flex',
	alignItems: 'center',
	padding: '0 12px',
	fontSize: 'xs',
	color: 'text.muted',
	flexShrink: '0'
});

function fileTypeLabel(entry: FileEntry): string {
	if (entry.type === 'folder') return 'File folder';
	const map: Record<string, string> = {
		'.txt': 'Text Document',
		'.docx': 'Word Document',
		'.pdf': 'PDF Document',
		'.xlsx': 'Excel Spreadsheet',
		'.pptx': 'PowerPoint',
		'.png': 'PNG Image',
		'.jpg': 'JPEG Image',
		'.zip': 'ZIP Archive',
		'.exe': 'Application',
		'.ts': 'TypeScript File',
		'.js': 'JavaScript File',
		'.html': 'HTML Document',
		'.css': 'CSS Stylesheet'
	};
	return map[entry.ext ?? ''] ?? 'File';
}
</script>

<div class={appRoot}>
	<!-- Toolbar -->
	<div class={toolbar}>
		<button type="button" class={navBtn} onclick={goBack} disabled={historyIndex <= 0} aria-label="Back">
			<ChevronLeft size={16} strokeWidth={1.5} />
		</button>
		<button type="button" class={navBtn} onclick={goForward} disabled={historyIndex >= pathHistory.length - 1} aria-label="Forward">
			<ChevronRight size={16} strokeWidth={1.5} />
		</button>
		<button type="button" class={navBtn} onclick={goUp} aria-label="Up">
			<ChevronUp size={16} strokeWidth={1.5} />
		</button>

		<div class={addressBar}>
			{#each pathSegments as seg, i (i)}
				{#if i > 0}
					<ChevronRight size={10} color="#999" strokeWidth={1.5} />
				{/if}
				<span class={addressSegment}>{seg}</span>
			{/each}
		</div>

		<div class={viewToggle}>
			<button type="button" class={cx(viewBtn, viewMode === 'list' ? viewBtnActive : '')} onclick={() => (viewMode = 'list')} aria-label="List view">
				<List size={14} strokeWidth={1.5} />
			</button>
			<button type="button" class={cx(viewBtn, viewMode === 'grid' ? viewBtnActive : '')} onclick={() => (viewMode = 'grid')} aria-label="Grid view">
				<LayoutGrid size={14} strokeWidth={1.5} />
			</button>
		</div>
	</div>

	<div class={contentArea}>
		<!-- Navigation pane -->
		<div class={sidebarPane}>
			{#each folderTree as node (node.name)}
				<div>
					<div
						class={cx(treeItem, currentPath === node.path ? treeItemActive : '')}
						style="padding-left: 8px"
					>
						{#if node.children}
							<button type="button" class={treeExpandBtn} onclick={() => toggleNode(node.path)}>
								<ChevronDown size={12} strokeWidth={1.5} style="transform: rotate({expandedNodes.has(node.path) ? '0' : '-90'}deg); transition: transform 0.1s" />
							</button>
						{:else}
							<span style="width: 16px"></span>
						{/if}
						<button type="button" class={treeExpandBtn} style="width: auto; flex: 1; justify-content: flex-start; gap: 4px" onclick={() => navigateTo(node.path)}>📁 {node.name}</button>
					</div>
					{#if node.children && expandedNodes.has(node.path)}
						<div class={treeChildren}>
							{#each node.children as child (child.name)}
								<div>
									<div
										class={cx(treeItem, currentPath === child.path ? treeItemActive : '')}
									>
										{#if child.children}
											<button type="button" class={treeExpandBtn} onclick={() => toggleNode(child.path)}>
												<ChevronDown size={12} strokeWidth={1.5} style="transform: rotate({expandedNodes.has(child.path) ? '0' : '-90'}deg); transition: transform 0.1s" />
											</button>
										{:else}
											<span style="width: 16px"></span>
										{/if}
										<button type="button" class={treeExpandBtn} style="width: auto; flex: 1; justify-content: flex-start; gap: 4px" onclick={() => navigateTo(child.path)}>📁 {child.name}</button>
									</div>
									{#if child.children && expandedNodes.has(child.path)}
										<div class={treeChildren}>
											{#each child.children as grandchild (grandchild.name)}
												<button
													type="button"
													class={cx(treeItem, currentPath === grandchild.path ? treeItemActive : '')}
													onclick={() => navigateTo(grandchild.path)}
												>
													<span style="width: 16px"></span>
													📁 {grandchild.name}
												</button>
											{/each}
										</div>
									{/if}
								</div>
							{/each}
						</div>
					{/if}
				</div>
			{/each}
		</div>

		<!-- Main file area -->
		<div class={mainPane}>
			{#if currentFiles.length === 0}
				<div class={emptyFolder}>This folder is empty.</div>
			{:else if viewMode === 'list'}
				<div class={listHeader}>
					<div class={listHeaderCell}>Name</div>
					<div class={listHeaderCell}>Date modified</div>
					<div class={listHeaderCell}>Type</div>
					<div class={listHeaderCell}>Size</div>
				</div>
				{#each currentFiles as entry (entry.name)}
					<div
						class={fileRow}
						role="row"
						tabindex="0"
						ondblclick={() => { if (entry.type === 'folder') navigateTo(currentPath + '\\' + entry.name); }}
						onkeydown={(e) => { if (e.key === 'Enter' && entry.type === 'folder') navigateTo(currentPath + '\\' + entry.name); }}
					>
						<div class={fileName}>
							<span class={fileIcon}>
								{#if entry.type === 'folder'}📁{:else if entry.icon === 'image'}🖼️{:else if entry.icon === 'code'}📄{:else if entry.icon === 'archive'}📦{:else}📃{/if}
							</span>
							{entry.name}
						</div>
						<div class={fileCell}>{entry.modified}</div>
						<div class={fileCell}>{fileTypeLabel(entry)}</div>
						<div class={fileCell}>{entry.size ?? ''}</div>
					</div>
				{/each}
			{:else}
				<div class={gridView}>
					{#each currentFiles as entry (entry.name)}
						<div
							class={gridItem}
							role="gridcell"
							tabindex="0"
							ondblclick={() => { if (entry.type === 'folder') navigateTo(currentPath + '\\' + entry.name); }}
							onkeydown={(e) => { if (e.key === 'Enter' && entry.type === 'folder') navigateTo(currentPath + '\\' + entry.name); }}
						>
							<span style="font-size: 28px">
								{#if entry.type === 'folder'}📁{:else if entry.icon === 'image'}🖼️{:else if entry.icon === 'code'}📄{:else if entry.icon === 'archive'}📦{:else}📃{/if}
							</span>
							<span class={gridItemLabel}>{entry.name}</span>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>

	<div class={statusBar}>
		{currentFiles.length} items
	</div>
</div>

#!/usr/bin/env bun
// @ts-check
/**
 * Unified icon codegen script.
 *
 * Reads icon source data (SVG path dictionaries, .svg files, etc.) and generates
 * individual .svelte wrapper components + barrel index.ts files.
 *
 * Usage:
 *   bun scripts/generate-icons.ts          # all modes
 *   bun scripts/generate-icons.ts --mdl2   # MDL2 path icons only
 */

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');
const ICONS_DIR = join(ROOT, 'src/lib/icons');

const GENERATED_HEADER = '// @generated — do not edit. Regenerate with `bun run icons:generate`';

function toPascalCase(name: string): string {
	return name.replace(/(^|[^a-zA-Z0-9])([a-zA-Z])/g, (_, _sep, ch) => ch.toUpperCase());
}

function writeIfChanged(path: string, content: string): boolean {
	try {
		const existingContent = readFileSync(path, 'utf-8');
		if (existingContent === content) return false;
	} catch {
		// File doesn't exist yet
	}
	writeFileSync(path, content, 'utf-8');
	return true;
}

async function generateMdl2() {
	const outDir = join(ICONS_DIR, 'windows10');
	mkdirSync(outDir, { recursive: true });

	const { mdl2Paths } = await import(join(ICONS_DIR, '_paths/mdl2.ts'));

	const entries = Object.entries(mdl2Paths) as [string, string][];
	const components: { pascalName: string; fileName: string }[] = [];

	let written = 0;

	for (const [camelName, pathData] of entries) {
		if (/["<>]/.test(pathData)) {
			throw new Error(`Icon "${camelName}" contains unsafe characters in path data`);
		}
		const pascalName = toPascalCase(camelName);
		const fileName = `${pascalName}.svelte`;
		components.push({ pascalName, fileName });

		const svelteContent = `<script lang="ts">
${GENERATED_HEADER}
import type { IconProps } from '../types';
import SvgBase from '../SvgBase.svelte';

let { size, color, class: className }: IconProps = $props();
</script>

<SvgBase path="${pathData}" {size} {color} class={className} />
`;
		if (writeIfChanged(join(outDir, fileName), svelteContent)) {
			written++;
		}
	}

	const indexLines = [GENERATED_HEADER, ''];
	for (const { pascalName, fileName } of components) {
		const moduleName = fileName.replace('.svelte', '');
		indexLines.push(`export { default as ${pascalName} } from './${moduleName}.svelte';`);
	}
	indexLines.push('');

	if (writeIfChanged(join(outDir, 'index.ts'), indexLines.join('\n'))) {
		written++;
	}

	console.log(`mdl2: ${components.length} icons, ${written} files written`);
}

/** Future: reads .svg files, runs SVGO, generates .svelte wrappers with inlined SVG markup. */
async function generateSvg() {
	console.log('svg: not yet implemented');
}

/** Future: downloads Twemoji SVGs by codepoint, optimizes, wraps as .svelte components. */
async function generateEmoji() {
	console.log('emoji: not yet implemented');
}

const args = process.argv.slice(2);
const all = args.length === 0 || args.includes('--all');

const tasks: Promise<void>[] = [];

if (all || args.includes('--mdl2')) tasks.push(generateMdl2());
if (all || args.includes('--svg')) tasks.push(generateSvg());
if (all || args.includes('--emoji')) tasks.push(generateEmoji());

if (tasks.length === 0) {
	console.error('Usage: bun scripts/generate-icons.ts [--mdl2] [--svg] [--emoji] [--all]');
	process.exit(1);
}

await Promise.all(tasks);

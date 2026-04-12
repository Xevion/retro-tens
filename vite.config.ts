import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	clearScreen: false,
	server: {
		fs: { allow: ['styled-system'] },
		watch: {
			ignored: ['**/.svelte-kit/**', '**/styled-system/**']
		}
	},
	test: {
		include: ['tests/**/*.test.ts']
	}
});

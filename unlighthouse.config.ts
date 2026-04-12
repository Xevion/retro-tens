import { defineConfig } from 'unlighthouse';

export default defineConfig({
	site: 'http://localhost:4173',
	scanner: {
		device: 'desktop',
		samples: 1,
		throttle: false,
		skipJavascript: false
	},
	ci: {
		buildStatic: false,
		reporter: 'jsonExpanded'
	},
	outputPath: '.unlighthouse'
});

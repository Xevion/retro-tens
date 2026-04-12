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
		reporter: 'jsonExpanded',
		budget: {
			performance: 80,
			accessibility: 80,
			'best-practices': 95,
			seo: 85
		}
	},
	outputPath: '.unlighthouse'
});

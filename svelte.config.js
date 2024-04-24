import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// default options are suitable for most applications
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	},
	preprocess: vitePreprocess()
};

export default config;

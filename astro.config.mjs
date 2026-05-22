// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import rehypeKatex from 'rehype-katex';
import remarkDisplayMath from './src/config/remarkDisplayMath.mjs';
import remarkMath from 'remark-math';
import remarkWikiLinks from './src/config/remarkWikiLinks.mjs';

// https://astro.build/config
export default defineConfig({
	markdown: {
		remarkPlugins: [remarkMath, remarkDisplayMath, remarkWikiLinks],
		rehypePlugins: [rehypeKatex],
	},
	i18n: {
		defaultLocale: 'zh',
		locales: ['zh', 'en'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});

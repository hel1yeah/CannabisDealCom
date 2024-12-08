// https://nuxt.com/docs/api/configuration/nuxt-config

import Aura from '@primevue/themes/aura';
import svgLoader from 'vite-svg-loader';
import { definePreset } from '@primevue/themes';

const NyPreset = definePreset(Aura, {
	semantic: {
		primary: {
			50: '{amber.50}',
			100: '{amber.100}',
			200: '{amber.200}',
			300: '{amber.300}',
			400: '{amber.400}',
			500: '{amber.500}',
			600: '{amber.600}',
			700: '{amber.700}',
			800: '{amber.800}',
			900: '{amber.900}',
			950: '{amber.950}',
		},
		colorScheme: {
			light: {
				primary: '{amber.500}',
			},
			// dark: {
			// 	primary: '{primary.500}',
			// },
		},
	},
});

export default defineNuxtConfig({
	app: {
		head: {
			title: 'hel1_yeah',
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
		},
	},
	css: ['~/assets/styles/main.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/styles/_variables.scss" as *;',
				},
			},
		},
		plugins: [require('tailwindcss-primeui'), svgLoader()],
	},
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: [
		'@nuxt/fonts',
		'@nuxt/image',
		'nuxt-svgo-loader',
		'@primevue/nuxt-module',
	],
	primevue: {
		options: {
			theme: {
				preset: NyPreset,
				options: {
					prefix: 'prime',
					darkModeSelector: 'system',
					cssLayer: {
						name: 'primevue',
						order: 'tailwind-base, primevue, tailwind-utilities',
					},
				},
			},
		},
	},
	fonts: {
		defaults: {
			weights: [200, 400, 800],
			styles: ['normal'],
		},
		devtools: true,
	},
});

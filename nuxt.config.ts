// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
				app: {
								head: {
												title: 'hel1_yeah',
												charset: 'utf-8',
												viewport: 'width=device-width, initial-scale=1',
								},
				},
				css: ['~/assets/styles/main.scss'],
				compatibilityDate: '2024-11-01',
				devtools: { enabled: true },
				modules: ['@nuxt/fonts', '@nuxt/image'],
				fonts: {
								defaults: {
												weights: [200, 400, 800],
												styles: ['normal'],
								},
								devtools: true,
				},
});
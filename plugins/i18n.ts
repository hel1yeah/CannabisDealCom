import { createI18n } from 'vue-i18n';

function getLocales() {
	const supportedLocales = process?.env?.NUXT_APP_LOCALES
		? process?.env?.NUXT_APP_LOCALES.split(',')
		: ['en'];

	return supportedLocales;
}

function loadLocaleMessages(locale: string): Record<string, any> {
	const modules = import.meta.glob('@/locales/*/*.json', { eager: true });

	const supportedLocales = getLocales();
	const isSupportedLocale = supportedLocales.includes(locale) || 'en';

	const messages: Record<string, any> = {};

	for (const module in modules) {
		const moduleParts = module.split('/');
		const moduleLocale = moduleParts[2];
		const nameModuleJson = moduleParts[3];
		const moduleName = nameModuleJson.split('.')[0];

		if (moduleLocale === locale && isSupportedLocale) {
			messages[moduleName] = modules[module];
		}
	}

	return messages;
}

export default defineNuxtPlugin(({ vueApp }) => {
	const messages = {
		en: loadLocaleMessages('en'),
		uk: loadLocaleMessages('uk'),
		th: loadLocaleMessages('th'),
	};

	const i18n = createI18n({
		legacy: false,
		globalInjection: true,
		locale: 'en',
		fallbackLocale: 'en',
		messages,
	});

	vueApp.use(i18n);
});

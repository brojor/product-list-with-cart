// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	modules: ['@nuxtjs/google-fonts', "@pinia/nuxt"],
	googleFonts: {
		families: {
			'Red Hat Text': [400, 600, 700],
		},
	},
  css: ['~/assets/styles.css'],
	app: {
		head: {
			title: 'Product list with cart',
			htmlAttrs: {
				lang: 'en',
			},
		},
	}
})
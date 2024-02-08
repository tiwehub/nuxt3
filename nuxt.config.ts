export default defineNuxtConfig({
	app: {
		head: {
			charset: 'utf-16',
			title: 'Профилайн | Лакокрасочные материалы',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content:
						'Профилайн - ваш надежный партнер в мире лакокрасочных материалов. Широкий ассортимент высококачественных красок, лаков и материалов для обработки поверхностей.',
				},
				{
					hid: 'keywords',
					name: 'keywords',
					content:
						'Профилайн, лакокрасочные материалы, краски, лаки, обработка поверхностей, строительные материалы',
				},
				{
					hid: 'viewport',
					name: 'viewport',
					content: 'width=device-width, initial-scale=1.0',
				},
				{ name: 'color-scheme', content: 'light', hid: 'color-scheme' },
				{ hid: 'robots', name: 'robots', content: 'index, follow' },
				{ hid: 'author', name: 'author', content: 'tiwehub' },
				{
					hid: 'og:title',
					property: 'og:title',
					content: 'Профилайн | Лакокрасочные материалы',
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content:
						'Профилайн - ваш партнер в мире лакокрасочных материалов. Широкий ассортимент высококачественных красок, лаков и материалов для обработки поверхностей.',
				},
				{
					hid: 'og:image',
					property: 'og:image',
					content: 'ссылка на изображение вашего логотипа или продукции',
				},
				{
					hid: 'og:url',
					property: 'og:url',
					content: 'полный URL вашего сайта',
				},
				{ hid: 'og:type', property: 'og:type', content: 'website' },
				{
					hid: 'twitter:title',
					name: 'twitter:title',
					content: 'Профилайн | Лакокрасочные материалы',
				},
				{
					hid: 'twitter:description',
					name: 'twitter:description',
					content:
						'Профилайн - ваш партнер в мире лакокрасочных материалов. Широкий ассортимент высококачественных красок, лаков и материалов для обработки поверхностей.',
				},
				{
					hid: 'twitter:image',
					name: 'twitter:image',
					content: 'ссылка на изображение вашего логотипа или продукции',
				},
			],
		},
	},
	devtools: { enabled: false },
	modules: ['nuxt-primevue', '@nuxt/image-edge'],
	image: {
		dir: 'assets/img',
	},
	primevue: {
		usePrimeVue: true,
		options: {
			unstyled: false,
			ripple: true,
		},
		cssLayerOrder: 'tailwind-base,primevue, tailwind-utilities',
		directives: {
			include: ['Ripple', 'Tooltip'],
		},
	},
	css: ['~/assets/style/main.scss', '~/assets/style/theme.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
})

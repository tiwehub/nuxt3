/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'false',
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
		'./app.vue',
		'./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}',
	],
	theme: {
		container: {
			screens: {
				sm: '1000px',
				md: '1000px',
				lg: '940px',
				xl: '1160px',
				'2xl': '1160px',
			},
		},
	},
	plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"intense-sky": "#007DFE",
				"intense-aqua": "#219EBC",
				"intense-dark": "#023047",
				"intense-apricot": "#FFB703",
				"intense-orange": "#FB8500"
			},
		},
	},
	plugins: [],
}

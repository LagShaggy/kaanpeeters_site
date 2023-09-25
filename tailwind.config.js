/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			title: ['"Bricolage Grotesque"', 'sans-serif'],
			text: ['Raleway', 'sans-serif'],
			navBar: ['"Tilt Prism"', 'cursive'],
			//poem: ['"Dancing Script"', 'cursive']
			poem: ['Raleway', 'sans-serif']
		}
	},
	plugins: []
};

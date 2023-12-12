/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	darkMode: 'class',
	theme: {
		screens: {
			xl: { max: '1449.99px' },
			lg: { max: '1199.99px' },
			md: { max: '991.99px' },
			sm: { max: '767.99px' },
			xs: { max: '374.99px' },
		},
		container: {
			center: true,
			padding: '15px',
		},
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				redhat: ['Red Hat Display', 'sans-serif'],
			},
			colors: {
				body: '#00040F',
			},
			keyframes: {
				'fade-in': {
					from: {
						opacity: 0,
					},
					to: {
						opacity: 1,
					},
				},
			},
			animation: {
				fadeIn: 'fade-in .3s ease',
			},
			backgroundImage: {
				'automate-gradient':
					'linear-gradient(166deg, rgba(4, 26, 50, 0.99) 4.86%, rgba(12, 18, 24, 0.99) 104.78%)',
				'teams-gradient':
					'linear-gradient(0deg,rgba(45, 19, 37, 0.2) 0%,rgba(45, 19, 37, 0.2) 100%),linear-gradient(166deg,rgba(23, 14, 25, 0.99) 4.86%,rgba(12, 18, 24, 0.99) 104.78%)',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}

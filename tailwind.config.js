// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
			"xs": "475px",
			...defaultTheme.screens,
		},
    extend: {
			fontFamily: {
				"sans": ["Nunito", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				"c-primary": "#a4593c"
			}
		},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require("daisyui")
  ],
}

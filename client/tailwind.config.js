/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				sg: "360px",
				se: "375px",
				xr: "414px",
				xs: "480px",
				cs: "590px",
				ss: "620px",
				sm: "768px",
				mm: "987px",
				md: "1060px",
				lg: "1200px",
				xl: "1700px",
			},
		},
	},
	plugins: [],
};

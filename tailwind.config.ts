import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./node_modules/flowbite/**/*.js",
    './node_modules/preline/preline.js',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato'],
        'heading': ['Cormorant Garamond']
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('preline/plugin'),
  ],
} satisfies Config

export default config
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
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
        'heading': ['Playfair Display']
      }
    },
  },
  plugins: [require('preline/plugin'),],
} satisfies Config

export default config
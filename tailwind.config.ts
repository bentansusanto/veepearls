import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
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
  plugins: [],
} satisfies Config

export default config
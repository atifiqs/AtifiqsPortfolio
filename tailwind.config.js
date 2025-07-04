/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#38bdf8',
      },
      fontFamily: {
        pacifico: ['"Pacifico"', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}

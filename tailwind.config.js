/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        darkBg: '#0C0C0C',
        lightText: '#D7E2EA',
        mutedGray: '#646973',
        highlightGray: '#BBCCD7',
      },
    },
  },
  plugins: [],
}
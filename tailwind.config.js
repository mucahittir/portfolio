/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          light: '#38bdf8',
          DEFAULT: '#06b6d4',
          hover: '#0891b2',
          dark: '#0e7490',
          glow: 'rgba(6, 182, 212, 0.25)',
        },
        dark: {
          bg: '#0a0f1d',
          card: '#111827',
          surface: '#172136',
          border: '#1f293d',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin': 'spin 3s linear infinite',
        'spin2': "spin 7s linear infinite"
      }
    },
  },
  plugins: [],
}
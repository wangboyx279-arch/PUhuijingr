/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#165DFF',
        secondary: '#FF7D00',
        textPrimary: '#1D2129',
        textSecondary: '#4E5969',
        bgPage: '#F2F3F5',
        bgCard: '#FFFFFF',
      },
    },
  },
  plugins: [],
}

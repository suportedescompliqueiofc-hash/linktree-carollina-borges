/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rose-gold': '#D4737D',
        'blush': '#EDBFC3',
        'petal': '#F7E8EB',
        'dusty-rose': '#C99A9A',
        'cream': '#FCF5F6',
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'Georgia', 'serif'],
        'sans': ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 24px -4px rgba(183, 110, 121, 0.15)',
        'glow': '0 0 20px rgba(183, 110, 121, 0.2)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
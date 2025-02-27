/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-out': 'fadeOut 3s ease-in-out forwards',
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: '0.8' },
          '50%': { opacity: '0.8' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

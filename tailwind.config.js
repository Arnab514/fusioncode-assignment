/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        md: '1025px', // Ensure this matches your design requirements
      },
    },
  },
  plugins: [],
}


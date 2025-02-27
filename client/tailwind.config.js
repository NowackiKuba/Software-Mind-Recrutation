/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#f3f4f6',
      },
      screens: {
        xs: '500px',
      },
    },
  },
  plugins: [],
};

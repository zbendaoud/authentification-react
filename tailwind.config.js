/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'green-primary': '#006C52',
        'vert-claire': '#C5E5CA',
        'gris-claire': '#979494'
      }
    }
  },
  plugins: []
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors : {
        'neutralSilver': '#F5F5F7FA',
        'neutralDGrey': '#4D4D4D',
        'brandPrimary': '#863ED5',
        'neutralGrey': '#717171',
        'grey900': '#18191F',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}


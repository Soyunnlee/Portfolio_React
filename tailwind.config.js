/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  plugins: [require('tw-elements/dist/plugin')],
  theme: {
    extend: {
      screens: {
        pc: '1920px',
        hd: '2560px',
      },
    },
  },
};

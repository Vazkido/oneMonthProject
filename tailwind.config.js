/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        input: {
          "@apply border border-black": "", //Applies black border to all inputs
        },
        label: {
          "@apply text-white font-medium": "",
        },
      });
    },
  ],
};

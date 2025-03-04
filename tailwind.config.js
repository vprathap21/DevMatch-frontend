/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["valentine", "retro"],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};

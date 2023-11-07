/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontSize: {
      xs: ["11px", "15px"],
      sm: ["14px", "22px"],
      base: ["16px", "28px"],
      lg: ["20px", "32px"],
      xl: ["24px", "32px"],
    },
  },
  plugins: [],
};

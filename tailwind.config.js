/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "customblack-1": "rgba(2, 6, 12, 0.75)",
        "customblack-2": "rgba(2, 6, 12, 0.6)",
        "customblack-3": "#3e4152",
        "customcolor-4": "rgba(40,44,63,.45)",
        "customcolor-5": "#7e808c",
        "customcolor-6": "#282c3f",
      },
      fontSize: {
        xs: ["11px", "15px"],
        sm: ["14px", "22px"],
        base: ["16px", "28px"],
        lg: ["20px", "32px"],
        xl: ["24px", "32px"],
      },
    },
  },
  plugins: [],
};

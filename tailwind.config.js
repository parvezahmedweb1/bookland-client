/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "2.5rem",
      },
    },
    extend: {
      colors: {},
    },
  },
  plugins: [],
};

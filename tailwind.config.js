/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-p": "var(--color-primary)",
        "color-p-d": "var(--color-primary-dark)",
        "color-p-l": "var(--color-primary-light)",
        "color-g-l2": "var(--color-grey-light-2)",
        "color-g-l": "var(--color-grey-light)",
        "color-g": "var(--color-grey)",
        "color-g-d": "var(--color-grey-dark)",
        "color-w": "var(--color-white)",
        "color-b": "var(--color-black)",
        "color-s": "var(--color-secondary)",
      },
    },
    screens: {
      'sm': {'max': '20em'},
      'md': {'max': '48em'}
    }
  },
  plugins: [],
};

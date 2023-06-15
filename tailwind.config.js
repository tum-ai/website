/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EDE8FC",
          100: "#DFD6FA",
          200: "#BCA9F4",
          300: "#9C80EF",
          400: "#7C57EA",
          500: "#5A2DE5",
          600: "#4318C3",
          700: "#321291",
          800: "#210C5F",
          900: "#110632",
          950: "#080317",
        },
      },
      boxShadow: {
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'xl-inner': 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.06), inset 0 2px 10px 0 rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};

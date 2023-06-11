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
          50: "#eff3fe",
          100: "#e2e7fd",
          200: "#cbd3fa",
          300: "#abb7f6",
          400: "#8991f0",
          500: "#640cf2",
          600: "#5c51da",
          700: "#4d42c0",
          800: "#40389b",
          900: "#37347b",
          DEFAULT: "#1e1b40",
        },
      },
    },
  },
  plugins: [],
};

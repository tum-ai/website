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
        blue: {
          50: "#E2E7F4",
          100: "#C8D3EA",
          200: "#91A6D4",
          300: "#5677BE",
          400: "#375390",
          500: "#223358",
          600: "#1B2946",
          700: "#151E35",
          800: "#0E1525",
          900: "#070B12",
          950: "#030407",
        },
        purple: {
          50: "#F6EDFC",
          100: "#EDDBFA",
          200: "#DAB8F5",
          300: "#C894F0",
          400: "#B875EB",
          500: "#A450E6",
          600: "#891FDB",
          700: "#6517A1",
          800: "#430F6B",
          900: "#220836",
          950: "#11041B",
        },
      },
    },
  },
  plugins: [],
};

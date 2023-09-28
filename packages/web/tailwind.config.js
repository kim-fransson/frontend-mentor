export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "hanken-grotesk": ["Hanken Grotesk Variable", "sans-serif"],
        outfit: ["Outfit Variable", "sans-serif"],
        "roboto-flex": ["Roboto Flex Variable", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        tomato: {
          100: "hsl(4, 100%, 7%)",
          200: "hsl(4, 100%, 17%)",
          300: "hsl(4, 100%, 27%)",
          400: "hsl(4, 100%, 37%)",
          500: "hsl(4, 100%, 47%)",
          600: "hsl(4, 100%, 57%)",
          700: "hsl(4, 100%, 67%)",
          800: "hsl(4, 100%, 77%)",
          900: "hsl(4, 100%, 87%)",
        },
      },
    },
  },
  plugins: [],
};

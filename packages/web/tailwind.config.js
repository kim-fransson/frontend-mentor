import tailwindcssAnimate from "tailwindcss-animate";
import tailwindcssAnimated from "tailwindcss-animated";
import headlessui from "@headlessui/tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "hanken-grotesk": ["Hanken Grotesk Variable", "sans-serif"],
        outfit: ["Outfit Variable", "sans-serif"],
        "roboto-flex": ["Roboto Flex Variable", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        inter: ["Inter Variable", "sans-serif"],
        "plus-jakarta-sans": ["Plus Jakarta Sans Variable", "sans-serif"],
        "kumbh-sans": ["Kumbh Sans Variable", "sans-serif"],
        fraunces: ["Fraunces Variable", "sans-serif"],
        montserrat: ["Montserrat Variable", "sans-serif"],
        manrope: ["Manrope Variable", "sans-serif"],
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
        jacarta: {
          100: "hsl(257, 27%, 6%)",
          200: "hsl(257, 27%, 16%)",
          300: "hsl(257, 27%, 26%)",
          400: "hsl(257, 27%, 36%)",
          500: "hsl(257, 27%, 46%)",
          600: "hsl(257, 27%, 56%)",
          700: "hsl(257, 27%, 66%)",
          800: "hsl(257, 27%, 76%)",
          900: "hsl(257, 27%, 86%)",
        },
      },
    },
  },
  plugins: [tailwindcssAnimated, tailwindcssAnimate, headlessui],
};

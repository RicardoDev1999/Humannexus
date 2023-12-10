/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx}"
  ],
  theme: {
    extend: {
      screens: {
        sm: "356px",
        md: "756px",
        lg: "948px",
        xl: "1120px",
      },
      width: {
        17: "4.25rem",
        70: "17.5rem",
        42.5: "10.625rem",
      },
      height: {
        17: "4.25rem",
        70: "17.5rem",
        20.5: "5.125rem",
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        h: {
          900: "#006838",
          800: "#009444",
          700: "#26A460",
          600: "#2BB673",
          500: "#BFE9D5",
          400: "#D9D9D9",
          300: "#C5C5C6",
        },
      },
      boxShadow: {
        header: "0px 2px 2px 0px rgba(0, 0, 0, 0.25)",
        button: "0px 2px 8px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [typography],
};

/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

const fractions = Array.from({ length: 12 }, (_, i) => `${i+1}/12`);
const breakpoints = ['', 'sm:', 'md:', 'lg:', 'xl:', '2xl:'];

const widthClasses = breakpoints.flatMap(bp =>
  fractions.map(f => `${bp}w-${f}`)
);

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx}"
  ],
  theme: {
    extend: {
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
      boxShadow: {
        header: "0px 2px 2px 0px rgba(0, 0, 0, 0.25)",
        button: "0px 2px 8px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [typography],
};

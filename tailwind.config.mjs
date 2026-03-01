/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx}"
  ],
  safelist: [
    'w-1/12', 'w-2/12', 'w-3/12', 'w-4/12', 'w-5/12', 'w-6/12',
    'w-7/12', 'w-8/12', 'w-9/12', 'w-10/12', 'w-11/12', 'w-12/12',
    'gap-0', 'gap-2', 'gap-4', 'gap-6', 'gap-8', 'gap-10', 'gap-12',
    'gap-14', 'gap-16', 'gap-18', 'gap-20', 'gap-22', 'gap-24', 'gap-26', 
    'gap-28', 'gap-30'
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

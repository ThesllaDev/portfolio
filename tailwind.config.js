/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        firaCode: ["var(--font-fira-code)", "serif"],
      },
    },
    colors: {
      white: "#F3F3F3",
      blue: "#0A2240",
      red: "#DB0032",
      black: "#030303",
    },
  },
  plugins: [],
};

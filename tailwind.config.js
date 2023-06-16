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
        Roboto: ["Roboto", "sans-serif"],
        Yellowtail: ["Yellowtail", "sans-serif"],
        "Open Sans": ["Open Sans", "sans-serif"],
      },
      colors: {
        "primary-green": "#274C5B",
        "green-light": "#7EB693",
        "secondary-yellow": "#EFD372",
        "grey-text": "#525C60",
        "grey-light": "#F9F8F8",
      },
      backgroundImage: {
        "nature-bg": "url(/header-bg.png)",
      },
    },
  },
  plugins: [],
};

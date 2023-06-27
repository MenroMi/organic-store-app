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
        "primary-green-darker": "#1e3d4a",
        "primary-red": "#823333",
        "green-light": "#7EB693",
        "green-darker": "#649e7a",
        "red-light": "#b87272",
        "secondary-yellow": "#EFD372",
        "grey-text": "#525C60",
        "grey-light": "#F9F8F8",
      },
      backgroundImage: {
        "nature-bg": "url(/header-bg.png)",
        "testimonial-bg": "url(/Testimonial-bg.png)",
        "eco-friendly-bg": "url(/eco-friendly-frame-bg.png)",
        "newsletter-img": "url(/subscribe-frame-bg.png)",
        "juice-bg": "url(/juice.png)",
        "food-bg": "url(/food.png)",
        "cookie-bg": "url(/cookies.png)",
        "search-icon": "url(/icons/search-bar.svg)",
        "register-bg": "url(/register-bg.jpg)",
        "login-bg": "url(/login-bg.jpg)",
        "forgot-pass-bg": "url(/forgot-bg.jpg)",
      },
    },
  },
  plugins: [],
};

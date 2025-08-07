/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,vue,ts}",
    "./app/**/*.{js,vue,ts}",
    "./components/**/*.{js,vue,ts}",
    "./pages/**/*.{js,vue,ts}",
    "./layouts/**/*.{js,vue,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        "hanken-grotesk": ["Hanken Grotesk", "sans-serif"],
        "futura-hv": ["Inter", "Futura Hv BT", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: {
          200: "#0084F8",
          300: "#0066CC",
          400: "#1C3666",
          50: "#EFF6FF",
          500: "#138dee",
          600: "#163f7f",
          700: "#1b4e9c",
        },
        brand: {
          300: "#204496",
        },
        gray: {
          900: "#252525",
          6: "#1C1E1D",
          2: "#A9B6B3",
          600: "#7E7C7C",
        },
        blue: {
          50: "#EFF6FF",
          800: "#1e3a8a",
        },
        secondary: {
          50: "#F3EFF9",
          800: "#2F106D",
        },
        neutral: {
          212121: "#212121",
          400: "#7E8387",
        },
        border: {
          c9d6df: "#C9D6DF",
        },
      },
      borderRadius: {
        button: "8px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".section-title": {
          "font-weight": "normal",
          "font-size": "18px",
          "line-height": "20px",
          "letter-spacing": "0px",
          color: "#1C1E1D",
          "margin-bottom": "1.5rem",
        },
        ".list-item": {
          "font-weight": "normal",
          "font-size": "16px",
          "line-height": "20px",
          "letter-spacing": "0px",
          color: "#1C1E1D",
        },
      });
    },
  ],
};

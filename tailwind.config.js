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
      },
      colors: {
        primary: {
          200: "#0084F8",
          50: "#EFF6FF",
        },
        gray: {
          900: "#252525",
          6: "#1C1E1D",
          2: "#A9B6B3",
        },
        blue: {
          50: "#EFF6FF",
          800: "#1e3a8a",
        },
        secondary: {
          50: "#F3EFF9",
          800: "#2F106D",
        },
      },
      borderRadius: {
        button: "8px",
      },
    },
  },
  plugins: [],
};

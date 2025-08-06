/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,vue,ts}",
    "./components/**/*.{js,vue,ts}",
    "./pages/**/*.{js,vue,ts}",
    "./layouts/**/*.{js,vue,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        primary: {
          200: "#0084F8",
        },
      },
      borderRadius: {
        button: "8px",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        colors: {
          "main-text": "#243c5a",
          "main-bg": "",
        },
        header_bg: "url('/media/mointains_panorama.jpeg')",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"], // Устанавливаем Open Sans как основной шрифт для sans-serif
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        helve: [
          "Helvetica Neue",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        lightGreen: "#25d366",
        lightGreenBackground: "#E6FFDA",
        beigeBackground: "#FCF5EB",
        darkGreenBackground: "#111B21",
        blackText: "#1c1e21",
        hrColor: "#33463f",
      },

      backgroundImage: {
        "hero-bg": "url('img/herosection.png')",
      },

      screens: {
        xs: { min: "320px", max: "640px" },
      },
    },
  },
  plugins: [],
};

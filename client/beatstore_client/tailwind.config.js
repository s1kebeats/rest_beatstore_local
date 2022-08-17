/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      1700: { max: "1700px" },
      1368: { max: "1368px" },
      1200: { max: "1200px" },
      700: { max: "700px" },
      600: { max: "600px" },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#7945fc",
          secondary: "#19161B",
          accent: "#FF0099",
          neutral: "#231F2D",
          "base-100": "#FFFFFF",
          info: "#5FB0F1",
          success: "#1FD693",
          warning: "#D3870D",
          error: "#E9777F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

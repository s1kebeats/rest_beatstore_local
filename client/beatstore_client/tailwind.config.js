/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      1590: { max: "1590px" },
      1370: { max: "1370px" },
      1150: { max: "1150px" },
      700: { max: "700px" },
      490: { max: "490px" },
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

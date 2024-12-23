/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "rgb(16, 15, 15)", //title
        color2: "rgb(64, 63, 63)", //card title
        color3: "rgb(112, 111, 111)", //card subtitle and form placeholder
        color4: "rgb(255, 193, 7)", //use it in button
        color5: "rgba(255, 193, 7, 0.05)", //footer bg color
      },
      fontFamily: {
        Rochester: "Rochester",
        Poppins: "Poppins",
      },
    },
  },
  plugins: [require("daisyui")],
};

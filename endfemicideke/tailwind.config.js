/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Quattrocento: ["Quattrocento", "serif"],
        AveriaSerifLibre: ["Averia Serif Libre", "serif"],
      },
    },
  },
  plugins: [],
};

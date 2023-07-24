/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        kBlue: "#176AE5",
        kDark: "#2F2F30",
        kGrey: "#98999A",
        kPink: "#EEBACB",
        kOrange: "#F67748",
        kBG: "#F9EFE4",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

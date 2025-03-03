/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#2a2a2a",
        mainBgColor: "#121212",
      },
      fontWeight: {
        extrabold: "1000",
      },
      rotate: {
        "y-180": "180deg",
      },
    },
  },
  plugins: [],
};

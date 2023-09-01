/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      vs: "510px",
      sm: "600px",
      md: "768px",
      ab: " 930px",
      lg: "976px",
      pg: "1050px",
      xl: "1440px",
    },
    extend: {
      colors: {
        lightBlue: "hsl(233, 100%, 69%)",
        strongCyan: "hsl(171, 66%, 44%)",
        grayishBlue: "hsl(201, 11%, 66%)",
        lightColor: "hsl(202, 21%, 93%)",
        darkGrayishBlue: "hsl(210, 10%, 33%)",
      },
      fonts: {
        buttonFont: "1.1rem",
      },
    },
  },
  plugins: [],
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "375px",
    },
    extend: {
      // colors
      colors: {
        primary: {
          paleBlue: "hsl(225, 100%, 94%)",
          brightBlue: "hsl(245, 75%, 52%)",
        },
        nuetral: {
          veryPaleBlue: "hsl(225, 100%, 98%)",
          desaturatedBlue: "hsl(224, 23%, 55%)",
          darkBlue: "hsl(223, 47%, 23%)",
        },
      },

      // fonts
      fontFamily: {
        redHat: "Red Hat Display, san serif",
      },

      // backgrounds
      backgroundImage: (theme) => ({
        patternDesktop:
          "url('/src/Asserts/order-summary-component-main/images/pattern-background-desktop.svg')",
        patternMobile:
          "url('/src/Asserts/order-summary-component-main/images/pattern-background-mobile.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

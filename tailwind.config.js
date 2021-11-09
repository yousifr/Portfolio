module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        MediumPurple: "#9381FF",
        MaximumBluePurple: "#B8B8FF",
        GhostWhite: "#F8F7FF",
        AntiqueWhite: "#FFEEDD",
        UnbleachedSilk: "#FFD8BE",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#C02669", // Empowered Magenta
        "primary-dark": "#883E5D", // Elegant Plum - useful for hover states
        "background-light": "#FDF2F7", // Rose Essence
        "background-dark": "#4A1A2F", // Deep Velvet
        "neutral-light": "#FBEFF4", // Soft Blur
        "neutral-muted": "#E6C9D3", // Dusty Rose
        "neutral-deep": "#2D1821" // Dark Cocoa
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        serif: ["Playfair Display", "serif"]
      },
    },
  },
  plugins: [],
}

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
        primary: "#C4A484", // Updated to a more elegant, earthy/neutral tone (Classic Sand/Beige) or keep original blue if preferred. Let's start with a modern neutral palette as requested for "Professional". Actually, let's stick to the user's defined colors first to avoid jarring changes, then refine.
        // Reverting to the exact colors from index.html script to ensure consistency first.
        primary: "#2563eb",
        "background-light": "#f8f6f7",
        "background-dark": "#1f131a",
        "neutral-light": "#f4f2f3",
        "neutral-muted": "#e2dade",
        "neutral-deep": "#4a3541"
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        serif: ["Playfair Display", "serif"]
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      extend: {
        colors: {
          dark: "#323643",   // deep charcoal
          grayish: "#606470", // muted gray
          accent: "#93DEFF", // light cyan/blue
          light: "#F7F7F7",  // almost white
        },
      },
    },
    plugins: [],
}
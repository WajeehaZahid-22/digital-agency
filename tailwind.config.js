/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",              // Optional if using Vite
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {}
  }, // ✅ This comma was missing
  plugins: []
};

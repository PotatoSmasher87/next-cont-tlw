/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      sm: ['10px', '10px'],
      base: ['12px', '12px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    }
  },
  plugins: [],
}

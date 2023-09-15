/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  theme: {
    screen: {
      xsm:'350px',
      sm:'576px',
      md:'768px',
      lg:'992px',
      xl:'1200px',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
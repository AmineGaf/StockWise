/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens :{
        sm: '556px',
        md: '768px',
        lg: '1024px',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slowBounce: "bounce 3s infinite",
      },
    },
  },
  plugins: [],
};


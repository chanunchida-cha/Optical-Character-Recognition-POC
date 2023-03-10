/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "button-disble": "#4E98DC80",
        button: "#4E98DC",
        "title-text": "#004729",
        "text-upload": "#4E98DC",
        "text-input": "#4D4D4D",
        "button-delete": "#EA5E5E",
        "button-add": "#0073DE",
        "text-amount": "#0073DE",
        "text-button-plus-minus": "#979797",
        box: " #FFFFFF",
        "border-box":"#E7E7E7"
      },
    },
  },
  plugins: [],
};

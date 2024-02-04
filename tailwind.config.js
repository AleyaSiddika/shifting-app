/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        "primary-50": "#F5F5FF",
        "primary-100": "#D6D6FF",
        "primary-200": "#B7B7FF",
        "primary-300": "#9797FF",
        "primary-400": "#7878FF",
        "primary-500": "#5858FF",
        "primary-600": "#4848F6",
        "primary-700": "#3737F5",
        "primary-800": "#2626F4",
        "primary-900": "#1515F3",
        "secondary-100": "#F0F0FF",
        "secondary-200": "#E0E0FF",
        "secondary-300": "#D1D1FF",
        "secondary-400": "#C1C1FF",
        "secondary-500": "#ACACFF",
        "secondary-600": "#9191F5",
        "secondary-700": "#7676F4",
        white: "#FFFFFF",
        black: "#0F0F0F",
        link: "#8A2BE2", // Purple color
        success: "#4ADF00",
        warning: "#FFA900",
        error: "#FD0C0F",
      },
    },
  },
  plugins: [],
};

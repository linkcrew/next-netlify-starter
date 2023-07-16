/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./pages/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "footer-white": "#eaeaea",
        "base-green": "#9DDAB9",
        "card-detail-green": "#CEF9DC",
        "base-black": "#333333",
        "base-gray": "#808080",
      },
    },
    fontFamily: {
      header: ["Hiragino Kaku Gothic ProN", "メイリオ", "sans-serif"],
    },
  },
  plugins: [],
};

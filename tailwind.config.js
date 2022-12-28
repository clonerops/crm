/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "IRANSans": ["IRANSans"],
        "IRANSansBold": ["IRANSansBold"],
        "IRANSansLight": ["IRANSansLight"],
        "IRANSansMedium": ["IRANSansMedium"],
        "IRANSansUltraLight": ["IRANSansUltraLight"],
      },
      colors: {
        "primary": "#FF5B00",
        "secondary": "#243763",
        "thirdy": "#FFEBB7",
        "fourty": "#AD8E70",
      }
    },
  },
  plugins: [],
}

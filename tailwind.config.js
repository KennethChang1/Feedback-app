/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        purple: "#AD1FEA",
        dark_grey: "#373F68",
        light_white: "#F2F4FF",
        "dark-blue": "#4661E6",
        "main-text": "#3A4374",
        "secondary-text": "#647196",
        blue: {
          light: "#F7F8FD",
        },
      },
    },
  },
  plugins: [],
};

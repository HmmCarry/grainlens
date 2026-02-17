/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Warm cream backgrounds — like rice paper
        grain: {
          50: "#FDFBF7",
          100: "#F7F2EA",
          200: "#EFE6D5",
          300: "#E0D3BA",
          400: "#C4AD85",
          500: "#A68B5B",
          600: "#7D6539",
          700: "#5C4A28",
          800: "#3D311B",
          900: "#231C10",
        },
        // Golden amber — action/accent color, like ripe paddy rice
        harvest: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },
        // Earth tones — warm browns for structure
        earth: {
          50: "#FBF7F1",
          100: "#F2E8D9",
          200: "#E4CFB1",
          300: "#D4B185",
          400: "#C49660",
          500: "#B07D44",
          600: "#9A6738",
          700: "#7E5130",
          800: "#68432C",
          900: "#573828",
        },
      },
    },
  },
  plugins: [],
};

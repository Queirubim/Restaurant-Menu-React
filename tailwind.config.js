/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Madimi One", "sans-serif"],
    },
    extend: {
      fontFamily: {
        mono: ["IBM Plex Mono", "monospace"],
      },
      backgroundImage: {
        home: "url(/landscape2.jpeg)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  purge: [
    './index.html',
    './src/**/*.{css,svelte}',
  ],
  content: ["./index.html", "./src/**/*.{svelte,js,ts}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {
      colors: {
        pirmary: "#DA7D4A",
        "pirmary-light": "#F7ECE1",
        dark: "#334155",
        secondary: "#94A3B8",
        gray: "#94A3B8",
        light: "#FDFCFB",
      },
      fontFamily: {
        'noto-sans': ['Noto Sans TC', 'sans-serif'],
      },
    },
  },
  plugins: [],
};


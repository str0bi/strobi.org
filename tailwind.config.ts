import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        'W95font': ['W95font', 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 1.2s linear infinite'
      }
    },
  },
  plugins: [],
} satisfies Config;

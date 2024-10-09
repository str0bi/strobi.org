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
      },
      colors: {
        'w95': '#c0c0c0',
        'w95blue': '#01807e',
        'w95window': '#464646',
      },
    },
  },
  plugins: [],
} satisfies Config;

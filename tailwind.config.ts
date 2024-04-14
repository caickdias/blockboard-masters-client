import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "main-purple": "#303f6b",
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(0)',     
            transitionTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'       
          },
          '50%': {
            transform: 'translateY(-20%)',
            transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'         
          }
        }
      },
      animation: {
        bounce: 'bounce 1s infinite'
      }
    },
  },
  plugins: [nextui()],
};
export default config;

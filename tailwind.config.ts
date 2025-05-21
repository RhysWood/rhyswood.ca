import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        NeueMontrealBook: ["NeueMontreal-Book", "sans-serif"],
        NeueMontrealRegular: ["NeueMontreal-Regular", "sans-serif"],
        NeueMontrealBold: ["NeueMontreal-Bold", "sans-serif"],
      },
      colors: {
        ricegreen: "#57fa8e",
        riceyellow: "#FFE74C",
        riceblack: "#1e1e1e",
        ricepink: "#FF5964",
        riceorange: "#ffbf41",
        ricegum: "#ffc1cf",
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
export default config;

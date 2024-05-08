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
        ricegreen: "#6dfeb0",
      },
    },
  },
  plugins: [],
};
export default config;

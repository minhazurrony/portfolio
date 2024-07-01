import type { Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["var(--font-ubuntu)"],
        ibm_plex_mono: ["var(--font-ibm-plex-mono)"],
        ...fontFamily,
      },
    },
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      bg_one: "#292F36",
      bg_two: "#1A1E23",
      brand_one: "#12F7D6",
      brand_two: "#98FAEC",
      grey: "#43454D",
      white: "#FFFFFF",
    },
  },
};
export default config;

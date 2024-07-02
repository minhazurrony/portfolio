import type { Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["var(--font-ubuntu)"],
        "ibm-plex-mono": ["var(--font-ibm-plex-mono)"],
        ...fontFamily,
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "bg-one": "#292F36",
      "bg-two": "#1A1E23",
      "brand-one": "#12F7D6",
      "brand-two": "#98FAEC",
      grey: "#43454D",
      white: "#FFFFFF",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
};
export default config;

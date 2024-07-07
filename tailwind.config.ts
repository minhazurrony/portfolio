import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["var(--font-ubuntu)"],
        "ibm-plex-mono": ["var(--font-ibm-plex-mono)"],
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
      red: "#EF233C",
    },
  },
};
export default config;

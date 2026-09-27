import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        encre: "#1A2332",
        corail: "#E8543A",
        "corail-dark": "#C43F28",
        ivoire: "#F7F3ED",
      },
      fontFamily: {
        titre: ["var(--font-titre)"],
        texte: ["var(--font-texte)"],
      },
    },
  },
  plugins: [],
};
export default config;

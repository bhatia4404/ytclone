import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        signBlue: "#065fda",
      },
      screens: {
        s: "680px",
        sbh: "775px",
        l: "1080px",

        vs: "610px", //till this 610px 1
        vm: "1080px", //till 1080px 2
        vl: "1495px", //till 1430px 3
      },
      fontSize: {
        xxs: "10px",
      },
      boxShadow: {
        "2xl": "-0px 35px 60px 15px rgba(0, 0, 0, 0.2)",
      },
      gridTemplateColumns: {
        max: "repeat(4, minmax(0, 1fr))",
      },
    },
    plugins: [],
  },
};
export default config;

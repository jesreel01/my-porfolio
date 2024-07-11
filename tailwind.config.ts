import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
   
    extend: {
      fontFamily: {
        sans: ["var(--font-hubot)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: colors.stone,
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        ".layout-sm": {
          "grid-template-columns": `1fr min(${theme("screens.sm")},100%) 1fr`,
        },
        ".layout-xl": {
          "grid-template-columns": `1fr minmax(auto,${theme(
            "spacing.60",
          )}) min(${theme("screens.sm")},100%) minmax(auto,${theme(
            "spacing.60",
          )}) 1fr`,
        },
      })
    }),
    require("@tailwindcss/forms"),
  ],

};
export default config;

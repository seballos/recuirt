import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;

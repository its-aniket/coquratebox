import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'default': 'all', // Default transition property
        'smooth': 'transform 5s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 5s ease-in-out', // Custom transition
      },
      transitionDelay: {
        '150ms': '150ms',
        '300ms': '300ms',
        '450ms': '450ms',
        '600ms': '600ms',
        '750ms': '750ms',
        // add more as needed
      },
      
      screens: {
        'tablet': '420px',
      },
      fontFamily: {
        pompier: ['Pompier', 'sans-serif'], // Add your custom font here
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        
      },
    },
  },
  plugins: [],
};
export default config;

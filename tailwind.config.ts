import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "inverse-on-surface": "#eaf1ff",
        "on-secondary-fixed": "#40000c",
        "on-tertiary": "#ffffff",
        "error-container": "#ffdad6",
        "primary-fixed": "#6ffbbe",
        "primary-fixed-dim": "#4edea3",
        "surface-variant": "#d3e4fe",
        "on-surface": "#0b1c30",
        "surface-bright": "#f8f9ff",
        "on-surface-variant": "#3c4a42",
        "secondary-fixed-dim": "#ffb3b6",
        "tertiary-fixed-dim": "#bec6e0",
        "tertiary": "#565e74",
        "surface-container": "#e5eeff",
        "on-tertiary-fixed-variant": "#3f465c",
        "surface": "#f8f9ff",
        "on-primary-container": "#00422b",
        "on-background": "#0b1c30",
        "on-primary-fixed-variant": "#005236",
        "surface-dim": "#cbdbf5",
        "primary-container": "#10b981",
        "surface-tint": "#006c49",
        "secondary": "#ba0035",
        "on-primary": "#ffffff",
        "inverse-primary": "#4edea3",
        "inverse-surface": "#213145",
        "on-secondary-container": "#fffbff",
        "outline-variant": "#bbcabf",
        "on-tertiary-fixed": "#131b2e",
        "on-secondary": "#ffffff",
        "secondary-container": "#e21e49",
        "surface-container-highest": "#d3e4fe",
        "secondary-fixed": "#ffdada",
        "outline": "#6c7a71",
        "on-secondary-fixed-variant": "#920028",
        "tertiary-fixed": "#dae2fd",
        "tertiary-container": "#9ba2bb",
        "error": "#ba1a1a",
        "surface-container-high": "#dce9ff",
        "on-error": "#ffffff",
        "on-primary-fixed": "#002113",
        "surface-container-low": "#eff4ff",
        "surface-container-lowest": "#ffffff",
        "on-tertiary-container": "#31394d",
        "primary": "#006c49",
        "on-error-container": "#93000a",
        "background": "#f8f9ff"
      },
      fontFamily: {
        "headline": ["var(--font-manrope)"],
        "body": ["var(--font-manrope)"],
        "label": ["var(--font-manrope)"]
      },
      borderRadius: {
        "DEFAULT": "0.125rem", 
        "lg": "0.25rem", 
        "xl": "0.5rem", 
        "full": "0.75rem"
      },
      backgroundImage: {
        "emerald-gradient": "linear-gradient(135deg, #006c49 0%, #10b981 100%)",
        "chart-grid": "linear-gradient(rgba(187, 202, 191, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(187, 202, 191, 0.1) 1px, transparent 1px)"
      }
    },
  },
  plugins: [],
};
export default config;

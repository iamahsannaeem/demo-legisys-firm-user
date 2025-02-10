import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        baseColor: "var(--base-color)",
        chatSection: "var(--color-chat-section)",
        primaryBtn: "var(--color-primary-btn)",
        disabledText: "var(--disabled-text)",
        secondary: "var(--color-secondary)",
        success: "var(--color-success)",
        error: "var(--color-error)",
        darkBaseColor: "var(--dark-base-color)",
        darkPrimary: "var(--dark-color-primary)",
        // primaryDark: "var(--color-primary-dark)",
        // primaryExtraDark: "var(--color-primary-extra-dark)",
        // secondaryDark: "var(--color-secondary-dark)",
        // secondaryExtraDark: "var(--color-secondary-extra-dark)",
        // warning: "var(--color-warning)",
        // info: "var(--color-info)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        customShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.2)",
      },
      borderColor: {
        customBorderColor: "lightgrey",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          xl: "1440px",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        notoSans: ["Noto Sans", "sans-serif"],
        sf: ["SF Pro Display", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;

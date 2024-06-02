import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '0.40em',
    },
    extend: {
      backgroundImage: {
        'darkEffect': "url('/iceberg/dark.svg')",
        'fadeEffect': "url('/iceberg/fade.svg')",
        'heroBg': "url('/background/heroBG.svg')",
        'howItWorksBg': "url('/background/howItWorks.svg')",
        'messageIcon': "url('/icons/message-icon.svg)"
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        filledEllipse : "#00A8FE",
        mutedEllipse : "#D9D9D9",
        topShade : "#AEDCEE",
        bottomShade : "#F4F5F0",
        videoBg : "#F4434D",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        color: {
          "0%": {
            backgroundImage: "url('/iceberg/fade.svg')",
            color: "#00A8FE",
            width: "330px",
            opacity: "100%"
          },
          "25%": {
            backgroundImage: "url('/iceberg/fade.svg')",
            color: "#122B2E",
            width: "330px",
            opacity: "40%"
          },

          "50%": {
            backgroundImage: "url('/iceberg/fade.svg')",
            color: "#122B2E",
            width: "330px",
            opacity: "80%"
          },
          "75%": {
            backgroundImage: "url('/iceberg/dark.svg')",
            color: "#122B2E",
            width: "330px",
            opacity: "100%"
          },
          "100%": {
            backgroundImage: "url('/iceberg/dark.svg')",
            color: "#122B2E",
            width: "330px",
            opacity: "100%"
          },
        },
        diamond: {
          "50%": { backgroundColor: "#AEDCEE" },
          "100%": { backgroundColor: "#FFFFFF" },
        },
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInFromBottom: {
          '0%': { transform: 'translateY(20%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        spin: 'spin 4s linear infinite',
        slideInFromLeft: 'slideInFromLeft 0.8s ease-out',
        slideInFromBottom: 'slideInFromBottom 0.8s',
        slideInFromRight: 'slideInFromRight 0.8s ease-out',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        color: "color 0.2s forwards",
        diamond: "diamond 0.2s forwards",
        marquee: "marquee 50s linear infinite",
        marquee2: "marquee2 50s linear infinite",
        reviewMarquee: "marquee 80s linear infinite",
        reviewMarquee2: "marquee2 80s linear infinite",
      },
      fontFamily: {
        ppmori: ["PPMori", "sans-serif"],
        ppeditorialnew: ["PPEditorialNew", "serif"],
      },
      boxShadow: {
        custom: "1px 1px 2px 0px #00000099",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

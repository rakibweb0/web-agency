import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "hero-bg": "url('/assets/heroBg.svg')",
          "reasons-bg": "url('/assets/reasonsBg.svg')",
          "review-bg": "url('/assets/reviewBg.svg')",
      },
      colors: {
        "primary": "#CEF369",
        "secondary": "#2F2F2F",
        "offWhite": "#F8F8F8",
        "text-color": "#363636"
      },
      fontFamily: {
        cal: ["var(--font-cal-sans)"],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        fontClamp96: "clamp(2rem, 0rem + 6.4vw, 6rem)",
        fontClamp66: "clamp(1.625rem, 0.375rem + 4vw, 4.125rem)",
        fontClamp32: "clamp(1.375rem, 1.0625rem + 1vw, 2rem)",
        fontClamp20: "clamp(1rem, 0.875rem + 0.4vw, 1.25rem)",
        fontClamp18: "clamp(1rem, 0.9375rem + 0.2vw, 1.125rem)",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
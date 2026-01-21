/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#6214d9",
        secondary: "#1aff75",
        background: "#ECE6E8",
        accent: "#ff0080", // Magenta-ish for gradients
        "text-dark": "#0d0d0d",
        "text-muted": "#928d89",
        "card-dark": "#0a0a2e", // Deep navy for cards
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to right, #ff9966, #ff5e62, #a18cd1, #fbc2eb)', // Placeholder for the multi-color
        'sweet-gradient': 'linear-gradient(90deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)', // Example
        'vivid-gradient': 'linear-gradient(135deg, #FF6B6B 0%, #a18cd1 50%, #4facfe 100%)', // Orange -> Purple -> Blue
      },
      fontFamily: {
        serif: ["Instrument Serif", "serif"],
        sans: ["Satoshi", "sans-serif"],
        accent: ["Satoshi", "sans-serif"],
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      },
    },
  },
  plugins: [],
};

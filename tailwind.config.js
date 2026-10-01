/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: '#D88F1E', light: '#E5A94B' },
        night: { DEFAULT: '#0B1B2B', deep: '#07121E', petrol: '#0E2A47' },
      },
      fontFamily: {
        // CSS variables are injected by next/font in app/layout.tsx.
        serat: ['var(--font-serat)', 'var(--font-cinzel)', 'Playfair Display', 'serif'],
        montserrat: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      boxShadow: { glow: '0 0 20px rgba(216,143,30,0.3)' },
    },
  },
  plugins: [],
};

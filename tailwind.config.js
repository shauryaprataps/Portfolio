/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        card: 'rgb(var(--color-card) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        text: 'rgb(var(--color-text) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        accent2: 'rgb(var(--color-accent-2) / <alpha-value>)',
        accent3: 'rgb(var(--color-accent-3) / <alpha-value>)'
      },
      boxShadow: {
        glass: 'var(--shadow-glass)',
        premium: 'var(--shadow-premium)'
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at 16% 18%, rgb(var(--color-accent) / 0.18), transparent 27%), radial-gradient(circle at 82% 12%, rgb(var(--color-accent-2) / 0.16), transparent 25%), radial-gradient(circle at 58% 70%, rgb(var(--color-accent-3) / 0.12), transparent 28%)'
      }
    }
  },
  plugins: []
}


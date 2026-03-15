import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#af4c0f',
        secondary: '#c16c37',
        accent: '#7a8f6b',
        neutral: '#b9c8ae',
        dark: '#1d3557',
        lightBlue: '#af4c0f',
        background: '#f4d8c8',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        safe: 'max(1rem, env(safe-area-inset-bottom))',
      },
      borderRadius: {
        lg: '0.5rem',
        xl: '1rem',
      },
      boxShadow: {
        soft: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}

export default config

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#00B894',
          600: '#00D26A',
          700: '#07A074'
        }
      },
      boxShadow: {
        glow: '0 0 45px rgba(0, 210, 106, 0.35)',
        soft: '0 15px 35px rgba(17, 24, 39, 0.12)'
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(120deg, #00B894 0%, #00D26A 100%)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#070b13',
        surface: '#0f1624',
        border: '#223148',
        text: '#d7e2f2',
        muted: '#9fb0c9',
        accent: '#6ea8ff'
      },
      boxShadow: {
        panel: '0 10px 30px rgba(0, 0, 0, 0.25)'
      }
    }
  },
  plugins: []
};

export default config;

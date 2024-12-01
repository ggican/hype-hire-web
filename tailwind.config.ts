import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        DEFAULT: '1200px',
        sm: '550px',
        xs: '100%',
        lg: '1200px',
        xl: '1200px',
      },
      padding: {
        DEFAULT: '24px',
        sm: '24px',
        xs: '24px',
        lg: '0',
        xl: '0',
      },
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        // 'gradient-blue': `linear-gradient(151.17deg, #26C2B9 8.69%, #288BE7 126.06%)`,
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;

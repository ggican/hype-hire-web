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
        DEFAULT: '16px',
        sm: '16px',
        xs: '16px',
        lg: '0',
        xl: '0',
      },
    },
    extend: {
      animation: {
        'fade-in-up': 'fadeInUp 500ms ease-out forwards', // Register the animation
        'fade-in-up-delay': 'fadeInUp 1000ms ease-out forwards', // Register the animation
        'fade-in': 'fadeIn 500ms ease-in forwards', // Animation name, duration, easing, and forwards for persistent effect
        'fade-in-delay': 'fadeIn 1000ms ease-in forwards', // Animation name, duration, easing, and forwards for persistent effect
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }, // Fade from 0% to 100% opacity
        },
      },
      boxShadow: {
        soft: '0px 15px 24px 0px rgba(0, 0, 0, 0.12)',
        lg: '0px 4px 6px -2px #10182808',
      },
      aspectRatio: {
        triangle: '1 / calc(1 / cos(30deg))', // If you want to use aspect ratio
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'btn-primary': '#4A77FF',
        // 'gradient-blue': `linear-gradient(151.17deg, #26C2B9 8.69%, #288BE7 126.06%)`,
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addComponents }: any) {
      addComponents({
        '.custom-clip-path': {
          clipPath: 'polygon(50% 0, 100% 100%, 0 100%)', // Custom clip-path
        },
      });
    },
  ],
};
export default config;

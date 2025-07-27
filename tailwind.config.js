/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8e7ff',
          100: '#d1cfff',
          200: '#a3a0ff',
          300: '#7570ff',
          400: '#4841ff',
          500: '#1a12ff',
          600: '#06006e',
          700: '#080089',
          800: '#060067',
          900: '#040044',
        },
        secondary: {
          50: '#f8f9fa',
          100: '#ebedf0',
          200: '#d4d8e0',
          300: '#b0b9c6',
          400: '#8895a7',
          500: '#66758a',
          600: '#4f5b70',
          700: '#404a5c',
          800: '#36404d',
          900: '#2f3643',
        },
        accent: {
          50: '#fff8f0',
          100: '#ffecd6',
          200: '#ffd7ad',
          300: '#ffb976',
          400: '#ff9a3d',
          500: '#ff7a14',
          600: '#ed5f07',
          700: '#c44a08',
          800: '#9c3c0f',
          900: '#7e3410',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'slide-down': 'slideDown 0.5s ease-in-out',
        'slide-left': 'slideLeft 0.5s ease-in-out',
        'slide-right': 'slideRight 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/src/assets/hero-bg.png')",
      }
    },
  },
  plugins: [],
} 
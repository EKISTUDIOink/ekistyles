/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js,jsx,ts,tsx}', './demo/**/*.html'],
  theme: {
    extend: {
      colors: {
        'material-purple': {
          50: '#f3e5f5',
          100: '#e1bee7',
          200: '#ce93d8',
          300: '#ba68c8',
          400: '#ab47bc',
          500: '#9c27b0',
          600: '#8e24aa',
          700: '#7b1fa2',
          800: '#6a1b9a',
          900: '#4a148c',
        },
        'material-teal': {
          50: '#e0f2f1',
          100: '#b2dfdb',
          200: '#80cbc4',
          300: '#4db6ac',
          400: '#26a69a',
          500: '#009688',
          600: '#00897b',
          700: '#00796b',
          800: '#00695c',
          900: '#004d40',
        },
        'arabic': {
          bg: '#1a0033',
          'bg-light': '#f8f9fa',
          surface: '#2d004d',
          'surface-light': '#ffffff',
          text: '#f3f4f6',
          'text-dark': '#1a1a1a',
          accent: '#03dac5',
          'accent-alt': '#6200ee',
          border: '#3700b3',
          'border-light': '#e0e0e0',
        },
      },
      fontFamily: {
        'arabic': ['Tajawal', 'sans-serif'],
        'arab': ['Tajawal', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'xs': '0.25rem',
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
        '2xl': '3rem',
      },
      lineHeight: {
        'arabic': '1.8',
        'tight': '1.3',
        'relaxed': '1.8',
      },
      letterSpacing: {
        'arabic': '0.02em',
        'tight': '-0.01em',
        'normal': '0em',
        'wide': '0.02em',
      },
      textAlign: {
        'start': 'right',
        'end': 'left',
      },
      borderRadius: {
        'none': '0px',
        'sm': '0.25rem',
        'base': '0.5rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.5rem',
        '2xl': '2rem',
        'full': '9999px',
      },
      boxShadow: {
        'none': 'none',
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'base': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'purple': '0 10px 15px -3px rgba(98, 0, 238, 0.2)',
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      typography: {
        DEFAULT: {
          css: {
            direction: 'rtl',
            color: '#f3f4f6',
            a: {
              color: '#03dac5',
              '&:hover': {
                color: '#6200ee',
              },
            },
            h1: {
              color: '#ffffff',
              fontWeight: '700',
              lineHeight: '1.3',
            },
            h2: {
              color: '#ffffff',
              fontWeight: '700',
              lineHeight: '1.3',
            },
            code: {
              color: '#03dac5',
              backgroundColor: '#2d004d',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ].filter(Boolean),
  darkMode: 'class',
  safelist: [
    {
      pattern: /^(text|bg|border|shadow|rounded|p|m|w|h)-.+/,
    },
  ],
}

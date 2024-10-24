/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    fontFamily: {
      'montserrat-serif': ['Montserrat', 'serif'],
      'lato-serif': ['Lato', 'serif'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '2.5xl': '1.625rem',
      '3xl': '1.75rem',
      '4xl': '2rem',
      '5xl': '2.5rem',
      '6xl': '3rem',
      '7xl': '3.5rem',
      '8xl': '4rem',
    },
    fontWeight: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeight: {
      tight: '1',
      snug: '1.1',
      normal: '1.2',
      relaxed: '1.4',
      loose: '1.6',
    },
    extend: {
      boxShadow: {
        'inset-white': '2px 2px 4px rgba(255, 255, 255, 0.25)',
      },
      backdropBlur: {
        2: '2px',
      },
      colors: {
        primary: {
          blue: 'hsl(217, 100%, 33%)', // #0038A8
          cobalt: 'hsl(206, 91%, 38%)', // #0A66C2
          vivid: 'hsl(224, 100%, 58%)', // #2962FF
        },
        secondary: {
          facebook: 'hsl(215, 89%, 56%)', // #1877F2
          sky: 'hsl(204, 89%, 56%)', // #1D9BF0
          azure: 'hsl(224, 100%, 60%)', // #2D7AFE
        },
        gray: {
          light: 'hsl(240, 10%, 96%)', // #F3F3F5
          steel: 'hsl(217, 25%, 88%)', // #D5DEE8
          mist: 'hsl(217, 25%, 91%)', // #E2E7ED
          'off-white': 'hsl(240, 17%, 96%)', // #F1F2F5
        },
        black: {
          DEFAULT: 'hsl(0, 0%, 0%)', // #000000
          charcoal: 'hsl(0, 0%, 12%)', // #1E1E1E
          midnight: 'hsl(228, 8%, 6%)', // #0D0E11
        },
        white: 'hsl(0, 0%, 100%)', // #FFFFFF
        slate: 'hsl(220, 20%, 34%)', // #45516A
        success: 'hsl(120, 93%, 35%)', // #11A008
      },
      screens: {
        base: '375px',
        xsm: '424px',
        '2xl': '1438px',
      },
      spacing: {
        13: '3.375rem',
      },
    },
  },
  plugins: [require('tailwindcss-filters')],
};

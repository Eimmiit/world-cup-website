/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        tnr: {
          purple: '#6C00F4',
          red: '#FF1200',
          green: '#00FED9',
          lightg: '#B1EB00',
          black: '#000000',
          white: '#FFFFFF',
          blue: '#264FFF',

          grey: '#1A1A1A',
          lightGrey: '#F4F4F4',
          // Electric blue brand color seen in accents/footer

        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        display: ['Antonio', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],

        condensedlight: ["fwc2026condensedlight", "sans-serif"],
        expandedblack: ["fwc2026expandedblack", "sans-serif"],
        normalblack: ["fwc2026normalblack", "sans-serif"],
        normalregular: ["fwc2026normalregular", "sans-serif"],
        semiexpandedblack: ["fwc2026semiexpandedblack", "sans-serif"],
        ultracondensedblack: ["fwc2026ultracondensedblack", "sans-serif"],
        ultracondensedbold: ["fwc2026ultracondensedbold", "sans-serif"],
        ultracondensedmedium: ["fwc2026ultracondensedmedium", "sans-serif"],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' }
        }
      }
    },
  },
  plugins: [],
}


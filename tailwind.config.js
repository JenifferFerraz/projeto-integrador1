const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        neon: "0 0 15px theme('colors.purple.200'), 0 0 20px theme('colors.purple.700')"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        'purple-dark': '#2D0034',
        'gray-base': '#D9D9D9',
        'purple-light': '#820098',
        'purple-bg': '#430153'
      },
      fontFamily: {
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
        'montserrat-alternates': [
          'Montserrat Alternates',
          ...defaultTheme.fontFamily.sans
        ]
      }
    }
  },
  plugins: []
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'sm': '0px 0px 6px #00000029',
        'lg': '0px 0px 20px #00000029',
      }
    },
    fontSize: {
      xs: ['11px', '13px'],
      sm: ['12px', '20px'],
      base: ['14px', '20px'],
      md: ['18px', '22px'],
      lg: ['28px', '33px'],
      xl: ['46px', '51px'],
    },
    colors: {
      'primary-color': '#FF1B1B',
      'description-light-blue': '#F2F6FA',
      'feature-blue': '#004CFF',
      'disable-gray': '#929292',
      'shadow-gray': '#00000029',
      'black': '#000000',
    },
    borderRadius: {
      'md': '15px',
    }
  },
  plugins: [],
}

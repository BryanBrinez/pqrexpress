/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans'],
      },
      backgroundColor: {
        'tarjeta': '#CAE2FF',
        'colorOne': '#899EA3',
        'colorTwo': '#42616A',
        'colorThree': '#2C4E59',
        
      },

      textColor: {
        'colorOne': '#899EA3',
        'colorTwo': '#42616A',
        'colorThree': '#2C4E59',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

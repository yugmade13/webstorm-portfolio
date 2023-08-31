/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-jetbrains)']
      },
      fontSize: {
        'medium': ['12px', '16px'],
        'paragraph': ['13px', '18px'],
        'default': ['13px', '16px'],
        'h2': ['16px', '20px'],
        'h1': ['20px', '24px'],
      },
      colors: {
        'gray-primary': '#1E1F22',
        'gray2': '#2B2D30',
        'gray3': '#383A42',
        'gray4': '#494B57',
        'gray5': '#4E5157',
        'gray6': '#6C707E',
        'gray7': '#818594',
        'gray8': '#A8ADBD',
        'gray9': '#C9CCD6',
        'gray10': '#D3D5DB',
        'gray11': '#DFE1E5',
        'gray12': '#DFE1E5',
        'blue2': '#315FBD',
        'blue-primary': '#3574F0',
        'green-primary': '#5FAD65',
        'yellow-primary': '#F2C55C',
        'red-primary': '#DB5C5C',
        'orange-primary': '#E08855',
        'purple-primary': '#955AE0',
        'teal-primary': '#24A394'
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

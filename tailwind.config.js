module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      transitionDuration: {
        0: '0ms',
      },
      padding: {
        0.8: '0.2rem',
      },
      borderRadius: {
        large: '0.75rem',
        lg: '0.5rem',
        md: '0.375rem',
      },
      width: {
        18: '4.5rem',
        70: '17.5rem',
        75: '18.75rem',
        84: '21rem',
        85: '21.25rem',
        116: '29rem',
        150: '37.5rem',
        160: '40rem',
      },
      height: {
        18: '4.5rem',
        112: '28rem',
        120: '30rem',
        152: '38rem',
      },
      borderWidth: {
        3: '3px',
      },
    },
  },
  variants: {
    extend: {
      visibility: ['hover', 'group-hover'],
      textOpacity: ['dark'],
      backgroundOpacity: ['dark'],
    },
  },
  plugins: [],
}

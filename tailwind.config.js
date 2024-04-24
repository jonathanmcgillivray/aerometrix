/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{svelte, html, js, ts}',
  ],
  theme: {
    extend: {
      colors: {
        'text': '#fff',
        'background': '#f9f9f9',
        'primary': '#000000',
        'secondary': '#d7df23',
        'accent': '#d7df23', //	215, 223, 35
        
        'dark': {
          'text': '#f9f9f9',
          'background': '#333',
          'primary': '#3490dc',
          'secondary': '#ffed4a',
          'accent': '#d7df23',
        },
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      textColor: {
        'on-dark': '#f9f9f9',
        'on-light': '#020E1E',
      }
    },
  },
  plugins: [],
  darkMode: 'selector', // or 'media' or 'class'
}


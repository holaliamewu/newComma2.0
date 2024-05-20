/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '0px',
      'sm': '475px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    backgroundImage: {
      'hero-pattern': "url('/img/hero-pattern.svg')",
      'footer-texture': "url('/img/footer-texture.png')",
    },extend: {
      fontFamily: {
        SharpGroteskBold: ['Sharp Grotesk bold'],
        SharpGroteskBlack: ['Sharp Grotesk black'],
        SFpro: ['San Francisco Pro'],
        SystemUi: ['system-ui']
      },
      colors: {
        ash: '#d7d7d7',
        usernameColor: '#52525b',
        connectUsername: '#353546',
        newOrange: '#f97316',
        h1PostConnect: '#27272a',
        otherusernameAndTime: '#71717a'
      }
    }
  },
  plugins: [],
}
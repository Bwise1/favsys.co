module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'current',
        'favsent': '#FEE8E8',
        'card1Paint': '#EEEEEE',
        'card2Paint': '#F2B263',
        'buttonPaint': '#F41919'       
      },
      borderRadius: {
        'large': '45.283px',
      },
      textColor: {
        'heroText': '#F41919'
      }
    },
  },
  plugins: [],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"],
}

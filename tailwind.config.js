module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        umba: "Umba Soft SC Regular Demo",
      },
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
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"],
}

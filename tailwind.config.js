module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        umbaReg: "Umba Soft Regular",
        umbaThin: "Umba Soft Thin",
        umbaLight: "Umba Soft Light",
        umbaMedium: "Umba Soft Medium",
        umbaBold: "Umba Soft Bold",
      },
      colors: {
        transparent: 'transparent',
        current: 'current',
        'favsent': '#FEE8E8',
        'card1Paint': '#EEEEEE',
        'card2Paint': '#F2B263',
        'buttonPaint': '#F41919',
        'buttonHover': '#FEE8E8'       
      },
      borderRadius: {
        'large': '45.283px',
      },
      textColor: {
        'heroText': '#F41919'
      },
      height: {
        '99': '32rem',
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

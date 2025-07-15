export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
      },
      colors: {
        primary: '#005928',
        secondary :'#004720',
        primaryLight: '#D3F4E2',
        accent: '#FFCF33',
      },
    },
  },
  plugins: [],
}

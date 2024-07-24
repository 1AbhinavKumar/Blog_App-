/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'login-page': "url(https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
      },
      inset:{
        '18':'18%',
        '20':'20%',
        '50' : '50%'
      },
      flex: {
        '3': '3 3 0%',
        '6': '6 6 0%',
        '9':'9 9 0%'

      },
    },
    fontFamily: {
      "Js-Ss": ["Josefin Sans", "sans-serif"],
      "lora": ["Lora", "sans-serif"],
      "varela" : ["Varela", "sans-serif"]
    },
  },
  plugins: [],
};

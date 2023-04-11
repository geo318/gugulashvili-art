module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      rotate: {
        22: '22deg',
      },
      borderRadius: {
        ten: '10px',
        four: '4px',
      },
      colors: {
        'txt-green': '#B4B9B8',
        'txt-green-lt': '#879E9C',
      },
      backgroundImage: {
        'app-gradient':
          'linear-gradient(180deg,rgb(29 94 78) 7.26%, rgb(3 58 47 / 90%) 79.64%);',
      },
      fontFamily: {
        Montserrat: 'Montserrat',
      },
      aspectRatio: {
        '9/5': '9 / 5',
        '6/5': '6 / 5',
        '3/2': '3 / 2',
        '5/2': '5 / 2',
      },
    },
  },
  plugins: [],
};

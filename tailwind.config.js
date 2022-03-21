module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        'pt-mono': ['"PT Mono"', 'monospace']
      },
      colors:{
        "darkBG": "#000403",
        "darkSC":"#000403",
        "darkText":"#94febf",
        "bordercolor":"#94febf",
      },
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

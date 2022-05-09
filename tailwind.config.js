module.exports = {
  theme: {  
     
    extend: {
      colors: {
        primary: "#0E406E",
       

        
      },
    },
  },
  variants: {},
  purge: {
    content: [
      'node_modules/tv-*/dist/tv-*.umd.min.js',
    ],
  },
  plugins: [
    
  ],
}
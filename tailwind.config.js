module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
   		extend: {
      fontFamily: {
        Mulish: ["Mulish", "sans-serif"],
       },      
      colors: {
        red: {
          500: '#FE6C47',
        },
        orange: {
          500: '#FCAE31',
        },
        black:{
          500: '#000',
        },
        gray:{
          500: '#919191',
        },
        nomral: {
           'oranges': '#FCAE31',
        },
        
        
        fontSize: {
          sm: '0.875',
          base: '1rem',
        
        },
        fontweight: {
          extrabold: '900',
          base: '1rem',
        
        },
          
      },

      
    },
    
	},
	variants: {
		extend: {},
	},
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
	plugins: [     require('tw-elements/dist/plugin')  ] ,
};





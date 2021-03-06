  // tailwind.config.js
  module.exports = {
    purge: [],
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {},
       screen: {
           sm: "640px",
        //    => @media (min-width: 640px) {...}
        md: "765px",
        //    => @media (min-width: 765px) {...}
        lg: "1024px",
        //    => @media (min-width: 1024px) {...}
        xl: "1280px",
        //    => @media (min-width: 1280px) {...}
        "2xl": "1536px",
        //    => @media (min-width: 1536px) {...}
          
       }
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }
 
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          headingColor: "#2C3051",
          paragraphColor: "#9B9B9B",
          primaryColor: "#FFC226",
          primaryBG: '#FAFAFA',
        },
        padding: {
          '5xl': '3rem', // Equivalent to 48px
        },
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
        },
        maxWidth: {
          'custom-xl': '1920px', // Define a custom maximum width
        },
        boxShadow: {
            'view-all': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
          },
          backgroundImage: {
            'custom-gradient': 'linear-gradient(to right, #FFC226, #FACC15, #FFCE51)', // Replace with your color values
            'custom-white': 'linear-gradient(to right, #fff, #fff, #fff)', // Replace with your color values
          },
      },
    },
    variants: {},
    plugins: [],
  };
  
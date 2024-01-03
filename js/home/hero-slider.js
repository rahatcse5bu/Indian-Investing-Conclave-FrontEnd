$(document).ready(function () {
    $('#slick-hero-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true, 
      centerPadding: '70px',
      autoplay: true,
    //   variableWidth: true,
      dots: true,
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>',
      responsive: [
        {
            breakpoint: 768,
            settings: {
                centerMode: false, // Disable center mode for larger screens
                // centerPadding: '10px',
                slidesToShow: 1, // Show 3 slides for larger screens
                slidesToScroll: 1,
            }
        }
    ]
      // Add other settings as needed
    });
  });
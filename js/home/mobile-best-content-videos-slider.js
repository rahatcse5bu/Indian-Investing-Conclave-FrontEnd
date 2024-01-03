$(document).ready(function(){
    $('#mobile-slick-slider').slick({
        slidesToShow: 1, // Show 3 slides at a time
        slidesToScroll: 1,
        centerMode: true, // Enable center mode
        // centerPadding: '100px',
        // autoplay:true,
        variableWidth: true, // Disable variable width
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true, // Disable center mode for larger screens
                    centerPadding: '10px',
                    variableWidth: true, // Disable variable width
                    slidesToShow: 1, // Show 3 slides for larger screens
                    slidesToScroll: 2,
                }
            }
        ]
    });
});


// $(document).ready(function() {
    
//     function getHeight(){
//         let height =0;
//         $('.instructor-card').each(function() {
//             height = $(this).outerHeight();
//             console.log(height); // Height of each .instructor-card
//         }); 
//         return height;
    
//     }
//     function updateSlider() {
//     //   const cardHeight = $('#mobile-slick-slider .instructor-card').outerHeight();
//       const cardHeight = getHeight();
//       console.log('card height: '+cardHeight)
//       const deviceWidth = $(window).width();
//       const slideWidth = Math.abs(deviceWidth - (cardHeight / 2));
//       console.log('slide width: ' + slideWidth);
//       $('#mobile-slick-slider .slick-slide.slick-current.slick-active.slick-center').css('width', slideWidth + 'px');
//       $('#mobile-slick-slider').slick('slickSetOption', 'centerPadding', (cardHeight / 4) + 'px', true);
//     }

//     $('#mobile-slick-slider').slick({
//       centerMode: true,
//       centerPadding: '0px',
//       slidesToShow: 1,
//       variableWidth: true
//     });

//     updateSlider();
  
//     $(window).resize(updateSlider);
//   });

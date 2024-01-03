$(document).ready(function(){
    $('#instructor-slick-slider').slick({
        slidesToShow: 1, // Show 1 slide at a time
        // slidesToScroll: 1,
        centerMode: false, // Enable center mode
        // centerPadding: '100px',
        autoplay:false,
        variableWidth: true,
        // cssEase: 'ease-in-out',
        swipeToSlide:true,
        easing: 'linear',
        swipe: true,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    // centerMode: true, // Disable center mode for larger screens
                    centerPadding: '60px',
                    autoplay:false,
                    variableWidth: true,
                    slidesToShow: 1, // Show 3 slides for larger screens
                    // slidesToScroll: 1,
                    swipeToSlide: true,
                    // cssEase: 'ease-in-out',
                    easing: 'linear',
                    swipe: true,
                }
            }
        ]
    });
});

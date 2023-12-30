
$(document).ready(function(){
        $('.my-footer-slick').slick({
            slidesToShow: 1, // Number of visible slides
            slidesToScroll: 1, // Number of slides to scroll
            autoplay: true, // Auto-play slides
            autoplaySpeed: 3000, // Auto-play speed in milliseconds (optional)
            prevArrow: $('.slick-prev'), // Use the classes of the buttons as selectors
            nextArrow: $('.slick-next'), // Use the classes of the buttons as selectors
            // Add more configuration options as needed
        });
    });
    

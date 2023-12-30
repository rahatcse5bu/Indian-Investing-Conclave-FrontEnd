var mySwiper = new Swiper(".mySwiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
    delay: 2500, // Autoplay delay in milliseconds
    disableOnInteraction: false, // When set to false, autoplay will not be disabled after user interactions
},
    // If you need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if you need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
    })
});

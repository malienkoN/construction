window.addEventListener('load', function () {
    const swiper = new Swiper('.mySwiper', {
        slidesPerView: 3.5,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 480px
            768: {
                slidesPerView: 2.5,
                spaceBetween: 20
            },
            // when window width is >= 640px
            1280: {
                slidesPerView: 3.5,
                spaceBetween: 20
            },
            1600: {
                slidesPerView: 4.5,
                spaceBetween: 20
            }
        },
    });
});
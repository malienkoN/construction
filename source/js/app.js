window.addEventListener('load', function () {
    const swiper = new Swiper('.mySwiper', {
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return ('0' + current).slice(-2) + ' <span>of</span> ' + ('0' + total).slice(-2);
            }
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            // when window width is >= 480px
            768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            // when window width is >= 640px
            1280: {
                slidesPerView: 3.5,
                spaceBetween: 20,
            },
            1600: {
                slidesPerView: 4.5,
                spaceBetween: 20,
            },
        },
    });
});
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

    $('.accordion__item-trigger').click(function () {
        $(this).next('.accordion__item-content').slideToggle();
        $(this).find('.svg-btn__arrow').toggleClass('rotate');
    });

    $('.accordion__item-trigger:first').click();



    let items = document.querySelectorAll('.we-did__inner .we-did__item');
    let loadMoreBtn = document.querySelector('.we-did__btn');
    let maxItems = 6;
    let hiddenClass = 'visually-hidden';

    [].forEach.call(items, function (item, idx) {
        if (idx > maxItems - 1) {
            item.classList.add(hiddenClass);
        }
    });

    loadMoreBtn.addEventListener('click', function () {
        [].forEach.call(document.querySelectorAll('.' + hiddenClass), function (item, idx) {
            if (idx < maxItems + 3) {
                item.classList.remove(hiddenClass);
            }

            if (document.querySelectorAll('.' + hiddenClass).length === 0) {
                loadMoreBtn.style.display = 'none';
            }
        });
    });
});
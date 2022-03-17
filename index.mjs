import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

const firstSlider = {
    navigation: {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    autoplay: {
        delay: 5000,
    },
    // freeMode: true,
    loop: true,
    lazy: true,
    a11y: true,
    breakpoints : {
        1025: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1300: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
    }

}


new Swiper('.swiper-container-first', firstSlider )
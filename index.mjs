import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

const firstSlider = {
    navigation: {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    }

}


new Swiper('.swiper-container-first', firstSlider )
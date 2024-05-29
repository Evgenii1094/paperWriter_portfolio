// Подключение свайпера
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const expertSlider = new Swiper('.expert__slider-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.expert__swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1280: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        768: {
            centeredSlides: true,
            slidesPerView: 'auto',
            spaceBetween: 24,
        },
        360: {
            centeredSlides: true,
            slidesPerView: 'auto',
            spaceBetween: 10,
        },
    },
});

if (window.innerWidth <= 767) {
    let reviewSlide = new Swiper('.review__slider-container', {
        spaceBetween: 20,
        pagination: {
            el: '.review__swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            360: {
                slidesPerView: 1,
                loop: true,
            },
        },
    });
}

let articleSlide = new Swiper('.article-carousel__slider-container', {
    spaceBetween: 28,
    navigation: {
        nextEl: '.article-carousel__button-next',
        prevEl: '.article-carousel__button-prev',
    },
    pagination: {
        el: '.article-carousel__swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1280: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        },
        360: {
            centeredSlides: true,
            slidesPerView: 'auto',
        },
    },
});


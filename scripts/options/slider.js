const webSitesSlider = new Swiper('.swiper', {
    spaceBetween: 42,
    breakpoints: {
        1700: {
            slidesPerView: 4,
            spaceBetween: 42,
        },
        1500: {
            slidesPerView: 3,
            spaceBetween: 42,
        },
        1200: {
            slidesPerView: 2.5,
            spaceBetween: 42,
        },
        400: {
            slidesPerView: 2,
            spaceBetween: 42,
        },
        320: {
            slidesPerView: 1.5,
            spaceBetween: 22,
        }
    }
}
);
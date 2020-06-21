import './_swiper.scss';
import Swiper from 'swiper';


const mySwiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  spaceBetween: 20,
  grabCursor: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  centerInsufficientSlides: true,
});

mySwiper.pagination.render();

export default mySwiper;

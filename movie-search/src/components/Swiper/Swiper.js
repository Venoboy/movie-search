// import Swiper from 'swiper/js/swiper.esm';
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
import './_swiper.scss';


const mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

mySwiper.pagination.render();

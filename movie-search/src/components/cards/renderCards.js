import { data, getData } from '../../containers/data/data';
import cardConstructor from './cardConstructor/cardConstructor';
import mySwiper from '../Swiper/Swiper';

const renderCards = (query, currentPage) => {
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  const swiperContainer = document.querySelector('.swiper-container');
  const messageField = document.querySelector('.messageField');
  let sliderContent = [];
  getData(query, currentPage).then(() => {
    try {
      if (data.films) {
        swiperContainer.style.display = 'block';
        sliderContent = data.films.map((elem) => cardConstructor(elem));
        swiperWrapper.innerHTML = '';
        swiperWrapper.append(...sliderContent);
        mySwiper.update();
        mySwiper.slideTo(0);
      } else {
        messageField.innerText = `No results for ${query}`;
      }
    } catch (e) {
      messageField.innerText('render error:', e);
    }
  }).catch((error) => {
    messageField.innerText('get data error: ', error);
  });
};

export default renderCards;

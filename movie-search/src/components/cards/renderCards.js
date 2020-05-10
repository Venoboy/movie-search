import { data, getData } from '../../containers/data/data';
import cardConstructor from './cardConstructor/cardConstructor';
import mySwiper from '../Swiper/Swiper';

const renderCards = (query, currentPage) => {
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  const messageField = document.querySelector('.messageField');
  let sliderContent = [];
  getData(query, currentPage).then(() => {
    try {
      if (data.films) {
        sliderContent = data.films.map((elem) => cardConstructor(elem));
        swiperWrapper.innerHTML = '';
        swiperWrapper.append(...sliderContent);
        if (currentPage === 1 || !currentPage) {
          mySwiper.slideTo(0);
        }
        mySwiper.update();
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

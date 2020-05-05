import mySwiper from '../Swiper';
import { data } from '../../../containers/data/data';
import renderCards from '../../cards/renderCards';

const navigation = () => {
  mySwiper.on('reachEnd', () => {
    if (data.currentPage < data.pages) {
      data.currentPage += 1;
      renderCards(data.query, data.currentPage);
    }
  });
};

export default navigation;

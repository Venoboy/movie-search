import 'swiper/css/swiper.css';

import inputHandler from './components/Input/Input';
import renderCards from './components/cards/renderCards';
import navigation from './components/Swiper/navigation/navigation';

const swiperWrapper = document.querySelector('.swiper-wrapper');

// window.addEventListener('error', (e) => {
//   console.log(e);
// }, true);

inputHandler();
renderCards('neo');
navigation();

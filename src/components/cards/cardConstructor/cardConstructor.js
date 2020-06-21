import noPoster from '../../../assets/img/noPoster.png';

const cardConstructor = (params) => {
  const card = [];

  const name = document.createElement('a');
  const nameWrapper = document.createElement('div');
  const messageField = document.querySelector('.messageField');
  nameWrapper.classList.add('name-wrapper');
  name.href = params.url;
  name.innerText = params.Title;
  nameWrapper.append(name);
  card.push(nameWrapper);

  const poster = new Image(300, 445);
  poster.onerror = () => {
    poster.src = noPoster;
    messageField.innerText = 'Getting image error';
  };
  if (params.Poster === 'N/A') {
    poster.src = noPoster;
  } else {
    poster.src = params.Poster;
    poster.classList.add('animateImg');
  }
  card.push(poster);

  const year = document.createElement('div');
  year.classList.add('year');
  year.innerText = params.Year;
  card.push(year);

  const rating = document.createElement('div');
  rating.classList.add('rating');
  rating.innerText = params.rating;
  card.push(rating);

  const slide = document.createElement('div');
  slide.classList.add('swiper-slide');
  slide.append(...card);

  return slide;
};

export default cardConstructor;

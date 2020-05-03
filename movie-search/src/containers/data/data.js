import translate from '../../helpers/translate';

const data = {
  apiKey: '8d44a0f1',
  films: '',
  totalResults: 0,
  pages: 0,
  currentPage: 1,
};


async function getData(myQuery, currentPage = 1) {
  let query = myQuery;
  const messageField = document.querySelector('.messageField');
  const spinner = document.querySelector('.lds-spinner');
  try {
    spinner.style.display = 'block';
    query = await translate(query);
    const promise = await fetch(`http://www.omdbapi.com/?apikey=${data.apiKey}&s=${query}&page=${currentPage}`);
    const response = await promise.json();
    data.currentPage = currentPage;
    data.query = query;

    if (data.currentPage === 1) {
      data.films = response.Search;
    } else {
      data.films.push(...response.Search);
    }
    data.totalResults = response.totalResults;
    data.pages = Math.ceil(response.totalResults / 10);

    if (data.films) {
      const addInfoPromises = data.films.map((elem) => (
        fetch(`http://www.omdbapi.com/?apikey=${data.apiKey}&i=${elem.imdbID}`)));
      const addInfoJson = (await Promise.allSettled(addInfoPromises))
        .map((elem) => elem.value.json());
      const addInfo = (await Promise.allSettled(addInfoJson)).map((elem) => elem.value);
      for (let i = 0; i < data.films.length; i += 1) {
        data.films[i].rating = addInfo[i].imdbRating;
        data.films[i].url = `https://www.imdb.com/title/${data.films[i].imdbID}/videogallery/`;
      }
    }
    spinner.style.display = 'none';
  } catch (error) {
    messageField.innerText = error.message;
  }
}

export { getData, data };

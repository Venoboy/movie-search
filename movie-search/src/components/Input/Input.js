import renderCards from '../cards/renderCards';

const inputHandler = () => {
  const input = document.querySelector('.searchInput');
  const searchBox = document.querySelector('.searchBox');
  const cancelButton = document.querySelector('.cancelButton');
  const messageField = document.querySelector('.messageField');
  let mouseOverInput = false;
  const addSearchHover = () => {
    input.classList.add('searchHover');
    cancelButton.classList.add('cancelHover');
  };
  const removeSearchHover = () => {
    input.classList.remove('searchHover');
    cancelButton.classList.remove('cancelHover');
  };
  searchBox.onmouseleave = () => {
    mouseOverInput = false;
  };
  searchBox.onmouseenter = () => {
    mouseOverInput = true;
  };
  searchBox.addEventListener('mouseenter', addSearchHover);
  searchBox.addEventListener('mouseleave', removeSearchHover);

  input.oninput = (ev) => {
    if (ev.target.value.length > 0) {
      messageField.innerText = '';
      searchBox.removeEventListener('mouseleave', removeSearchHover);
      cancelButton.style.visibility = 'visible';
      addSearchHover();
    } else {
      searchBox.addEventListener('mouseleave', removeSearchHover);
      if (!mouseOverInput) {
        removeSearchHover();
      }
      cancelButton.style.visibility = 'hidden';
    }
  };
  cancelButton.onclick = () => {
    input.value = '';
    searchBox.addEventListener('mouseleave', removeSearchHover);
    cancelButton.style.visibility = 'hidden';
  };

  const form = document.querySelector('.searchBoxWrapper');
  form.onsubmit = (ev) => {
    ev.preventDefault();

    if (input.value.length > 2) {
      renderCards(input.value);
    } else {
      messageField.innerText = 'Minimum query length: 3 symbol';
    }
  };
};

export default inputHandler;

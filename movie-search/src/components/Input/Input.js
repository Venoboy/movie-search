import renderCards from '../cards/renderCards';

const inputHandler = () => {
  const input = document.querySelector('.searchInput');
  const searchBox = document.querySelector('.searchBox');
  const keyboardPic = document.querySelector('.keyboard-pic');
  const keyboard = document.querySelector('.keyboard-block');
  const cancelButton = document.querySelector('.cancelButton');
  const messageField = document.querySelector('.messageField');
  const form = document.querySelector('.searchBoxWrapper');
  const enterBtn = document.querySelector('.enter');
  let mouseOverInput = false;
  const addSearchHover = () => {
    input.classList.add('searchHover');
    cancelButton.classList.add('cancelHover');
    keyboardPic.classList.add('keyboard-pic-hover');
  };
  const removeSearchHover = () => {
    if (input.value === '') {
      input.classList.remove('searchHover');
      cancelButton.classList.remove('cancelHover');
      keyboardPic.classList.remove('keyboard-pic-hover');
    }
  };
  searchBox.onmouseleave = () => {
    mouseOverInput = false;
  };
  searchBox.onmouseenter = () => {
    mouseOverInput = true;
  };
  searchBox.addEventListener('mouseenter', addSearchHover);
  searchBox.addEventListener('mouseleave', removeSearchHover);

  keyboard.style.display = 'none';
  keyboardPic.onclick = () => {
    if (keyboard.style.display === 'none') {
      keyboard.style.display = 'block';
      searchBox.removeEventListener('mouseenter', addSearchHover);
      searchBox.removeEventListener('mouseleave', removeSearchHover);
    } else {
      keyboard.style.display = 'none';
      searchBox.addEventListener('mouseenter', addSearchHover);
      searchBox.addEventListener('mouseleave', removeSearchHover);
    }
  };

  const submitFun = (ev) => {
    ev.preventDefault();
    if (input.value.length > 2) {
      renderCards(input.value);
    } else {
      messageField.innerText = 'Minimum query length: 3 symbol';
    }
  };
  form.onsubmit = (ev) => submitFun(ev);
  enterBtn.onclick = (ev) => {
    submitFun(ev);
    keyboard.style.display = 'none';
    searchBox.addEventListener('mouseenter', addSearchHover);
    searchBox.addEventListener('mouseleave', removeSearchHover);
  };

  keyboard.onclick = () => {
    if (input.value !== '') {
      cancelButton.style.visibility = 'visible';
    } else {
      cancelButton.style.visibility = 'hidden';
    }
  };

  document.body.onclick = ((ev) => {
    if (!(ev.target.closest(('.keyboard')) || ev.target.closest('.searchBox')
      || [...ev.target.classList].includes('material-icons'))) {
      keyboard.style.display = 'none';
      searchBox.addEventListener('mouseenter', addSearchHover);
      searchBox.addEventListener('mouseleave', removeSearchHover);
      if (input.value === '') {
        removeSearchHover();
      }
    }
  });

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
    if (keyboard.style.display === 'none') {
      searchBox.addEventListener('mouseleave', removeSearchHover);
    }
    cancelButton.style.visibility = 'hidden';
  };
};

export default inputHandler;

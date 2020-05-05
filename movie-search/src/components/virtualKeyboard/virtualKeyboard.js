const virtualKeyboard = () => {
  const digitCodes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
  const russianKeys = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&uArr;', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&lArr;', '&dArr;', '&rArr;', 'Ctrl'];
  const russianShift = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', '/', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '&uArr;', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&lArr;', '&dArr;', '&rArr;', 'Ctrl'];
  const russianCaps = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', '\\', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '&uArr;', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&lArr;', '&dArr;', '&rArr;', 'Ctrl'];
  const englishKeys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&uArr;', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&lArr;', '&dArr;', '&rArr;', 'Ctrl'];
  const englishShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', '|', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&uArr;', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&lArr;', '&dArr;', '&rArr;', 'Ctrl'];
  const englishCaps = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '&uArr;', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&lArr;', '&dArr;', '&rArr;', 'Ctrl'];


  let caps = false;
  let shift = false;
  let language = sessionStorage.getItem('keyboardLanguage') ? sessionStorage.getItem('keyboardLanguage') : 'en';

  const textArea = document.querySelector('.searchInput');

  // ----------------------отрисовка клавиатуры------------------------------
  const initKeyboard = () => {
    if (document.activeElement !== textArea) {
      textArea.focus();
    }
    let keyboardKeys;
    sessionStorage.setItem('keyboardLanguage', language);
    if (language === 'ru') {
      keyboardKeys = russianKeys;
      if (caps) {
        keyboardKeys = russianCaps;
      } else if (shift) {
        keyboardKeys = russianShift;
      }
    } else if (language === 'en') {
      keyboardKeys = englishKeys;
      if (caps) {
        keyboardKeys = englishCaps;
      } else if (shift) {
        keyboardKeys = englishShift;
      }
    }
    const checkKeyboardStatus = () => {
      let keyboard = document.querySelector('.keyboard');
      if (keyboard) {
        let lineBreaks = 0;
        for (let i = 0; i < keyboard.children.length; i += 1) {
          if (keyboard.children[i].nodeName !== 'DIV') {
            lineBreaks += 1;
          } else {
            keyboard.children[i].innerHTML = keyboardKeys[i - lineBreaks];
          }
        }
        const meta = document.querySelector('.meta');
        meta.innerHTML = '<span class="material-icons">language</span>';
      } else {
        keyboard = document.createElement('div');
        let markup = '';

        keyboard.classList.add('keyboard');
        // keyboard.addEventListener("click", ev => clickKeyboard(ev));
        keyboard.addEventListener('mousedown', (ev) => {
          ev.preventDefault();
        });

        digitCodes.forEach((elem, index) => {
          let addClass = '';
          if (elem === 'Backspace') {
            addClass = 'backspace special';
          } else if (elem === 'Tab') {
            addClass = 'tab special';
          } else if (elem === 'Delete') {
            addClass = 'delete special';
          } else if (elem === 'CapsLock') {
            addClass = 'capsLock special';
          } else if (elem === 'Enter') {
            addClass = 'enter special';
          } else if (elem === 'ShiftLeft') {
            addClass = 'shiftLeft special';
          } else if (elem === 'ArrowUp') {
            addClass = 'arrowUp special';
          } else if (elem === 'ShiftRight') {
            addClass = 'shiftRight special';
          } else if (elem === 'ControlLeft') {
            addClass = 'controlLeft special';
          } else if (elem === 'MetaLeft') {
            addClass = 'meta special';
          } else if (elem === 'AltLeft') {
            addClass = 'altLeft special';
          } else if (elem === 'Space') {
            addClass = 'space';
          } else if (elem === 'AltRight') {
            addClass = 'altRight special';
          } else if (elem === 'ArrowLeft') {
            addClass = 'arrowLeft special';
          } else if (elem === 'ArrowRight') {
            addClass = 'arrowRight special';
          } else if (elem === 'ArrowDown') {
            addClass = 'arrowDown special';
          } else if (elem === 'ControlRight') {
            addClass = 'controlRight special';
          }

          // ----------------------------Вставка символов----------------------------------------
          markup += `<div class="key ${addClass}" data-code="${elem}">${keyboardKeys[index]}</div>`;
          const lineBreaks = [13, 28, 41, 55];
          if (lineBreaks.includes(index)) {
            markup += '<br>';
          }
        });

        keyboard.innerHTML = markup;
        const keyboardExist = document.querySelector('.keyboard');
        if (keyboardExist) {
          keyboardExist.replaceWith(keyboard);
        } else {
          const keyboardBlock = document.querySelector('.keyboard-block');
          keyboardBlock.append(keyboard);
          const meta = document.querySelector('.meta');
          meta.innerHTML = '<span class="material-icons">language</span>';
          meta.onclick = () => {
            if (language === 'ru') {
              language = 'en';
            } else {
              language = 'ru';
            }
            initKeyboard();
          };
        }
      }
    };
    checkKeyboardStatus();
  };

  initKeyboard();

  // ---------------------------эмуляция клика--------------------
  // const emulateClick = (ev) => {
  //   if (document.activeElement !== textArea) {
  //     textArea.focus();
  //   }
  //
  //   ev.preventDefault();
  //   const newEv = { ...ev };
  //   newEv.shiftKey = ev.shiftKey;
  //   newEv.altKey = ev.altKey;
  //   newEv.repeat = ev.repeat;
  //   newEv.target = document.querySelector(`[data-code=${ev.code}]`);
  //   return newEv;
  // };


  // ---------------------------подсветка нажатия--------------------
  const highlightKeys = (ev) => {
    const currentKey = ev.target;
    if (currentKey && digitCodes.includes(currentKey.getAttribute('data-code'))) {
      currentKey.classList.add('current-key');
    }
  };

  const clearHighlightKeys = (ev) => {
    const currentKey = ev.target;
    const currentKeyCode = currentKey ? currentKey.getAttribute('data-code') : '';
    if (currentKeyCode === ('ShiftLeft' || 'ShiftRight')) {
      shift = false;
      initKeyboard();
    }
    if (currentKeyCode !== 'CapsLock' || caps === false) {
      setTimeout(() => {
        if (currentKey) {
          currentKey.classList.remove('current-key');
        }
      }, 150);
    }
  };

  // ---------------------------клик по клавиатуре--------------------
  const clickKeyboard = (ev) => {
    if (document.activeElement !== textArea) {
      textArea.focus();
    }
    highlightKeys(ev);
    if (ev.shiftKey && ev.altKey && !ev.repeat) {
      language = (language === 'ru') ? 'en' : 'ru';
      return null;
    }

    const currentKeyCode = ev.target ? ev.target.getAttribute('data-code') : '';
    const caret = textArea.selectionStart;

    // ------------------- backspace -----------------------------
    if (currentKeyCode === 'Backspace' && caret > 0) {
      textArea.value = textArea.value.substring(0, caret - 1) + textArea.value.substring(caret);
      textArea.setSelectionRange(caret - 1, caret - 1);
    }
    // --------------------delete---------------------------------
    if (currentKeyCode === 'Delete' && textArea.selectionStart < textArea.value.length) {
      textArea.value = textArea.value.substring(0, caret) + textArea.value.substring(caret + 1);
      textArea.setSelectionRange(caret, caret);
    }
    // --------------------enter---------------------------------
    if (currentKeyCode === 'Enter') {
      textArea.value = `${textArea.value.substring(0, caret)}\n${textArea.value.substring(caret)}`;
      textArea.setSelectionRange(caret + 1, caret + 1);
      return null;
    }
    // --------------------shift---------------------------------
    if (currentKeyCode === ('ShiftLeft' || 'ShiftRight')) {
      if (!ev.repeat) {
        shift = true;
        initKeyboard();
      }
    }
    // --------------------capsLock---------------------------------
    if (currentKeyCode === 'CapsLock') {
      caps = !caps;
      initKeyboard();
    }
    // --------------------tab---------------------------------
    if (currentKeyCode === 'Tab') {
      const selection = textArea.selectionStart;
      textArea.value = `${textArea.value.substring(0, selection)}    ${textArea.value.substring(selection)}`;
      textArea.setSelectionRange(selection + 4, selection + 4);
    }
    // --------------------arrowLeft---------------------------------
    if (currentKeyCode === 'ArrowLeft') {
      textArea.setSelectionRange(caret - 1, caret - 1);
    }
    // --------------------arrowRight---------------------------------
    if (currentKeyCode === 'ArrowRight') {
      textArea.setSelectionRange(caret + 1, caret + 1);
    }
    // --------------------arrowDown---------------------------------
    if (currentKeyCode === 'ArrowDown') {
      const currLine = textArea.value.indexOf('\n', caret);
      const nextLine = textArea.value.indexOf('\n', currLine + 1) === -1 ? textArea.value.length
        : textArea.value.indexOf('\n', currLine + 1);
      const prevLine = textArea.value.lastIndexOf('\n', caret - 1) === -1 ? -1
        : textArea.value.lastIndexOf('\n', caret - 1);

      if (currLine !== -1) {
        if (caret - prevLine > nextLine - currLine) {
          textArea.setSelectionRange(nextLine, nextLine);
        } else {
          textArea.setSelectionRange(currLine + caret - prevLine, currLine + caret - prevLine);
        }
      }
    }
    // --------------------arrowUp---------------------------------
    if (currentKeyCode === 'ArrowUp') {
      const nextLine = textArea.value.lastIndexOf('\n', caret);
      const prevLine = textArea.value.lastIndexOf('\n', nextLine - 1);

      if (nextLine !== -1) {
        if (caret - nextLine > nextLine - prevLine) {
          textArea.setSelectionRange(nextLine, nextLine);
        } else {
          textArea.setSelectionRange(prevLine + caret - nextLine, prevLine + caret - nextLine);
        }
      }
    }
    // --------------------space and letters---------------------------------
    if (ev.target && [...ev.target.classList].indexOf('special') === -1 && [...ev.target.classList].indexOf('key') !== -1) {
      let letter = ev.target.innerHTML;
      letter = letter === 'Space' ? ' ' : letter;
      textArea.value = textArea.value.substring(0, caret) + letter
        + textArea.value.substring(caret);
      textArea.setSelectionRange(caret + 1, caret + 1);
    }
    return null;
  };

  // document.addEventListener('keyup', (ev) => clearHighlightKeys(emulateClick(ev)));
  // document.addEventListener('keydown', (ev) => clickKeyboard(emulateClick(ev)));
  document.addEventListener('mousedown', highlightKeys);
  document.addEventListener('mousedown', (ev) => clickKeyboard(ev));
  document.addEventListener('mouseup', (ev) => clearHighlightKeys(ev));
};

export default virtualKeyboard;

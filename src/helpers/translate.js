const yandexKey = 'trnsl.1.1.20200503T095449Z.127d715333f13fd4.dcda49de2ca3b3e43a0a5e2478176bc885fc627f';

const translate = async (query) => {
  let result = query;
  const messageField = document.querySelector('.messageField');
  const isCyrillic = (str) => /[а-я]/i.test(str);
  if (isCyrillic(query)) {
    const translationPromise = await fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${yandexKey}&text=${query}&lang=ru-en`);
    const translation = await translationPromise.json();
    [result] = translation.text;
    messageField.innerText = `Search results for: ${result}`;
  }
  return result;
};

export default translate;

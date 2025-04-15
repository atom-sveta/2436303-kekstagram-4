const getData = () => {};
const sendData = (body) => fetch(
  'https://29.javascript.htmlacademy.pro',
  {
    method: 'POST',
    body: body,
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Произошла ошибка ${response.status}: ${response.statusText}`);
    }

  })
  .catch(() => {
    throw new Error('Не удалось отправить форму. Попробуйте ещё раз');
  });


export {getData, sendData};

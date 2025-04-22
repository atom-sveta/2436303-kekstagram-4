const ALERT_SHOW_TIME = 5000;
// Ф-ция генерирует случайное, целое, положительное число
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.abs(Math.floor(result));
};

// Ф-ция возвращает случайный элемент массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// // Ф-ция добавляет заданные символы в начало строки
// const padNum = (num) => num.toString().padStart(2, '0');

// Ф-ция создаёт рандомный индекс массива
const getRandomArrayIndex = (elements) => getRandomInteger(0, elements.length - 1);

// Ф-ция создаёт массива случайной длины
const getRandomArray = (array) => Array.from(
  {length: getRandomArrayIndex(array)},
  () => getRandomArrayElement(array),
);

const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  const alertContainer =document.createElement('div');
  alertContainer.style.xIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {
  // getRandomInteger,
  // getRandomArrayElement,
  // padNum,
  getRandomArray,
  // getRandomFloat,
  // createIdGenerator,
  isEscapeKey,
  showAlert,
};

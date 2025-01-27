// Ф-ция генерирует случайное, целое, положительное число
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.abs(Math.floor(result));
};

// Ф-ция возвращает случайный элемент массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// Ф-ция добавляет заданные символы в начало строки
const padNum = (num) => num.toString().padStart(2, '0');

// Ф-ция создаёт рандомный индекс массива
const getRandomArrayIndex = (elements) => getRandomInteger(0, elements.length - 1);

// Ф-ция создаёт массива случайной длины
const getRandomArray = (array) => Array.from(
  {length: getRandomArrayIndex(array)},
  () => getRandomArrayElement(array),
);

// Ф-ция возвращает cлучайное число с плавающей точкой, с фикс. кол-вом цифр после запятой
const getRandomFloat = (min, max, fix) => (Math.random() * (max - min) + min).toFixed(fix);

// Ф-ция возвращает id (Кекстаграм)
const createIdGenerator = () => {
  let lastGenerateId = 0;

  return () => {
    lastGenerateId += 1;
    return lastGenerateId;
  };
};

export {
  getRandomArrayElement,
  getRandomInteger,
  createIdGenerator,
  padNum,
  getRandomArray,
  getRandomFloat
};

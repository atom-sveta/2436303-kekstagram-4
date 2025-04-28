// 1. Найти элементы-фильтр
const RANDOM_PHOTO_COUNT = 10;

const imgFiltersContainerNode = document.querySelector('.img-filters');
const filterDefault = imgFiltersContainerNode.querySelector('#filter-random');
const filterRandom = imgFiltersContainerNode.querySelector('#filter-random');
const filterDiscussed = imgFiltersContainerNode.querySelector('#filter-discussed');
const container = document.querySelector('.pictures');
const pictures = container.querySelectorAll('[data-id]');

const getShuffledArrayWithLimit = (array) => {
  const shuffledArray = array.sort(() => Math.random() - 0.5);
  const shuffledArrayWithLimit = shuffledArray.slice(0, RANDOM_PHOTO_COUNT);
  return shuffledArrayWithLimit;
};

const setFilterDefaultBtnClick = () => {
  filterDefault.addEventListener('click', () => {
    console.log('По умолчанию');
  });
};

const setFilterRandomBtnClick = () => {
  filterRandom.addEventListener('click', () => {
    console.log('Случайные');
// Вызываем ф-цию рандомирования изображений
  });
};

const setFilterDiscussedBtnClick = () => {
  filterDiscussed.addEventListener('click', () => {
    console.log('Обсуждаемые');
  });
};


// «Случайные» — 10 случайных, не повторяющихся фотографий;
// 1. Очищаю контейнер с фото
// 2. Создаю новый массив и ограничиваю 10 фото
// const getRandomThumbnails = (thumbnails) => {
//   imgFiltersContainerNode.addEventListener('change', () => {
//     container.innerHTML = '';
//     // thumbnails
//     //   .slise(0, RANDOM_PHOTO_COUNT);
//   });

// };
// 3. Проверяю массив, чтобы ID фото не повторялось
// 4. отрисовываю фото

// «Обсуждаемые» — фотографии, отсортированные в порядке убывания количества комментариев.
//  2. нахожу элемент с комментариями
//  3. создаю копию массива и добавляю туда фото в порядке убывания кол-ва фото

// (устранение дребезга) При переключении фильтров, отрисовка изображений, подходящих под новый фильтр, должна производиться не чаще, чем один раз 500 мс .


export {imgFiltersContainerNode};

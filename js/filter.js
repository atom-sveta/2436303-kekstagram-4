import {renderGallery} from './gallery.js';
import { debounce } from './util.js';

const RANDOM_PHOTO_COUNT = 10;
const RERENDER_DELAY = 500;

const imgFiltersContainerNode = document.querySelector('.img-filters');
const filterDefault = imgFiltersContainerNode.querySelector('#filter-default');
const filterRandom = imgFiltersContainerNode.querySelector('#filter-random');
const filterDiscussed = imgFiltersContainerNode.querySelector('#filter-discussed');

const getShuffledArrayWithLimit = (array, limit) => {
  const shuffledArray = array.sort(() => Math.random() - 0.5);
  const shuffledArrayWithLimit = shuffledArray.slice(0, limit);
  return shuffledArrayWithLimit;
};

const toggleButton = (button) => {
  const activeButton = imgFiltersContainerNode.querySelector('.img-filters__button--active');
  activeButton.classList.toggle('img-filters__button--active');
  button.classList.toggle('img-filters__button--active');
};

const setDefaultFilterClick = (cb) => {
  const debouncedCb = debounce(cb, RERENDER_DELAY);
  filterDefault.addEventListener('click', (evt) => {
    toggleButton(evt.target);
    debouncedCb();
  });
};

const setRandomFilterClick = (thumbnails) => {
  const debouncedRender = debounce(
    () => {
      const randomThumbnails = getShuffledArrayWithLimit(thumbnails, RANDOM_PHOTO_COUNT);
      renderGallery(randomThumbnails);
    },
    RERENDER_DELAY
  );

  filterRandom.addEventListener('click', (evt) => {
    toggleButton(evt.target);
    debouncedRender();
  });
};

const setDiscussedFilterClick = (thumbnails) => {
  const debouncedRender = debounce(
    () => {
      thumbnails.sort((a, b) => b.comments.length - a.comments.length);
      renderGallery(thumbnails);
    },
    RERENDER_DELAY
  );
  filterDiscussed.addEventListener('click', (evt) => {
    toggleButton(evt.target);
    debouncedRender();
  });
};


// «Случайные» — 10 случайных, не повторяющихся фотографий;
// ??? Проверяю массив, чтобы ID фото не повторялось

// (устранение дребезга) При переключении фильтров, отрисовка изображений, подходящих под новый фильтр,
// должна производиться не чаще, чем один раз 500 мс .


export {imgFiltersContainerNode, setRandomFilterClick, setDiscussedFilterClick, setDefaultFilterClick};

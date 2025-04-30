import {renderGallery} from './gallery.js';
import { debounce } from './util.js';


const RANDOM_PHOTO_COUNT = 10;
const RERENDER_DELAY = 500;


const imgFiltersContainerNode = document.querySelector('.img-filters');
const filterDefault = imgFiltersContainerNode.querySelector('#filter-default');
const filterRandom = imgFiltersContainerNode.querySelector('#filter-random');
const filterDiscussed = imgFiltersContainerNode.querySelector('#filter-discussed');


const getShuffledArrayWithLimit = (array, limit) => array.sort(() => Math.random() - 0.5).slice(0, limit);


const toggleButton = (button) => {
  const activeButton = imgFiltersContainerNode.querySelector('.img-filters__button--active');
  if (activeButton) {
    activeButton.classList.remove('img-filters__button--active');
  }
  button.classList.add('img-filters__button--active');
};


const setDefaultFilterClick = (cb) => {
  filterDefault.addEventListener('click', (evt) => {
    toggleButton(evt.target);
    cb();
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
      const sortedThumblnails = thumbnails.sort((a, b) => b.comments.length - a.comments.length);
      renderGallery(sortedThumblnails);
    },
    RERENDER_DELAY
  );
  filterDiscussed.addEventListener('click', (evt) => {
    toggleButton(evt.target);
    debouncedRender();
  });
};


export {imgFiltersContainerNode, setRandomFilterClick, setDiscussedFilterClick, setDefaultFilterClick};


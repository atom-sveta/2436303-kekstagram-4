import {renderThumbnails} from './thumbnails.js';
import { showBigPicture } from './fullSizePhoto.js';

const container = document.querySelector('.pictures');

let pictures = [];

const onContainerClick = (evt) => {
  const thumbnail = evt.target.closest('[data-id]');
  if(!thumbnail) {
    return;
  }

  evt.preventDefault();
  const picture = pictures.find(
    (item) => item.id === +thumbnail.dataset.id
  );
  showBigPicture(picture);
};

const renderGallery = (currentPictures) => {
  pictures = currentPictures;
  renderThumbnails(pictures, container);
  container.addEventListener('click', onContainerClick);
};

export {renderGallery};

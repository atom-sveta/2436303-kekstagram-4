import {renderThumbnails} from './thumbnails.js';
import { showBigPicture } from './fullSizePhoto.js';

const container = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-id]');
    if(!thumbnail) {
      return;
    }

    evt.preventDefault();
    const picture = pictures.find(
      (item) => item.id === +thumbnail.dataset.id
    );
    showBigPicture(picture);
  });
  renderThumbnails(pictures, container);
};


export {renderGallery};

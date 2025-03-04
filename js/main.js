import {getPictures} from './kekstagram.js';
import {renderThumbnails} from './drawingThumbnails.js';
import {renderGallery} from './gallery.js';

const container = document.querySelector('.pictures');

renderThumbnails(getPictures(), container);
renderGallery(getPictures());

import {getPictures} from './data.js';
import {renderGallery} from './gallery.js';
import './form.js';
import {resetScale} from './scale.js';
import './effect.js';

renderGallery(getPictures());
resetScale();

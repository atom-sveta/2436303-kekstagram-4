import {renderGallery} from './gallery.js';
import {showAlert} from './util.js';
import {closeOverlay} from './user-modal.js';
import {setUserFormSubmit} from './user-form.js';
import {resetScale} from './scale.js';
import './effect.js';
import {addMessages} from './message.js';
import { getData } from './api.js';

resetScale();
addMessages();
setUserFormSubmit(closeOverlay);


try {
  const thumbnails = await getData();
  renderGallery(thumbnails);
} catch (err) {
   showAlert(err.message);
}

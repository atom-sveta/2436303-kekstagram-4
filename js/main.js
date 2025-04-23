import {renderGallery} from './gallery.js';
import {showAlert} from './util.js';
import {closeOverlay} from './user-modal.js';
import {setUserFormSubmit} from './user-form.js';
import {resetScale} from './scale.js';
import './effect.js';
import {addMessages, successMessageHandler, errorMessageHandler} from './message.js';
import { getData, sendData } from './api.js';

resetScale();
addMessages();

setUserFormSubmit(async (data) => {
  try {
    await sendData(data);
    closeOverlay();
    successMessageHandler.openMessage();
  } catch {
    errorMessageHandler.openMessage();
  }
});

try {
  const thumbnails = await getData();
  renderGallery(thumbnails);
} catch (err) {
   showAlert(err.message);
}

import {renderGallery} from './gallery.js';
import {showAlert, debounce} from './util.js';
import {closeOverlay} from './user-modal.js';
import {setUserFormSubmit} from './user-form.js';
import {successMessageHandler, errorMessageHandler} from './message.js';
import { getData, sendData } from './api.js';
import { initFilter, getFilteredPictures } from './filter.js';
import './uploadPhoto.js';

const RERENDER_DELAY = 500;

setUserFormSubmit(async (data) => {
  try {
    await sendData(data);
    closeOverlay();
    successMessageHandler();
  } catch (err) {
    errorMessageHandler();
  }
});

(async () => {
  try {
    const data = await getData();
    const debouncedRenderGallery = debounce(renderGallery, RERENDER_DELAY);
    initFilter(data, debouncedRenderGallery);
    renderGallery(getFilteredPictures());
  } catch (err) {
    showAlert(err.message);
  }
})();

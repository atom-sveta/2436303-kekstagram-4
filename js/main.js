import {renderGallery} from './gallery.js';
import {showAlert, debounce} from './util.js';
import {closeOverlay} from './user-modal.js';
import {setUserFormSubmit} from './user-form.js';
import {addMessages, successMessageHandler, errorMessageHandler} from './message.js';
import { getData, sendData } from './api.js';
import {imgFiltersContainerNode, setRandomFilterClick, setDiscussedFilterClick, setDefaultFilterClick} from './filter.js'
import './uploadPhoto.js'


const RERENDER_DELAY = 500;


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


(async () => {
  try {
  const thumbnails = await getData();
  const copyThumbnailsArr = thumbnails.slice();
  renderGallery(thumbnails);

  const debouncedRenderDefault = debounce(() => renderGallery(thumbnails), RERENDER_DELAY);
  setDefaultFilterClick(debouncedRenderDefault);

  setRandomFilterClick(copyThumbnailsArr);
  setDiscussedFilterClick(copyThumbnailsArr);

  imgFiltersContainerNode.classList.remove('img-filters--inactive')
} catch (err) {
   showAlert(err.message);
}
})();


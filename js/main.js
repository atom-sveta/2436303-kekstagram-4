import {getPictures} from './data.js';
import {renderGallery} from './gallery.js';
import {closeOverlay} from './user-modal.js';
import {setUserFormSubmit} from './user-form.js';
import {resetScale} from './scale.js';
import './effect.js';
import {addMessages} from './message.js';


renderGallery(getPictures());
resetScale();
addMessages();
setUserFormSubmit(closeOverlay);

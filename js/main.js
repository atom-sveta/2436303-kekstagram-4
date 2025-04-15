// import {getPictures} from './data.js';
import {renderGallery} from './gallery.js';
import {closeOverlay} from './user-modal.js';
import {setUserFormSubmit} from './user-form.js';
import {resetScale} from './scale.js';
import './effect.js';
import {addMessages} from './message.js';


// renderGallery(getPictures());
renderGallery();
resetScale();
addMessages();
setUserFormSubmit(closeOverlay);

fetch('https://29.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json())
  .then((thumbnails) => {
    console.log('Результат', thumbnails);
  });

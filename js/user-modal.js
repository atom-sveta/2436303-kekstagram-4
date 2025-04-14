import { isEscapeKey } from './util.js';
import { resetScale } from './scale.js';
import { removeSlider } from './effect.js';
import { pristine } from './user-form.js';

const imgUploadSection = document.querySelector('.img-upload');
const fileInput = imgUploadSection.querySelector('.img-upload__input');
const overlayImgUpload = imgUploadSection.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const cancelButton = imgUploadSection.querySelector('.img-upload__cancel');
const form = imgUploadSection.querySelector('.img-upload__form');

const openOverlay = () => {
  overlayImgUpload.classList.remove('hidden');
  resetScale();
  body.classList.add('modal-open');
  document.addEventListener('keydown', onOverlayEscKeydown);
};

const closeOverlay = () => {
  form.reset();
  pristine.reset();
  removeSlider();

  overlayImgUpload.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onOverlayEscKeydown);
};

function onOverlayEscKeydown(evt) {
  if (isEscapeKey(evt)){
    evt.preventDefault();
    closeOverlay();
  }
}

const onImageLoaderClick = () => {
  openOverlay();
};

const onCancelButtonClick = () => {
  closeOverlay();
};

fileInput.addEventListener('change', onImageLoaderClick);
cancelButton.addEventListener('click', onCancelButtonClick);

export {form, openOverlay, closeOverlay};

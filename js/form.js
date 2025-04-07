import { isEscapeKey } from './util.js';
import { resetScale } from './scale.js';
import { removeSlider } from './effect.js';

const HASHTAG_VALID_REGEX = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTAG_NUMBERS = 5;
const ErrorText = {
  INVALID_COUNT: `Максимум ${MAX_HASHTAG_NUMBERS} хэштегов`,
  NOT_UNIQUE: 'Не повторяй хэштеги',
  INVALID_PATTERN: 'Начни хэштег с "#", пиши только буквы и цифры',
};

const imgUploadSection = document.querySelector('.img-upload');
const fileInput = imgUploadSection.querySelector('.img-upload__input');
const overlayImgUpload = imgUploadSection.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const cancelButton = imgUploadSection.querySelector('.img-upload__cancel');
// const previewImgUpload = imgUpload.querySelector('.img-upload__preview img');
const forms = imgUploadSection.querySelector('.img-upload__form');
const submitBtn = forms.querySelector('.img-upload__submit');
const hashtagsField = forms.querySelector('.text__hashtags');
const commentField = forms.querySelector('.text__description');


// function displayImage (inputElement) {
//   // const selectedFile =  inputElement.files[0];
//   const imageUrl = URL.createObjectURL(inputElement.files[0]);
//   previewImgUpload.src = imageUrl;
//   inputElement.value = null;
//   previewImgUpload.onload = () => URL.revokeObjectURL(imageUrl);
// }

const pristine = new Pristine(forms, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error-text',
});

const openOverlay = () => {
  overlayImgUpload.classList.remove('hidden');
  resetScale();
  body.classList.add('modal-open');
  document.addEventListener('keydown', onOverlayEscKeydown);
};

const closeOverlay = () => {
  forms.reset();
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

const normalizeTags = (tagString) => tagString
  .trim()
  .split(' ')
  .filter((tag) => Boolean(tag.length));

const hasValidTags = (value) => {
  normalizeTags(value).every((tag) => HASHTAG_VALID_REGEX.test(tag));
};

const hasValidCount = (value) => normalizeTags(value).length <= MAX_HASHTAG_NUMBERS;

const hasUniqueTags = (value) => {
  const lowerCaseTags = normalizeTags(value).map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

pristine.addValidator(
  hashtagsField,
  hasValidCount,
  ErrorText.INVALID_COUNT,
  3,
  true
);

pristine.addValidator(
  hashtagsField,
  hasUniqueTags,
  ErrorText.NOT_UNIQUE,
  1,
  true
);

pristine.addValidator(
  hashtagsField,
  hasValidTags,
  ErrorText.INVALID_PATTERN,
  2,
  true
);

const onImageLoaderClick = () => {
  openOverlay();
};

const onCancelButtonClick = () => {
  closeOverlay();
};

const onSubmitButtonClick = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

const onHashtagsFieldFocus = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

const onCommentFieldFocus = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

fileInput.addEventListener('change', onImageLoaderClick);
cancelButton.addEventListener('click', onCancelButtonClick);
submitBtn.addEventListener('submit', onSubmitButtonClick);
hashtagsField.addEventListener('keydown', onHashtagsFieldFocus);
commentField.addEventListener('keydown', onCommentFieldFocus);

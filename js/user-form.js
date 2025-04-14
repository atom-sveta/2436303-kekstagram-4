import { isEscapeKey } from './util.js';
import {successMessageHandler, errorMessageHandler} from './message.js';
import { sendData } from './api.js';

const HASHTAG_VALID_REGEX = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTAG_NUMBERS = 5;
const VALID_COMMENT_LENGTH = 140;
const ErrorText = {
  INVALID_COUNT_TAGS: `Максимум ${MAX_HASHTAG_NUMBERS} хэштегов`,
  NOT_UNIQUE_TAGS: 'Не повторяй хэштеги',
  INVALID_PATTERN_TAGS: 'Начинай хэштег с "#" и пиши от 1-ой до 19-ти букв и/или цифр',
  INVALID_COMMENT_LENGTH: 'не превышай лимит в 140 символов',
};

const submitButtonText = {
  IDLE: 'Сохранить',
  SENDING: 'Сохраняю...'
};

const form = document.querySelector('.img-upload__form');
const hashtagsField = form.querySelector('.text__hashtags');
const commentField = form.querySelector('.text__description');
const submitButton = form.querySelector('button[type="submit"]');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error-text',
});

const normalizeTags = (tagString) => tagString
  .trim()
  .split(' ')
  .filter((tag) => tag.length > 0);

const hasValidTags = (value) => {
  if (value.trim() === '') {
    return true;
  }
  const tags = normalizeTags(value);
  return tags.every((tag) => HASHTAG_VALID_REGEX.test(tag));
};

const hasValidTagsCount = (value) => normalizeTags(value).length <= MAX_HASHTAG_NUMBERS;

const hasUniqueTags = (value) => {
  const lowerCaseTags = normalizeTags(value).map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const hasValidCommentLength = (value) => {
  if (value.length === '') {
    return true;
  }
  return value.length <= VALID_COMMENT_LENGTH;
};

pristine.addValidator(
  hashtagsField,
  hasUniqueTags,
  ErrorText.NOT_UNIQUE_TAGS,
  1,
  true
);

pristine.addValidator(
  hashtagsField,
  hasValidTags,
  ErrorText.INVALID_PATTERN_TAGS,
  2,
  true
);

pristine.addValidator(
  hashtagsField,
  hasValidCommentLength,
  ErrorText.INVALID_COUNT_TAGS,
  3,
  true
);

pristine.addValidator(
  commentField,
  hasValidTagsCount,
  ErrorText.INVALID_COMMENT_LENGTH,
);

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

//  Error Сообщение должно исчезать... В таком случае вся введённая пользователем информация сохраняется,
// чтобы у него была возможность отправить форму повторно.

hashtagsField.addEventListener('keydown', onHashtagsFieldFocus);
commentField.addEventListener('keydown', onCommentFieldFocus);

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = submitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = submitButtonText.IDLE;
};

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(onSuccess)
        .then(successMessageHandler.openMessage())
        .catch(() => {
          errorMessageHandler.openMessage();
        })
        .finally(unblockSubmitButton);
    }
  });
};
export {pristine, setUserFormSubmit};

import { isEscapeKey, } from './util.js';

const HASHTAG_VALID_REGEX = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTAG_NUMBERS = 5;
const VALID_COMMENT_LENGTH = 140;
const ErrorText = {
  INVALID_COUNT_TAGS: `Максимум ${MAX_HASHTAG_NUMBERS} хэштегов`,
  NOT_UNIQUE_TAGS: 'Такой хэштег уже есть. Придумай новый',
  INVALID_PATTERN_TAGS: '"#" + "буквы/цифры" (до 19-ти символов после "#")',
  INVALID_COMMENT_LENGTH: `Максимальное количество: ${VALID_COMMENT_LENGTH} символов`,
};

const SubmitButtonText = {
  IDLE: 'Опубликовать',
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
  hasValidTagsCount,
  ErrorText.INVALID_COUNT_TAGS,
  3,
  true
);

pristine.addValidator(
  commentField,
  hasValidCommentLength,
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

hashtagsField.addEventListener('keydown', onHashtagsFieldFocus);
commentField.addEventListener('keydown', onCommentFieldFocus);

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const setUserFormSubmit = (callback) => {
  form.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();
      await callback(new FormData(form));
      unblockSubmitButton();
    }
  });
};
export {pristine, setUserFormSubmit};


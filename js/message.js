import { isEscapeKey } from './util.js';

const body = document.querySelector('body');
const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');

let isErrorMessageVisible = false;

const hideMessage = () => {
  const message = document.querySelector('.success') || document.querySelector('.error');
  if (!message) {
    return;
  }

  const messageCloseButton = message.querySelector('.success__button') || message.querySelector('.error__button');

  body.removeEventListener('click', onBodyClick);
  document.removeEventListener('keydown', onEscKeydownClick);

  if (message.classList.contains('error')) {
    isErrorMessageVisible = false;
  }

  if (!messageCloseButton) {
    messageCloseButton.removeEventListener('click', hideMessage);
  }

  message.remove();
};

function onEscKeydownClick(evt){
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideMessage();
  }
}

function onBodyClick(evt) {
  if (!(evt.target.closest('.success__inner') ||  evt.target.closest('.error__inner'))) {
    hideMessage();
  }
}

const showMessage = (messageTemplate, messageCloseButtonSelector) => {
  const message = messageTemplate.cloneNode(true);
  message.style.zIndex = 100;
  body.append(message);
  body.addEventListener('click', onBodyClick);
  document.addEventListener('keydown', onEscKeydownClick);
  document.querySelector(messageCloseButtonSelector).addEventListener('click', hideMessage);

  if (message.classList.contains('error')) {
    isErrorMessageVisible = true;
  }
};

const successMessageHandler = () => showMessage(successMessage, '.success__button');

const errorMessageHandler = () => showMessage(errorMessage, '.error__button');

export {successMessageHandler, errorMessageHandler, isErrorMessageVisible};

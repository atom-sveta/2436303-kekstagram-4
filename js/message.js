import { isEscapeKey } from './util.js';

const body = document.querySelector('body');
const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');

const hideMessage = () => {
  const message = document.querySelector('.success') || document.querySelector('.error');
  const messageCloseButton = document.querySelector('.success__button') || message.querySelector('.error__button');
  document.removeEventListener('keydown', onEscKeydownClick);
  document.removeEventListener('click', hideMessage);
  messageCloseButton.removeEventListener('click', hideMessage);
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

const showMessage = (message, messageCloseButton) => {
  message.style.zIndex = 100;
  body.append(message.cloneNode(true));
  document.addEventListener('keydown', onEscKeydownClick);
  body.addEventListener('click', onBodyClick);
  body.querySelector(messageCloseButton).addEventListener('click', hideMessage);
};

const successMessageHandler = () => showMessage(successMessage, '.success__button');

const errorMessageHandler = () => showMessage(errorMessage, '.error__button');

export {successMessageHandler, errorMessageHandler};

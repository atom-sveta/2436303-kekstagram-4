import { isEscapeKey } from './util.js';

const body = document.querySelector('body');
const successMessage = document
  .querySelector('#success')
  .content.querySelector('.success')
  .cloneNode(true);
const successButton = successMessage.querySelector('.success__button');
const errorMessage = document
  .querySelector('#error')
  .content.querySelector('.error')
  .cloneNode(true);
const errorButton = errorMessage.querySelector('.error__button');

function createMessageHandler(message, closeButton){
  const hideMessage = () => {
    message.classList.add('hidden');
    document.removeEventListener('keydown', onHideMessageKeydown);
    document.removeEventListener('click', hideMessage);
    closeButton.removeEventListener('click', hideMessage);
  };

  function onHideMessageKeydown(evt){
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      hideMessage();
    }
  }

  const openMessage = () => {
    message.classList.remove('hidden');
    document.addEventListener('keydown', onHideMessageKeydown);
    closeButton.addEventListener('click', hideMessage);
    document.addEventListener('click', hideMessage);
  };

  return {openMessage, hideMessage};
}

const successMessageHandler = createMessageHandler(successMessage, successButton);
const errorMessageHandler = createMessageHandler(errorMessage, errorButton);

const addMessages = () => {
  body.append(successMessage);
  body.append(errorMessage);
  successMessage.classList.add('hidden');
  errorMessage.classList.add('hidden');
};

export {addMessages, successMessageHandler, errorMessageHandler};

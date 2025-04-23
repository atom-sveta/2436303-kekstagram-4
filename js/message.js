import { isEscapeKey } from './util.js';

const body = document.querySelector('body');

function createMessage(templateId) {
  const message = document
    .querySelector(templateId)
    .content.querySelector('.success, .error')
    .cloneNode(true);

  const closeButton = message.querySelector('.success__button, .error__button');
  message.classList.add('hidden');
  message.style.zIndex = 100;

  return { message, closeButton };
}

function createMessageHandler({message, closeButton}){
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

const successMessage = createMessage('#success');
const errorMessage = createMessage('#error');

const successMessageHandler = createMessageHandler(successMessage);
const errorMessageHandler = createMessageHandler(errorMessage);

const addMessages = () => {
  body.append(successMessage.message);
  body.append(errorMessage.message);
};

export {addMessages, successMessageHandler, errorMessageHandler};

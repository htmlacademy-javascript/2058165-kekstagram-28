import { isEscape } from './util.js';

const successModalTemplateElement = document.querySelector('#success').content.querySelector('.success');
const errorModalTemplateElement = document.querySelector('#error').content.querySelector('.error');

const getTypeMessageElement = () => document.querySelector('.success, .error');

const closeModal = () => {
  const message = getTypeMessageElement();
  if (message) {
    message.remove();
  }

  document.removeEventListener('keydown', onModalEscKeydown);
  document.removeEventListener('click', onModalOutsideClick);
};

const openSuccessModal = () => {
  const success = successModalTemplateElement.cloneNode(true);
  document.body.appendChild(success);
  const successButtonElement = success.querySelector('.success__button');
  successButtonElement.addEventListener('click', () => {
    closeModal();
  });

  document.addEventListener('keydown', onModalEscKeydown);
  document.addEventListener('click', onModalOutsideClick);
};

const openErrorModal = () => {
  const error = errorModalTemplateElement.cloneNode(true);
  document.body.appendChild(error);
  const errorButtonElement = error.querySelector('.error__button');
  errorButtonElement.addEventListener('click', () => {
    closeModal();
  });

  document.addEventListener('keydown', onModalEscKeydown);
  document.addEventListener('click', onModalOutsideClick);
};

function onModalEscKeydown (evt) {
  if (isEscape(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

function onModalOutsideClick (evt) {
  const type = getTypeMessageElement();
  if (evt.target === type) {
    closeModal();
  }
}

export { getTypeMessageElement, openSuccessModal, openErrorModal };

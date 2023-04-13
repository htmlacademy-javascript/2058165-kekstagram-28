import { sendData } from './api.js';
import { closePhotoUploadForm } from './form.js';
import { openSuccessModal, openErrorModal } from './upload-message.js';

const MAX_HASHTAG_COUNT = 5;
const VALID_HASHTAG_REGEXP = /^#[a-zа-яё0-9]{1,19}$/i;

const SubmitButtonText = {
  IDLE: 'Сохранить',
  SENDING: 'Сохраняю...'
};

const photoUploadFormElement = document.querySelector('.img-upload__form');
const hashtagFieldElement = photoUploadFormElement.querySelector('.text__hashtags');
const submitButtonElement = photoUploadFormElement.querySelector('.img-upload__submit');

const pristine = new window.Pristine (photoUploadFormElement, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'form-validation__parent--error',
  successClass: 'form-validation__parent--success',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'form-validation__text-error'
});

const isValidHashtag = (hashtag) => VALID_HASHTAG_REGEXP.test(hashtag);

const isUniqueHashtags = (hashtags) => new Set(hashtags).size === hashtags.length;

const parseHashtagInput = (value) => value
  .toLowerCase()
  .split(' ')
  .filter((hashtag) => hashtag.trim() !== '');

pristine.addValidator(hashtagFieldElement, (value) => {
  const hashtags = parseHashtagInput(value);

  return isUniqueHashtags(hashtags);
}, 'Один и тот же хэш-тег не может быть использован дважды', 1);

pristine.addValidator(hashtagFieldElement, (value) => {
  const hashtags = parseHashtagInput(value);

  return hashtags.every(isValidHashtag);
}, 'Хэш-тег должен начинаться с #, не может состоять только из одной решётки, содержать пробелы, спецсимволы и символы пунктуации', 2);

pristine.addValidator(hashtagFieldElement, (value) => {
  const hashtags = parseHashtagInput(value);

  return hashtags.length < MAX_HASHTAG_COUNT;
}, 'Нельзя указать больше пяти хэш-тегов', 3);

const resetPristine = () => pristine.reset();

const blockSubmitButton = () => {
  submitButtonElement.disabled = true;
  submitButtonElement.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButtonElement.disabled = false;
  submitButtonElement.textContent = SubmitButtonText.IDLE;
};

const addPhotoUploadFormSubmit = () => {
  photoUploadFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(() => {
          openSuccessModal();
          closePhotoUploadForm();
        })
        .catch(() => {
          openErrorModal();
        })
        .finally(unblockSubmitButton);
    }
  });
};

export { addPhotoUploadFormSubmit, resetPristine };

import { isEscape } from './util.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { resetPristine } from './validation-form.js';
import { uploadPicture, resetPicture } from './upload-picture.js';
import { getTypeMessageElement } from './upload-message.js';

const photoUploadFormElement = document.querySelector('.img-upload__form');
const photoEditFormElement = photoUploadFormElement.querySelector('.img-upload__overlay');
const cancelFormButtonElement = photoUploadFormElement.querySelector('.img-upload__cancel');
const photoUploadButtonElement = photoUploadFormElement.querySelector('.img-upload__input');
const hashtagFieldElement = photoUploadFormElement.querySelector('.text__hashtags');
const commentFieldElement = photoUploadFormElement.querySelector('.text__description');

const openPhotoUploadForm = () => {
  uploadPicture();

  photoEditFormElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  cancelFormButtonElement.addEventListener('click', onCancelFormButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

const closePhotoUploadForm = () => {
  photoEditFormElement.classList.add('hidden');
  document.body.classList.remove('modal-open');

  photoUploadFormElement.reset();
  resetPristine();
  resetScale();
  resetEffects();
  resetPicture();

  cancelFormButtonElement.removeEventListener('click', onCancelFormButtonClick);
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onCancelFormButtonClick (evt) {
  evt.preventDefault();
  closePhotoUploadForm();
}

const onPhotoUploadButtonChange = () => openPhotoUploadForm();

const isTextFieldFocused = () => document.activeElement === hashtagFieldElement || document.activeElement === commentFieldElement;

function onDocumentKeydown (evt) {
  if (isEscape(evt) && !isTextFieldFocused() && !getTypeMessageElement()) {
    evt.preventDefault();
    closePhotoUploadForm();
  }
}

photoUploadButtonElement.addEventListener('change', onPhotoUploadButtonChange);
cancelFormButtonElement.addEventListener('click', onCancelFormButtonClick);

export { closePhotoUploadForm };

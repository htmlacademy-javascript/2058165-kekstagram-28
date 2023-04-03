import { isEscape } from './util.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { resetPristine } from './validation-form.js';

const photoUploadForm = document.querySelector('.img-upload__form');
const photoEditForm = photoUploadForm.querySelector('.img-upload__overlay');
const cancelFormButton = photoUploadForm.querySelector('.img-upload__cancel');
const photoUploadButton = photoUploadForm.querySelector('.img-upload__input');
const hashtagField = photoUploadForm.querySelector('.text__hashtags');
const commentField = photoUploadForm.querySelector('.text__description');

const openPhotoUploadForm = () => {
  photoEditForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  cancelFormButton.addEventListener('click', onCancelFormButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeUploadForm = () => {
  photoUploadForm.reset();
  resetPristine();
  resetScale();
  resetEffects();
  photoEditForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  cancelFormButton.removeEventListener('click', onCancelFormButtonClick);
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onCancelFormButtonClick (evt) {
  evt.preventDefault();
  closeUploadForm();
}

const onPhotoUploadButton = () => openPhotoUploadForm();

const isTextFieldFocused = () => document.activeElement === hashtagField || document.activeElement === commentField;

function onDocumentKeydown (evt) {
  if (isEscape(evt) && !isTextFieldFocused()) {
    evt.preventDefault();
    closeUploadForm();
  }
}

photoUploadButton.addEventListener('change', onPhotoUploadButton);

cancelFormButton.addEventListener('click', onCancelFormButtonClick);

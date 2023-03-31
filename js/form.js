import { resetScale } from './scale.js';

const photoUploadForm = document.querySelector('.img-upload__form');
const photoEditForm = photoUploadForm.querySelector('.img-upload__overlay');
const cancelFormButton = photoUploadForm.querySelector('.img-upload__cancel');
const photoUploadButton = photoUploadForm.querySelector('.img-upload__input');
const hashtagField = photoUploadForm.querySelector('.text__hashtags');
const commentField = photoUploadForm.querySelector('.text__description');

const closeUploadForm = () => {
  photoUploadForm.reset();
  resetScale();
  photoEditForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const isTextFieldFocused = () => document.activeElement === hashtagField || document.activeElement === commentField;

const onDocumentKeydown = (evt) => {
  if (evt.key.startsWith('Esc') && !isTextFieldFocused()) {
    evt.preventDefault();
    closeUploadForm();
  }
};

const openUploadForm = () => {
  resetScale();
  photoEditForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

photoUploadButton.addEventListener('change', openUploadForm);

cancelFormButton.addEventListener('click', closeUploadForm);

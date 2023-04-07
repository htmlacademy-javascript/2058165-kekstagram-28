import { closePhotoUploadForm } from './form.js';
import { setPhotoUploadFormSubmit } from './validation-form.js';
import { renderThumbnails } from './thumbnails.js';
import { getData } from './api.js';
import { showAlert } from './util.js';

getData()
  .then((photos) => {
    renderThumbnails(photos);
  })
  .catch((err) => {
    showAlert(err.message);
  });

setPhotoUploadFormSubmit(closePhotoUploadForm);

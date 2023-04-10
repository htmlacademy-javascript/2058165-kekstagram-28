import { closePhotoUploadForm } from './form.js';
import { setPhotoUploadFormSubmit } from './validation-form.js';
import { renderThumbnails } from './thumbnails.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
import { showFilters, setFilterChange } from './filter.js';

getData()
  .then((photos) => {
    renderThumbnails(photos);
    setFilterChange(photos);
  })
  .catch((err) => {
    showAlert(err.message);
  });

setPhotoUploadFormSubmit(closePhotoUploadForm);
showFilters();

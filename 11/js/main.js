import { closePhotoUploadForm } from './form.js';
import { addPhotoUploadFormSubmit } from './validation-form.js';
import { renderThumbnails, setThumbnailClickHandler } from './thumbnails.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
import { showFilters, setFilterChange } from './filter.js';
import { openBigPicture } from './big-picture.js';

getData()
  .then((photos) => {
    const onThumbnailClick = (photoId) => {
      const photo = photos.find(({id}) => id === photoId);

      openBigPicture(photo);
    };

    renderThumbnails(photos);
    setThumbnailClickHandler(onThumbnailClick);
    setFilterChange(photos);
  })
  .catch((err) => {
    showAlert(err.message);
  });

addPhotoUploadFormSubmit(closePhotoUploadForm);
showFilters();

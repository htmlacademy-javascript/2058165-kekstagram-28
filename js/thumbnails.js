import { createThumbnail } from './thumbnail.js';

const pictureContainer = document.querySelector('.pictures');

let handleThumbnailClick = null;

const onPictureContainerClick = (evt) => {
  const thumbnail = evt.target.closest('.picture');
  if (thumbnail === null) {
    return;
  }

  handleThumbnailClick(Number(thumbnail.dataset.id));
};

const renderThumbnails = (photos) => {
  const pictureListFragment = document.createDocumentFragment();
  photos.forEach((photo) => pictureListFragment.appendChild(createThumbnail(photo)));
  pictureContainer.appendChild(pictureListFragment);

  pictureContainer.addEventListener('click', onPictureContainerClick);
};

const setThumbnailClickHandler = (callback) => {
  handleThumbnailClick = callback;
};

export { renderThumbnails, setThumbnailClickHandler };

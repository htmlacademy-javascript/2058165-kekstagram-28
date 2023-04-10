import { createThumbnail } from './thumbnail.js';
import { openBigPicture } from './big-picture.js';

const pictureContainer = document.querySelector('.pictures');

const renderThumbnails = (photos) => {
  const pictureListFragment = document.createDocumentFragment();
  photos.forEach((photo) => pictureListFragment.append(createThumbnail(photo)));
  pictureContainer.append(pictureListFragment);

  pictureContainer.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('.picture');
    if (thumbnail === null) {
      return;
    }

    const dataId = Number(thumbnail.dataset.id);
    const photo = photos.find(({id}) => id === dataId);

    openBigPicture(photo);
  });
};

export { renderThumbnails };

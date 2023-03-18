import {createPhotoDescriptions} from './data.js';

const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const pictureDescriptions = createPhotoDescriptions();

const pictureListFragment = document.createDocumentFragment();

const renderThumbnails = () => {

  pictureDescriptions.forEach((photo) => {
    const thumbnailElement = pictureTemplate.cloneNode(true);
    thumbnailElement.querySelector('.picture__img').index = photo.id;
    thumbnailElement.querySelector('.picture__img').src = photo.url;
    thumbnailElement.querySelector('.picture__img').alt = photo.description;
    thumbnailElement.querySelector('.picture__likes').textContent = photo.likes;
    thumbnailElement.querySelector('.picture__comments').textContent = photo.comments.length;
    pictureListFragment.append(thumbnailElement);
  });

  pictureContainer.append(pictureListFragment);
};

export {renderThumbnails};

import {createPictureDescriptions} from './data.js';

const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const pictureDescriptions = createPictureDescriptions();

const pictureListFragment = document.createDocumentFragment();

const renderThumbnails = () => {

  pictureDescriptions.forEach((picture) => {
    const thumbnailElement = pictureTemplate.cloneNode(true);
    thumbnailElement.querySelector('.picture__img').index = picture.id;
    thumbnailElement.querySelector('.picture__img').src = picture.url;
    thumbnailElement.querySelector('.picture__img').alt = picture.description;
    thumbnailElement.querySelector('.picture__likes').textContent = picture.likes;
    thumbnailElement.querySelector('.picture__comments').textContent = picture.comments.length;
    pictureListFragment.append(thumbnailElement);
  });

  pictureContainer.append(pictureListFragment);
};

export {renderThumbnails};

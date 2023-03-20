const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const createThumbnail = (photo) => {
  const { id, url, description, likes, comments } = photo;
  const thumbnailItem = pictureTemplate.cloneNode(true);
  const thumbnailItemPicture = thumbnailItem.querySelector('.picture__img');
  thumbnailItemPicture.index = id;
  thumbnailItemPicture.src = url;
  thumbnailItemPicture.alt = description;
  thumbnailItem.querySelector('.picture__likes').textContent = likes;
  thumbnailItem.querySelector('.picture__comments').textContent = comments.length;
  return thumbnailItem;
};

const renderThumbnails = (items) => {
  const pictureListFragment = document.createDocumentFragment();
  items.forEach((photo) => pictureListFragment.append(createThumbnail(photo)));
  pictureContainer.append(pictureListFragment);
};

export {renderThumbnails};

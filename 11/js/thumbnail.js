const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const createThumbnail = (photo) => {
  const { id, url, description, likes, comments } = photo;
  const thumbnailItem = pictureTemplate.cloneNode(true);

  const thumbnailItemPicture = thumbnailItem.querySelector('.picture__img');
  thumbnailItem.dataset.id = id;
  thumbnailItemPicture.src = url;
  thumbnailItemPicture.alt = description;
  thumbnailItem.querySelector('.picture__likes').textContent = likes;
  thumbnailItem.querySelector('.picture__comments').textContent = comments.length;

  return thumbnailItem;
};

export {createThumbnail};

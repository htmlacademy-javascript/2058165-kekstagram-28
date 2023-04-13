const pictureTemplateElement = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const createThumbnail = (photo) => {
  const { id, url, description, likes, comments } = photo;
  const thumbnailElement = pictureTemplateElement.cloneNode(true);

  const thumbnailPictureElement = thumbnailElement.querySelector('.picture__img');
  thumbnailElement.dataset.id = id;
  thumbnailPictureElement.src = url;
  thumbnailPictureElement.alt = description;
  thumbnailElement.querySelector('.picture__likes').textContent = likes;
  thumbnailElement.querySelector('.picture__comments').textContent = comments.length;

  return thumbnailElement;
};

export {createThumbnail};

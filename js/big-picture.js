const bigPicture = document.querySelector('.big-picture');
const cancelButton = bigPicture.querySelector('#picture-cancel');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const bigPictureLikesCount = bigPicture.querySelector('.likes-count');
const bigPictureCommentsCount = bigPicture.querySelector('.comments-count');

const commentContainer = bigPicture.querySelector('.social__comments');
const commentTemplate = bigPicture.querySelector('.social__comment').cloneNode(true);
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoad = bigPicture.querySelector('.comments-loader');

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('.modal-open');
};

const onBigPictureKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
};

const createBigPicture = (photo) => {
  const { url, description, likes, comments } = photo;
  bigPictureImage.src = url;
  bigPictureLikesCount.textContent = likes;
  bigPictureCommentsCount.textContent = comments.length;
  bigPictureDescription.textContent = description;

  const commentListFragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const { avatar, name, message } = comment;

    const commentItem = commentTemplate.cloneNode(true);
    const picture = commentItem.querySelector('.social__picture');
    picture.src = avatar;
    picture.alt = name;
    commentItem.querySelector('.social__text').textContent = message;

    commentListFragment.append(commentItem);
  });

  commentContainer.innerHTML = '';
  commentContainer.append(commentListFragment);
};

const openBigPicture = (photo) => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('.modal-open');
  commentCount.classList.add('hidden');
  commentsLoad.classList.add('hidden');
  document.addEventListener('keydown', onBigPictureKeydown);

  cancelButton.addEventListener('click', () => {
    closeBigPicture();
  });

  createBigPicture(photo);
};

export {
  openBigPicture,
  closeBigPicture
};

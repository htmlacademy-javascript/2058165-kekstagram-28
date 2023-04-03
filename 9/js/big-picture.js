const COMMENTS_IN_BLOCK = 5;

const bigPicture = document.querySelector('.big-picture');
const cancelButton = bigPicture.querySelector('#picture-cancel');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const bigPictureLikesCount = bigPicture.querySelector('.likes-count');
const bigPictureCommentsCount = bigPicture.querySelector('.comments-count');

const commentContainer = bigPicture.querySelector('.social__comments');
const commentTemplate = bigPicture.querySelector('.social__comment').cloneNode(true);
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

let commentsShown = 0;
let commentBlocks = [];

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const onDocumentKeydown = (evt) => {
  if (evt.key.startsWith('Esc')) {
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
};

const createComment = (comment) => {
  const { avatar, name, message } = comment;
  const commentItem = commentTemplate.cloneNode(true);
  const picture = commentItem.querySelector('.social__picture');
  picture.src = avatar;
  picture.alt = name;
  commentItem.querySelector('.social__text').textContent = message;
  return commentItem;
};

const renderComments = () => {
  commentsShown += COMMENTS_IN_BLOCK;

  if (commentsShown >= commentBlocks.length) {
    commentsLoader.classList.add('hidden');
    commentsShown = commentBlocks.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const commentFragment = document.createDocumentFragment();
  for (let i = 0; i < commentsShown; i ++) {
    const commentItem = createComment(commentBlocks[i]);
    commentFragment.append(commentItem);
  }

  commentContainer.replaceChildren();
  commentContainer.append(commentFragment);
  commentCount.innerHTML = `${commentsShown} из <span class="comments-count">${commentBlocks.length}</span> комментариев`;
};

const onCommentsLoaderClick = () => renderComments();
commentsLoader.addEventListener('click', onCommentsLoaderClick);

const openBigPicture = (photo) => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);

  cancelButton.addEventListener('click', () => {
    closeBigPicture();
  });

  createBigPicture(photo);
  commentBlocks = photo.comments;
  commentsShown = 0;
  renderComments(photo.comments);
};

export {
  openBigPicture,
  closeBigPicture
};

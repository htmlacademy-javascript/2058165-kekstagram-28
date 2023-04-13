import { isEscape } from './util.js';

const COMMENTS_IN_BLOCK = 5;

const bigPictureElement = document.querySelector('.big-picture');
const cancelButtonElement = bigPictureElement.querySelector('#picture-cancel');
const bigPictureImageElement = bigPictureElement.querySelector('.big-picture__img img');
const bigPictureDescriptionElement = bigPictureElement.querySelector('.social__caption');
const bigPictureLikesCountElement = bigPictureElement.querySelector('.likes-count');
const bigPictureCommentsCountElement = bigPictureElement.querySelector('.comments-count');

const commentContainer = bigPictureElement.querySelector('.social__comments');
const commentTemplate = bigPictureElement.querySelector('.social__comment').cloneNode(true);
const commentCount = bigPictureElement.querySelector('.social__comment-count');
const commentsLoader = bigPictureElement.querySelector('.comments-loader');

let commentsShown = 0;
let commentBlocks = [];

const closeBigPicture = () => {
  bigPictureElement.classList.add('hidden');
  document.body.classList.remove('modal-open');

  cancelButtonElement.removeEventListener('click', onCancelButtonClick);
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown (evt) {
  if (isEscape(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
}

const updateBigPicture = (photo) => {
  const { url, description, likes, comments } = photo;
  bigPictureImageElement.src = url;
  bigPictureLikesCountElement.textContent = likes;
  bigPictureCommentsCountElement.textContent = comments.length;
  bigPictureDescriptionElement.textContent = description;
};

const createComment = (comment) => {
  const { avatar, name, message } = comment;
  const commentElement = commentTemplate.cloneNode(true);
  const pictureElement = commentElement.querySelector('.social__picture');
  pictureElement.src = avatar;
  pictureElement.alt = name;
  commentElement.querySelector('.social__text').textContent = message;
  return commentElement;
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

function onCancelButtonClick () {
  cancelButtonElement.addEventListener('click', () => {
    closeBigPicture();
  });
}

const openBigPicture = (photo) => {
  updateBigPicture(photo);
  commentBlocks = photo.comments;
  commentsShown = 0;
  renderComments(photo.comments);

  bigPictureElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
  cancelButtonElement.addEventListener('click', onCancelButtonClick);
};

export { openBigPicture, closeBigPicture };

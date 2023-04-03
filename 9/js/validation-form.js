const MAX_HASHTAG_COUNT = 5;
const VALID_HASHTAG_REGEXP = /^#[a-zа-яё0-9]{1,19}$/i;

const photoUploadForm = document.querySelector('.img-upload__form');
const hashtagField = photoUploadForm.querySelector('.text__hashtags');

const pristine = new window.Pristine (photoUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'form-validation__parent--error',
  successClass: 'form-validation__parent--success',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'form-validation__text-error'
});

const isValidHashtag = (hashtag) => VALID_HASHTAG_REGEXP.test(hashtag);

const isUniqueHashtags = (hashtags) => new Set(hashtags).size === hashtags.length;

const parseHashtagInput = (value) => value
  .split(' ')
  .filter((hashtag) => hashtag.trim() !== '');

pristine.addValidator(hashtagField, (value) => {
  const hashtags = parseHashtagInput(value);

  return isUniqueHashtags(hashtags);
}, 'Один и тот же хэш-тег не может быть использован дважды', 1);

pristine.addValidator(hashtagField, (value) => {
  const hashtags = parseHashtagInput(value);

  return hashtags.every(isValidHashtag);
}, 'Хэш-тег должен начинаться с #, не может состоять только из одной решётки, содержать пробелы, спецсимволы и символы пунктуации', 2);

pristine.addValidator(hashtagField, (value) => {
  const hashtags = parseHashtagInput(value);

  return hashtags.length < MAX_HASHTAG_COUNT;
}, 'Нельзя указать больше пяти хэш-тегов', 3);

const resetPristine = () => pristine.reset();

const isValid = () => pristine.validate();

export { resetPristine, isValid };

// photoUploadForm.addEventListener('submit', (evt) => {
//   evt.preventDefault();

//   const isValid = pristine.validate();
//   console.log(isValid);
// });

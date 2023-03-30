// const MAX_HASHTAG_COUNT = 5;
// const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

const photoUploadForm = document.querySelector('.img-upload__form');
const hashtagField = photoUploadForm.querySelector('.text__hashtags');

const pristine = new Pristine (photoUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});

const validateTags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return tags;
};

const isValidTagSymbols = () => {};

const isValidTagCount = () => {};

const isUniqueTag = () => {};


// pristine.addValidator(hashtagField, isValidTagSymbols, 'неверный хэш-тег');
// pristine.addValidator(hashtagField, isValidTagCount, '');
// pristine.addValidator(hashtagField, isUniqueTag, '');

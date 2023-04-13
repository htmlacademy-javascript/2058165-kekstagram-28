const PICTURE_TYPES = ['jpg', 'jpeg', 'png'];

const pictureUploadButtonElement = document.querySelector('.img-upload__input');
const picturePreviewElement = document.querySelector('.img-upload__preview img');
const previewEffectElements = document.querySelectorAll('.effects__preview');

const uploadPicture = () => {
  const picture = pictureUploadButtonElement.files[0];
  const pictureName = picture.name.toLowerCase();

  const matches = PICTURE_TYPES.some((type) => pictureName.endsWith(type));
  if (matches) {
    picturePreviewElement.src = URL.createObjectURL(picture);
    previewEffectElements.forEach((effect) => {
      effect.style.backgroundImage = `url${picturePreviewElement.src}`;
    });
  }
};

const resetPicture = () => {
  URL.revokeObjectURL(picturePreviewElement.src);
  picturePreviewElement.src = '';
};

export { uploadPicture, resetPicture };

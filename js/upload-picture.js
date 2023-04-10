const PICTURE_TYPES = ['jpg', 'jpeg', 'png'];

const pictureUploadButton = document.querySelector('.img-upload__input');
const picturePreview = document.querySelector('.img-upload__preview img');
const effectsPreview = document.querySelectorAll('.effects__preview');

const uploadPicture = () => {
  const picture = pictureUploadButton.files[0];
  const pictureName = picture.name.toLowerCase();

  const matches = PICTURE_TYPES.some((type) => pictureName.endsWith(type));
  if (matches) {
    picturePreview.src = URL.createObjectURL(picture);
    effectsPreview.forEach((effect) => {
      effect.style.backgroundImage = `url${picturePreview.src}`;
    });
  }
};

export { uploadPicture };

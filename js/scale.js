const ScaleContol = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
  DEFAULT: 100
};

const photoPreviewElement = document.querySelector('.img-upload__preview img');
const smallerButtonElement = document.querySelector('.scale__control--smaller');
const biggerButtonElement = document.querySelector('.scale__control--bigger');
const scaleInputElement = document.querySelector('.scale__control--value');

const setScalePhoto = (value) => {
  photoPreviewElement.style.transform = `scale(${value / 100})`;
  scaleInputElement.value = `${value}%`;
};

const onSmallerButtonClick = () => {
  const currentValue = parseInt(scaleInputElement.value, 10);
  let newValue = currentValue - ScaleContol.STEP;
  if (newValue < ScaleContol.MIN) {
    newValue = ScaleContol.MIN;
  }

  setScalePhoto(newValue);
};

const onBiggerButtonClick = () => {
  const currentValue = parseInt(scaleInputElement.value, 10);
  let newValue = currentValue + ScaleContol.STEP;
  if (newValue > ScaleContol.MAX) {
    newValue = ScaleContol.MAX;
  }

  setScalePhoto(newValue);
};


smallerButtonElement.addEventListener('click', onSmallerButtonClick);
biggerButtonElement.addEventListener('click', onBiggerButtonClick);

const resetScale = () => {
  setScalePhoto(ScaleContol.DEFAULT);
};

export { resetScale };

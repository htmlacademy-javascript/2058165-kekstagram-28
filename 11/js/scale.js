const ScaleContol = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
  DEFAULT: 100
};

const photoPreview = document.querySelector('.img-upload__preview img');
const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');

const setScalePhoto = (value) => {
  photoPreview.style.transform = `scale(${value / 100})`;
  scaleInput.value = `${value}%`;
};

const onSmallerButtonClick = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  let newValue = currentValue - ScaleContol.STEP;
  if (newValue < ScaleContol.MIN) {
    newValue = ScaleContol.MIN;
  }

  setScalePhoto(newValue);
};

const onBiggerButtonClick = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  let newValue = currentValue + ScaleContol.STEP;
  if (newValue > ScaleContol.MAX) {
    newValue = ScaleContol.MAX;
  }

  setScalePhoto(newValue);
};


smallerButton.addEventListener('click', onSmallerButtonClick);
biggerButton.addEventListener('click', onBiggerButtonClick);

const resetScale = () => {
  setScalePhoto(ScaleContol.DEFAULT);
};

export { resetScale };

import { effectNameToOptions } from './effects-options.js';

const DEFAULT_EFFECT = effectNameToOptions.none;
let currentEffect = DEFAULT_EFFECT;

const sliderContainerElement = document.querySelector('.img-upload__effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const imagePreviewElement = document.querySelector('.img-upload__preview img');
const effectsElement = document.querySelector('.effects');
const effectLevelElement = document.querySelector('.effect-level__value');

const isDefaultEffect = () => currentEffect === DEFAULT_EFFECT;

const showSlider = () => sliderContainerElement.classList.remove('hidden');

const hideSlider = () => sliderContainerElement.classList.add('hidden');

const updateSlider = () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: currentEffect.min,
      max: currentEffect.max,
    },
    start: currentEffect.max,
    step: currentEffect.step,
  });
};

const onEffectsChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }

  const effectName = evt.target.value;
  currentEffect = effectNameToOptions[effectName];
  imagePreviewElement.className = `effects__preview--${currentEffect.name}`;

  if (isDefaultEffect()) {
    hideSlider();
  } else {
    showSlider();
  }

  updateSlider();
};

const onSliderUpdate = () => {
  const sliderValue = sliderElement.noUiSlider.get();

  imagePreviewElement.style.filter = isDefaultEffect()
    ? DEFAULT_EFFECT.style
    : `${currentEffect.style}(${sliderValue}${currentEffect.unit})`;

  effectLevelElement.value = sliderValue;
};

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});

effectsElement.addEventListener('change', onEffectsChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);

hideSlider();

const resetEffects = () => {
  currentEffect = DEFAULT_EFFECT;
  updateSlider();

  if (isDefaultEffect()) {
    hideSlider();
  } else {
    showSlider();
  }
  updateSlider();
};

export { resetEffects };

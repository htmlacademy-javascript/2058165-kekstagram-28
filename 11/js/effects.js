import { effectNameToOptions } from './effects-options.js';

const DEFAULT_EFFECT = effectNameToOptions.none;
let currentEffect = DEFAULT_EFFECT;

const sliderContainer = document.querySelector('.img-upload__effect-level');
const slider = document.querySelector('.effect-level__slider');
const imagePreview = document.querySelector('.img-upload__preview img');
const effects = document.querySelector('.effects');
const effectLevel = document.querySelector('.effect-level__value');

const isDefaultEffect = () => currentEffect === DEFAULT_EFFECT;

const showSlider = () => sliderContainer.classList.remove('hidden');

const hideSlider = () => sliderContainer.classList.add('hidden');

const updateSlider = () => {
  slider.noUiSlider.updateOptions({
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
  imagePreview.className = `effects__preview--${currentEffect.name}`;

  if (isDefaultEffect()) {
    hideSlider();
  } else {
    showSlider();
  }

  updateSlider();
};

const onSliderUpdate = () => {
  const sliderValue = slider.noUiSlider.get();
  if (isDefaultEffect()) {
    imagePreview.style.filter = DEFAULT_EFFECT.style;
  } else {
    imagePreview.style.filter = `${currentEffect.style}(${sliderValue}${currentEffect.unit})`;
  }
  effectLevel.value = sliderValue;
};

noUiSlider.create(slider, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});

effects.addEventListener('change', onEffectsChange);
slider.noUiSlider.on('update', onSliderUpdate);

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

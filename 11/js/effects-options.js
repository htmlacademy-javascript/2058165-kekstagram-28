const effectNameToOptions = {
  'none':  {
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  'chrome': {
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  'sepia': {
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  'marvin': {
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  'phobos': {
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  'heat': {
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
};

export { effectNameToOptions };

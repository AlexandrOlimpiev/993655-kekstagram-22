import { updateSlider, valueLevelEffect } from './slider.js';

const Effects = {
  chrome: {
    NAME: 'chrome',
    RANGE_MIN: 0,
    RANGE_MAX: 1,
    START: 1,
    STEP: 0.1,
    UNITS: '',
    FILTER: 'grayscale',
  },
  sepia: {
    NAME: 'sepia',
    RANGE_MIN: 0,
    RANGE_MAX: 1,
    START: 1,
    STEP: 0.1,
    UNITS: '',
    FILTER: 'sepia',
  },
  marvin: {
    NAME: 'marvin',
    RANGE_MIN: 0,
    RANGE_MAX: 100,
    START: 100,
    STEP: 1,
    UNITS: '%',
    FILTER: 'invert',
  },
  phobos: {
    NAME: 'phobos',
    RANGE_MIN: 0,
    RANGE_MAX: 3,
    START: 3,
    STEP: 0.1,
    UNITS: 'px',
    FILTER: 'blur',
  },
  heat: {
    NAME: 'heat',
    RANGE_MIN: 1,
    RANGE_MAX: 3,
    START: 3,
    STEP: 0.1,
    UNITS: '',
    FILTER: 'brightness',
  },
  none: {
    NAME: 'none',
    RANGE_MIN: 0,
    RANGE_MAX: 1,
    START: 1,
    STEP: 1,
    UNITS: '',
    FILTER: 'none',
  },
};
const slider = document.querySelector('.effect-level__slider');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
let newEffect = Effects.none;

const updateEffect = () => {
  imgUploadPreview.style.filter = '';
  if (!newEffect.none) {
    imgUploadPreview.style.filter = `${newEffect.FILTER}(${valueLevelEffect.value}${newEffect.UNITS})`;
  }
};

const onListEffectsChange = (evt) => {
  if (evt.target.matches('input[type="radio"]')) {
    imgUploadPreview.classList.remove(...imgUploadPreview.classList);
    slider.classList.add('hidden');
    newEffect = Effects[evt.target.value];
    if (!(newEffect.FILTER === 'none')) {
      imgUploadPreview.classList.add(`effects__preview--${evt.target.value}`);
      slider.classList.remove('hidden');
      updateSlider(newEffect);
    }
    updateEffect();
  }
};

export { onListEffectsChange, updateEffect };

/* global noUiSlider:readonly */
import { updateEffect } from './effect.js';
const defaultSlider = {
  RANGE_MIN: 0,
  RANGE_MAX: 1,
  START: 1,
  STEP: 0.1,
};

const slider = document.querySelector('.effect-level__slider');
const valueLevelEffect = document.querySelector('.effect-level__value');

const createSlider = () => {
  slider.classList.add('hidden');
  noUiSlider.create(slider, {
    range: {
      min: defaultSlider.RANGE_MIN,
      max: defaultSlider.RANGE_MAX,
    },
    start: defaultSlider.START,
    step: defaultSlider.STEP,
    connect: 'lower',
  });
  slider.noUiSlider.on('update',
    (values, handle) => {
      valueLevelEffect.value = values[handle];
      updateEffect();
    });
};

const updateSlider = (newEffect) => {
  slider.noUiSlider.updateOptions({
    range: {
      min: newEffect.RANGE_MIN,
      max: newEffect.RANGE_MAX,
    },
    start: newEffect.START,
    step: newEffect.STEP,
  });
};

const destroySlider = () => {
  slider.noUiSlider.destroy();
};

export { valueLevelEffect, createSlider, updateSlider, destroySlider };

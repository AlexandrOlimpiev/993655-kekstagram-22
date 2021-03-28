import { isEscEvent } from './util.js';
import { createSlider, destroySlider } from './slider.js';
import { onListEffectsChange } from './effect.js';
import './scale.js';

const editForm = document.querySelector('.img-upload__overlay');
const uploadInput = document.querySelector('#upload-file');
const buttonFormClose = editForm.querySelector('.img-upload__cancel');
const body = document.querySelector('body');
const effectsList = document.querySelector('.effects__list');

const onEditFormEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeeditForm();
  }
};

const onButtonFormCloseClick = () => {
  closeeditForm();
};

const openeditForm = () => {
  editForm.classList.remove('hidden');
  body.classList.add('modal-open');
  buttonFormClose.addEventListener('click', onButtonFormCloseClick);
  document.addEventListener('keydown', onEditFormEscKeydown);
  createSlider();
  effectsList.addEventListener('change', onListEffectsChange);
};

const closeeditForm = () => {
  editForm.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadInput.value = '';
  buttonFormClose.removeEventListener('click', onButtonFormCloseClick);
  document.removeEventListener('keydown', onEditFormEscKeydown);
  destroySlider();
};

uploadInput.addEventListener('change', () => {
  openeditForm();
});

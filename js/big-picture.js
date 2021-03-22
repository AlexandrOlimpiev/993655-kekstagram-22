import { renderComments } from './comment.js';
import { isEscEvent } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img>img');
const likesCount = bigPicture.querySelector('.likes-count');
const socialCaption = bigPicture.querySelector('.social__caption');
const commentsCount = bigPicture.querySelector('.comments-count');
const buttonClose = bigPicture.querySelector('.big-picture__cancel');
const body = document.querySelector('body');

const renderBigPicture = ({ url, likes, description, comments }) => {
  bigPictureImage.src = url;
  likesCount.textContent = likes;
  socialCaption.textContent = description;
  commentsCount.textContent = comments.length;
  renderComments(comments);
};

const onBigPictureEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const onButtonCloseClick = () => {
  closeBigPicture();
};

const openBigPicture = (photo) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  renderBigPicture(photo);
  buttonClose.addEventListener('click', onButtonCloseClick);
  document.addEventListener('keydown', onBigPictureEscKeydown);
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  buttonClose.removeEventListener('click', onButtonCloseClick);
  document.removeEventListener('keydown', onBigPictureEscKeydown);
};

export { openBigPicture };

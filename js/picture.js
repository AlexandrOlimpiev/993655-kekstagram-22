import { photos } from './data.js';
import { openBigPicture } from './big-picture.js'

const renderPhotos = (photos) => {
  const picturesContainer = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const fragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const { url, likes, comments } = photo;
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    const onPhotoClick = (evt) => {
      evt.preventDefault();
      openBigPicture(photo);
    };
    pictureElement.addEventListener('click', onPhotoClick);
    fragment.appendChild(pictureElement);
  });
  picturesContainer.appendChild(fragment);
};

renderPhotos(photos);

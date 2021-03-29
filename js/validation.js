const COMMENT_MAX_LENGTH = 140;
const Tags = {
  MAX_LENGTH: 20,
  MAX_COUNT: 5,
  SYMBOL: '#',
};
const hashtagPattern = /^[A-Za-zА-Яа-я0-9]+$/;
const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');

const checkHashtag = (hashtag) => {
  if (hashtag[0] !== Tags.SYMBOL) {
    hashtagInput.setCustomValidity('Хэш-тег должен начинаться с символа #');
  } else if (hashtag === Tags.SYMBOL) {
    hashtagInput.setCustomValidity('Хеш-тег не может состоять только из одной решётки');
  } else if (hashtag.indexOf(Tags.SYMBOL, 1) >= 1) {
    hashtagInput.setCustomValidity('хэш-теги разделяются пробелами');
  } else if (!hashtagPattern.test(hashtag.slice(1))) {
    hashtagInput.setCustomValidity('Cтрока после решётки должна состоять только из букв и чисел');
  } else if (hashtag.length > Tags.MAX_LENGTH) {
    hashtagInput.setCustomValidity(`Максимальная длина одного хэш-тега не более ${Tags.MAX_LENGTH} символов, включая решётку`);
  } else {
    hashtagInput.setCustomValidity('');
  }
};

const onHashtagInput = () => {
  const hashtags = hashtagInput.value.trim().toLowerCase().split(' ');
  if (hashtags.length > Tags.MAX_COUNT) {
    hashtagInput.setCustomValidity('Допускаеться не более 5 хэштегов');
  } else if (hashtags.length !== new Set(hashtags).size) {
    hashtagInput.setCustomValidity('Один и тот же хэш-тег не может быть использован дважды');
  } else {
    hashtags.forEach(checkHashtag);
  }
  hashtagInput.reportValidity();
};

const onCommentInput = () => {
  commentInput.reportValidity();
  if (commentInput.value.length > COMMENT_MAX_LENGTH) {
    commentInput.setCustomValidity('Длина комментария не более 140 символов');
    return;
  }
  commentInput.setCustomValidity('');

};

commentInput.addEventListener('input', onCommentInput);
hashtagInput.addEventListener('input', onHashtagInput);

const onEscPressBlock = (evt) => {
  evt.stopPropagation();
}

hashtagInput.addEventListener('keydown', onEscPressBlock);
commentInput.addEventListener('keydown', onEscPressBlock);

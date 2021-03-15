'use strict'
const PHOTO_COUNT = 25;
const LIKES_COUNT_MIN = 15;
const LIKES_COUNT_MAX = 200;
const DESCRIPTIONS = ['description 1', 'description 2', 'description 3', 'description 4', 'description 5', 'description 6'];
const COMMENTS_COUNT_MIN = 0;
const COMMENTS_COUNT_MAX = 5;
const AVATAR_COUNT_MIN = 1;
const AVATAR_COUNT_MAX = 6;
const MAX_ID = 1000;
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = ['Анна', 'Борис', 'Владимир', 'Вася', 'Дуся', 'Евгений'];

const checkLengthString = (checkedString, maxLength) => {
  return (checkedString.length <= maxLength);
};

const getRandomInteger = (min, max) => {
  if (min >= 0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(min + Math.random() * (max - min + 1))
  }
  throw new Error('Неверный диапазон');
};

const getRandomElementArray = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

const usedIds = new Array();
const getUniqueId = () => {
  let uniqueId = getRandomInteger(0, MAX_ID);
  if (!usedIds.includes(uniqueId)) {
    usedIds.push(uniqueId);
    return uniqueId;
  }
  return getUniqueId();
};


const createComment = () => {
  return {
    id: getUniqueId(MAX_ID),
    avatar: `img/avatar-${getRandomInteger(AVATAR_COUNT_MIN, AVATAR_COUNT_MAX)}.svg`,
    message: getRandomElementArray(MESSAGES),
    name: getRandomElementArray(NAMES),
  };
};

const createArrayComments = () => {
  return new Array(getRandomInteger(COMMENTS_COUNT_MIN, COMMENTS_COUNT_MAX)).fill(null).map(() => createComment());
};

const createPhoto = (index) => {
  return {
    id: index + 1,
    url: `photos/${index+1}.jpg`,
    description: getRandomElementArray(DESCRIPTIONS),
    likes: getRandomInteger(LIKES_COUNT_MIN, LIKES_COUNT_MAX),
    comments: createArrayComments(),
  };
};

const arrayPhotos = new Array(PHOTO_COUNT).fill(null).map((item, index) => createPhoto(index));
usedIds.length = 0;
checkLengthString('test', 5);
window.console.log(arrayPhotos);

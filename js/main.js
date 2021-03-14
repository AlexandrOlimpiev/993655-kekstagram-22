'use strict'
const isStringCorrectLength = (checkedString, maxLength) => {
  return (checkedString.length <= maxLength);
};

const getRandomInteger = (min, max) => {
  if (min >= 0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(min + Math.random() * (max - min + 1))
  }
  window.console.error('задан неверный диапазон');
};

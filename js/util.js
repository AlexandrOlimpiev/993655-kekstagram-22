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

export {
  checkLengthString,
  getRandomInteger,
  getRandomElementArray
};

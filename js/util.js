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

const makeUniqueIntegerGenerator = (min, max) => {
  const usedIntegers = new Array();
  const getUniqueInteger = () => {
    let uniqueId = getRandomInteger(min, max);
    if (usedIntegers.length >= (max - min + 1)) {
      throw new Error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
    }
    if (!usedIntegers.includes(uniqueId)) {
      usedIntegers.push(uniqueId);
      return uniqueId;
    }
    return getUniqueInteger();
  };
  return getUniqueInteger;
};

const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

export {
  checkLengthString, getRandomInteger, getRandomElementArray, makeUniqueIntegerGenerator, isEscEvent
};

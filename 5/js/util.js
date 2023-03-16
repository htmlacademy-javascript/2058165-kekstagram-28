const getRandomInteger = (min, max) => Math.floor(Math.random() * max - min + 1) + min;

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];


const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

export {getRandomInteger, getRandomArrayElement, createRandomIdFromRangeGenerator};

const DELAY_TIME = 500;

const getRandomInt = (numb1, numb2) => {
  const lower = Math.ceil(Math.min(numb1, numb2));
  const upper = Math.floor(Math.max(numb1, numb2));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomElementsArray = (array, count) => {
  const randomIndexList = [];
  const max = Math.min(count, array.length);
  while (randomIndexList.length < max) {
    const index = getRandomInt(0, array.length - 1);
    if (!randomIndexList.includes(index)) {
      randomIndexList.push(index);
    }
  }
  return randomIndexList.map((index) => array[index]);
};

const isEscapeKey = (evt) => evt.key === 'Esc' || evt.key === 'Escape';

function debounce (callback, timeoutDelay = DELAY_TIME) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {getRandomElementsArray, isEscapeKey, debounce};

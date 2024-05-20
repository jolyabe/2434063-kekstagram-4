const RADIX = 10;

const Scale = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
  DEFAULT: 100
};

const modalElement = document.querySelector('.img-upload');
const smallerButtonElement = modalElement.querySelector('.scale__control--smaller');
const biggerButtonElement = modalElement.querySelector('.scale__control--bigger');
const scaleInputElement = modalElement.querySelector('.scale__control--value');
const imageElement = modalElement.querySelector('.img-upload__preview img');

const imageScale = (value) => {
  imageElement.style.transform = `scale(${value / Scale.DEFAULT})`;
  scaleInputElement.value = `${value}%`;
};

const onSmallerButtonClick = () => imageScale(Math.max(parseInt(scaleInputElement.value, RADIX) - Scale.STEP, Scale.MIN));

const onBiggerButtonClick = () => imageScale(Math.min(parseInt(scaleInputElement.value, RADIX) + Scale.STEP, Scale.MAX));

smallerButtonElement.addEventListener('click', onSmallerButtonClick);
biggerButtonElement.addEventListener('click', onBiggerButtonClick);
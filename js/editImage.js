const SCALE_STEP = 25;
const SCALE_MIN_VALUE = 25;
const SCALE_MAX_VALUE = 100;

let scaleDefaultValue = 100;
let number = 0;

const scale = document.querySelector('.img-upload__scale');
const smaller = scale.querySelector('.scale__control--smaller');
const bigger = scale.querySelector('.scale__control--bigger');
const input = scale.querySelector('.scale__control--value');
const preview = document.querySelector('.img-upload__preview');

// С помощью библиотеки noUiSlider добавить эффекты

input.value = `${scaleDefaultValue}%`;

const addStyleTransform = (num) => {
  const decimal = num * 0.01;
  preview.style.transform = `scale(${decimal})`;
};

const onSmallerClick = () => {
  if (scaleDefaultValue > SCALE_MIN_VALUE) {
    number = scaleDefaultValue -= SCALE_STEP;
    input.value = `${number}%`;
    addStyleTransform(number);
  }
};

const onBiggerClick = () => {
  if (scaleDefaultValue < SCALE_MAX_VALUE) {
    number = scaleDefaultValue += SCALE_STEP;
    input.value = `${number}%`;
    addStyleTransform(number);
  }
};

smaller.addEventListener('click', onSmallerClick);
bigger.addEventListener('click', onBiggerClick);


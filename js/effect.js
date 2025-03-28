import { previewNode } from './scale.js';

const effectsContainerNode = document.querySelector('.img-upload__effects');
const effectContainerNode = document.querySelector('.img-upload__effect-level');
const sliderNode = effectContainerNode.querySelector('.effect-level__slider');
const effectValueNode = effectContainerNode.querySelector('.effect-level__value');

const effects = {
  none: '',
  chrome: {
    MIN: 0,
    MAX: 1,
    STEP: 0.1,
    getCssFilter: (value) => `grayscale(${value})`
  },
  sepia: {
    MIN: 0,
    MAX: 1,
    STEP: 0.1,
    getCssFilter: (value) => `sepia(${value})`
  },
  marvin: {
    MIN: 0,
    MAX: 100,
    STEP: 1,
    getCssFilter: (value) => `invert(${value}%)`
  },
  phobos: {
    MIN: 0,
    MAX: 3,
    STEP: 0.1,
    getCssFilter: (value) => `blur(${value}px)`
  },
  heat: {
    MIN: 1,
    MAX: 3,
    STEP: 0.1,
    getCssFilter: (value) => `brightness(${value})`
  },
};

let activeEffect = 'none';

const getEffectOptions = (effectType) => {
  console.log(effects[effectType]);
  const {MIN, MAX, STEP} = effects[effectType];
  return {
    start: MAX,
    connect: 'lower',
    step: STEP,
    range: {
      'min': MIN,
      'max': MAX
    },
  };
};

noUiSlider.create(sliderNode, getEffectOptions);

// sliderNode.noUiSlider.on('update', () => {
//   effectValueNode.value = sliderNode.noUiSlider.get();
// });

// let prevEvent ;
// const selectEffect = (evt) => {
//   previewNode.classList.remove(prevEvent);
//   previewNode.classList.add(`effects__preview--${evt.target.value}`);
//   prevEvent = `effects__preview--${evt.target.value}`;
//   noUiSlider.create();
// };

const selectEffect = (evt) => {
  effectValueNode.value = sliderNode.noUiSlider.get();
  const value = evt.target.value;
  console.log(value);
  previewNode.style.filter = effects[value].getCssFilter(effectValueNode.value);
  getEffectOptions(value);
};

effectsContainerNode.addEventListener('change', selectEffect);

// const resetEffect = () => {};

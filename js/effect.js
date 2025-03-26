import { previewNode } from './scale.js';

const effectsContainerNode = document.querySelector('.img-upload__effects');
const sliderNode = document.querySelector('.effect-level__slider');

let prevEvent ;
const selectEffect = (evt) => {
  previewNode.classList.remove(prevEvent);
  previewNode.classList.add(`effects__preview--${evt.target.value}`);
  prevEvent = `effects__preview--${evt.target.value}`;
};

effectsContainerNode.addEventListener('change', selectEffect);

// const resetEffect = () => {};

noUiSlider.create(sliderNode, {
  range: {
    'min': 0,
    'max': 100
  },
  start: 80,
});


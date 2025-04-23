import { previewNode } from './scale.js';

const effectsContainerNode = document.querySelector('.img-upload__effects');
const effectLevelNode = document.querySelector('.img-upload__effect-level');
const effectSliderNode = effectLevelNode.querySelector('.effect-level__slider');
const effectValueNode = effectLevelNode.querySelector('.effect-level__value');

const effects = {
  chrome: {
    range: [0, 1],
    step: 0.1,
    applyFilter: (value) => `grayscale(${value})`
  },
  sepia: {
    range: [0, 1],
    step: 0.1,
    applyFilter: (value) => `sepia(${value})`
  },
  marvin: {
    range: [0, 100],
    step: 0.1,
    applyFilter: (value) => `invert(${value}%)`
  },
  phobos: {
    range: [0, 3],
    step: 0.1,
    applyFilter: (value) => `blur(${value}px)`
  },
  heat: {
    range: [1, 3],
    step: 0.1,
    applyFilter: (value) => `brightness(${value})`
  },
};

let currentEffect = 'none';
effectLevelNode.classList.add('hidden');

const createSlider = (effectType) => {
  const [min, max] = effects[effectType].range;

  return noUiSlider.create(effectSliderNode, {
    start: max,
    step: effects[effectType].step,
    connect: 'lower',
    range: { min, max },
  });
};

const updateSlider = (effectType) => {
  if (effectSliderNode.noUiSlider) {
    effectSliderNode.noUiSlider.destroy();
  }

  if (effectType === 'none') {
    effectLevelNode.classList.add('hidden');
    previewNode.style.filter = 'none';
  } else {
    effectLevelNode.classList.remove('hidden');
    const slider = createSlider(effectType);

    slider.on('update', () => {
      const value = slider.get();
      effectValueNode.value = value;
      previewNode.style.filter = effects[effectType].applyFilter(value);
    });
  }
};

const onEffectChange = (evt) => {
  currentEffect = evt.target.value;
  updateSlider(currentEffect);
};


const removeSlider = () => {
  currentEffect = 'none';
  effectLevelNode.classList.add('hidden');
  previewNode.style.filter = 'none';

  if (effectSliderNode.noUiSlider) {
    effectSliderNode.noUiSlider.destroy();
  }
  effectsContainerNode.removeEventListener('change', onEffectChange);
};

const initializeSlider = () => {
  currentEffect = 'none';
  updateSlider(currentEffect);
  effectsContainerNode.addEventListener('change', onEffectChange);
};


export {initializeSlider, removeSlider};

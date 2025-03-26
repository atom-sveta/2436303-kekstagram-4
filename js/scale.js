const SCALE_STEP = 25;
const SCALE_MIN_VALUE = 25;
const SCALE_MAX_VALUE = 100;
const DEFAULT_SCALE = 100;

let scaleValue = DEFAULT_SCALE;

const scaleNode = document.querySelector('.img-upload__scale');
const smallerNode = scaleNode.querySelector('.scale__control--smaller');
const biggerNode = scaleNode.querySelector('.scale__control--bigger');
const inputNode = scaleNode.querySelector('.scale__control--value');
const previewNode = document.querySelector('.img-upload__preview img');

const updateScaleStyle = (num) => {
  inputNode.value = `${num}%`;
  previewNode.style.transform = `scale(${num * 0.01})`;
};

const toggleButtonState = () => {
  smallerNode.classList.toggle('scale__control--disabled', scaleValue === SCALE_MIN_VALUE);
  biggerNode.classList.toggle('scale__control--disabled', scaleValue === SCALE_MAX_VALUE);
};

const onSmallerClick = () => {
  if (scaleValue > SCALE_MIN_VALUE) {
    scaleValue -= SCALE_STEP;
    updateScaleStyle(scaleValue);
    toggleButtonState();
  }
};

const onBiggerClick = () => {
  if (scaleValue < SCALE_MAX_VALUE) {
    scaleValue += SCALE_STEP;
    updateScaleStyle(scaleValue);
    toggleButtonState();
  }
};

const resetScale = () => {
  scaleValue = DEFAULT_SCALE;
  updateScaleStyle(DEFAULT_SCALE);
  toggleButtonState();
};

smallerNode.addEventListener('click', onSmallerClick);
biggerNode.addEventListener('click', onBiggerClick);

resetScale();

export { resetScale, previewNode};

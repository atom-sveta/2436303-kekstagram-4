const FILE_TYPE = ['jpg', 'jpeg', 'png'];

const fileChooser = document.querySelector('.img-upload__start input[type=file]');
const preview = document.querySelector('.img-upload__preview img');
const effectsPreview = document.querySelectorAll('.effects__preview');

const isValidType = (file) => {
  const fileName = file.name.toLowerCase();
  return FILE_TYPE.some((it) => fileName.endsWith(it));
};

const onFileInputChange = () => {
  const file = fileChooser.files[0];

  if (file && isValidType(file)) {
    preview.src = URL.createObjectURL(file);
    effectsPreview.forEach((item) => {
      item.style.backgroundImage = `url(${preview.src})`;
    });
  }
};

export {onFileInputChange};

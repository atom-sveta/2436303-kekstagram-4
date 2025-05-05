const FILE_TYPE = ['jpg', 'jpeg', 'png'];


const fileChooser = document.querySelector('.img-upload__start input[type=file]');
const preview = document.querySelector('.img-upload__preview img');
const effectsPreview = document.querySelectorAll('.effects__preview');


fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPE.some((it) => fileName.endsWith(it));

  if (matches) {
    const imageUrl = URL.createObjectURL(file);
    preview.src = imageUrl;
    effectsPreview.forEach((item) => {
      item.style.backgroundImage = `url(${imageUrl})`;
    });
  }
});


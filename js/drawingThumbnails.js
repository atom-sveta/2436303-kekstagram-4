const userImageTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');

const drawingThumbnails = ({url, description, likes, comments}) => {
  const thumbnailUserImage = userImageTemplate.cloneNode(true);

  thumbnailUserImage.querySelector('.picture__img').src = url;
  thumbnailUserImage.querySelector('.picture__img').alt = description;
  thumbnailUserImage.querySelector('.picture__likes').textContent = likes;
  thumbnailUserImage.querySelector('.picture__comments').textContent = comments.length;
  return thumbnailUserImage;
};

const renderThumbnails = (pictures) => {
  const thumbnailsFragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = drawingThumbnails(picture);
    thumbnailsFragment.append(thumbnail);
  });
  pictureContainer.append(thumbnailsFragment);
};

export {renderThumbnails};

const userImageTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const drawingThumbnails = ({url, description, likes, comments, id}) => {
  const thumbnailUserImage = userImageTemplate.cloneNode(true);

  thumbnailUserImage.querySelector('.picture__img').src = url;
  thumbnailUserImage.querySelector('.picture__img').alt = description;
  thumbnailUserImage.querySelector('.picture__likes').textContent = likes;
  thumbnailUserImage.querySelector('.picture__comments').textContent = comments.length;
  thumbnailUserImage.dataset.id = id;
  return thumbnailUserImage;
};

const renderThumbnails = (pictures, container) => {
  const thumbnailsFragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = drawingThumbnails(picture);
    thumbnailsFragment.append(thumbnail);
  });
  container.append(thumbnailsFragment);
};

export {renderThumbnails};

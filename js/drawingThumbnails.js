import { getPictures } from './kekstagram.js';

const randomUserImageTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');

const thumbnails = getPictures();

const thumbnailsFragment = document.createDocumentFragment();

thumbnails.forEach(({url, description, likes, comments}) => {
  const thumbnailUserImage = randomUserImageTemplate.cloneNode(true);
  thumbnailUserImage.querySelector('.picture__img').src = url;
  thumbnailUserImage.querySelector('.picture__img').alt = description;
  thumbnailUserImage.querySelector('.picture__likes').textContent = likes;
  thumbnailUserImage.querySelector('.picture__comments').textContent = comments;
  thumbnailsFragment.appendChild(thumbnailUserImage);
});

pictureContainer.appendChild(thumbnailsFragment);


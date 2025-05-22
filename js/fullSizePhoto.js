import { isEscapeKey } from './util.js';

const COMMENTS_PER_PORRTION = 5;

const bodyElement = document.querySelector('body');
const bigPictureElement = document.querySelector('.big-picture');
const commentsList = bigPictureElement.querySelector('.social__comments');
const commentElement = document.querySelector('#comment').content.querySelector('.social__comment');
const commentCount = bigPictureElement.querySelector('.social__comment-count');
const commentsLoader = bigPictureElement.querySelector('.social__comments-loader');
const cancelButton = bigPictureElement.querySelector('.big-picture__cancel');

// Строку с количеством видимых на странице комментариев оборачиваю в тег с классом
commentCount.innerHTML = commentCount.innerHTML.replace(/^(.+?\s)/, '<span class=social__comment-shown-count>5</span> ');
const commentsShownCount = commentCount.querySelector('.social__comment-shown-count');
const commentsCount = commentCount.querySelector('.social__comment-total-count');

let commentsShown = 0;
let comments =[];

const createComment = ({avatar, name, message}) => {
  const comment = commentElement.cloneNode(true);
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const renderComments = () => {
  commentsShown += COMMENTS_PER_PORRTION;

  if (commentsShown >= comments.length) {
    commentsLoader.classList.add('hidden');
    commentsShown = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentsShown; i++) {
    const comment = createComment(comments[i]);
    fragment.append(comment);
  }

  commentsList.innerHTML ='';
  commentsList.append(fragment);
  commentsShownCount.textContent = commentsShown;
  commentsCount.textContent = comments.length;
};


const hideBigPicture = () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  commentsShown = 0;
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideBigPicture();
  }
}

const onCancelButtonClick = () => {
  hideBigPicture();
};

const onCommentsLoaderClick = () => {
  renderComments();
};

const renderPictureDetails = ({url, likes, description}) => {
  bigPictureElement.querySelector('.big-picture__img img').src = url;
  bigPictureElement.querySelector('.big-picture__img img').alt = description;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.social__caption').textContent = description;
};

const showBigPicture = (data) => {
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  commentsLoader.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  renderPictureDetails(data);
  comments = data.comments;
  if (comments.length >= 0) {
    renderComments();
  }

};

cancelButton.addEventListener('click', onCancelButtonClick);
commentsLoader.addEventListener('click', onCommentsLoaderClick);

export {showBigPicture};

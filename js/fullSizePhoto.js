// const COMMENTS_PER_PORRTION = 5;

const bodyElement = document.querySelector('body');
const bigPictureElement = document.querySelector('.big-picture');
const commentsList = bigPictureElement.querySelector('.social__comments');
const commentElement = document.querySelector('#comment').content.querySelector('.social__comment');
const commentCount = bigPictureElement.querySelector('.social__comment-count');
const commentCountAll = commentCount.querySelector('.comments-count');
const commentsLoader = bigPictureElement.querySelector('.social__comments-loader');
const cancelButton = bigPictureElement.querySelector('.big-picture__cancel');

// Оборачиваю количество видимых на странице комментариев в тег с классом
// commentCount.innerHTML = commentCount.innerHTML.replace(/^(.+?\s)/, '<span class=social__comment-shown-count >5 </span>');
// const commentsShownCount = commentCount.querySelector('.social__comment-shown-count');

// let commentsShown = 0;
// let comments =[];

const createComment = ({avatar, name, message}) => {
  const comment = commentElement.cloneNode(true);

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const renderComments = (comments) => {
  commentsList.innerHTML ='';

  const fragment =document.createDocumentFragment();
  comments.forEach((item) => {
    const comment = createComment(item);
    fragment.append(comment);
  });
  commentsList.append(fragment);
};

const hideBigPicture = () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefalt();
    onDocumentKeydown();
  }
}

const onCancelButtonClick = () => {
  hideBigPicture();
};

const renderPictureDetails = ({url, likes, description}) => {
  bigPictureElement.querySelector('.big-picture__img img').src = url;
  bigPictureElement.querySelector('.big-picture__img img').alt = description;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.social__caption').textContent = description;
};

const renewCommentsCount = (length) => {
  commentCountAll.textContent ='';
  commentCountAll.textContent = length;
};

const showBigPicture = (data) => {
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  commentsLoader.classList.add('hidden');
  // commentCount.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  renderPictureDetails(data);

  const commentsNumber =  data.comments.length;
  renewCommentsCount(commentsNumber);

  if (commentsNumber <= 5) {
    renderComments(data.comments);
    // commentCount.textContent = commentsNumber;
  }
  if (commentsNumber > 5) {
    commentsLoader.classList.remove('hidden');
    const comments5 = data.comments.slice(0, 5);
    renderComments(comments5);

    commentsLoader.addEventListener('click', () => {
      data.comments.slice(5);
      renderComments(data.comments);
      commentsLoader.classList.add('hidden');
    });
  }

};


cancelButton.addEventListener('click', onCancelButtonClick);

export {showBigPicture};

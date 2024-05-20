import {isEscapeKey} from './utils.js';
import {fillComments, openComments} from './comments.js';

const body = document.body;
const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('#picture-cancel');
const loaderButton = bigPicture.querySelector('.comments-loader');
const currentComments = bigPicture.querySelector('.current-comments');

const closePicture = () => {
  body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', closePictureByEscape);
  closeButton.removeEventListener('click', closePicture);
  loaderButton.removeEventListener('click', openComments);
};

function closePictureByEscape(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePicture();
  }
}

const getBigPicture = ({url, description, likes, comments}) => {
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('.social__caption').textContent = description;
};

const openPicture = (picture) => {
  body.classList.add('modal-open');
  getBigPicture(picture);
  fillComments(picture.comments);
  currentComments.textContent = 0;
  loaderButton.classList.remove('hidden');
  openComments();
  loaderButton.addEventListener('click', openComments);
  closeButton.addEventListener('click', closePicture);
  document.addEventListener('keydown', closePictureByEscape);
};

export {openPicture};

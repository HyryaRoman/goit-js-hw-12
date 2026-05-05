import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import './css/toast.css';

iziToast.settings({
  timeout: 5000,
  resetOnHover: true,
  animateInside: false,
  transitionIn: 'bounceInLeft',
  transitionOut: 'fadeOutRight',
  position: 'topRight',
});

function showErrorNotification(message) {
  let textMessage = message;

  if (message instanceof Error) {
    textMessage = message.message;
  }

  iziToast.error({
    class: 'toast toast--error',
    message: textMessage,
  });

  console.error(message);
}

function updateGallery(query) {
  if (!query) {
    showErrorNotification('Query is empty');
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(createGallery)
    .catch(showErrorNotification)
    .finally(hideLoader);
}

document.querySelector('form.search-form').addEventListener('submit', event => {
  event.preventDefault();

  const query = event.target.elements?.['search-text']?.value;

  if (query) updateGallery(query);
  else showErrorNotification('Query is empty');
});

hideLoader();

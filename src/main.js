import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  hideLoadMoreButton,
  showLoader,
  showLoadMoreButton,
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

function showInfoNotification(message) {
  let textMessage = message;

  if (message instanceof Error) {
    textMessage = message.message;
  }

  iziToast.info({
    class: 'toast',
    message: textMessage,
  });

  console.log(message);
}

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

let shownImages = 0;
let totalImages = 0;
let nextPage = 1;
let lastQuery = '';

async function updateGallery(query) {
  if (!query) {
    showErrorNotification('Query is empty');
    return;
  }

  lastQuery = query;
  shownImages = 0;
  nextPage = 1;

  clearGallery();
  showLoader();
  hideLoadMoreButton();

  try {
    const result = await getImagesByQuery(query);

    if (result.total === 0) {
      showErrorNotification('No images found');
      return;
    }

    createGallery(result.images);
    shownImages += result.images.length;
    totalImages = result.total;
    nextPage++;
  } catch (e) {
    showErrorNotification(e);
  } finally {
    hideLoader();

    if (shownImages >= totalImages) {
      hideLoadMoreButton();
      showInfoNotification('No more images to load');
    } else {
      showLoadMoreButton();
    }
  }
}

async function loadMoreImages() {
  if (shownImages >= totalImages) {
    showErrorNotification('No more images to load');
    return;
  }

  showLoader();
  hideLoadMoreButton();

  try {
    const result = await getImagesByQuery(lastQuery, nextPage);
    createGallery(result.images);

    shownImages += result.images.length;
    nextPage++;

    const item = document.querySelector('.gallery-item');
    const rect = item.getBoundingClientRect();
    window.scrollBy({ top: rect.height * 2, behavior: 'smooth' });
  } catch (e) {
    showErrorNotification(e);
  } finally {
    hideLoader();
    if (shownImages >= totalImages) {
      hideLoadMoreButton();
      showInfoNotification('No more images to load');
    } else {
      showLoadMoreButton();
    }
  }
}

document.querySelector('form.search-form').addEventListener('submit', event => {
  event.preventDefault();

  const query = event.target.elements?.['search-text']?.value;

  if (query) updateGallery(query);
  else showErrorNotification('Query is empty');
});

document.querySelector('.load-more-button').addEventListener('click', _ => {
  loadMoreImages();
});

hideLoader();
hideLoadMoreButton();

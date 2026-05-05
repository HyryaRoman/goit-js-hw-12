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

let totalImageCount = 0;
let displayedImageCount = 0;
let nextPage = 1;
let displayedQuery = '';

async function updateGallery(query) {
  if (!query) {
    showErrorNotification('Query is empty');
    return;
  }

  clearGallery();
  showLoader();
  hideLoadMoreButton();

  totalImageCount = 0;
  displayedImageCount = 0;
  nextPage = 1;
  displayedQuery = query;

  try {
    const result = await getImagesByQuery(query);

    if (result.total === 0) {
      showInfoNotification('No images found');
      return;
    }

    totalImageCount = result.totalHits;
    displayedImageCount += result.hits.length;
    nextPage++;

    createGallery(result.hits);
  } catch (e) {
    showErrorNotification(e);
  } finally {
    hideLoader();

    if (totalImageCount > 0) {
      if (displayedImageCount >= totalImageCount) {
        showInfoNotification('No more images to load');
        hideLoadMoreButton();
      } else {
        showLoadMoreButton();
      }
    }
  }
}

async function loadMoreImages() {
  if (displayedImageCount >= totalImageCount) {
    showInfoNotification('No more images to load');
    hideLoadMoreButton();
    return;
  }

  showLoader();
  hideLoadMoreButton();

  try {
    const result = await getImagesByQuery(displayedQuery, nextPage);

    if (result.totalHits === 0) {
      showInfoNotification('No images found');
      return;
    }

    displayedImageCount += result.hits.length;
    nextPage++;

    createGallery(result.hits);

    const item = document.querySelector('.gallery-item');
    if (item) {
      const rect = item.getBoundingClientRect();
      window.scrollBy({ top: rect.height * 2, behavior: 'smooth' });
    }
  } catch (e) {
    showErrorNotification(e);
  } finally {
    hideLoader();
    if (displayedImageCount >= totalImageCount) {
      showInfoNotification('No more images to load');
      hideLoadMoreButton();
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

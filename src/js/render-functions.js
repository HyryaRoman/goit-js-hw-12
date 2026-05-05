import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const galleryLoaderMessage = document.querySelector('.gallery-loader');
const loadMoreButton = document.querySelector('.load-more-button');

const galleryLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function filterTags(tags) {
  return tags
    .split(',')
    .map(t => t.trim())
    .filter((value, index, array) => array.indexOf(value) === index)
    .toSorted()
    .join(', ');
}

function generateImageMarkup({
  largeImageURL,
  webformatURL,
  tags,
  user,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
  <li class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
      <img class="gallery-image" src="${webformatURL}" height="200" alt="Tags: ${filterTags(tags)}.<br/><br/>Image by ${user} via Pixabay" />
      <ul class="gallery-item__notes">
        <li class="gallery-item__note">
          <p class="gallery-item__note-title">Likes</p>
          <p class="gallery-item__note-value">${likes}</p>
        </li>
        <li class="gallery-item__note">
          <p class="gallery-item__note-title">Views</p>
          <p class="gallery-item__note-value">${views}</p>
        </li>
        <li class="gallery-item__note">
          <p class="gallery-item__note-title">Comments</p>
          <p class="gallery-item__note-value">${comments}</p>
        </li>
        <li class="gallery-item__note">
          <p class="gallery-item__note-title">Downloads</p>
          <p class="gallery-item__note-value">${downloads}</p>
        </li>
      </ul>
    </a>
  </li>
  `.trim();
}

export function createGallery(images) {
  const markup = images.map(generateImageMarkup).join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  galleryLightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  galleryLoaderMessage.style.display = 'block';
}

export function hideLoader() {
  galleryLoaderMessage.style.display = 'none';
}

export function showLoadMoreButton() {
  loadMoreButton.style.display = 'inline-block';
}

export function hideLoadMoreButton() {
  loadMoreButton.style.display = 'none';
}

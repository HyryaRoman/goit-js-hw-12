import axios, { Axios } from 'axios';

const pixabay = axios.create({
  baseURL: 'https://pixabay.com/api/',
  method: 'get',
  params: {
    key: '55635401-e0e8c18759d3c09d8dcac90e1',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  },
});

export function getImagesByQuery(query = '') {
  return pixabay
    .request({ params: { q: query } })
    .then(response => response.data.hits);
}

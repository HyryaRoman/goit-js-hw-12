import axios, { Axios } from 'axios';

const pixabay = axios.create({
  baseURL: 'https://pixabay.com/api/',
  method: 'get',
  params: {
    key: '55635401-e0e8c18759d3c09d8dcac90e1',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
  },
});

export async function getImagesByQuery(query = '', page = 1) {
  const result = await pixabay.request({ params: { q: query, page } });
  return {
    total: result.data.totalHits,
    images: result.data.hits,
  };
}

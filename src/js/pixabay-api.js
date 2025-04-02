import axios from 'axios';

const API_KEY = '49627049-8ac1639d7a1db97b4097e2b9b';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 12,
      },
    });
    return response.data.hits; // повертає масив зображень
  } catch (error) {
    console.error('Error fetching images: ', error);
    throw error;
  }
}

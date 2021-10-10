import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '22640715-8f791d5797d8fe249801e9206';
const PARAMS = 'image_type=photo&orientation=horizontal&per_page=12';
const OPTIONS = `id;webformatURL;largeImageURL;tags`;

export const fetchInfo = async (query, page) => {
  const response = await axios.get(
    `/?q=${query}&page=${page}&key=${API_KEY}&${PARAMS}&fields=${OPTIONS}`,
  );

  return response.data;
};

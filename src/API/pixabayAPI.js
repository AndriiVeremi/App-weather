import axios from 'axios';

const API_KEY = '34554984-68074c5646cb7a45ce2c04cbc';

export const getCollectionImg = async city => {
  const data = await axios(`https://pixabay.com/api/?q=${city}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=6`);
  return data;
};

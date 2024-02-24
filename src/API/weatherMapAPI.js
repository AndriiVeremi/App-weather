import axios from 'axios';

axios.defaults.baseURL = 'https://tile.openweathermap.org/map/';
const API_KEY = '4cdf01687d5c8290754edb7cd57c1861';

export const getWeatherMap = async (layer, z, x, y) => {
  const data = await axios(`layer=temp_new/${z}/${x}/${y}.png?appid=${API_KEY}`);
  return data;
};

// {layer}/{z}/{x}/{y}.png?appid={API key}

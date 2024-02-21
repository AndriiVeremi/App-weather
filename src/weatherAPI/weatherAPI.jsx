import axios from 'axios';

axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5/forecast';
const API_KEY = '4cdf01687d5c8290754edb7cd57c1861';

export const getWeather = async city => {
  const data = await axios(`?q=${city}&appid=${API_KEY}&units=metric`);

  return data;
};

export const getWeatherDay = async city => {
  const data = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

  return data;
};
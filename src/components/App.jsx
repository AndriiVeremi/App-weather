import { useEffect, useState } from 'react';
import { Navbar } from './Navbar/Navbar';
import { Time } from './Time/Time';
import { WeatherDey } from './WeatherDey/WeatherDey';
import { getWeather } from '../weatherAPI/weatherAPI';
import { Container, Body } from './App.styled';

export const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCity(localStorage.getItem('Weather') || 'warsaw');

    if (city === '') {
      return;
    }

    const handleSearchWeather = async () => {
      try {
        setError(null);
        const data = await getWeather(city);
        setWeather(data.data);
      } catch (error) {
        setError(error);
      }
    };

    handleSearchWeather();
  }, [city]);

  const onSubmit = city => {
    console.log(city);
    setCity(city);
    localStorage.setItem('Weather', city);
  };

  return (
    <>
      <Container>
        <Navbar onSubmit={onSubmit} />
        <Body>
          <Time />
          {weather.length !== 0 && <WeatherDey weathers={weather} />}
        </Body>
      </Container>
    </>
  );
};

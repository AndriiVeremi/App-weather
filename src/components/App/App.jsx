import { useEffect, useState } from 'react';
import { BackgroundApp } from '../Background/Background';
import { Navbar } from '../Navbar/Navbar';
import { Time } from '../Time/Time';
import { WeatherDey } from '../WeatherDey/WeatherDey';
import { WeatherWeeck } from '../WeatherWeeck/WeatherWeeck';
import { getWeather, getWeatherWeek } from '../../API/weatherAPI';
import { getCollectionImg } from 'API/pixabayAPI';
import { Container, Wrapper, InfoWrapper } from './App.styled';

export const App = () => {
  const [city, setCity] = useState(localStorage.getItem('Weather') || 'Kyiv');
  const [weather, setWeather] = useState([]);
  const [weatherWeek, setWeatherWeek] = useState([]);
  const [background, setBackground] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (city === '') {
      return;
    }

    const handleSearchWeather = async () => {
      try {
        setError(null);
        const data = await getWeather(city);
        const data2 = await getWeatherWeek(city);
        const data3 = await getCollectionImg(city);
        setWeather(data.data);
        setWeatherWeek(data2.data.list);
        setBackground(data3.data.hits);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };

    handleSearchWeather();
  }, [city]);

  const onSubmit = city => {
    setCity(city);
    localStorage.setItem('Weather', city);
  };

  return (
    <Container>
      <BackgroundApp background={background} />
      <Navbar onSubmit={onSubmit} />
      <Wrapper>
        <InfoWrapper>
          <Time />

          {weather.length !== 0 && !error && (
            <WeatherWeeck weathers={weatherWeek} />
          )}
        </InfoWrapper>

        {weather.length !== 0 && !error && <WeatherDey weathers={weather} />}
      </Wrapper>
    </Container>
  );
};

import { useEffect, useState } from 'react';
import { BackgroundApp } from '../Background/Background';
import { Navbar } from '../Navbar/Navbar';
import { Time } from '../Time/Time';
import { WeatherDey } from '../WeatherDey/WeatherDey';
import { WeatherWeeck } from '../WeatherWeeck/WeatherWeeck';
import { getWeather, getWeatherWeek } from '../../API/weatherAPI';
import { getCollectionImg } from 'API/pixabayAPI';
import { Container, Wrapper, InfoWrapper, Error } from './App.styled';

export const App = () => {
  const [city, setCity] = useState(localStorage.getItem('Weather') || 'kyiv');
  const [weather, setWeather] = useState([]);
  const [weatherWeek, setWeatherWeek] = useState([]);
  const [background, setBackground] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    if (city.length === 0) {
      return;
    }

    const handleSearchWeather = async () => {
      try {
        setError(null);
        const weather = await getWeather(city);
        const weatherWeek = await getWeatherWeek(city);
        const collectionImg = await getCollectionImg(city);
        setWeather(weather.data);
        setWeatherWeek(weatherWeek.data.list);
        setBackground(collectionImg.data.hits);
        localStorage.setItem('Weather', city);
      } catch (error) {
        console.log('error', error.message);
        setError(error);
      }
    };

    handleSearchWeather();
  }, [city]);

  const onSubmit = city => {
    setCity(city);
  };

  return (

    <Container>

     { background && <BackgroundApp background={background} />}
     
      <Navbar onSubmit={onSubmit} />

      {error && <Error>City not found</Error>}

      <Wrapper>
        <InfoWrapper>
          {weatherWeek.length !== 0 && !error && <Time />}

          {weatherWeek.length !== 0 && !error && (
            <WeatherWeeck weathers={weatherWeek} />
          )}
        </InfoWrapper>

        {weather.length !== 0 && !error && <WeatherDey weathers={weather} />}
      </Wrapper>
    </Container>
  );
};

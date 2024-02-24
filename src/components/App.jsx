import { useEffect, useState } from 'react';
import { Navbar } from './Navbar/Navbar';
import { Time } from './Time/Time';
import { WeatherDey } from './WeatherDey/WeatherDey';
import { WeatherWeeck } from './WeatherWeeck/WeatherWeeck';
import { getWeather, getWeatherWeek } from '../weatherAPI/weatherAPI';
import { Container, Grid, Box } from '@mui/material';

export const App = () => {

  const [city, setCity] = useState('Warsaw');
  const [weather, setWeather] = useState([]);
  const [weatherWeek, setWeatherWeek] = useState([]);
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
        const data2 = await getWeatherWeek(city);

        // console.log('data', data);
        // console.log('data2', data2);

        setWeather(data.data);
        setWeatherWeek(data2.data.list);
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
      <Navbar onSubmit={onSubmit} />

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box>
            <Time />
          </Box>
          <Box>
            {weather.length !== 0 && !error && (
              <WeatherWeeck weathers={weatherWeek} />
            )}
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box>
            {weather.length !== 0 && !error && (
              <WeatherDey weathers={weather} />
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

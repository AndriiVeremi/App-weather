import IconWind from '../../images/wind.png';
import IconPressure from '../../images/pressure.png';
import { Wrapper, NameCity, Pressure } from './WeatherDey.styled';

export const WeatherDey = ({ weathers }) => {
  const { city, list } = weathers;
  const { main, weather, wind } = list[0];
  console.log('list', list[0]);

  return (
    <Wrapper>
      <NameCity>{city.name}</NameCity>
      {/* <img src="" alt="icon" /> */}
      <div>
        <p>Теспература: {main.temp}</p>
        <p>Теспературавідчувається як: {main.feels_like}</p>
        <p>Теспература Max: {main.temp_max}</p>
        <p>Теспература Min: {main.temp_min}</p>
      </div>

      <Pressure>
        <img src={IconPressure} alt="Ppressure" />
        <p>Тиск {main.pressure}</p>
      </Pressure>

      <div>
        <p>На дворі {weather[0].description}</p>
      </div>

      <div>
        <img src={IconWind} width="30" alt="Wind" />
        <p>Швидкість вітру {wind.speed}</p>
        <p>Напрямок вітру {wind.deg}</p>
      </div>
    </Wrapper>
  );
};

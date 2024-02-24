import { format } from 'date-fns';
import {
  Wrapper,
  NameCity,
  Items,
  FlexWrapper,
  Temp,
  TempFeel,
  TempWrapper,
  OtherDesc,
  TextDesc,
} from './WeatherDey.styled';

import IconWind from '../../images/wind.png';
import IconPressure from '../../images/pressure.png';


export const WeatherDey = ({ weathers }) => {
  console.log('weathers', weathers)
  const { name, main, weather, wind, sys } = weathers;
  return (
    <Wrapper>
      <NameCity>{name}</NameCity>

      <TempWrapper>
        <TextDesc>{weather[0].description}</TextDesc>

        <img
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          style={{ height: '150px', width: '150px' }}
          alt="icon"
        />

        <FlexWrapper>
          <Temp>{Math.round(main.temp)}°C</Temp>
          <TempFeel>Feels like: {Math.round(main.feels_like)} °C</TempFeel>
        </FlexWrapper>

      </TempWrapper>

      <OtherDesc>
        <div>
          <Items>
            <img src={IconPressure} style={{ height: '30px', width: '30px' }} alt="Pressure" />
            <p>Pressure: {main.pressure}</p>
          </Items>

          <Items>
            <img src={IconWind} style={{ height: '30px', width: '30px' }} alt="Wind" />
            <p>Wind speed: {wind.speed}</p>
          </Items>
        </div>

        <div>
          <p>Теспература Max: {Math.round(main.temp_max)} °C</p>
          <p>Теспература Min: {Math.round(main.temp_min)} °C</p>
        </div>

        <div>
          <p>Sunrise: {format(new Date(sys.sunrise * 1000), 'HH:mm')} </p>
          <p>Sunset: {format(new Date(sys.sunset * 1000), 'HH:mm')} </p>
        </div>
      </OtherDesc>
    </Wrapper>
  );
};

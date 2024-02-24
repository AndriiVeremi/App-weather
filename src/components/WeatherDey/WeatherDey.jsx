import { format } from 'date-fns';
import { List, ListItem } from '@mui/material';
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
  Text
} from './WeatherDey.styled';

import IconWind from '../../images/wind.png';
import IconPressure from '../../images/pressure.png';
import sunUp from '../../images/sunUp.png';
import sunDown from '../../images/sunDown.png';
import temp from '../../images/temp.png';

export const WeatherDey = ({ weathers }) => {
  console.log('weathers', weathers);
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
            <img
              src={IconPressure}
              style={{ height: '25px', width: '25px' }}
              alt="Pressure"
            />
            <Text>Pressure: {main.pressure}</Text>
          </Items>

        <Items>
        <img
              src={temp}
              style={{ height: '35px', width: '35px' }}
              alt="temp"
            />
          <Text>Temp Max: {Math.round(main.temp_max)} °C</Text>
        </Items>

        <Items>
        <img
              src={temp}
              style={{ height: '35px', width: '35px' }}
              alt="temp"
            />
        <Text>Temp Min: {Math.round(main.temp_min)} °C</Text>
        </Items>
          
        </div>

        <div>
        <Items>
            <img
              src={IconWind}
              style={{ height: '35px', width: '35px' }}
              alt="Wind"
            />
            <Text>Wind speed: {wind.speed}</Text>
          </Items>

          <Items>
            <img
              src={sunUp}
              style={{ height: '35px', width: '35px' }}
              alt="sunUp"
            />
            <Text>Sunrise: {format(new Date(sys.sunrise * 1000), 'HH:mm')} </Text>
          </Items>
          <Items>
            <img
              src={sunDown}
              style={{ height: '30px', width: '30px' }}
              alt="sunDown"
            />
            <Text>Sunset: {format(new Date(sys.sunset * 1000), 'HH:mm')} </Text>
          </Items>
        </div>
      </OtherDesc>
    </Wrapper>
  );
};

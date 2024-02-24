import { format } from 'date-fns';
import { getWeatherMap } from 'API/weatherMapAPI';
import {
  Wrapper,
  NameCity,
  List,
  Items,
  FlexWrapper,
  Temp,
  TempFeel,
  TempWrapper,
  OtherDesc,
  TextDesc,
  Text,
  TextSpan,
} from './WeatherDey.styled';

import IconWind from '../../images/wind.png';
import IconPressure from '../../images/pressure.png';
import sunUp from '../../images/sunUp.png';
import sunDown from '../../images/sunDown.png';
import temp from '../../images/temp.png';

export const WeatherDey = ({ weathers }) => {

console.log(weathers)
  
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
        <List>
          <Items>
            <img
              src={IconPressure}
              style={{ height: '30px', width: '30px' }}
              alt="Pressure"
            />
            <Text>
              Pressure: <TextSpan>{main.pressure}</TextSpan>
            </Text>
          </Items>

          <Items>
            <img
              src={temp}
              style={{ height: '40px', width: '40px' }}
              alt="temp"
            />
            <Text>
              Temp Max: <TextSpan>{Math.round(main.temp_max)} °C</TextSpan>
            </Text>
          </Items>

          <Items>
            <img
              src={temp}
              style={{ height: '40px', width: '40px' }}
              alt="temp"
            />
            <Text>
              Temp Min: <TextSpan>{Math.round(main.temp_min)} °C</TextSpan>
            </Text>
          </Items>

          <Items>
            <img
              src={IconWind}
              style={{ height: '40px', width: '40px' }}
              alt="Wind"
            />
            <Text>
              Wind speed: <TextSpan>{wind.speed} m/s</TextSpan>
            </Text>
          </Items>

          <Items>
            <img
              src={sunUp}
              style={{ height: '40px', width: '40px' }}
              alt="sunUp"
            />
            <Text>
              Sunrise:{' '}
              <TextSpan>
                {format(new Date(sys.sunrise * 1000), 'HH:mm')}
              </TextSpan>
            </Text>
          </Items>
          <Items>
            <img
              src={sunDown}
              style={{ height: '40px', width: '40px' }}
              alt="sunDown"
            />
            <Text>
              Sunset:{' '}
              <TextSpan>
                {format(new Date(sys.sunset * 1000), 'HH:mm')}
              </TextSpan>
            </Text>
          </Items>
        </List>

<div></div>

      </OtherDesc>
    </Wrapper>
  );
};

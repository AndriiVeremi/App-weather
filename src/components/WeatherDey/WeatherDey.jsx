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
  TextWrapper,
} from './WeatherDey.styled';

import IconWind from '../../images/wind.png';
import IconPressure from '../../images/pressure.png';

export const WeatherDey = ({ weathers }) => {
  const { city, list } = weathers;
  const { main, weather, wind } = list[0];

  return (
    <Wrapper>
      <NameCity>{city.name}</NameCity>
      <TempWrapper>

        <TextWrapper>
          <img
            src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            style={{ height: '150px', width: '150px' }}
            alt="icon"
          />
          <TextDesc>{weather[0].description}</TextDesc>
        </TextWrapper>

        <FlexWrapper>
          <Temp>{Math.round(main.temp)}°C</Temp>
          <TempFeel>Feels like:: {Math.round(main.feels_like)} °C</TempFeel>
        </FlexWrapper>

      </TempWrapper>

      <OtherDesc>
        <div>
          <Items>
            <img src={IconPressure} alt="Ppressure" />
            <p>Тиск {main.pressure}</p>
          </Items>

          <Items>
            <img src={IconWind} alt="Wind" />
            <p>Швидкість вітру {wind.speed}</p>
          </Items>
        </div>

        <div>
          <p>Теспература Max: {Math.round(main.temp_max)} °C</p>
          <p>Теспература Min: {Math.round(main.temp_min)} °C</p>
        </div>
      </OtherDesc>
    </Wrapper>
  );
};

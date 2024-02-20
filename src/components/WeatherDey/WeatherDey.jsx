import {
  Wrapper,
  NameCity,
  Items,
  FlexWrapper,
  Temp,
  TempFeel,
  TempWrapper,
  OtherDesc
} from './WeatherDey.styled';
import IconWind from '../../images/wind.png';
import IconPressure from '../../images/pressure.png';
import IconNavigation from '../../images/navigation.png';
import IconClear from '../../images/clear.png';

export const WeatherDey = ({ weathers }) => {
  const { city, list } = weathers;
  const { main, weather, wind } = list[0];
  

  return (
    <Wrapper>
      <NameCity>{city.name}</NameCity>

      <TempWrapper>
        <FlexWrapper>
          <img
            src={IconClear}
            style={{ height: '200px', width: '200px' }}
            alt="icon"
          />
          <p>На дворі {weather[0].description}</p>
        </FlexWrapper>

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

          <Items>
            <img src={IconNavigation} alt="Windf" />
            <p>Напрямок вітру {wind.deg}</p>
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

import { format } from 'date-fns';
import { WeeckItem, ItemImgWrapper } from './WeeckWrapperItem';

export const WeatherWeeckItem = ({ id, data, temp, wind, icon, desc }) => {
  return (
    <WeeckItem key={id}>
      <div>
        <p>{format(new Date(data), 'dd EEEE hh:mm')}</p>
      </div>

      <ItemImgWrapper>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          style={{ height: '70px', width: '70px' }}
          alt="icon"
        />
        <p>{desc}</p>
      </ItemImgWrapper>

      <div>
        <p>Temp: {Math.round(temp)} °C</p>
        <p>Wind: {Math.round(wind)} m/s</p>
      </div>
    </WeeckItem>
  );
};

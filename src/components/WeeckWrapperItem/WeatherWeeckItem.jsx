import { format } from 'date-fns';
import { WeeckItem } from './WeeckWrapperItem';

export const WeatherWeeckItem = ({ id, data, temp, wind, icon }) => {
  return (
    <WeeckItem key={id}>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        style={{ height: '50px', width: '50px' }}
        alt="icon"
      />
      <div>
        <p>{format(new Date(data), 'dd EEEE hh:mm')}</p>
        <p>Temp: {Math.round(temp)} °C</p>
        <p>Wind: {Math.round(wind)} m/s</p>
      </div>
    </WeeckItem>
  );
};

import { format } from 'date-fns';
import { WeeckItem } from './WeeckWrapperItem';

export const WeatherWeeckItem = ({ item }) => {
  // console.log('item', item);

  return (
    
      <WeeckItem>
        <img
          src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
          style={{ height: '50px', width: '50px' }}
          alt="icon"
        />
        <div>
        <p>{format(new Date(item.dt_txt), 'MM EEEE hh:mm')}</p>
        <p>Temp: {Math.round(item.main.temp)} °C</p>
        </div>
      </WeeckItem>
   
  );
};

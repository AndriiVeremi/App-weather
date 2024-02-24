import { WeatherWeeckItem } from 'components/WeeckWrapperItem/WeatherWeeckItem';
import { WeathersListWrappre, WeathersList } from './WeatherWeeck.styled';

export const WeatherWeeck = ({ weathers }) => {
  return (
    <WeathersListWrappre>
      <WeathersList>
      {weathers &&
        weathers.map(item => {   
          return (
            <WeatherWeeckItem
              id={item.dt}
              data={item.dt_txt}
              temp={item.main.temp}
              wind={item.wind.speed}
              icon={item.weather[0].icon}
            />
          );
        })}
    </WeathersList>
    </WeathersListWrappre>
  );
};

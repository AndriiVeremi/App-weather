import { WeatherWeeckItem } from 'components/WeeckWrapperItem/WeatherWeeckItem';
import { WeathersListWrappre, WeathersList } from './WeatherWeeck.styled';

export const WeatherWeeck = ({ weathers }) => {
  return (
    <WeathersListWrappre>
      <WeathersList>
      {weathers &&
        weathers.map(item => { 
          // console.log(item)  
          return (
            <WeatherWeeckItem
              id={item.dt}
              data={item.dt_txt}
              temp={item.main.temp}
              wind={item.wind.speed}
              desc={item.weather[0].description}
              icon={item.weather[0].icon}
            />
          );
        })}
    </WeathersList>
    </WeathersListWrappre>
  );
};

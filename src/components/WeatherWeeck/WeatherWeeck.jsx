import { WeatherWeeckItem } from 'components/WeeckWrapperItem/WeatherWeeckItem';
import { WeathersListWrapper, WeathersList } from './WeatherWeeck.styled';

export const WeatherWeeck = ({ weathers }) => {
  return (
    <WeathersListWrapper>
      <WeathersList>
        {weathers &&
          weathers.map(item => {
            // console.log(item)
            return (
              <WeatherWeeckItem
                key={item.dt}
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
    </WeathersListWrapper>
  );
};

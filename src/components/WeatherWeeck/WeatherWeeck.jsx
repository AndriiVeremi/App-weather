// import { WeeckWrapper } from './WeatherWeeck.styled';
import { WeatherWeeckItem } from 'components/WeeckWrapperItem/WeeckWrapperItem';

export const WeatherWeeck = ({ weathers }) => {
  const { list } = weathers;
console.log(list)
  return (
    <ul>
      {list && list.map(item => {

        console.log(item.main.dt_txt)

        return <li key={item.main.dt_txt} item={item}>
          <img
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            style={{ height: '50px', width: '50px' }}
            alt="icon"
          />
          <span>Теспература: {Math.round(item.main.temp)}°C</span>
          </li>;
      })}
    </ul>
  );
};

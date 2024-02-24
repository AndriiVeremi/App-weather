// import { WeeckWrapper } from './WeatherWeeck.styled';
import { WeatherWeeckItem } from "components/WeeckWrapperItem/WeatherWeeckItem";

export const WeatherWeeck = ({ weathers }) => {
  const { list } = weathers;
  console.log('list', list);
  return (
    <ul>

      {list &&
        list.map(item => 
            <WeatherWeeckItem
              key={item.main.dt}
              item={item}
            />
          )
        }
    </ul>
  );
};

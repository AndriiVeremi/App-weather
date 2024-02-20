import { WeeckWrapper } from './WeatherWeeck.styled';

export const WeatherWeeck = ({ weathers }) => {
  const { list } = weathers;
  console.log('list', list);
  return (<WeeckWrapper>
      {list.map(item => {
        console.log(item);
        return <li>console</li>;
      })}
      
    </WeeckWrapper>
  );
};

// item.map(element => {
//     console.log(element);
//   });

import { format } from 'date-fns';
import { WeeckItem, ItemImgWrapper, DataText, DataTextWrapper } from './WeeckWrapperItem';

export const WeatherWeeckItem = ({ id, data, temp, wind, icon, desc }) => {
  return (
    <WeeckItem key={id}>
      <DataTextWrapper>
        <DataText>{format(new Date(data), 'dd')}</DataText>
        <DataText>{format(new Date(data), 'EEEE')}</DataText>
        <DataText>{format(new Date(data), 'HH:mm')}</DataText>
      </DataTextWrapper>

      <ItemImgWrapper>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          style={{ height: '70px', width: '70px' }}
          alt="icon"
        />
        <p>{desc}</p>
      </ItemImgWrapper>

      <div>
        <DataText>Temp: {Math.round(temp)} °C</DataText>
        <DataText>Wind: {Math.round(wind)} m/s</DataText>
      </div>
    </WeeckItem>
  );
};

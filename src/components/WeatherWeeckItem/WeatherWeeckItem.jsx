import { format } from 'date-fns';
import { WeeckItem, ItemImgWrapper, DataText, DataTextWrapper, TempText, ColorText, DascriptionText } from './WeatherWeeckItem.styled';

export const WeatherWeeckItem = ({ id, data, temp, wind, icon, desc }) => {
  return (
    <WeeckItem key={id}>
      <DataTextWrapper>
        <ColorText>{format(new Date(data), 'dd')}</ColorText>
        <DataText>{format(new Date(data), 'EEEE')}</DataText>
        <ColorText>{format(new Date(data), 'HH:mm')}</ColorText>
      </DataTextWrapper>

      <ItemImgWrapper>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          style={{ height: '70px', width: '70px' }}
          alt="icon"
        />
        <DascriptionText>{desc}</DascriptionText>
      </ItemImgWrapper>

      <div>
        <TempText>Temp: <ColorText>{Math.round(temp)} °C</ColorText></TempText>
        <TempText>Wind: <ColorText>{Math.round(wind)} m/s</ColorText></TempText>
      </div>
    </WeeckItem>
  );
};

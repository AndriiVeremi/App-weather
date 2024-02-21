export const WeatherWeeckItem = ({ item }) => {
    
    console.log('item', item);

const {dt_txt, main, weather, wind} = item

    return (
      <li>
        <img src={weather.icon} alt="icon" />
        <p>{dt_txt}</p>
        <p>День: {main.temp}</p>
        <p>Нічь: {main.temp_kf}</p>
        <p>Сила вітру: {wind}</p>
      </li>
    );
  };
import { Button } from './BtnLocation.styled';

export const BtnLocation = ({onLocation}) => {



  const getLocationCity = () => {
    navigator.geolocation.watchPosition(function (position) {
      onLocation(position.coords.latitude, position.coords.longitude);
      // console.log('loc',position.coords.latitude, position.coords.longitude)
    });
  };

 
  
  return <Button onClick={getLocationCity} type="button">My location</Button>;
};

import { format } from 'date-fns';
import { Wrapper, Times, Dates } from './Time.styled';
import { useState } from 'react';

export const Time = () => {
  
  const [time, setTime] = useState();

  setInterval(() => {
    setTime(format(new Date(), 'HH:mm:ss'));
  }, 1000);

  const data = format(new Date(), 'MMMM iiii yyyy');

  return (
    <Wrapper>
      <Times>{time}</Times>
      <Dates>{data}</Dates>
    </Wrapper>
  );
};

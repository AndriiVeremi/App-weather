import { format } from 'date-fns';
import { Wrapper, Times, Dates } from './Time.styled';

export const Time = () => {

  const time = format(new Date(), 'HH:mm');
  const data = format(new Date(), 'MMMM iiii yyyy');

  return (
    <Wrapper>
      <Times>{time}</Times>
      <Dates>{data}</Dates>
    </Wrapper>
  );
};

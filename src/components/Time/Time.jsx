import { format } from 'date-fns';


export const Time = () => {

  const time = format(new Date(), 'HH:mm');
  const data = format(new Date(), 'MMMM iiii yyyy');

  return (
    <div>
      <span>{time}</span>
      <span>{data}</span>
    </div>
  );
};

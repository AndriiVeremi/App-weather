import { SearchInput } from 'components/SearchInput/SearchInput';
import { BtnLocation } from 'components/BtnLocation/BtnLocation';
import { Wrapper } from './Navbar.styled';

export const Navbar = ({ onSubmit }) => {
  return (
    <Wrapper>
      <SearchInput onSubmit={onSubmit} />
      <BtnLocation/>
    </Wrapper>
  );
};

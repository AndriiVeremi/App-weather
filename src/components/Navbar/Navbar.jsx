import { SearchInput } from 'components/SearchInput/SearchInput';
import { BtnLocation } from 'components/BtnLocation/BtnLocation';
import { NavWrapper } from './Navbar.styled';

export const Navbar = ({ onSubmit }) => {
  return (
    <NavWrapper>
      <SearchInput onSubmit={onSubmit} />
      <BtnLocation />
    </NavWrapper>
  );
};

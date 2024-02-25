import { SearchInput } from 'components/SearchInput/SearchInput';
import { BtnLocation } from 'components/BtnLocation/BtnLocation';
import { NavWrapper } from './Navbar.styled';

export const Navbar = ({ onSubmit, onLocation }) => {
  return (
    <NavWrapper>
      <SearchInput onSubmit={onSubmit} />
      <BtnLocation onLocation={onLocation} />
    </NavWrapper>
  );
};

import { SearchInput } from 'components/SearchInput/SearchInput';
import { NavWrapper } from './Navbar.styled';

export const Navbar = ({ onSubmit }) => {
  return (
    <NavWrapper>
      <SearchInput onSubmit={onSubmit} />
    </NavWrapper>
  );
};

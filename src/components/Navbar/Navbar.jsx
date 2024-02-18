import { SearchInput } from 'components/SearchInput/SearchInput';

export const Navbar = ({ onSubmit }) => {
  return (
    <>
      <SearchInput onSubmit={onSubmit}/>
    </>
  );
};

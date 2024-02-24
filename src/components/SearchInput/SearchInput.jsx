import { useState } from 'react';
import { SearchFormContainer, Forma, Button, Input } from './SearchInput.styled';

export const SearchInput = ({ onSubmit }) => {
  const [searchCity, setSearchCity] = useState('');

  const handleChange = e => {
    setSearchCity(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchCity !== '') {
      onSubmit(searchCity);
      resetInput();
    }
  };

  const resetInput = () => {
    setSearchCity('');
  };

  return (
    <SearchFormContainer>
      <Forma onSubmit={handleSubmit}>
      <Button type="submit">
          Search
        </Button>
        <Input
          value={searchCity}
          onChange={handleChange}
          placeholder="Weather in your city"
        />
      </Forma>
    </SearchFormContainer>
  );
};

import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { SearchFormContainer, Forma } from './SearchInput.styled';

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
      <Button type="submit" variant="outlined">
          Search
        </Button>
        <TextField
          fullWidth
          value={searchCity}
          onChange={handleChange}
          label="Weather in your city"
          id="fullWidth"
        />
      </Forma>
    </SearchFormContainer>
  );
};

import { useState } from 'react';
import { Forma, Button, Span, Input } from './SearchInput.styled';

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
    <div>
      <Forma onSubmit={handleSubmit}>
        <Button type="submit">
          <Span>Search</Span>
        </Button>
        <Input
          type="text"
          value={searchCity}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Weather in your city"
        />
      </Forma>
    </div>
  );
};

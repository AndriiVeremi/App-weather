import { Component } from 'react';
import { Forma, Button, Span, Input } from './SearchInput.styled';

export class SearchInput extends Component {
  state = {
    searchCity: '',
  };

  handleChange = e => {
    this.setState({ searchCity: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchCity !== '') {
      this.props.onSubmit(this.state.searchCity);
      this.resetInput()
    }
  };

  resetInput() {
    this.setState({ searchCity: '' });
  }

  render() {
    return (
      <div>
        <Forma onSubmit={this.handleSubmit}>
          <Button type="submit">
            <Span>Search</Span>
          </Button>
          <Input
            type="text"
            value={this.state.searchCity}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Weather in your city"
          />
        </Forma>
      </div>
    );
  }
}

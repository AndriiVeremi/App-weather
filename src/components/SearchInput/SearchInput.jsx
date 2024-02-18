import { Component } from 'react';

export class SearchInput extends Component {
  state = {
    searchCity: '',
  };

  handleChange = e => {
    this.setState({ searchCity: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.searchCity);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span className="button-label">Search</span>
          </button>
          <input
            type="text"
            value={this.state.searchCity}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Weather in your city"
          />
        </form>
      </div>
    );
  }
}

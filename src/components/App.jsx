import { Component } from 'react';
import { Navbar } from './Navbar/Navbar';
import { Time } from './Time/Time';
import { WeatherDey } from './WeatherDey/WeatherDey';
import { getWeather } from '../weatherAPI/weatherAPI';
import { Container, Body } from './App.styled';

export class App extends Component {
  state = {
    city: '',
    weather: [],
    error: null,
  };

  componentDidMount() {
    this.setState({ city: localStorage.getItem('Weather') || 'warsaw' });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.city !== this.state.city) {
      this.handleSearchWeather();
    }
  }

  onSubmit = city => {
    console.log(city);
    this.setState({ city });

    localStorage.setItem('Weather', city);
  };

  handleSearchWeather = async () => {
    try {
      const data = await getWeather(this.state.city);
      this.setState({ weather: data.data });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { weather } = this.state;

    return (
      <>
        <Container>
          <Navbar onSubmit={this.onSubmit} />
          <Body>
            <Time />
            {weather.length !== 0 && <WeatherDey weathers={weather} />}
          </Body>
        </Container>
      </>
    );
  }
}

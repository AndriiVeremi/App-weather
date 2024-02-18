import { Component } from 'react';
import { Navbar } from './Navbar/Navbar';
import { Time } from './Time/Time';
import { getWeather } from '../weatherAPI/weatherAPI';
export class App extends Component {
  state = {
    city: '',
  };

  onSubmit = e => {
    console.log('city', e);
    getWeather(e);
  };

  render() {
    return (
      <>
        <Navbar onSubmit={this.onSubmit} />
        <Time />
      </>
    );
  }
}

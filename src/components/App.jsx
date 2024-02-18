import { Component } from 'react';
import { Navbar } from './Navbar/Navbar';
import {getWeather} from '../weatherAPI/weatherAPI'
export class App extends Component {
  state = {
    city: '',
  };

  onSubmit = e => {
    console.log(e);
    getWeather(e, 2)
  };

  render() {
    return (
      <>
        <Navbar onSubmit={this.onSubmit} />
      </>
    );
  }
}

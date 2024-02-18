import { Component } from 'react';
import { Navbar } from './Navbar/Navbar';
import { Time } from './Time/Time';
import { getWeather } from '../weatherAPI/weatherAPI';
export class App extends Component {
  state = {
    city: '',
  };

  componentDidMount() {
    this.setState({ city: localStorage.getItem('Weather') || '' });
  }

  componentDidUpdate() {
    
  }


  onSubmit = city => {
    console.log(city);
    this.setState({ city });
    // localStorage.setItem('Weather', JSON.stringify(city));
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

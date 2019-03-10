import React, { Component } from 'react';
import CityCarousel from './CityCarousel';
import Info from './Info';

class Home extends Component {
  render() {
    return (
      <div>
        <CityCarousel />
        <Info />
      </div>
    );
  }
}
export default Home;

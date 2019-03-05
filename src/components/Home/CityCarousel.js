import React, { Component } from 'react';
import { Carousel} from 'react-materialize';
import Seatle from './seatle.jpeg';
import Sanfrancisco from './sanfranciso.jpeg';
import Sydney from './sydney.jpeg';
import London from './london.jpeg';
// import { Carousel } from 'react-responsive-carousel';

const images = [Seatle, Sanfrancisco, Sydney, London];

class CityCarousel extends Component {
  render() {
    return (
      <div>
      <Carousel  images={images}  />
      </div>
    );
  }
}

export default CityCarousel;

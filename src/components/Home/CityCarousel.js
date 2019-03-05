import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Seattle from './seattle.jpeg';
import Sanfrancisco from './sanfrancisco.jpeg';
import Sydney from './sydney.jpeg';
import London from './london.jpeg';
import './CityCarousel.css';

class CityCarousel extends Component {
  state = {
    index: 0,
    direction: null
  };

  handleSelect = (selectedIndex, e) => {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  };

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <img className="d-block w-100 h-50" src={Seattle} alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Sanfrancisco} alt="Third slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={London} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Sydney} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CityCarousel;

import React, { Component } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
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
      <Container fluid={true}>
        <Row noGutters={false}>
          <Col xs={12} md={12}>
            <Carousel
              activeIndex={index}
              direction={direction}
              onSelect={this.handleSelect}
            >
            <Carousel.Item> <img className="d-block w-100" src={Seattle} alt="First slide" />
              <Carousel.Caption>
                <div id="header">
                  <h1 class="real">SEATTLE</h1> 
                  <h1 class="refl">SEATTLE</h1>
                  </div>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item><img className="d-block w-100" src={Sanfrancisco} alt="Second slide" />
              <Carousel.Caption>
                <div id="header">
                  <h1 class="real">SF BAY AREA</h1>
                  <h1 class="refl">SF BAY AREA</h1>
              </div>  
              </Carousel.Caption>
             </Carousel.Item>

            <Carousel.Item><img className="d-block w-100" src={London} alt="Third slide" />
              <Carousel.Caption>
                <div id="header">
                  <h1 class="real">LONDON</h1> 
                  <h1 class="refl">LONDON</h1> 
                  </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item><img className="d-block w-100" src={Sydney} alt="Fourth slide" />
              <Carousel.Caption>
                <div id="header">
                <h1 class="real">SYDNEY</h1> 
                <h1 class="refl">SYDNEY</h1> 
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CityCarousel;

import React, { Component } from 'react';
import CitiesList from './CitiesList';
import { Container, Row, Col } from 'react-bootstrap';
import CityPostContainer from './CitiesPosts/CityPostContainer';

// This is our main container that includes cities and post list component
class CitiesContainer extends Component {
  render() {
    return (
      <div>
        <h1>Hello from parent citiesContainer</h1>
        <Container>
          <Row>
            <Col sm={4}>
              <CitiesList />
            </Col>
            <Col sm={8}>
                <CityPostContainer />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default CitiesContainer;

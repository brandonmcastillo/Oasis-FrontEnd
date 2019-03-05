import React, { Component } from 'react';
import { Media } from 'react-bootstrap';
import Sf from './CitiesPosts/sf.jpeg';

class City extends Component {
  render() {
    return (
      <div>
        <Media>
          <img
            width={64}
            height={64}
            className="mr-3"
            src={Sf}
            alt="sf"
          />
          <Media.Body>
            <h5>San francisco</h5>
          </Media.Body>
        </Media>
      </div>
    );
  }
}
export default City;

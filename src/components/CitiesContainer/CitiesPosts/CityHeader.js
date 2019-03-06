import React, { Component } from 'react';
import { Media } from 'react-bootstrap';
import nature from './nature.jpeg';

class CityHeader extends Component {
  render() {
    return (
      <div>
        <Media>
          <img
            width={150}
            height={150}
            className="mr-3"
            src={nature}
            alt="good"
          />
          <Media.Body>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              placeat cupiditate nulla quod labore? Hic voluptatem ex error ut
              optio architecto recusandae et, soluta sunt natus fugit libero!
              Distinctio, ducimus?
            </p>
          </Media.Body>
        </Media>
      </div>
    );
  }
}
export default CityHeader;

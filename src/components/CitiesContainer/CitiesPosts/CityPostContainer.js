import React, { Component } from 'react'
import CitiesPostList from './CitiesPostList';
import {Button } from 'react-bootstrap';

class CityPostContainer extends Component {
  render() {
    return (
      <div>
            <h1>San Francisco</h1>
            <Button variant="success">Success</Button>
            <CitiesPostList />
           
      </div>
    )
  }
}

export default CityPostContainer
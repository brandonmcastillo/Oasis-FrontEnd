import React, { Component } from 'react';
import City from './City';

// This is our city container component
class CitiesList extends Component {
  render() {
    return (
      <div>
        <City />
        <City />
        <City />

      </div>
    );
  }
}

export default CitiesList;

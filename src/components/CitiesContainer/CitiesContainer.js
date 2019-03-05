import React, { Component } from 'react'
import CitiesList from './CitiesList'

 class CitiesContainer extends Component {
  render() {
    return (
      <div>
            <h1>Hello from parent citiesContainer</h1>
            <CitiesList />
      </div>
    )
  }
}
export default CitiesContainer;
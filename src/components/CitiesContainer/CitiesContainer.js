import React, { Component } from 'react'
import CitiesList from './CitiesList'

// This is our main container that includes cities and post list component
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
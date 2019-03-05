import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';

import './App.css';
import CityCarousel from './components/Home/CityCarousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <CityCarousel />
       
      </div>
    );
  }
}

export default App;

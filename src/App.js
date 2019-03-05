import React, { Component } from 'react';
import Nav from './components/Navbar/Nav';
import CityCarousel from './components/Home/CityCarousel';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <CityCarousel />
        <h1> Hello Programmer</h1>
      </div>
    );
  }
}

export default App;

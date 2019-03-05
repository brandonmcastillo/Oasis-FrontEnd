import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import CityCarousel from './components/Home/CityCarousel';
import './App.css';
import Info from './components/Home/Info'
import SignUpForm from './components/Forms/SignUpForm'
import LoginForm from './components/Forms/LoginForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <CityCarousel />
      
        <Info />
        <SignUpForm />
        <LoginForm />
      </div>
    );
  }
}

export default App;

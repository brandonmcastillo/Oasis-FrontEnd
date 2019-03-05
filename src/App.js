import React, { Component } from 'react';
import './App.css';
import Info from './components/Home/Info'
import SignUpForm from './components/Forms/SignUpForm'
import LoginForm from './components/Forms/LoginForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Info />
        <SignUpForm />
        <LoginForm />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Info from './components/Home/Info'
import SignUpForm from './components/Forms/SignUpForm'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Info />
        <SignUpForm />
      </div>
    );
  }
}

export default App;

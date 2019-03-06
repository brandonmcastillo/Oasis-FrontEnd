import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'
import './App.css';
import MyRoutes from './config/routes';

// import SignUpForm from './components/Forms/SignUpForm'
// import LoginForm from './components/Forms/LoginForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {MyRoutes}
        <Footer />
      </div>
    );
  }
}

export default App;

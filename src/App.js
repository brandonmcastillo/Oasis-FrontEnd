import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'
import './App.css';
import MyRoutes from './config/routes';

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

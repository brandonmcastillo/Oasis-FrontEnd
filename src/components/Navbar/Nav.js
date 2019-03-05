import React, { Component } from 'react';
import { NavItem, Navbar } from 'react-materialize';
import './Nav.css'

class Nav extends Component {
  render() {
    return (
      <div>
        <Navbar brand="logo" right>
          <NavItem onClick={() => console.log('test click')}>
            Getting started
          </NavItem>
          <NavItem href="components.html">Components</NavItem>
        </Navbar>
      </div>
    );
  }
}
export default Nav;

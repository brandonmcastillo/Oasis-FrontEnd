import React, { Component } from 'react';
import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar className="Nav" expand="lg" fixed="top">
          <Navbar.Brand href="/"><h2>Wayfarer</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto ">
              <Nav.Link  href="/User">Sign In</Nav.Link>
              <Nav.Link href="/post">Sign Up</Nav.Link>
              <Nav.Link href="/city">City</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavBar;

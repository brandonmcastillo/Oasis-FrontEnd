import React, { Component } from 'react';
import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
          <Navbar.Brand href="/">Wayfarer</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/User">Sign In</Nav.Link>
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
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavBar;

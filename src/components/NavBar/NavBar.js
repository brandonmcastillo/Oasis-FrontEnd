import React, { Component } from 'react';
import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap';
import './NavBar.css';
import SignUpForm from '../Forms/SignUpForm'
import LoginForm from '../Forms/LoginForm'

class NavBar extends Component {
  state = {
    modalShow: false,
    loginModalShow: false
  }
  // modalClose = () => {
  //   this.setState({ modalShow: false })
  // };

  render() {
    let modalClose = () => this.setState({ modalShow: false });
    let loginModalClose = () => this.setState({ loginModalShow: false });

    return (
      <div>
        <Navbar className="Nav" expand="lg" fixed="top">
          <Navbar.Brand href="/"><h2>Wayfarer</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto ">
              <a href="#"className="nav-modal-link"onClick={() => this.setState({loginModalShow: true})}>Sign In</a>
              <LoginForm show={this.state.loginModalShow} onHide={loginModalClose}/>
              <a href="#"className="nav-modal-link" onClick={() => this.setState({ modalShow: true })}>Sign Up</a>
              <SignUpForm show={this.state.modalShow} onHide={modalClose}/>
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

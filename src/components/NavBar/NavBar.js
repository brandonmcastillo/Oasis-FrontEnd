import React, { Component } from "react";
import { Navbar, Form, FormControl, Button, Nav } from "react-bootstrap";
import "./NavBar.css";
import SignUpForm from "../Forms/SignUpForm";
import LoginForm from "../Forms/LoginForm";

import UserModel from "../../models/UserModel";

class NavBar extends Component {
  state = {
    modalShow: false,
    loginModalShow: false,
    isLoggedIn: false
  };
  // modalClose = () => {
  //   this.setState({ modalShow: false })
  // };

  handleNavStateOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitUserSignup = () => {
    let newUser = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      city: this.state.city
    };
    console.log("before api POST to make new user, the user obj is ", newUser);
    UserModel.signup(newUser)
      .then(res => {
        console.log("success", res);
        alert(res.data.message);
        localStorage.token = res.data.signedJwt;
        this.setState({
          username: res.data.user.username,
          userId: res.data.user._id,
          password: "",
          email: res.data.user.email,
          isLoggedIn: true
        });
        //how do we redirect in react without
        // window.location.href = "/profile";
        
      })
      .catch(err => console.log(err));
  };

  logoutUser = e => {
    localStorage.clear();
    this.setState({
      username: "",
      userId: "",
      password: "",
      email: "",
      isLoggedIn: false
    });
  };

  render() {
    let modalClose = () => this.setState({ modalShow: false });
    let loginModalClose = () => this.setState({ loginModalShow: false });
    let conditionalNav;
    if (this.state.isLoggedIn === false) {
      conditionalNav = (
        <div className="special-div">
          <p
            // href="#"
            className="nav-modal-link"
            onClick={() => this.setState({ loginModalShow: true })}
          >
            Sign In
          </p>
          <LoginForm
            show={this.state.loginModalShow}
            onHide={loginModalClose}
          />
          <p
            // href="#"
            className="nav-modal-link"
            onClick={() => this.setState({ modalShow: true })}
          >
            Sign Up
          </p>
          <SignUpForm
            handleSignUp={this.signUpUser}
            show={this.state.modalShow}
            onHide={modalClose}
            handleNavStateOnChange={this.handleNavStateOnChange}
            submitUserSignup={this.submitUserSignup}
          />
        </div>
      );
    } else {
      conditionalNav = (
        <div className="special-div">
          <Nav.Link href="/city">City</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/" onClick={this.logoutUser}>
            Logout
          </Nav.Link>
        </div>
      );
    }
    return (
      <div>
        <Navbar className="Nav" expand="lg" fixed="top">
          <Navbar.Brand href="/">
            <h2>Wayfarer</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto ">{conditionalNav}</Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavBar;

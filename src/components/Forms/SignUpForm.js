import React, { Component } from "react";
import { Form, Col, InputGroup, Modal, Button } from "react-bootstrap";
import "./Form.css";
class SignUpForm extends Component {
  constructor(...args) {
    super(...args);

    this.state = { validated: false };
  }
  //this is just for validate form, not actual api call
  handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });
    this.props.submitUserSignup();
  }

  render() {
    const { validated } = this.state;
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form
            className="Signup-Form"
            noValidate
            validated={validated}
            onSubmit={e => this.handleSubmit(e)}
          >
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    name="username"
                    onChange={this.props.handleNavStateOnChange}
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  name="password"
                  onChange={this.props.handleNavStateOnChange}
                  type="password"
                  placeholder="Password"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  name="email"
                  onChange={this.props.handleNavStateOnChange}
                  type="email"
                  placeholder="Email"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label> Favorite City</Form.Label>
                <Form.Control
                  name="city"
                  onChange={this.props.handleNavStateOnChange}
                  type="text"
                  placeholder="City"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            
            <input
              value="Submit"
              type="submit"
              className="btn-primary"
              onClick={this.props.handleSignUp}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SignUpForm;

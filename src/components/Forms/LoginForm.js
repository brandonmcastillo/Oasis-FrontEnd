import React, { Component } from 'react'
import { Form, Col, InputGroup, Button } from 'react-bootstrap'

class LoginForm extends Component {
    constructor(...args) {
      super(...args);
  
      this.state = { validated: false };
    }
  
    handleSubmit(event) {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      this.setState({ validated: true });
    }
  
    render() {
      const { validated } = this.state;
      return (
        <Form
          noValidate
          validated={validated}
          onSubmit={e => this.handleSubmit(e)}
          >
        <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup>
                <Form.Control
                  name="Username"
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </InputGroup>
            </Form.Group>
        </Form.Row>.
        <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Password"
              />
            </Form.Group>
        </Form.Row>
          <Button type="submit">Submit form</Button>
          </Form>
       );
     }
}
        
export default LoginForm;
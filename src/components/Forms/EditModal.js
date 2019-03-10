import React, { Component } from 'react';
import { Modal, Button, Form, Col, InputGroup } from 'react-bootstrap';

export default class EditModal extends Component {
  state = {
    validated: false
  };
  render() {
    return (
      <div>
        <Modal
          className="edit-modal"
          show={this.props.editModalShow}
          onHide={this.props.handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title>Edit Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              className="EditPost"
              noValidate
              validated={this.state.validated}
              onSubmit={this.props.editPost}
            >
              <Form.Row>
                <Form.Group as={Col} md="12" controlId="validationPostTitle">
                  <Form.Label>Title</Form.Label>
                  <InputGroup>
                    <Form.Control
                      name="title"
                      onChange={this.props.onInput}
                      type="text"
                      placeholder={this.props.title}
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                  </InputGroup>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} md="12" controlId="validationPostContent">
                  <Form.Label>Content</Form.Label>
                  <Form.Control
                    required
                    name="content"
                    onChange={this.props.onInput}
                    type="text"
                    placeholder={this.props.content}
                    as="textarea"
                    rows="5"
                  />
                </Form.Group>
              </Form.Row>
              <input value="Submit" type="submit" className="btn-primary" />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

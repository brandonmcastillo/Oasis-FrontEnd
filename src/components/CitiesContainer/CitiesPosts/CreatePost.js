import React, { Component } from 'react'
import { Form, Col, InputGroup, Modal, Button } from 'react-bootstrap';

class CreatePost extends Component {
    state = {
        validated: false
    }
  render() {
    return (
        <Modal 
        show={this.props.show} 
        onHide={this.props.onHide} 
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            New Post
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>

            <Form
          className="CreatePost"
          noValidate
          validated={this.state.validated}
          onSubmit={e => this.handleSubmit(e)}
        >
          <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationPostTitle">
              <Form.Label>Title</Form.Label>
              <InputGroup>
                <Form.Control
                  name="title"
                  onChange={this.props.handleInput}
                  type="text"
                  placeholder="Title"
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
                onChange={this.props.handleInput}
                type="text"
                placeholder="What do you think about this city?"
                as="textarea" rows="5"
              />

            </Form.Group>
          </Form.Row>
          <input
            value="Submit"
            type="submit"
            className="btn-primary"
            onClick={this.props.handleCreatePost}
          />
                
            </Form>
        </Modal.Body>


        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default CreatePost
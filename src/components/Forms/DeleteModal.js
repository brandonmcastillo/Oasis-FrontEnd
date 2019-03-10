import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class DeleteModal extends Component {
  render() {
    return (
      <div>
        <Modal
          className="delete-modal"
          show={this.props.deleteModalShow}
          onHide={this.props.handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title>Delete Post?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete this post?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Cancel
            </Button>
            <Button variant="danger" onClick={this.props.deletePost}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

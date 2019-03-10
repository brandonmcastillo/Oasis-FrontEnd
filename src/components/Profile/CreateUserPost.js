import CreatePost from '../Forms/CreatePost';
import React, { Component } from 'react';
import './CreateUserPost.css';
import { Button } from 'react-bootstrap';
import PostModel from '../../models/PostModel';

class CreateUserPost extends Component {
  state = {
    modalShow: false
  };

  // Create a createUser function
  createUserOnSubmit = () => {
    let createPost = {
      title: this.state.title,
      content: this.state.content
    };

    PostModel.create(createPost).then(response => console.log(response));
  };

  modalClose = () => {
    this.setState({ modalShow: false });
  };

  render() {
    return (
      <div>
        <div>
          <Button
            className="create-user-post"
            onClick={() => this.setState({ modalShow: true })}
          >
            +
          </Button>
          <CreatePost show={this.state.modalShow} onHide={this.modalClose} />
        </div>
      </div>
    );
  }
}
export default CreateUserPost;

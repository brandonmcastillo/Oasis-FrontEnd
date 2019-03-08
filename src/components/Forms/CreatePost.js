import React, { Component } from 'react';
import { Form, Col, InputGroup, Modal, Button } from 'react-bootstrap';
import CityModel from '../../models/CityModel';
import PostModel from '../../models/PostModel';

class CreatePost extends Component {
  state = {
    validated: false
  };

  handleCreatePostOnChange = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  };

  componentDidMount = () => {
    console.log('this function is working');
    console.log(this.state)
    CityModel.all().then(response => {
      console.log(response.data);
      this.setState({
        cities: response.data
      });
      console.log(this.state, 'after setstate in component');
    });
  };

  submitPost = e => {
    e.preventDefault();

    if (localStorage.userId === undefined) {
      return;
    } else if (this.state.city === undefined) {
      // alert(';pick city')
      return
    } else {
    
    let newPost = {
      title: this.state.title,
      content: this.state.content
    };
    let id;
    this.state.cities.forEach(city => {
      console.log(this.state.name, 'that was the state', city.name);
      if (this.state.city === city.name) {
        id = city._id;
      }
    });
    newPost.cityId = id;
    newPost.userId = localStorage.userId;

    PostModel.create(newPost).then(res => {
      console.log(res);
    });
    //close the modal
    window.location.reload(true);
  }
  };

  render() {
    let options;
    if (this.state.cities === undefined) {
      options = <option>Loading</option>;
    } else {
      options = this.state.cities.map(city => {
        return <option key={city._id}>{city.name}</option>;
      });
    }

    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
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
                    onChange={this.handleCreatePostOnChange}
                    type="text"
                    placeholder="Title"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                </InputGroup>
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Example select</Form.Label>
              <Form.Control
                as="select"
                name="city"
                onChange={this.handleCreatePostOnChange}
                required
              >
              <option>Select a city below</option>
                {options}
              </Form.Control>
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationPostContent">
                <Form.Label>Content</Form.Label>
                <Form.Control
                  required
                  name="content"
                  onChange={this.handleCreatePostOnChange}
                  type="text"
                  placeholder="What do you think about this city?"
                  as="textarea"
                  rows="5"
                />
              </Form.Group>
            </Form.Row>
            <input
              value="Submit"
              type="submit"
              className="btn-primary"
              onClick={this.submitPost}
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

export default CreatePost;

import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import CreatePost from '../../Forms/CreatePost';
import Post from './Post';
import './PostContainer.css';

class PostContainer extends Component {
  state = {
    modalShow: false
  };
  render() {
    let modalClose = () =>
      this.setState({
        modalShow: false
      });

    let posts = this.props.posts.map((post, idx) => {
      return <Post post={post} key={idx} postId={post._id}/>;
    });
    return (
      <Container>
        <Row>
          <Col sm={12} md={12}>
            <Button
              className="create-button"
              onClick={() =>
                this.setState({
                  modalShow: true
                })
              }
            >
              +
            </Button>
            <CreatePost show={this.state.modalShow} onHide={modalClose} />{' '}
            <div> {posts} </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default PostContainer;

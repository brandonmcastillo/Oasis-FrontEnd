import React, { Component } from "react";
import { Button } from "react-bootstrap";
import CreatePost from './CreatePost'
import Post from "./Post";

class PostContainer extends Component {
  state = {
    modalShow: false,
  }
  render() {
    let modalClose = () => this.setState({ modalShow: false });

    let posts = this.props.posts.map((post, idx) => {
      return <Post post={post.content} key={idx} />;
    });
    return (
      <div>
        <h1>Posts</h1>
        <Button onClick={() => this.setState({modalShow: true})}>Create Post</Button>
        <CreatePost show={this.state.modalShow} onHide={modalClose}/>
        {posts}
      </div>
    );
  }
}
export default PostContainer;

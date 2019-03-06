import React, { Component } from "react";
import Post from "./Post";

class PostContainer extends Component {
  render() {
    let posts = this.props.posts.map((post, idx) => {
      return <Post post={post.content} key={idx} />;
    });
    return (
      <div>
        <h1>Posts</h1>
        {posts}
      </div>
    );
  }
}
export default PostContainer;

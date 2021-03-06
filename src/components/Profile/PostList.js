import React, { Component } from "react";
import Post from "./Post.js";
import "./Post.css";
class PostList extends Component {
  render() {
    let userPosts = this.props.userPosts.reverse().map(post => {
      return (
        <Post
          key={post._id}
          postId={post._id}
          title={post.title}
          city={post.cityId.name}
          content={post.content}
          editPost={this.props.editPost}
          deletePost={this.props.deletePost}
        />
      );
    });
    return <div>{userPosts}</div>;
  }
}

export default PostList;

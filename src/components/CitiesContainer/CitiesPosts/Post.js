import React, { Component } from 'react';

class Post extends Component {
  render() {
    return (
      <div className="PostDiv">
        <p className="paragraph">
          {this.props.post.title} | Created by: {this.props.post.userId.username}
        </p>
        <p>Tip: {this.props.post.content}</p>
      </div>
    );
  }
}
export default Post;

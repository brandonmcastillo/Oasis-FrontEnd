import React, { Component } from 'react';

class Post extends Component {
  render() {
    return <div className="PostDiv">{this.props.post}</div>;
  }
}
export default Post;

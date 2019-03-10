import React, { Component } from 'react';
import './post.css'

class Post extends Component {
  redirectView = () => { 
    localStorage.postId = this.props.postId;
    window.location.href = "/showpost";
  }

  render() {
    return (
      <div className="PostDiv">
        <p onClick={this.redirectView} className="paragraph">
          {this.props.post.title} | Created by: {this.props.post.userId.username}
        </p>
        <p>Tip: {this.props.post.content}</p>
      </div>
    );
  }
}
export default Post;

import React, { Component } from 'react';
import Post from './Post';
class PostContainer extends Component {
  state = {
    posts: [
      {
        title: 'Hello Programmer',
        comment: 'This is sweet'
      },
      {
        title: 'Code is fun and frustratin',
        comment: ' Great team work guys'
      },
      {
        title: 'you got this',
        comment: 'This is actually awesome. React is actually fun to learn'
      }
    ]
  };
  render() {
    let posts = this.state.posts.map((post, idx) => {
      return <Post post={post.comment} key={idx} />;
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

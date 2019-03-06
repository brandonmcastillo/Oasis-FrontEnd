import React, { Component } from 'react';
import Post from './Post.js'
import './Post.css'
class PostList extends Component {
    render() {
        return (
            <div>
                <Post/>
            </div>
        );
    }
}

export default PostList;
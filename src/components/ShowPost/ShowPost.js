import React, { Component } from 'react';
import PostModel from '../../models/PostModel'

class ShowPost extends Component {
    state = {
        title: '',
        content: '',
        author: ''
    }

    componentDidMount() {
        let postId = localStorage.postId;
        PostModel.onePost(postId).then(res => {
            this.setState({
                title: res.data.title,
                content: res.data.content,
                author: res.data.userId.username
            })
        })
    }
    
    componentWillUnmount() {
        localStorage.removeItem('postId');
    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h3>By: {this.state.author}</h3>
                <p>{this.state.content}</p>
            </div>
        );
    }
}

export default ShowPost;
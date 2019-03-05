import React, {Component} from 'react'

class CreatePostForm extends Component {

  state = {
      post: ''
    }
  
  onInputChange = (event) => {
    this.setState({
      post: event.target.value
    })
  }
  onFormSubmit = (event) => {
      event.preventDefault();
      let post = this.state.post;
      this.props.createTodo(post);
         this.setState({
      post: ""
    })
  }
    
  render(){
    return (
      <div >
        <form onSubmit={ this.onFormSubmit } id="taskForm">
          <input  
            onChange={this.onInputChange} 
            value={this.state.post}
            type="text"
            id="newPostDescription" 
            placeholder="What do you think of this place?"  
          />
         <button
            type="submit"
            id="addPost"
            className="btn">Add Post</button>
        </form>
      </div>
    )
  }
}

export default CreatePostForm
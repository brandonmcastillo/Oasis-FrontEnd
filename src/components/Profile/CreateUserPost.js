import CreatePost from '../CitiesContainer/CitiesPosts/CreatePost'

import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export default class CreateUserPost extends Component {
    state = {
        modalShow: false,
      }
    render() {
        let modalClose = () => this.setState({ modalShow: false });
    return (
        <div>
            <Button className="create-userpostbutton" onClick={() => this.setState({modalShow: true})}>Create a Post</Button>
        <CreatePost show={this.state.modalShow} onHide={modalClose}/>
        
      </div>
    )
  }
}

import React, { Component } from 'react'
import UserProfileList from './UserProfileList'
import PostList from './PostList'
import { Container, Row, Col } from 'react-bootstrap';
import UserModel from '../../models/UserModel'
import PostModel from '../../models/PostModel'

 class Profile extends Component {
  state = {
    username: '',
    email: '',
    city: '',
    dateJoined: '',
    editInput: 'hidden',
    editMode: 'show',
    userId: localStorage.getItem('userId'),
    userPosts: []
  }
  componentDidMount = () => {
    this.fetchUser()
    this.fetchPosts()
  }
  
  // userId = '5c804ce1390c2b0722e64b9a'
  fetchUser = () => {
    UserModel.getUser(this.state.userId).then(response => {
      console.log(response)
      this.setState({
        username: response.data.username,
        email: response.data.email,
        city: response.data.city,
        dateJoined: new Date(response.data.dateJoined).toDateString()
      })
    })
  }

  fetchPosts = () => {
    PostModel.userPosts(this.state.userId).then(response => {
      console.log(response.data)
      this.setState({
        userPosts: response.data
      })
    })
  }

  updateInfo = () => {
    this.setState({ editInput: 'show', editMode: 'hidden' })
  }


  saveInfo = (newUserInfo) => {
    UserModel.update(this.state.userId, newUserInfo).then(response => {
      this.setState({
        username: response.data.username,
        email:response.data.email,
        city: response.data.city,
        editInput: 'hidden'
      })
    })
  }

  hideUpdate = () => {
    this.setState({ editInput: 'hidden', editMode: 'show'})
  }

  render() {
    return (
      <div>
      <Container fluid={true}>
        <Row noGutters={false}>
            <Col xs={12} sm={12} md={4}>
              <UserProfileList 
                username={this.state.username}
                email={this.state.email}
                city={this.state.city}
                dateJoined={this.state.dateJoined}
                editInput={this.state.editInput}
                editMode={this.state.editMode}
                updateInfo={this.updateInfo}
                // onSubmit={this.onSubmit}
                saveInfo={this.saveInfo}
                hideUpdate={this.hideUpdate}/>
            </Col>
            <Col xs={12} sm={12} md={8}>
              {/* User Posts */}
              <h2 className="Your-Post">Your Posts</h2>
              <PostList userPosts={this.state.userPosts}/>
              {/* <PostList />
              <PostList /> */}
              </Col>
              </Row>
      </Container>
      </div>
    )
  }
}
export default Profile;
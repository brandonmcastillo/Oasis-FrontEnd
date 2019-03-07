import React, { Component } from 'react'
import UserProfileList from './UserProfileList'
import PostList from './PostList'
import { Container, Row, Col } from 'react-bootstrap';
import UserModel from '../../models/UserModel'

 class Profile extends Component {
  state = {
    username: '',
    email: '',
    city: '',
    dateJoined: '',
    editInput: 'hidden'
  }
  componentDidMount = () => {
    this.fetchUser()
  }
  
  // userId = '5c804ce1390c2b0722e64b9a'
  fetchUser = () => {
    UserModel.getUser('5c804ce1390c2b0722e64b9a').then(response => {
      console.log(response)
      this.setState({
        username: response.data.username,
        email: response.data.email,
        city: response.data.city,
        dateJoined: new Date(response.data.dateJoined).toDateString()
      })
    })
  }

  updateInfo = () => {
    this.setState({ editInput: 'show' })
  }


  saveInfo = (newUserInfo) => {
    UserModel.update('5c804ce1390c2b0722e64b9a', newUserInfo).then(response => {
      this.setState({
        username: response.data.username,
        email:response.data.email,
        city: response.data.city,
        editInput: 'hidden'
      })
    })
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
                updateInfo={this.updateInfo}
                onSubmit={this.onSubmit}
                saveInfo={this.saveInfo}/>
            </Col>
            <Col xs={12} sm={12} md={8}>
              {/* User Posts */}
              <h2 className="Your-Post">Your Posts</h2>
              <PostList />
              <PostList />
              <PostList />
              </Col>
              </Row>
      </Container>
      </div>
    )
  }
}
export default Profile;
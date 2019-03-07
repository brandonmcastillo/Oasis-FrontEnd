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
        dateJoined: response.data.dateJoined
      })
    })
  }

  updateInfo = () => {
    if (this.state.editInput === 'show') {
      // this.setState({ editInput: 'hidden' })
    }
    // this.setState({ editInput: 'show' })
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
                updateInfo={this.updateInfo}/>
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
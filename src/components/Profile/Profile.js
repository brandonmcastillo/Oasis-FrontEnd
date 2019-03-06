import React, { Component } from 'react'
import UserProfileList from './UserProfileList'
import PostList from './PostList'
import { Container, Row, Col } from 'react-bootstrap';
 class Profile extends Component {
  render() {
    return (
      <div>
      <Container fluid={true}>
        <Row noGutters={false}>
            <Col xs={12} sm={12} md={4}>
              <UserProfileList />
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
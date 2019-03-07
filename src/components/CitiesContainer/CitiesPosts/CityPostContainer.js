import React, { Component } from "react";
import CityHeader from "./CityHeader";
import PostContainer from "./PostContainer";
import {Container, Row, Col} from 'react-bootstrap'
class CityPostContainer extends Component {
  
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={12}>
              <CityHeader title={this.props.data.name} img={this.props.data.image} />
              
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h1>Recent Posts</h1>
              </Col>
          </Row>
          <Row>
        <PostContainer posts={this.props.posts} />
      </Row>
        </Container>
        </div>
    );
  }
}

export default CityPostContainer;

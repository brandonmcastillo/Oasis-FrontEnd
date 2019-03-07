import React, { Component } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import GA from './GA.jpg'
import './Post.css'
// Tempoary template
export default class Post extends Component {
  render() {
    return (
      <div>
         <Container fluid={true}>
          <Row noGutters={false}>
            <Col xs={4} sm={4} md={4}>
              {/* Must Change to this.props.user */}
            <Image className="Profile-image-post" src={GA} roundedCircle fluid/>
           </Col>
            <Col xs={8} sm={8} md={8}>
              <h3>Title</h3>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur."
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
import React, { Component } from 'react';
import './Info.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
class Info extends Component {
  render() {
    return (
      <div>
        <Container >
          <Row>
            <h5>Hear what people have to say about Wayfarer!</h5>
          </Row>
          <Row>
            <Col md={4}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Amberly Wang</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Fremont, CA
                  </Card.Subtitle>
                  <Card.Text>
                    "Outstanding. I don't know what I'd do without it. I like to
                    use this on the go."
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Brandon Castillo</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Vallejo, CA
                  </Card.Subtitle>
                  <Card.Text>
                    "I've used this for my travels and it has helped me more
                    than any other app out there.""
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Michael Claus</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    San Francisco, CA
                  </Card.Subtitle>
                  <Card.Text>
                    "This application changed my life! I discovered it in 2019.
                    My friends and family will be using this"
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Info;

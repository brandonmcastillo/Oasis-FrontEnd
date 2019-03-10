import React, { Component } from 'react';
import './Info.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
class Info extends Component {
  render() {
    return (
      <div>
        <Container>
          <h3>Our Mission</h3>
          <p>
            Oasis is a travel community where you can post and see what others
            are saying about their favorite locations around the world. Get
            insights from locals or experienced travelers about the best places
            to eat, shop, or sight see. Whether you are traveling someplace new
            or returning to a favorite destination, Wayfarer is here for you to
            post, share, and learn.
          </p>
          <p>
            To begin using Oasis, sign up for a free account and browse the
            cities list.
          </p>
        </Container>
        <Container className="info-section">
          <Row>
            <h3>What do our favorite customers think about Oasis?</h3>
          </Row>
          <Row>
            <Col sm={12} md={4}>
              <Card className="Card" style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Marcus Delgado</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    <h6>Modesto, California</h6>
                  </Card.Subtitle>
                  <Card.Text>
                    "Outstanding. I don't know what I'd do without it. I love to
                    use this on the go."
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={4}>
              <Card className="Card" style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Jack Ellingwood</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    <h6>Melbourne, Australia</h6>
                  </Card.Subtitle>
                  <Card.Text>
                    "I've used this for my travels and it has helped me more
                    than any other app out there."
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={4}>
              <Card className="Card" style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Brock Whitbread-Cole</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    <h6>Toronto, Ontario, Canada</h6>
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

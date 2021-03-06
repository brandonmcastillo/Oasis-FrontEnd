import React, { Component } from 'react';
import './Footer.css';
import amberly from './amberly.png';
import brandon from './brandon.png';
import karma from './karma.png';
import michael from './michael.png';
import { Container, Row, Col } from 'react-bootstrap';
class Footer extends Component {
  render() {
    return (
      <footer>
        <Container className="footer-contain">
          <Row>
            <Col xs={12} sm={6} md={6} lg={4}>
              <div>
                <p className="footer-text">
                  Project <span className="titleName">Oasis</span> was created by
                  Amberly Wang, Brandon Castillo, Karma Drukpa and Michael
                  Claus. © 2019 All Rights Reserved
                </p>
              </div>
            </Col>
            <Col xs={12} sm={6} md={6} lg={8}>
              <a href="https://github.com/awang617" aria-hidden="true">
                <img className="git-icon" src={amberly} alt="amberly" />
              </a>
              <a href="https://github.com/brandonmcastillo" aria-hidden="true">
                <img className="git-icon" src={brandon} alt="brandon" />
              </a>
              <a href="https://github.com/coderkarma" aria-hidden="true">
                <img className="git-icon" src={karma} alt="karma" />
              </a>
              <a href="https://github.com/mclausaudio" aria-hidden="true">
                <img className="git-icon" src={michael} alt="michael" />
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;

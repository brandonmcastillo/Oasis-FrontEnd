import React, { Component } from 'react'
import './Footer.css'
import amberly from './amberly.png'
import brandon from './brandon.png'
import karma from './karma.png'
import michael from './michael.png'
import {Container, Row, Col} from 'react-bootstrap'
class Footer extends Component {
  render() {
    return (
      <footer>
        <Container className="footer-contain">
          <Row>
            <Col xs={6} sm={6} md={4}> 
              <div>
                <p className="footer-text">Project <span className="titleName">Wayfarer</span> is created by Amberly Wang, Brandon Castillo, Karma Drukpa and Michael Claus. Made with &hearts; at GA WDI51.  </p>
            </div>  
            </Col>
            <Col xs={6} sm={6} md={8}>
         <a href="https://github.com/awang617"  aria-hidden="true"><img className="git-icon" src={amberly}/></a>
          <a href="https://github.com/brandonmcastillo" aria-hidden="true"><img className="git-icon" src={brandon}/></a>
          <a href="https://github.com/coderkarma" aria-hidden="true"><img className="git-icon" src={karma}/></a>
          <a href="https://github.com/mclausaudio" aria-hidden="true"><img className="git-icon" src={michael} /></a>
              </Col>
            </Row>
          </Container>
        </footer>
    )
  }
}

export default Footer
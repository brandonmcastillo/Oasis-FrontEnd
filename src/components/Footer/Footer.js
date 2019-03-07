import React, { Component } from 'react'
import './Footer.css'
import Facebook from './facebook.png'
import Instagram from './instagram.png'
import Twitter from './twitter.png'

class Footer extends Component {
  render() {
    return (
      <div className="footer-div">
      <footer>
        <a href=""><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
        <a href=""><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
        <a href=""><i className="fa fa-instagram" aria-hidden="true"></i></a>
        <p className="copyright">&copy; MKBA 2019</p>
      </footer>
      </div>
    )
  }
}

export default Footer
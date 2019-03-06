import React, { Component } from 'react'
import './Footer.css'
import Facebook from './facebook.png'
import Instagram from './instagram.png'
import Twitter from './twitter.png'

class Footer extends Component {
  render() {
    return (
      <footer>
        <ul>
            <li><a href="https://www.facebook.com"><img src={Facebook} /></a> </li>
            <li><a href="https://www.instagram.com"><img src={Instagram} /></a> </li>
            <li><a href="https://www.twitter.com"><img src={Twitter} /></a> </li>
        </ul>
      </footer>
    )
  }
}

export default Footer
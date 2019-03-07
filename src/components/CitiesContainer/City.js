import React, { Component } from "react";
import { Media } from "react-bootstrap";
// import Sf from "./CitiesPosts/sf.jpeg";
import './City.css'
class City extends Component {
  passUpState = () => {
    this.props.fetchOnClick(this.props.name, this.props.id);
  };

  render() {
    return (
      <div>
        <Media>
          {/* <img width={100} height={100} className="mr-3" src={Sf} alt="sf" /> */}
          <Media.Body className='cities-list'>
            <h5 id="cityName">{this.props.name}</h5>
            <button onClick={this.passUpState}>View</button>
          </Media.Body>
        </Media>
      </div>
    );
  }
}
export default City;

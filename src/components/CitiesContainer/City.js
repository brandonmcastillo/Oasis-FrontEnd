import React, { Component } from 'react';
import { Media } from 'react-bootstrap';
import './City.css';
class City extends Component {
  passUpState = () => {
    this.props.fetchOnClick(this.props.name, this.props.id);
  };

  render() {
    return (
      <div>
        <Media>
          <Media.Body className="cities-list">
            <h5 id="cityName">{this.props.name}</h5>
            <button className="ViewCity" onClick={this.passUpState}>
              &#8680;
            </button>
          </Media.Body>
        </Media>
      </div>
    );
  }
}
export default City;

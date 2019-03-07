import React, { Component } from "react";
import { Media } from "react-bootstrap";

class CityHeader extends Component {
  render() {
    return (
      <div>
        <Media>
          <Media.Body>
            <h1>{this.props.title}</h1>
          </Media.Body>
        </Media>
      </div>
    );
  }
}
export default CityHeader;

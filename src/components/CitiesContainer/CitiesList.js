import React, { Component } from "react";
import City from "./City";

// This is our city container component
class CitiesList extends Component {
  render() {
    return (
      <div>
        <City
          fetchOnClick={this.props.fetchOnClick}
          name={"San Francisco"}
          id={"5c7efb5c600c131fdc71f5e1"}
        />
        <City
          fetchOnClick={this.props.fetchOnClick}
          name={"London"}
          id={"5c7efb5c600c131fdc71f5e2"}
        />
        <City />
        <City />
      </div>
    );
  }
}

export default CitiesList;

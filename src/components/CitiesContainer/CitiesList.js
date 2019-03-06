import React, { Component } from "react";
import City from "./City";

// This is our city container component
class CitiesList extends Component {
  render() {
    let cities = this.props.cities.map(c => {
      console.log(c);
      return (
        <City fetchOnClick={this.props.fetchOnClick} name={c.name} id={c._id} />
      );
    });
    return <div>{cities}</div>;
  }
}

export default CitiesList;

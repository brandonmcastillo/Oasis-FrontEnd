import React, { Component } from "react";
import City from "./City";
import './CitiesList.css'
// This is our city container component
class CitiesList extends Component {
  render() {
    let cities = this.props.cities.map(c => {
      console.log(c);
      return (
        <City fetchOnClick={this.props.fetchOnClick} name={c.name} id={c._id} />
      );
    });
    return <div className="cities-list">
      {cities}
    </div>;
  }
}

export default CitiesList;

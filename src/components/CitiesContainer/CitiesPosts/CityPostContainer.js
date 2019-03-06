import React, { Component } from "react";
import { Button } from "react-bootstrap";
import CityHeader from "./CityHeader";
import PostContainer from "./PostContainer";

class CityPostContainer extends Component {
  render() {
    return (
      <div>
        <CityHeader title={this.props.data.name} />
        <PostContainer posts={this.props.posts} />
      </div>
    );
  }
}

export default CityPostContainer;

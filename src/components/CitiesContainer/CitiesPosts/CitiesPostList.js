import React, { Component } from 'react';
import CityHeader from './CityHeader'
import PostContainer from './PostContainer';

 class CitiesPostList extends Component {
  render() {
    return (
      <div>
        <CityHeader />
        <PostContainer />
      </div>
    )
  }
}
export default CitiesPostList;

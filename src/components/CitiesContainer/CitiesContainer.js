import React, { Component } from "react";
import CitiesList from "./CitiesList";
import { Container, Row, Col } from "react-bootstrap";
import CityPostContainer from "./CitiesPosts/CityPostContainer";
import "./CitiesContainer.css";

import axios from "axios";
import CityModel from "../../models/CityModel";
import PostModel from "../../models/PostModel";
// This is our main container that includes cities and post list component
class CitiesContainer extends Component {
  state = {
    selectedCity: "",
    cityId: "",
    data: [],
    posts: [],
    cities: []
  };

  componentDidMount = () => {
    CityModel.all().then(response => {
      console.log(response.data, "before setstate");
      this.setState({
        cities: response.data
      });
      console.log(this.state.cities);
    });
  };

  fetchOnClick = (cityName, id) => {
    CityModel.oneCity(id).then(response => {
      this.setState({
        selectedCity: response.data.name,
        data: response.data,
        cityId: response.data._id
      });
    });
    PostModel.cityPosts(id).then(response => {
      this.setState({
        posts: response.data
      });
    });
  };

  render() {
    let citiesList;
    if (this.state.cities.length === 0) {
      citiesList = <p>Loading</p>;
    } else {
      citiesList = (
        <CitiesList
          fetchOnClick={this.fetchOnClick}
          cities={this.state.cities}
        />
      );
    }
    return (
      <div>
        <Container>
          <Row>
            <Col sm={4} md={4}>
              <h1 className="pick-city">Locations</h1>
              <h4 className="cities-list">{citiesList}</h4>
            </Col>
            <Col sm={8} md={8}>
              <CityPostContainer
                data={this.state.data}
                posts={this.state.posts}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default CitiesContainer;

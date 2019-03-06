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
    selectedCity: "San Francisco",
    cityId: "",
    data: [],
    posts: []
  };

  componentDidMount = () => {
    CityModel.oneCity("5c7efb5c600c131fdc71f5e1").then(response => {
      this.setState({
        selectedCity: response.data.name,
        data: response.data,
        cityId: response.data._id
      });
      PostModel.cityPosts("5c7efb5c600c131fdc71f5e1").then(response => {
        this.setState({
          posts: response.data
        });
      });
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
    return (
      <div>
        <Container>
          <Row>
            <Col sm={4}>
              <CitiesList fetchOnClick={this.fetchOnClick} />
            </Col>
            <Col sm={8}>
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

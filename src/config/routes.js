import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import city from "../components/CitiesContainer/CitiesContainer";
import Profile from "../components/Profile/Profile";
import ShowPost from "../components/ShowPost/ShowPost"

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/city" component={city} />
    <Route path="/profile" component={Profile} />
    <Route path="/showpost" component={ShowPost} />
  </Switch>
);

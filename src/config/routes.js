import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import SignUpForm from '../components/Forms/SignUpForm'
import SignInForm from '../components/Forms/LoginForm'
// import TodosContainer from '../containers/TodosContainer';

export default (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/User' component={ SignInForm } />
    <Route path='/Post' component={ SignUpForm } />
  </Switch>
)
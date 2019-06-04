import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Timeline from './Timeline';
import Wrapper from './Wrapper';
import Profile from './Profile';
import Login from './Login';
import SignUp from './SignUp';
import '../index.css';

export default () => (
  <Switch>
    <Route exact path="/" component={Login}/>
    <Route path="/cadastro" component={SignUp}/>
    <Wrapper path="/timeline" component={Timeline}/>
    <Wrapper path="/perfil" component={Profile}/>
    <Route component={Login}/>
  </Switch>
)

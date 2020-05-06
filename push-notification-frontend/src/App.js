import React, { Component } from 'react';
import './App.css';
import Notification from './components/notification';
import { Switch, Route, Redirect } from 'react-router-dom';
import CheckIn from './components/check-in-page';

const App = () => {
  return (
    <div className="App">
    <Switch>
      <Route exact path='/' component={CheckIn} />
      <Route exact path='/checkIn' component={CheckIn} />
      <Route exact path='/notification' component={Notification} />
    </Switch>
    </div>
  );
} 


export default App;

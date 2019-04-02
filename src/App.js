import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import PeopleList from './components/PeopleList';

class App extends Component {
  render() {
    return (
      <div id="container">
        <Route exact path="/" component={PeopleList} />
      </div>
    );
  }
}

export default App;

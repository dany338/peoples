import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PeopleList from './components/PeopleList';

class App extends Component {
  render() {
    return (
      <div id="container">
          <PeopleList logo={logo}/>
      </div>
    );
  }
}

export default App;

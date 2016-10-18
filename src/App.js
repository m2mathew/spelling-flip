// External dependencies
import React, { Component } from 'react';

// Internal dependencies
import logo from './logo.svg';
import './App.css';
import Pie from './pie/pie';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Pie
          progress={50}
          color='#7dbf69'
          width={15}
        />
      </div>
    );
  }
}

export default App;

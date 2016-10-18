// External dependencies
import React, { Component } from 'react';

// Internal dependencies
import logo from './logo.svg';
import './App.css';
import Pie from './pie/pie';
import MainContentContainer from './shared/main-content-container/index'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img
            alt="logo"
            className="App-logo"
            src={logo}
          />
          <h2>Spelling Flip</h2>
        </div>
        <MainContentContainer
          title="Words"
        >
          <Pie
            progress={50}
            color='#7dbf69'
            width={5}
          />
        </MainContentContainer>
      </div>
    );
  }
}

export default App;

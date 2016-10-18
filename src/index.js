// External dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Internal dependencies
import App from './App';
import './index.css';


const AppContainer = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(
  <AppContainer />,
  document.getElementById('root')
);

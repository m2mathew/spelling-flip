// External dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Internal dependencies
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

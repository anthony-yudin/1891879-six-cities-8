import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  countsRent: 51,
};

ReactDOM.render(
  <React.StrictMode>
    <App countsRent = {Setting.countsRent} />
  </React.StrictMode>,
  document.getElementById('root'));

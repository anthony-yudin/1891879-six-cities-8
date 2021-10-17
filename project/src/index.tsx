import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const DATA = {
  countsRent: 51,
};

ReactDOM.render(
  <React.StrictMode>
    <App countsRent={DATA.countsRent} />
  </React.StrictMode>,
  document.getElementById('root')
);

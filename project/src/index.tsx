import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const DATA = {
  COUNTS_RENT: 51,
};

ReactDOM.render(
  <React.StrictMode>
    <App countsRent={DATA.COUNTS_RENT} />
  </React.StrictMode>,
  document.getElementById('root'));

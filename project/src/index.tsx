import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { offer } from './mocks/offers';

const DATA = {
  countsRent: 51,
};

ReactDOM.render(
  <React.StrictMode>
    <App countsRent={DATA.countsRent} offers={offer} />
  </React.StrictMode>,
  document.getElementById('root'),
);

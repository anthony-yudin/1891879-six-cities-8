import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { offers } from './mocks/offers';

const DATA = {
  countsRent: 51,
};

ReactDOM.render(
  <React.StrictMode>
    <App countsRent={DATA.countsRent} offers={offers} />
  </React.StrictMode>,
  document.getElementById('root'),
);

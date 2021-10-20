import React from 'react';
import { Link } from 'react-router-dom';
import {AppRoutes} from '../../constants/constants';

function NotFound(): JSX.Element {
  return (
    <div className='not-found'>
      <div className='not-found__content'>
        404 Not Found<br />
        <Link className='not-found__link' to={AppRoutes.Main}>На главную страницу</Link>
      </div>
    </div>
  );
}

export default NotFound;

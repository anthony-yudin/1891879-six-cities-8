import React from 'react';
import { Link } from 'react-router-dom';
import {AppRoute} from '../../constants/constants';
import '../../blocks/notFound/notFound.css';

function NotFound(): JSX.Element {
  return (
    <div className='not-found'>
      <div className='not-found__content'>
        404 Not Found
        <Link className='not-found__link' to={AppRoute.Main}>На главную страницу</Link>
      </div>
    </div>
  );
}

export default NotFound;

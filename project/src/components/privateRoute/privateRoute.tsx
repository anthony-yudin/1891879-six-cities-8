import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import {AppRoute} from '../../constants/constants';

type TPrivateRoute = RouteProps & {
  render: () => JSX.Element;
  loggedIn: boolean
}

function privateRoute(props: TPrivateRoute): JSX.Element {
  const {exact, path, render, loggedIn} = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={() =>
        loggedIn ? render() : <Redirect to={AppRoute.Login} />}
    />
  );
}

export default privateRoute;

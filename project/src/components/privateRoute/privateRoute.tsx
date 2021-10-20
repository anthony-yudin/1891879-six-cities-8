import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import {AppRoutes} from '../../constants/constants';

type TPrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
  loggedIn: boolean
}

function privateRoute(props: TPrivateRouteProps): JSX.Element {
  const {exact, path, render, loggedIn} = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={() =>
        loggedIn ? render() : <Redirect to={AppRoutes.Login} />}
    />
  );
}

export default privateRoute;

import React from 'react';
import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import NotFound from '../notFound/notFound';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {AppRoute} from '../../constants/constants';
import PrivateRoute from '../privateRoute/privateRoute';

type TAppProps = {
  countsRent: number;
}

function App({countsRent}: TAppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <Main countsRent={countsRent}/>
        </Route>
        <Route path={AppRoute.Login} exact>
          <Login />
        </Route>
        <Route path={AppRoute.Room} exact>
          <Room />
        </Route>
        <PrivateRoute exact path={AppRoute.Favorites} loggedIn={false} render={() => <Favorites />} />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import NotFound from '../notFound/notFound';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {AppRoutes} from '../../constants/constants';
import PrivateRoute from '../privateRoute/privateRoute';

type TAppProps = {
  countsRent: number;
}

function App({countsRent}: TAppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoutes.Main} exact>
          <Main countsRent={countsRent}/>
        </Route>
        <Route path={AppRoutes.Login} exact>
          <Login />
        </Route>
        <Route path={AppRoutes.Room} exact>
          <Room />
        </Route>
        <PrivateRoute exact path={AppRoutes.Favorites} loggedIn={false} render={() => <Favorites />} />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

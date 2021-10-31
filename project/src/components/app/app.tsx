import React from 'react';
import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import NotFound from '../notFound/notFound';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppRoutes } from '../../constants/constants';
import PrivateRoute from '../privateRoute/privateRoute';
import { Offer } from '../../types/offer';
import { offer } from '../../mocks/offers';

type TAppProps = {
  countsRent: number;
  offers: Offer[];
}

function App({countsRent, offers}: TAppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoutes.Main} exact>
          <Main countsRent={countsRent} offers={offers}/>
        </Route>
        <Route path={AppRoutes.Login} exact>
          <Login />
        </Route>
        <Route path={AppRoutes.Room} exact>
          <Room offers={offer} />
        </Route>
        <PrivateRoute exact path={AppRoutes.Favorites} loggedIn render={() => <Favorites offers={offer} />} />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import BrowsePage from '../Browse';
import RoomPage from '../Room';
import CreateRoomPage from '../CreateRoom';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
const condition = authUser => !!authUser;
const App = (props) => (
  <Router>
    <div>
      <Navigation />
  
  
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
      {/* <Route
        exact
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      /> */}
      
      <Route exact path={ROUTES.HOME} component={BrowsePage} />
      <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route exact path={ROUTES.BROWSE} component={BrowsePage} />
      <Route exact path={ROUTES.CREATEROOM} component={CreateRoomPage} />
      <Route exact path={ROUTES.ROOM} component={RoomPage} />
    </div>
  </Router>
);
export default withAuthentication(App);
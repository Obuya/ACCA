import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
 
const Landing = () => (
  <div>
    <h1>Landing Page</h1>
    <Link to={ROUTES.SIGN_IN}><button id="login" className="btn btn-primary btn-block" type="button">SIGN IN</button></Link>
    
  </div>
);
 
export default Landing;
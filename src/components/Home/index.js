import React from 'react';
 
import { withAuthorization } from '../Session';
 
const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <p>The Home Page is the first thing signed in users see.</p>
  </div>
);
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(HomePage);
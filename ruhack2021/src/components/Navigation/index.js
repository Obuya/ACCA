import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import './Navbar.css';

import { AuthUserContext } from '../Session';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

 
const NavigationAuth = () => (
  <nav className="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
    <div className="container">
      <i id="idk" className="fa fa-adjust"></i>
    <a className="navbar-brand js-scroll-trigger" href="#page-top" style={{color: "var(--purple)"}}>wave</a>
     <div className="collapse navbar-collapse" id="navbarResponsive"></div>
     <div className="links" style={{transform: "translate(0px) translateX(0px)"}}>
       <a className="internals" href="#rec">
       <Link to={ROUTES.HOME}>Home</Link>
         </a>
         <a className="internals" href=" ">
         <Link to={ROUTES.BROWSE}>Browse</Link>
           </a>
           <a className="internals" href=" ">
         <Link to={ROUTES.ACCOUNT}>Account</Link>
           </a>
           <SignOutButton/>
           </div>
     </div>
  </nav>
);
 
const NavigationNonAuth = () => (
  <nav className="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
  <div className="container">
    <i id="idk" className="fa fa-adjust"></i>
  <a className="navbar-brand js-scroll-trigger" href="#page-top" style={{color: "var(--purple)"}}>wave</a>
   <div className="collapse navbar-collapse" id="navbarResponsive"></div>
   <div className="links" style={{transform: "translate(0px) translateX(0px)"}}>
   <button id="login" className="btn btn-primary" type="button">
   <Link to={ROUTES.SIGN_IN}>Sign In</Link>
     </button>
         </div>
   </div>
</nav>
);
 
export default Navigation;
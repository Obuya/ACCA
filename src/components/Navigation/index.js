import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
//import './Navbar.css';

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
  
    <nav className="navbar navbar-light navbar-expand-md fixed-top float-xl-right navigation-clean-button">
    <div className="container-fluid">
    <Link to={ROUTES.HOME}>
      {/* <img class="logo" src="assets/img/persona-01.png"/> */}
      <a class="navbar-brand" href="#" style={{color: "#fff4ff",fontFamily: "'Open Sans', sans-serif"}}>WAVE</a>
      </Link>
      <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1">
        <span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" style={{filter: "invert(100%)"}}></span>
        </button>
        <div className="collapse navbar-collapse ml-auto" id="navcol-1" style={{background: "#170a2a"}}>
            <ul className="navbar-nav ml-auto">
            <Link to={ROUTES.BROWSE}><li className="nav-item"><a className="nav-link d-flex" id="navlinks" href="#">BROWSE ALL</a></li></Link>
            <Link to={ROUTES.CREATEROOM}><li className="nav-item"><a className="nav-link d-flex" id="navlinks" href="#">CREATE ROOM</a></li></Link>
            <Link to={ROUTES.FAVOURITE}><li className="nav-item"><a className="nav-link d-inline-block" id="navlinks" href="#">FAVOURITE</a></li></Link>
           <li className="nav-item text-center d-xl-flex justify-content-xl-end"></li>
            </ul><span className="navbar-text actions"> </span>
        </div>
        <Link to={ROUTES.ACCOUNT}><img src="assets/img/persona-01.png" style={{width: "50px"}}/>  </Link>
    </div>
    
</nav>
);
 
const NavigationNonAuth = () => (

  <nav className="navbar navbar-light navbar-expand-md fixed-top float-xl-right navigation-clean-button">
 <Link to={ROUTES.LANDING}>
   <div className="container-fluid">
    {/* <img class="logo" src="assets/img/persona-01.png"/> */}
    <a class="navbar-brand" href="#" style={{color: "#fff4ff",fontFamily: "'Open Sans', sans-serif"}}>WAVE</a>
      <div className="collapse navbar-collapse ml-auto" id="navcol-1" style={{background: "#170a2a"}}>
      </div>
  </div>
  </Link>
  
</nav>
  
);
 
export default Navigation;
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

    <nav className="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav" style={{marginTop: "0px",height: "72px",width: "1140"}}>
        <div className="container">
        <Link to={ROUTES.HOME}> <i className="fa fa-adjust"></i><a className="navbar-brand js-scroll-trigger" href="#page-top">wave</a> </Link>
            <div className="collapse navbar-collapse" id="navbarResponsive"></div>
            <div className="links" style={{transform: "translate(0px) translateX(0px)"}}>
            <Link to={ROUTES.BROWSE}><a id="browseall" className="internals" href="#browse">BROWSE ALL</a></Link>
            <Link to={ROUTES.RECOMMENDED}><a id="recommended" className="internals" href="#rec">RECOMMENDED FOR YOU</a></Link>
            <Link to={ROUTES.FAVOURITE}><a id="favourite" className="internals" href="#fav">FAVOURITE</a></Link>
            <Link to={ROUTES.ACCOUNT}><img src="assets/img/persona-02.png" style={{width: "40px",marginRight: "60px",height: "40px"}}/></Link>
        </div>
                
        </div>
    </nav>
);
 
const NavigationNonAuth = () => (

<nav className="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav" style={{marginTop: "0px",height: "72px",width: "1140"}}>
<div className="container"><i className="fa fa-adjust"></i>
  <Link to={ROUTES.LANDING}><a className="navbar-brand js-scroll-trigger" href="#page-top">wave</a></Link>
    <div className="collapse navbar-collapse" id="navbarResponsive"></div>
    <div className="links" style={{transform: "translate(0px) translateX(0px)"}}>
    {/* <Link to={ROUTES.SIGN_IN}><button id="login" className="btn btn-primary btn-block" type="button">SIGN IN</button></Link> */}
        </div>
        
</div>
</nav>
  
);
 
export default Navigation;
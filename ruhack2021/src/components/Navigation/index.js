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

    // <nav className="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav" style={{marginTop: "0px",height: "72px",width: "1140"}}>
    //     <div className="container"><i className="fa fa-adjust"></i><a className="navbar-brand js-scroll-trigger" href="#page-top">wave</a>
    //         <div className="collapse navbar-collapse" id="navbarResponsive"></div>
    //         <div className="links" style={{transform: "translate(0px) translateX(0px)"}}>
    //         <Link to={ROUTES.BROWSE}><a id="browseall" className="internals" href="#browse">BROWSE ALL</a></Link>
    //         <Link to={ROUTES.RECOMMENDED}><a id="recommended" className="internals" href="#rec">RECOMMENDED FOR YOU</a></Link>
    //         <Link to={ROUTES.FAVOURITE}><a id="favourite" className="internals" href="#fav">FAVOURITE</a></Link>
    //         <Link to={ROUTES.ACCOUNT}><img src="assets/img/persona-02.png" style={{width: "40px",marginRight: "60px",height: "40px"}}/></Link>
    //     </div>
                
    //     </div>
    // </nav>
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
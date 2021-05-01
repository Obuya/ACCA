import React from "react";
import {Link} from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
    <div className="container">
        <i id="idk" className="fa fa-adjust"></i>
        <a className="navbar-brand js-scroll-trigger">wave</a>
        <button data-toggle="collapse" data-target="#navbarResponsive" className="navbar-toggler navbar-toggler-right" type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-align-justify"></i></button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto"></ul>
        </div>
        <button id="SignIn" className="btn btn-primary" type="button"><Link to="/SignIn">SignIn</Link></button>
    </div>
</nav>
  );
};

export default Navbar;
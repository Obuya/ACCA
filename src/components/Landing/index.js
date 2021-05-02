import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { withAuthorization } from '../Session';
 
const Landing = () => (
    <div>
    <header class="text-center text-white d-flex masthead">
        <div class="container my-auto">
            <div class="row">
                <div class="col-lg-10 mx-auto">
                    <h1 class="text-uppercase"><strong id="title">the future of music listening</strong></h1>
                </div>
            </div>
            <div class="col-lg-8 mx-auto">
           <p class="text-faded mb-5">Discover your place.</p>
           <Link to={ROUTES.SIGN_IN} ><a class="btn btn-primary btn-xl js-scroll-trigger" role="button" href="#services" style={{background: "#170a2a"}}>Sign Up</a> </Link>
            </div>
        </div>
    </header>
    <section id="services">
        <section id="section1">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 d-xl-flex justify-content-xl-center">
                        <img class="pic" src="assets/img/pic1.png"/>

                        </div>
                    <div class="col-md-6">
                        <div class="rightText">
                            <h1>Tell us what you like.</h1>
                            <p>We'll tailor your experience based on your favourite music.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="section2">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="rightText">
                            <h1>Connect with like-minded music fans.</h1>
                            <p>Meet new friends with a common interest.</p>
                        </div>
                    </div>
                    <div class="col-md-6 d-xl-flex justify-content-xl-center">
                        <img class="pic" src="assets/img/pic2.png"/>

                        </div>
                </div>
            </div>
        </section>
        <section id="section3">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 d-xl-flex justify-content-xl-center">
                        <img class="d-xl-flex pic" src="assets/img/pic3.png"/>
                        </div>
                    <div class="col-md-6">
                        <div class="rightText">
                            <h1>Discover new music along the way.</h1>
                            <p>Share your favourite songs with others.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
    <section id="portfolio" class="p-0">
        <section class="text-white bg-dark">
            <div class="container text-center">
                <h2 class="mb-4">Connect with your Spotify account.</h2><a class="btn btn-light btn-xl sr-button" role="button" data-aos="zoom-in" data-aos-duration="400" data-aos-once="true" href="#">sign in</a>
            </div>
        </section>
    </section>
</div>
);
const condition = authUser => !authUser;
export default withAuthorization(condition)(Landing);
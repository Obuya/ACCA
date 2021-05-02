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
                    <h1 class="text-uppercase"><strong>the future of music listening</strong></h1>
                </div>
            </div>
            <div class="col-lg-8 mx-auto">
                <p class="text-faded mb-5">One line explaining something short and sweet.</p>
                <Link to={ROUTES.SIGN_UP}><a class="btn btn-primary btn-xl js-scroll-trigger" role="button" href="#services">Sign Up</a></Link>
            </div>
        </div>
    </header>
    <section class="bg-primary" id="about">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h1>TELL US WHAT YOU LIKE</h1>
                    <p>Paragraph</p>
                </div>
                <div class="col"><img src="assets/img/landingIMG3.svg"/></div>
            </div>
            <div class="row">
                <div class="col-md-6"><img src="assets/img/landingIMG2.svg"/></div>
                <div class="col-md-6">
                    <h1>CONNECT WITH OTHER MUSIC FANS</h1>
                    <p>Paragraph</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <h1>BROWSE ALL YOUR FAVOURITE SONGS</h1>
                    <p>Paragraph</p>
                </div>
                <div class="col-md-6"><img src="assets/img/landingIMG1.svg"/></div>
            </div>
        </div>
    </section>
    <section id="services">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading">At Your Service</h2>
                    <hr class="my-4"/>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-3 text-center">
                    <div class="mx-auto service-box mt-5"><i class="fa fa-diamond fa-4x text-primary mb-3 sr-icons" data-aos="zoom-in" data-aos-duration="200" data-aos-once="true"></i>
                        <h3 class="mb-3">Sturdy Templates</h3>
                        <p class="text-muted mb-0">Our templates are updated regularly so they don't break.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 text-center">
                    <div class="mx-auto service-box mt-5"><i class="fa fa-paper-plane fa-4x text-primary mb-3 sr-icons" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="200" data-aos-once="true"></i>
                        <h3 class="mb-3">Ready to Ship</h3>
                        <p class="text-muted mb-0">You can use this theme as is, or you can make changes!</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 text-center">
                    <div class="mx-auto service-box mt-5"><i class="fa fa-newspaper-o fa-4x text-primary mb-3 sr-icons" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="400" data-aos-once="true"></i>
                        <h3 class="mb-3">Up to Date</h3>
                        <p class="text-muted mb-0">We update dependencies to keep things fresh.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 text-center">
                    <div class="mx-auto service-box mt-5"><i class="fa fa-heart fa-4x text-primary mb-3 sr-icons" data-aos="fade" data-aos-duration="200" data-aos-delay="600" data-aos-once="true"></i>
                        <h3 class="mb-3">Made with Love</h3>
                        <p class="text-muted mb-0">You have to make your websites with love these days!</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer class="footer-dark">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-3 item">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="#">Web design</a></li>
                        <li><a href="#">Development</a></li>
                        <li><a href="#">Hosting</a></li>
                    </ul>
                </div>
                <div class="col-sm-6 col-md-3 item">
                    <h3>About</h3>
                    <ul>
                        <li><a href="#">Company</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
                <div class="col-md-6 item text">
                    <h3>Company Name</h3>
                    <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                </div>
                <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
            </div>
            <p class="copyright">Company Name © 2021</p>
        </div>
    </footer>
    
  </div>
);
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(Landing);
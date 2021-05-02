import React from 'react';
 
import { AuthUserContext, withAuthorization } from '../Session';
// import { PasswordForgetForm } from '../PasswordForget';
// import PasswordChangeForm from '../PasswordChange';
import SignOutButton from '../SignOut';
 
const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (

      <div>
        <div class="container" id="header">
            <section id="idk" class="login-clean">
                <form id="box" method="post">
                    <h2 class="sr-only">Login Form</h2>
                    <div class="illustration"><img id="profilePic" src="assets/img/persona-02.png"/>
                        <h1 id="username">{authUser.username}</h1>
                    </div>
                </form>
            </section>
        </div>
        <div class="container profile profile-view" id="profileForm">
            <form id="box">
                <div class="form-row justify-content-center align-items-center profile-row" id="anotherBox">
                    <div class="col-md-8" id="thirdBox">
                        <div class="form-row">
                            <div class="col-sm-12 col-md-6">
                                <div class="form-group"><label class="text">Change Username</label><input class="form-control userBox" type="text" name="username"/></div>
                            </div>
                        </div>
                        <div class="form-group"><label class="text">Change Email </label><input class="form-control emailBox" type="email" autocomplete="off" required="" name="email"/></div>
                        <div class="form-row">
                            <div class="col-sm-12 col-md-6">
                                <div class="form-group"><label class="text">Password </label><input class="form-control userBox" type="password" name="password" autocomplete="off" required=""/></div>
                            </div>
                            <div class="col-sm-12 col-md-6">
                                <div class="form-group"><label class="text">Confirm Password</label><input class="form-control userBox" type="password" name="confirmpass" autocomplete="off" required=""/></div>
                            </div>
                        </div>
                        {/* <div class="form-row">
                            <div class="col-md-12 content-right"><button class="btn btn-primary form-btn" id="saveBtn" type="submit">SAVE </button><button class="btn btn-danger form-btn" id="cancelBtn" type="reset">CANCEL </button></div>
                        </div> */}
                        <SignOutButton/>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )}
  </AuthUserContext.Consumer>
);
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(AccountPage);
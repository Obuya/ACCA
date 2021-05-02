import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { compose } from 'recompose';
 
const SignUpPage = () => (
 <div>
    <SignUpForm />
  </div>
);
const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  };
 
  class SignUpFormBase extends Component {
    constructor(props) {
      super(props);
   
      this.state = { ...INITIAL_STATE };
    }
   
    onSubmit = event => {
      const { username, email, passwordOne } = this.state;
   
      this.props.firebase
        .doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
          // Create a user in your Firebase realtime database
          return this.props.firebase
            .user(authUser.user.uid)
            .set({
              username,
              email,
            });
        })
        .then(() => {
          this.setState({ ...INITIAL_STATE });
          this.props.history.push(ROUTES.HOME);
        })
        .catch(error => {
          this.setState({ error });
        });
   
      event.preventDefault();
    };
 
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
 
  render() {
    const {
        username,
        email,
        passwordOne,
        passwordTwo,
        error,
      } = this.state;
      const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';
      return (
      <section className="login-dark">
      <form id="postbg" method="post" onSubmit={this.onSubmit} >
          <div className="illustration"><i className="icon ion-ios-locked-outline"></i></div>
          <div className="form-group">
          <input
          className="form-control"
            name="username"
            value={username}
            onChange={this.onChange}
            type="text"
            placeholder="User Name"
          />
            </div>
          <div className="form-group">
          <input
          className="form-control"
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
           </div>
           <div className="form-group">
           <input
           className="form-control"
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
            </div>
          <div className="form-group">
          <input
          className="form-control"
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm Password"
          />
            </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block" type="submit">Sign Up</button>
            </div>
            {/* <a className="forgot" href="">Log In with your Spotify Account.</a> */}
            <a className="forgot" href="">Already have an Account? <Link to={ROUTES.SIGN_IN}>Sign In</Link></a>
            {error && <p>{error.message}</p>}
      </form>
  </section>

      );
  }
}
 
const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);
 
const SignUpForm = compose(
    withRouter,
    withFirebase,
  )(SignUpFormBase);
export default SignUpPage;
 
export { SignUpForm, SignUpLink };
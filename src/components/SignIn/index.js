import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
 
import { SignUpLink } from '../SignUp';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

 
const SignInPage = () => (
  <div>
    <SignInForm />
  </div>
);
 
const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};
 
class SignInFormBase extends Component {
  constructor(props) {
    super(props);
 
    this.state = { ...INITIAL_STATE };
  }
 
  onSubmit = event => {
    const { email, password } = this.state;
 
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
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
    const { email, password, error } = this.state;
 
    const isInvalid = password === '' || email === '';
 
    return (
      <section className="login-dark">
      <form id="postbg" method="post" onSubmit={this.onSubmit} >
          <div className="illustration"><i className="icon ion-ios-locked-outline"></i></div>
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
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
            </div>
          <div className="form-group">
            <button disabled={isInvalid} className="btn btn-primary btn-block" type="submit">Log In</button>
            </div>
            {/* <a className="forgot" href="">Log In with your Spotify Account.</a> */}
            <a className="forgot" href="">Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link></a>
            {error && <p>{error.message}</p>}
      </form>
  </section>
    );
  }
}
 
const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);
 
export default SignInPage;
 
export { SignInForm };
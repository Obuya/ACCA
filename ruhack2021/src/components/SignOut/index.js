import React from 'react';
 
import { withFirebase } from '../Firebase';
 
const SignOutButton = ({ firebase }) => (
  <button className="btn btn-primary btn-block" style={{padding: "6px 12px",paddingRight: "20px",paddingLeft: "20px",background: "var(--purple)"}} type="button" onClick={firebase.doSignOut}>
    Sign Out
  </button>
);
 
export default withFirebase(SignOutButton);
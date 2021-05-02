import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA84qqX5L9oJdVEZVUDgv0vMUCtE0Y-ceQ",
    authDomain: "ruhacks-77d47.firebaseapp.com",
    projectId: "ruhacks-77d47",
    storageBucket: "ruhacks-77d47.appspot.com",
    messagingSenderId: "867856627312",
    appId: "1:867856627312:web:ab31487aa6ad03e01f26b5",
    measurementId: "G-ZHHL0KT363"
  };
 
class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
    this.db = app.firestore();
  }
  // *** Auth API ***
 
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

    // *** User API ***
 
  user = uid => this.db.collection('users').doc(`${uid}`);
 
  users = () => this.db.collection('users');

    // *** Room API ***
 
    room = id => this.db.collection('rooms').doc(`${id}`);
 
    rooms = () => this.db.collection('rooms');
}

export default Firebase;
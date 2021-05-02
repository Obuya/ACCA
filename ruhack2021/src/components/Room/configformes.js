import firebase from 'firebase';



firebase.initializeApp({
    apiKey: "AIzaSyA9AkTIEpP-hTGZ5nS22b8-Lj6pq7PCD8c",
    authDomain: "tryingoutthething.firebaseapp.com",
    projectId: "tryingoutthething",
    storageBucket: "tryingoutthething.appspot.com",
    messagingSenderId: "353684045024",
    appId: "1:353684045024:web:f1f2e5a7279be79891e485",
    measurementId: "G-ZWER592285"
  });
  
  export const firebaseRef = firebase;
  export const auth = firebase.auth();
  export const db = firebase.firestore();

import firebase from 'firebase/app';
import 'firebase/firestore'

//Initialize Firebase

firebase.initializeApp({
    apiKey: "AIzaSyCRACv600iEn1zWhduA61e0ABdzM8TcpKA",
    authDomain: "scl007-burgerqueen.firebaseapp.com",
    databaseURL: "https://scl007-burgerqueen.firebaseio.com",
    projectId: "scl007-burgerqueen",
    storageBucket: "scl007-burgerqueen.appspot.com",
    messagingSenderId: "384114767791"
  });
 
  let db = firebase.firestore();

  export default db;
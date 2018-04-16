import firebase from 'firebase';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDBNiU7IR_V2PqRDyy2V-wFD1bsXn5Jm1E",
  authDomain: "reactibook-efd7d.firebaseapp.com",
  databaseURL: "https://reactibook-efd7d.firebaseio.com",
  projectId: "reactibook-efd7d",
  storageBucket: "reactibook-efd7d.appspot.com",
  messagingSenderId: "203693081107"
};

export const firebaseApp = firebase.initializeApp(config);
export const firebaseDataBase = firebase.database();
export const firebaseStorage = firebase.storage();
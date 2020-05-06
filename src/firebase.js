import firebase from "@firebase/app";
import "firebase/firestore";
import "firebase/firebase-auth";
import "firebase/firebase-analytics";
import "firebase/storage";

// Initialize Firebase
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB9F3gLDprV4LjENnD4c0mmHOhvteiXiv8",
  authDomain: "vue-shop-b3aa4.firebaseapp.com",
  databaseURL: "https://vue-shop-b3aa4.firebaseio.com",
  projectId: "vue-shop-b3aa4",
  storageBucket: "vue-shop-b3aa4.appspot.com",
  messagingSenderId: "1007226744762",
  appId: "1:1007226744762:web:cf4b3948e49b1f30f57783",
  measurementId: "G-DL19S2V4TN"
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const fa = firebase.analytics();

export { fa, fb, db };

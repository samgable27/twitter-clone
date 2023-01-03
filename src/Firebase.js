import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBudKdGdmDjoU6g87MFMBAgilPJqGGX8g",
  authDomain: "twitter-clone-8f968.firebaseapp.com",
  projectId: "twitter-clone-8f968",
  storageBucket: "twitter-clone-8f968.appspot.com",
  messagingSenderId: "637149594904",
  appId: "1:637149594904:web:80b260ecef1978c25e4a6d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBudKdGdmDjoU6g87MFMBAgilPJqGGX8g",
  authDomain: "twitter-clone-8f968.firebaseapp.com",
  projectId: "twitter-clone-8f968",
  storageBucket: "twitter-clone-8f968.appspot.com",
  messagingSenderId: "637149594904",
  appId: "1:637149594904:web:80b260ecef1978c25e4a6d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = firebaseConfig.firestore();

export default db;


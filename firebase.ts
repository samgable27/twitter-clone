import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAD4AKn382Umany8DJ4ZHug9bWvF6m0w5g",
  authDomain: "twitter-clone-75c3d.firebaseapp.com",
  projectId: "twitter-clone-75c3d",
  storageBucket: "twitter-clone-75c3d.appspot.com",
  messagingSenderId: "553531880861",
  appId: "1:553531880861:web:60f7495da722dbeaf46b74",
  measurementId: "G-7D4WT86CSS",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

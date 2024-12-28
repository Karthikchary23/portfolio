// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-n2dqFBdTmHfAzJ5PrCOgxOagXsZRSvc",
  authDomain: "portfolio-e9873.firebaseapp.com",
  databaseURL: "https://portfolio-e9873-default-rtdb.firebaseio.com",
  projectId: "portfolio-e9873",
  storageBucket: "portfolio-e9873.appspot.com",
  messagingSenderId: "598633635290",
  appId: "1:598633635290:web:5f0ef95280b927528674e3",
  measurementId: "G-T6NFZ3Y5R8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);

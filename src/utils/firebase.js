// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  apiKey: "AIzaSyC84ndN58-_pyqW7hvRsBQOxUqd3D42ehk",
  authDomain: "netflixgpt-9f188.firebaseapp.com",
  projectId: "netflixgpt-9f188",
  storageBucket: "netflixgpt-9f188.appspot.com",
  messagingSenderId: "842954610199",
  appId: "1:842954610199:web:4895b26948491d74162e52",
  measurementId: "G-G82RY07Z7T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
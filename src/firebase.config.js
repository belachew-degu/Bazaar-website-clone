// Import the functions you need from the SDKs you need
// import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmkKtggg8J3LOX4eh5h9NXlY9AthWhDfM",
  authDomain: "bazarapp-f8e38.firebaseapp.com",
  projectId: "bazarapp-f8e38",
  storageBucket: "bazarapp-f8e38.appspot.com",
  messagingSenderId: "918320192319",
  appId: "1:918320192319:web:3593dce54bd14ff212518a",
  measurementId: "G-RB2R0ESRD2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
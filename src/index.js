// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgDi0D7RtkeFhWFLO-d_Nez0J-dyLKeq0",
  authDomain: "sorteria-c825e.firebaseapp.com",
  projectId: "sorteria-c825e",
  storageBucket: "sorteria-c825e.appspot.com",
  messagingSenderId: "472356761661",
  appId: "1:472356761661:web:4d63cf795c1ef21e443a54",
  measurementId: "G-HF2QSZQ0EM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

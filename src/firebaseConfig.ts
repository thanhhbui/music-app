// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUFYcgkRmCHvceVJPOxFRvWOJjoN5buck",
  authDomain: "music-app-12973.firebaseapp.com",
  projectId: "music-app-12973",
  storageBucket: "music-app-12973.appspot.com",
  messagingSenderId: "506205302646",
  appId: "1:506205302646:web:53e6596c94f023e94f9457",
  measurementId: "G-3BWM029Q43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);